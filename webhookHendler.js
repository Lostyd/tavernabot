const fs = require('fs')
var data = fs.readFileSync('result.json');
var oscorb = require('./pasha.json')
var support = require('./support.json')
var { EmbedBuilder } = require('discord.js');
const { randomInt } = require('crypto');
var holidays = JSON.parse(data);
let holidaysNameText = "";
let birthdaysText = "";
let pravoHolidaysText = "";
let narodnieText = "";
let tavernaBethdayText = "";
let eventText = "";
let pashaHui;
let eventHendler;
let eventPicker;
function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
function bodyCreate(date) {
    eventHendler = false
    eventPicker = 0 //randomInteger(1, 5)
    switch (Number(date.getMonth() )) { 
        case 0:
           
            holidays.january[Number(date.getDate() - 1)].holidaysName.forEach((holiday) => {
                
                holidaysNameText += '**⍟'+ holiday + support.emojis[randomInteger(0, 49)] +'**\n'
            })

            holidays.january[Number(date.getDate()-1)].birthdays.forEach((holiday, index) => {
                if (index <= 1) {
                    birthdaysText +=  holiday + support.emojis[randomInteger(0, 49)] +'\n\n'    
				}
                
            })

            holidays.january[Number(date.getDate()-1)].pravoHolidays.forEach((holiday) => {
                pravoHolidaysText += '☦' + holiday  +'  <:4766_pepegod:801443982685110363>\n\n'
            })

            holidays.january[Number(date.getDate()-1)].narodnie.forEach((holiday) => {
                narodnieText +=  holiday + support.emojis[randomInteger(0, 49)] +'\n\n'
            })
            if (holidays.january[Number(date.getDate()-1)].tavernaBethday) {
                holidays.january[Number(date.getDate()-1)].tavernaBethday.forEach((holiday) => {
                    tavernaBethdayText += '❥'+ holiday + support.emojis[randomInteger(0, 49)] +'\n'
                    tavernaUrl = 'https://discord.com/channels/573846647365304320/640440664290754560'
                })
            } else {
                tavernaBethdayText = "Сегодня без дня рождения"
                tavernaUrl = 'https://discord.com/channels/573846647365304320/573846647365304325'
			}

            break;
        case 1:
            


            holidays.february[Number(date.getDate()-1)].holidaysName.forEach((holiday) => {
                holidaysNameText += '⍟'+ holiday + support.emojis[randomInteger(0, 49)] +'\n'
            })

            holidays.february[Number(date.getDate()-1)].birthdays.forEach((holiday, index) => {
                if (index <= 3) {
                    birthdaysText +=  holiday + support.emojis[randomInteger(0, 49)] +'\n\n'
                }
            })

            holidays.february[Number(date.getDate()-1)].pravoHolidays.forEach((holiday) => {
                pravoHolidaysText += '☦' + holiday +'  <:4766_pepegod:801443982685110363>\n\n'
            })

            holidays.february[Number(date.getDate()-1)].narodnie.forEach((holiday) => {
                narodnieText +=  holiday + support.emojis[randomInteger(0, 49)] +'\n\n'
            })
            if (holidays.february[Number(date.getDate()-1)].tavernaBethday) {
                holidays.february[Number(date.getDate()-1)].tavernaBethday.forEach((holiday) => {
                    tavernaBethdayText += '❥'+ holiday + support.emojis[randomInteger(0, 49)] +'\n'
                    tavernaUrl = 'https://discord.com/channels/573846647365304320/640440664290754560'
                })
            } else {
                tavernaBethdayText = "Сегодня без дня рождения"
                tavernaUrl = 'https://discord.com/channels/573846647365304320/573846647365304325'
            }
            
            break;
        case 2:
            holidays.march[Number(date.getDate()-1)].holidaysName.forEach((holiday) => {
                holidaysNameText += '⍟'+ holiday + support.emojis[randomInteger(0, 49)] +'\n'
            })

            holidays.march[Number(date.getDate()-1)].birthdays.forEach((holiday, index) => {
                if (index <= 3) {
                    birthdaysText +=  holiday + support.emojis[randomInteger(0, 49)] +'\n\n'
                }
            })

            holidays.march[Number(date.getDate()-1)].pravoHolidays.forEach((holiday) => {
                pravoHolidaysText += '☦' + holiday +'  <:4766_pepegod:801443982685110363>\n\n'
            })

            holidays.march[Number(date.getDate()-1)].narodnie.forEach((holiday) => {
                narodnieText +=  holiday + support.emojis[randomInteger(0, 49)] +'\n\n'
            })
            if (holidays.march[Number(date.getDate()-1)].tavernaBethday) {
                holidays.march[Number(date.getDate()-1)].tavernaBethday.forEach((holiday) => {
                    tavernaBethdayText += '❥'+ holiday + support.emojis[randomInteger(0, 49)] +'\n'
                    tavernaUrl = 'https://discord.com/channels/573846647365304320/640440664290754560'
                })
            } else {
                tavernaBethdayText = "Сегодня без дня рождения"
                tavernaUrl = 'https://discord.com/channels/573846647365304320/573846647365304325'
            }
            
            break;
        case 3:
            holidays.april[Number(date.getDate()-1)].holidaysName.forEach((holiday) => {
                holidaysNameText += '⍟'+ holiday + support.emojis[randomInteger(0, 49)] +'\n'
            })

            holidays.april[Number(date.getDate()-1)].birthdays.forEach((holiday, index) => {
                if (index <= 3) {
                    birthdaysText +=  holiday + support.emojis[randomInteger(0, 49)] +'\n\n'
                }
            })

            holidays.april[Number(date.getDate()-1)].pravoHolidays.forEach((holiday) => {
                pravoHolidaysText += '☦' + holiday +'  <:4766_pepegod:801443982685110363>\n\n'
            })

            holidays.april[Number(date.getDate()-1)].narodnie.forEach((holiday) => {
                narodnieText +=  holiday + support.emojis[randomInteger(0, 49)] +'\n\n'
            })
            if (holidays.april[Number(date.getDate()-1)].tavernaBethday) {
                holidays.april[Number(date.getDate()-1)].tavernaBethday.forEach((holiday) => {
                    tavernaBethdayText += '❥'+ holiday + support.emojis[randomInteger(0, 49)] +'\n'
                    tavernaUrl = 'https://discord.com/channels/573846647365304320/640440664290754560'
                })
            } else {
                tavernaBethdayText = "Сегодня без дня рождения"
                tavernaUrl = 'https://discord.com/channels/573846647365304320/573846647365304325'
            }

     
            break;
        case 4: 
            holidays.may[Number(date.getDate()-1)].holidaysName.forEach((holiday) => {
                holidaysNameText += '⍟'+ holiday + support.emojis[randomInteger(0, 49)] +'\n'
            })

            holidays.may[Number(date.getDate()-1)].birthdays.forEach((holiday, index) => {
                if (index <= 3) {
                    birthdaysText +=  holiday + support.emojis[randomInteger(0, 49)] +'\n\n'
                }
            })

            holidays.may[Number(date.getDate()-1)].pravoHolidays.forEach((holiday) => {
                pravoHolidaysText += '☦' + holiday +'  <:4766_pepegod:801443982685110363>\n\n'
            })

            holidays.may[Number(date.getDate()-1)].narodnie.forEach((holiday) => {
                narodnieText +=  holiday + support.emojis[randomInteger(0, 49)] +'\n\n'
            })
            if (holidays.may[Number(date.getDate()-1)].tavernaBethday) {
                holidays.may[Number(date.getDate()-1)].tavernaBethday.forEach((holiday) => {
                    tavernaBethdayText += '❥'+ holiday + support.emojis[randomInteger(0, 49)] +'\n'
                    tavernaUrl = 'https://discord.com/channels/573846647365304320/640440664290754560'
                })
            } else {
                tavernaBethdayText = "Сегодня без дня рождения"
                tavernaUrl = 'https://discord.com/channels/573846647365304320/573846647365304325'
            }

     
            break;
        case 5:
            holidays.june[Number(date.getDate()-1)].holidaysName.forEach((holiday) => {
                holidaysNameText += '⍟'+ holiday + support.emojis[randomInteger(0, 49)] +'\n'
            })

            holidays.june[Number(date.getDate()-1)].birthdays.forEach((holiday, index) => {
                if (index <= 3) {
                    birthdaysText +=  holiday + support.emojis[randomInteger(0, 49)] +'\n\n'
                }
            })

            holidays.june[Number(date.getDate()-1)].pravoHolidays.forEach((holiday) => {
                pravoHolidaysText += '☦' + holiday +'  <:4766_pepegod:801443982685110363>\n\n'
            })

            holidays.june[Number(date.getDate()-1)].narodnie.forEach((holiday) => {
                narodnieText +=  holiday + support.emojis[randomInteger(0, 49)] +'\n\n'
            })
            if (holidays.june[Number(date.getDate()-1)].tavernaBethday) {
                holidays.june[Number(date.getDate()-1)].tavernaBethday.forEach((holiday) => {
                    tavernaBethdayText += '❥'+ holiday + support.emojis[randomInteger(0, 49)] +'\n'
                    tavernaUrl = 'https://discord.com/channels/573846647365304320/640440664290754560'
                })
            } else {
                tavernaBethdayText = "Сегодня без дня рождения"
                tavernaUrl = 'https://discord.com/channels/573846647365304320/573846647365304325'
            }
            break;
        case 6: 
            holidays.july[Number(date.getDate()-1)].holidaysName.forEach((holiday) => {
                holidaysNameText += '⍟'+ holiday + support.emojis[randomInteger(0, 49)] +'\n'
            })

            holidays.july[Number(date.getDate()-1)].birthdays.forEach((holiday, index) => {
                if (index <= 3) {
                    birthdaysText +=  holiday + support.emojis[randomInteger(0, 49)] +'\n\n'
                }
            })

            holidays.july[Number(date.getDate()-1)].pravoHolidays.forEach((holiday) => {
                pravoHolidaysText += '☦' + holiday +'  <:4766_pepegod:801443982685110363>\n\n'
            })

            holidays.july[Number(date.getDate()-1)].narodnie.forEach((holiday) => {
                narodnieText +=  holiday + support.emojis[randomInteger(0, 49)] +'\n\n'
            })
            if (holidays.july[Number(date.getDate()-1)].tavernaBethday) {
                holidays.july[Number(date.getDate()-1)].tavernaBethday.forEach((holiday) => {
                    tavernaBethdayText += '❥'+ holiday + support.emojis[randomInteger(0, 49)] +'\n'
                    tavernaUrl = 'https://discord.com/channels/573846647365304320/640440664290754560'
                })
            } else {
                tavernaBethdayText = "Сегодня без дня рождения"
                tavernaUrl = 'https://discord.com/channels/573846647365304320/573846647365304325'
            }
            
            break;
        case 7:
            holidays.august[Number(date.getDate()-1)].holidaysName.forEach((holiday) => {
                holidaysNameText += '⍟'+ holiday + support.emojis[randomInteger(0, 49)] +'\n'
            })

            holidays.august[Number(date.getDate()-1)].birthdays.forEach((holiday, index) => {
                if (index <= 3) {
                    birthdaysText +=  holiday + support.emojis[randomInteger(0, 49)] +'\n\n'
                }
            })
            //<:4766_pepegod:801443982685110363>
            holidays.august[Number(date.getDate()-1)].pravoHolidays.forEach((holiday) => {
                pravoHolidaysText +=  holiday +'  <:4766_pepegod:801443982685110363>\n\n'
            })

            holidays.august[Number(date.getDate()-1)].narodnie.forEach((holiday) => {
                narodnieText +=  holiday + support.emojis[randomInteger(0, 49)] +'\n\n'
            })
            if (holidays.august[Number(date.getDate()-1)].tavernaBethday) {
                holidays.august[Number(date.getDate()-1)].tavernaBethday.forEach((holiday) => {
                    tavernaBethdayText += '❥'+ holiday + support.emojis[randomInteger(0, 49)] +'\n'
                    tavernaUrl = 'https://discord.com/channels/573846647365304320/640440664290754560'
                })
            } else {
                tavernaBethdayText = "Сегодня без дня рождения"
                tavernaUrl = 'https://discord.com/channels/573846647365304320/573846647365304325'
            }
          
            break;
        case 8:
            holidays.september[Number(date.getDate()-1)].holidaysName.forEach((holiday) => {
                holidaysNameText += '⍟'+ holiday + support.emojis[randomInteger(0, 49)] +'\n'
            })

            holidays.september[Number(date.getDate()-1)].birthdays.forEach((holiday, index) => {
                if (index <= 3) {
                    birthdaysText +=  holiday + support.emojis[randomInteger(0, 49)] +'\n\n'
                }
            })

            holidays.september[Number(date.getDate()-1)].pravoHolidays.forEach((holiday) => {
                pravoHolidaysText +=  holiday +'  <:4766_pepegod:801443982685110363>\n\n'
            })

            holidays.september[Number(date.getDate()-1)].narodnie.forEach((holiday) => {
                narodnieText +=  holiday + support.emojis[randomInteger(0, 49)] +'\n\n'
            })
            if (holidays.september[Number(date.getDate()-1)].tavernaBethday) {
                holidays.september[Number(date.getDate()-1)].tavernaBethday.forEach((holiday) => {
                    tavernaBethdayText += '❥'+ holiday + support.emojis[randomInteger(0, 49)] +'\n'
                    tavernaUrl = 'https://discord.com/channels/573846647365304320/640440664290754560'
                })
            } else {
                tavernaBethdayText = "Сегодня без дня рождения"
                tavernaUrl = 'https://discord.com/channels/573846647365304320/573846647365304325'
            }
            break;
        case 9:
            holidays.october[Number(date.getDate()-1)].holidaysName.forEach((holiday) => {
                holidaysNameText += '⍟'+ holiday + support.emojis[randomInteger(0, 49)] +'\n'
            })

            holidays.october[Number(date.getDate()-1)].birthdays.forEach((holiday, index) => {
                if (index <= 3) {
                    birthdaysText +=  holiday + support.emojis[randomInteger(0, 49)] +'\n\n'
                }
            })

            holidays.october[Number(date.getDate()-1)].pravoHolidays.forEach((holiday) => {
                pravoHolidaysText +=  holiday +'  <:4766_pepegod:801443982685110363>\n\n'
            })

            holidays.october[Number(date.getDate()-1)].narodnie.forEach((holiday) => {
                narodnieText +=  holiday + support.emojis[randomInteger(0, 49)] +'\n\n'
            })
            if (holidays.october[Number(date.getDate()-1)].tavernaBethday) {
                holidays.october[Number(date.getDate()-1)].tavernaBethday.forEach((holiday) => {
                    tavernaBethdayText += '❥'+ holiday + support.emojis[randomInteger(0, 49)] +'\n'
                    tavernaUrl = 'https://discord.com/channels/573846647365304320/640440664290754560'
                })
            } else {
                tavernaBethdayText = "Сегодня без дня рождения"
                tavernaUrl = 'https://discord.com/channels/573846647365304320/573846647365304325'
            }
     
            break;
        case 10:
            holidays.november[Number(date.getDate()-1)].holidaysName.forEach((holiday) => {
                holidaysNameText += '⍟'+ holiday + support.emojis[randomInteger(0, 49)] +'\n'
            })

            holidays.november[Number(date.getDate()-1)].birthdays.forEach((holiday, index) => {
                if (index <= 3) {
                    birthdaysText +=  holiday + support.emojis[randomInteger(0, 49)] +'\n\n'
                }
            })

            holidays.november[Number(date.getDate()-1)].pravoHolidays.forEach((holiday) => {
                pravoHolidaysText +=  holiday +'  <:4766_pepegod:801443982685110363>\n\n'
            })

            holidays.november[Number(date.getDate()-1)].narodnie.forEach((holiday) => {
                narodnieText +=  holiday + support.emojis[randomInteger(0, 49)] +'\n\n'
            })
            if (holidays.november[Number(date.getDate()-1)].tavernaBethday) {
                holidays.november[Number(date.getDate()-1)].tavernaBethday.forEach((holiday) => {
                    tavernaBethdayText += '❥'+ holiday + support.emojis[randomInteger(0, 49)] +'\n'
                    tavernaUrl = 'https://discord.com/channels/573846647365304320/640440664290754560'
                })
            } else {
                tavernaBethdayText = "Сегодня без дня рождения"
                tavernaUrl = 'https://discord.com/channels/573846647365304320/573846647365304325'
            }
          
            break;
        case 11:
            holidays.december[Number(date.getDate()-1)].holidaysName.forEach((holiday) => {
                holidaysNameText += '⍟'+ holiday + support.emojis[randomInteger(0, 49)] +'\n'
            })

            holidays.december[Number(date.getDate()-1)].birthdays.forEach((holiday, index) => {
                if (index <= 3) {
                    birthdaysText +=  holiday + support.emojis[randomInteger(0, 49)] +'\n\n'
                }
            })

            holidays.december[Number(date.getDate()-1)].pravoHolidays.forEach((holiday) => {
                pravoHolidaysText +=  holiday +'  <:4766_pepegod:801443982685110363>\n\n'
            })

            holidays.december[Number(date.getDate()-1)].narodnie.forEach((holiday) => {
                narodnieText +=  holiday + support.emojis[randomInteger(0, 49)] +'\n\n'
            })
            if (holidays.december[Number(date.getDate()-1)].tavernaBethday) {
                holidays.december[Number(date.getDate()-1)].tavernaBethday.forEach((holiday) => {
                    tavernaBethdayText += '❥'+ holiday + support.emojis[randomInteger(0, 49)] +'\n'
                    tavernaUrl = 'https://discord.com/channels/573846647365304320/640440664290754560'
                })
            } else {
                tavernaBethdayText = "Сегодня без дня рождения"
                tavernaUrl = 'https://discord.com/channels/573846647365304320/573846647365304325'
            }
         
            break;
    }
    if (randomInteger(0, 100000000) > 100000000) {
        switch (eventPicker) {
            case 0:
                eventHendler = true;
                break;
            case 1:
                eventHendler = false;
                break;
            case 2:
                eventHendler = true;
                break;
            case 3:
                eventHendler = false;
                break;
            case 4:
                eventHendler = false;
                break;
            case 5:
                eventHendler = false;
        }
        holidaysNameText += '⍟' + support.tavernaEvents[eventPicker] + "\n"
    }
    pashaHui = [ {
        "username": support.username[randomInteger(0, 14)] + " каждый день",
        "avatar_url": support.icon[randomInteger(0, 38)],
        "content": "",
        "contentType": "application/json",
        "embeds": [
            {
                "title": "Праздники", 
                "color": 12743215,
                "description": "" + holidaysNameText + "",
                "author": {
                    "name": ""
                },
                "image": {},
                "thumbnail": {},
                "footer": {
                    "text": "Работаем при поддержке " + support.support[randomInteger(0, 13)], //smilemassiv[randomInteger(0, smilemassiv.lenght)],
                    "icon_url": support.icon[randomInteger(0, 38)]
                },
                "fields": [
                    {
                        "name": "Дни рождения - Таверна Иска Ностальгии",
                        "value":  tavernaBethdayText ,
                        "inline": false
                    },
                    {
                        "name": "Родились в этот день",
                        "value": birthdaysText,
                        "inline": true
                    },
                    {
                        "name": "Православные праздники",
                        "value": pravoHolidaysText,
                        "inline": true
                    },
                    {
                        "name": "Народные праздники",
                        "value": narodnieText,
                        "inline": true
                    },
                    {
                        "name": "Ежедневное напоминание, что...",
                        "value": "  ***Паша <@298500429371670528> Рожнов*** **||" + oscorb.oskorbltniz[randomInteger(0, 51)] + "||**",
                        "inline": false
                    }
                    

                ]
            }
        ],
        "components": [
            {
                "type": 1,
                "components": [
                    {
                        "type": 2,
                        "label": "Click me!",
                        "style": 1,
                        "custom_id": "click_one"
                    }
                ]
            }
        ]
    }, eventHendler, support.tavernaEvents[eventPicker], eventPicker]
    return pashaHui
}
function eventsBodyCreate(date) {
    switch (Number(date.getMonth())) {
        case 0:
            holidays.january[Number(date.getDate() - 1)].events.forEach((holiday) => {
                eventText += '⍟' + holiday + support.emojis[randomInteger(0, 49)] + '\n\n'
            })
         
            break;
        case 1:
            holidays.february[Number(date.getDate() - 1)].events.forEach((holiday) => {
                eventText += '⍟' + holiday + support.emojis[randomInteger(0, 49)] + '\n\n'
            })

            break;
        case 2:
            holidays.march[Number(date.getDate() - 1)].events.forEach((holiday) => {
                eventText += '⍟' + holiday + support.emojis[randomInteger(0, 49)] + '\n\n'
            })

            break;
        case 3:
            holidays.april[Number(date.getDate() - 1)].events.forEach((holiday) => {
                eventText += '⍟' + holiday + support.emojis[randomInteger(0, 49)] + '\n\n'
            })


            break;
        case 4:
            holidays.may[Number(date.getDate() - 1)].events.forEach((holiday) => {
                eventText += '⍟' + holiday + support.emojis[randomInteger(0, 49)] + '\n\n'
            })

            break;
        case 5:
            holidays.june[Number(date.getDate() - 1)].events.forEach((holiday) => {
                eventText += '⍟' + holiday + support.emojis[randomInteger(0, 49)] + '\n\n'
            })
            break;
        case 6:
            holidays.july[Number(date.getDate() - 1)].events.forEach((holiday) => {
                eventText += '⍟' + holiday + support.emojis[randomInteger(0, 49)] + '\n\n'
            })
            break;
        case 7:
            holidays.august[Number(date.getDate() - 1)].events.forEach((holiday) => {
                eventText += '⍟' + holiday + support.emojis[randomInteger(0, 49)] + '\n\n'
            })
            break;
        case 8:
            holidays.september[Number(date.getDate() - 1)].events.forEach((holiday) => {
                eventText += '⍟' + holiday + support.emojis[randomInteger(0, 49)] + '\n\n'
            })
            break;
        case 9:
            holidays.october[Number(date.getDate() - 1)].events.forEach((holiday) => {
                eventText += '⍟' + holiday + support.emojis[randomInteger(0, 49)] + '\n\n'
            })

            break;
        case 10:
            holidays.november[Number(date.getDate() - 1)].events.forEach((holiday) => {
                eventText += '⍟' + holiday + support.emojis[randomInteger(0, 49)] + '\n\n'
            })

            break;
        case 11:
            holidays.december[Number(date.getDate() - 1)].events.forEach((holiday) => {
                eventText += '⍟' + holiday + support.emojis[randomInteger(0, 49)] + '\n\n'
            })

            break;
    }
    const exampleEmbed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle('События')
        .setDescription("" + eventText + "")
        .setFooter({ text: "Работаем при поддержке " + support.support[randomInteger(0, 13)], iconURL: support.icon[randomInteger(0, 38)] });
    //eventText = "`" + eventText + "`"
    return exampleEmbed
}
module.exports.bodyCreate = bodyCreate
module.exports.eventsBodyCreate = eventsBodyCreate
/**/