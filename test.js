const browserObject = require('./browser')
const download = require('./downloadHendler')
const { Client, GatewayIntentBits } = require('discord.js')
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js')
const { join } = require('node:path');
const audioHendler = require('./audioHendler')
const scraperController = require('./pageController');
const scraperAnswir = require('./pageScraper')
const { ThreadAutoArchiveDuration } = require('./node_modules/discord-api-types/v10');
const discord = require('discord.js')
const { createAudioPlayer, NoSubscriberBehavior, createAudioResource } = require('@discordjs/voice');
const webhookHendler = require('./webhookHendler')
const { joinVoiceChannel } = require('@discordjs/voice');
const webhookClient = new discord.WebhookClient({ url: process.env.hook });
const ffmpeg = require('ffmpeg-static')
var resurse;  

let commandText = "";
let eventHendler;
let connection;
var ymApi = require("ym-api")
const api = new ymApi.YMApi();



const player = createAudioPlayer({
    behaviors: {
        noSubscriber: NoSubscriberBehavior.Pause,
    },
});


//создание экземпляра бота
let bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageTyping
                          
    ]
});



//тест
bot.on('ready', () => {
    console.log('ready')
    holidayArray = webhookHendler.bodyCreate(new Date())
    eventHendler = [holidayArray[1], holidayArray[2], holidayArray[3]]

   webhookClient.send(holidayArray[0])
})

bot.on('interactionCreate', async interaction => {
    
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'bysy') {
        resurse  = createAudioResource(join(__dirname, 'inecraft_death.mp3'));
        const connection = joinVoiceChannel({
            channelId: interaction.member.voice.channel.id,
             guildId: interaction.channel.guild.id,
             adapterCreator: interaction.channel.guild.voiceAdapterCreator,
        });
        connection.subscribe(player);
        console.log(__dirname)
        
        await player.play(resurse)
        await interaction.reply('played')

       // console.log(connection)

    }
})

bot.on('messageCreate', async message => {
    console.log(message.content.slice(0, 4))
    switch (message.content.substring(0, 4)) {
        case "=msc":
            if (message.attachments.first()) {
                if (message.attachments.first().contentType === 'audio/mpeg') {
                    let flag = download.music(message.attachments.first().url, message.attachments.first().name, message.content)
                    if (flag === 1) {
                        message.reply("команда добавлена")
                        console.log(message.attachments)
                    } else if (flag === 0) {
                        message.reply('Такая команда уже есть')
                    } else if (flag === 2) {
                        message.reply('Ты забыл написать команду, дуралей')
                    }
                } else {
                    message.reply("Обосрался с форматом, дуралей")
                }
            } else {
                message.reply('Ты забыл прикрепить файл, дуралей')
            }
            break;
        case "=mpl":
            commandObj = require('./command.json')
            command = message.content
            command = command.substring(4)
            command = command.replace(/\s/g, "")
            command = command.toLowerCase()
            if (commandObj[command] !== undefined) {

                resurse = createAudioResource(join(__dirname, commandObj[command]));
                connection = joinVoiceChannel({
                    channelId: message.member.voice.channel.id,
                    guildId: message.channel.guild.id,
                    adapterCreator: message.channel.guild.voiceAdapterCreator,
                });
                connection.subscribe(player);
                console.log(__dirname)

                await player.play(resurse)
                await message.reply('played')
            }
            break;
        case "=cmd":
            commandObj = require('./command.json')
            Object.keys(commandObj).forEach(cmd => {
                commandText += cmd + '\n'
            })
            message.reply(commandText)
            commandText = ""
            break;
        case "=dsc":
            if (connection) {
                connection.destroy()
            }
            break;
        case "=stp":
            if (player) {
                player.stop()
            }
            break;
        case "=ypl":
            let playlistUrl = message.content.replace(/\s/g, '')
            playlistUrl = playlistUrl.substring(28)
            if (playlistUrl.indexOf('users/') === 0) {
                audioHendler.getTracksByPlaylist(playlistUrl, message.author.id, message, bot)
            } else {
                message.reply('невалидная команда, дуралей')
            }

            // 
            break;
        case "=ymp":
            const playlists = require('./playlists.json')
            const exampleEmbed = new discord.EmbedBuilder()
                .setTitle('Ваши плейлисты')
            playlists['playlists'].forEach((playlist, index) => {
                console.log(playlist.description)
                if (playlist.description !== undefined) {
                    exampleEmbed.addFields({
                        name: audioHendler.emojiHendlerForPlaylists(index) + ' ' + playlist.title,
                        value: playlist.description
                    })
                } else {
                    exampleEmbed.addFields({
                        name: audioHendler.emojiHendlerForPlaylists(index) + ' ' + playlist.title,
                        value: "Без описания"
                    })
                }
            })

            const newMessage = await message.reply({ embeds: [exampleEmbed] })

            await audioHendler.menuBuilder(playlists['playlists'].length, bot, newMessage, (msg) => {
                const filter = (reaction, user) => {
                    return user.id === message.author.id;
                };

                newMessage.awaitReactions({ filter, max: 1, time: 20000, errors: ['time'] })
                    .then(collected => {
                        
                        const reaction = collected.first()
                        console.log(reaction.emoji.name)
                        switch (reaction.emoji.name) {
                            case "1️⃣":
                                message.reply('подожди пока соберу ресурсы')
                                    .then(() => {
                                        audioHendler.playlistPlay(collected, playlists['playlists'], 0, message, bot, player)
                                    })
                                break;
                            case "2️⃣":
                                audioHendler.playlistPlay(collected, playlists['playlists'], 1, message, bot)
                                break;
                            case "3️⃣":
                                audioHendler.playlistPlay(collected, playlists['playlists'], 2, message, bot)
                                break;
                            case "4️⃣":
                                audioHendler.playlistPlay(collected, playlists['playlists'], 3, message, bot)
                                break;
                            case "5️⃣":
                                audioHendler.playlistPlay(collected, playlists['playlists'], 4, message, bot)
                                break;
                            case "6️⃣":
                                audioHendler.playlistPlay(collected, playlists['playlists'], 5, message, bot)
                                break;
                            case "7️⃣":
                                audioHendler.playlistPlay(collected, playlists['playlists'], 6, message, bot)
                                break;
                            case "8️⃣":
                                audioHendler.playlistPlay(collected, playlists['playlists'], 7, message, bot)
                                break;
                            case "9️⃣":
                                audioHendler.playlistPlay(collected, playlists['playlists'], 8, message, bot)
                                break;
                            case "🔟":
                                audioHendler.playlistPlay(collected, playlists['playlists'], 9, message, bot)
                                break;
                        }
                    })
                    .catch(collected => {
                        console.error(collected)
                    })

            })
            break;
        case "=tst":
            resurse = createAudioResource('');
            connection = joinVoiceChannel({
                channelId: message.member.voice.channel.id,
                guildId: message.channel.guild.id,
                adapterCreator: message.channel.guild.voiceAdapterCreator,
            });
            connection.subscribe(player);
            console.log(__dirname)

            await player.play(resurse)
            await message.reply('played')
            break;
        case "=skp":
            audioHendler.skip(message)
            break;
        case "=pse":
            audioHendler.pause(message)
            break;
        case "=ups":
            audioHendler.unpause(message)
            break;
        case "=clr":
            audioHendler.clear(message)
            break;
      }      
    })
   //emojis
    /*
     1️⃣
     2️⃣
     3️⃣
     4️⃣
     5️⃣
     6️⃣
     7️⃣
     8️⃣
     9️⃣
     🔟
     ▶️
     */



 bot.on('messageCreate', message => {
     if (message.webhookId === '1042136160627077192') {
        (async () => {
            const thread = await message.startThread({
                name: 'События',
                autoArchiveDuration: 60,
            })
            await thread.send({ embeds: [webhookHendler.eventsBodyCreate(new Date())] })
            if (eventHendler[0] === true) {
               /* const thread2 = await message.channel.threads.create({
                    name: "Праздник Таверны Искра Ностальгии",
                    autoArchiveDuration: 60
                })
                await thread2.send("Наш прекрасный ивент '" + eventHendler[1].slice(0,-26) + "' стратует тут ")*/

            }
        })();
       
   } else {
       console.log('не бот')
   }
});
//запуск браузера и создание экземпляра браузера
//let browserInstance = browserObject.startBrowser();

//передача экземпляра браузера контроллеру
//scraperController(browserInstance)

bot.login(process.env.token)
