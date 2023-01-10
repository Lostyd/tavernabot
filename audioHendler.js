const fs = require(`fs`);
const downloadHendler = require('./downloadHendler')
let request = require(`request`);
const { v4: uuidv4 } = require('uuid');
const discord = require('discord.js')
const { createAudioPlayer, NoSubscriberBehavior, createAudioResource, joinVoiceChannel } = require('@discordjs/voice');
const { demuxProbe } = require('@discordjs/voice');
var ymApi = require("ym-api")
const api = new ymApi.YMApi();
let currentResourse = -1;
let resourseCollection = []
let stopFlag = 0;
let loopFLag = 0;
let played = 0;
const player = createAudioPlayer({
	behaviors: {
		noSubscriber: NoSubscriberBehavior.Pause,
	},
});
async function getTracksByPlaylist(url, author, message, bot) {
	
	try {
		await api.init({ username: "akershus.daniil@yandex.ru", password: "080412yl" });
		const playlists = require('./playlists.json')
		if (playlists.urls.indexOf(url) < 0) {
			playlists.urls.push(url)
			const tracksArr = []
			const result = await api.getPlaylistByUrl('/' + url)
			console.log(result)

			if (!playlists['playlists']) {
				playlists['playlists'] = [{
					title: result.title,
					description: result.description,
					tracks: []
				}]
			} else {
				playlists['playlists'].push({
					title: result.title,
					description: result.description,
					tracks: []
				})
			}
			result.tracks.forEach(async function (track) {
				const uid = uuidv4()
				const supplement = await api.getTrack(track.id)
				//const trackInfo = await api.getTrackDownloadInfo(track.id)
				//const trackDownloadLink = await api.getTrackDirectLink(trackInfo[0].downloadInfoUrl)
				const trackObj = {
					name: supplement[0].title,
					title: supplement[0].major.name,
					id: track.id
				}

				playlists['playlists'][playlists['playlists'].length - 1].tracks.push(trackObj)
				await fs.writeFile('./playlists.json', JSON.stringify(playlists), err => {
					if (err) console.log(err);
				})

			})
			message.reply('плейлист добавлен')

		} else { message.reply('Этот плейлист уже добавлен') }
    } catch (e) {
        console.log(e.message)
	}
}

function emojiHendlerForPlaylists(index) {
	switch (index) {
		case 0:
			return ":one:"
		case 1:
			return ":two:"
		case 2:
			return ":three:"
		case 3:
			return ":four:"
		case 4:
			return ":five:"
		case 5:
			return ":six:"
		case 6:
			return ":seven:"
		case 7:
			return ":eight:"
		case 8:
			return ":nine:"
		case 9:
			return "🔟"
    }
}


function menuBuilder(length, bot, msg, callback) {
	if (length > 10) {

	} else {
		switch (length) {
			case 1:
				msg.react('▶️')
					.then(() => msg.react('1️⃣'))
					.then(() => callback(msg))
				break;
			case 2:
				msg.react('▶️')
					.then(() => msg.react('1️⃣'))
					.then(() => msg.react('2️⃣'))
					.then(() => callback(msg))
				break;
			case 3:
				msg.react('▶️')
					.then(() => msg.react('1️⃣'))
					.then(() => msg.react('2️⃣'))
					.then(() => msg.react('3️⃣'))
					.then(() => callback(msg))
				break;
			case 4:
				msg.react('▶️')
					.then(() => msg.react('1️⃣'))
					.then(() => msg.react('2️⃣'))
					.then(() => msg.react('3️⃣'))
					.then(() => msg.react('4️⃣'))
					.then(() => callback(msg))
				break;
			case 5:
				msg.react('▶️')
					.then(() => msg.react('1️⃣'))
					.then(() => msg.react('2️⃣'))
					.then(() => msg.react('3️⃣'))
					.then(() => msg.react('4️⃣'))
					.then(() => msg.react('5️⃣'))
					.then(() => callback(msg))
				break;
			case 6:
				msg.react('▶️')
					.then(() => msg.react('1️⃣'))
					.then(() => msg.react('2️⃣'))
					.then(() => msg.react('3️⃣'))
					.then(() => msg.react('4️⃣'))
					.then(() => msg.react('5️⃣'))
					.then(() => msg.react('6️⃣'))
					.then(() => callback(msg))
				break;
			case 7:
				msg.react('▶️')
					.then(() => msg.react('1️⃣'))
					.then(() => msg.react('2️⃣'))
					.then(() => msg.react('3️⃣'))
					.then(() => msg.react('4️⃣'))
					.then(() => msg.react('5️⃣'))
					.then(() => msg.react('6️⃣'))
					.then(() => msg.react('7️⃣'))
					.then(() => callback(msg))
				break;
			case 8:
				msg.react('▶️')
					.then(() => msg.react('1️⃣'))
					.then(() => msg.react('2️⃣'))
					.then(() => msg.react('3️⃣'))
					.then(() => msg.react('4️⃣'))
					.then(() => msg.react('5️⃣'))
					.then(() => msg.react('6️⃣'))
					.then(() => msg.react('7️⃣'))
					.then(() => msg.react('8️⃣'))
					.then(() => callback(msg))
				break;
			case 9:
				msg.react('▶️')
					.then(() => msg.react('1️⃣'))
					.then(() => msg.react('2️⃣'))
					.then(() => msg.react('3️⃣'))
					.then(() => msg.react('4️⃣'))
					.then(() => msg.react('5️⃣'))
					.then(() => msg.react('6️⃣'))
					.then(() => msg.react('7️⃣'))
					.then(() => msg.react('8️⃣'))
					.then(() => msg.react('9️⃣'))
					.then(() => callback(msg))
				break;
			case 10:
				msg.react('▶️')
					.then(() => msg.react('1️⃣'))
					.then(() => msg.react('2️⃣'))
					.then(() => msg.react('3️⃣'))
					.then(() => msg.react('4️⃣'))
					.then(() => msg.react('5️⃣'))
					.then(() => msg.react('6️⃣'))
					.then(() => msg.react('7️⃣'))
					.then(() => msg.react('8️⃣'))
					.then(() => msg.react('9️⃣'))
					.then(() => msg.react('🔟'))
					.then(() => callback(msg))
				break;
        }
    }
	
}

async function playlistPlay(collected, playlists, playlistNumber, message, bot) {
	
	playlists[playlistNumber].tracks.forEach(async (track, index) => {
		 resourseCollection.push({ name: track.name, title: track.title, resourse: track.id })
	})
	const connection = joinVoiceChannel({
		channelId: message.member.voice.channel.id,
		guildId: message.channel.guild.id,
		adapterCreator: message.channel.guild.voiceAdapterCreator,
	});
	connection.subscribe(player);
	if (played === 0) {
		playMusic(message, bot)
	}
	 
			
}

async function getNextResourse() {
	if (currentResourse > resourseCollection.length-2 && loopFLag === 0) {
		console.log('chlen')
		stopFlag = 1;
		played = 0;
		player.stop()
	} else if (currentResourse > resourseCollection.length-2 && loopFLag === 1) {
		console.log('hui')
		currentResourse = 0
		await api.init({ username: "akershus.daniil@yandex.ru", password: "080412yl" });
		const trackInfo = await api.getTrackDownloadInfo(resourseCollection[currentResourse].resourse)
		const trackDownloadLink = await api.getTrackDirectLink(trackInfo[0].downloadInfoUrl)
		const resourse = await createAudioResource(trackDownloadLink)
		return resourse
	} else {
		console.log('her')
		currentResourse++
		await api.init({ username: "akershus.daniil@yandex.ru", password: "080412yl" });
		const trackInfo = await api.getTrackDownloadInfo(resourseCollection[currentResourse].resourse)
		const trackDownloadLink = await api.getTrackDirectLink(trackInfo[0].downloadInfoUrl)
		const resourse = await createAudioResource(trackDownloadLink)
		return resourse
    }
}

async function playMusic(msg, bot) {
	played = 1;
	if (resourseCollection[0]) {
		stopFlag = 0;
		await player.play(await getNextResourse())
	} else {
		if (msg) { 
			msg.reply('сначала нужно добавить треки')
		}
    }
}

module.exports.skip = async function skip(msg) {
	player.play(await getNextResourse())
	msg.reply('трек пропущен')
}

module.exports.pause = function pause(msg) {
	player.pause();
	msg.reply('трек приостановлен')
}

module.exports.unpause = function unpause(msg) {
	player.unpause();
	msg.reply('Трек снова ебашит')
}

module.exports.clear = function clear(msg) {
	played = 0;
	resourseCollection = []
	stopFlag = 1;
	player.stop()
}

player.on('idle', async () => {
	if (stopFlag === 0) { 
		await player.play(await getNextResourse())
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

async function createResources(url) {
	// Creates an audio resource with inputType = StreamType.Arbitrary
	const stream = await probeAndCreateResource(createReadStream(url));

	return stream
	// Creates an audio resource with inputType = StreamType.OggOpus
	//const oggStream = await probeAndCreateResource(createReadStream(url));

	// Creates an audio resource with inputType = StreamType.WebmOpus
	//const webmStream = await probeAndCreateResource(createReadStream(url));
}

module.exports.createResources = createResources
module.exports.getTracksByPlaylist = getTracksByPlaylist
module.exports.emojiHendlerForPlaylists = emojiHendlerForPlaylists
module.exports.menuBuilder = menuBuilder
module.exports.playlistPlay = playlistPlay
module.exports.playMusic = playMusic
