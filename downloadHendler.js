let request = require(`request`);
let fs = require(`fs`);
const { v4: uuidv4 } = require('uuid');
let dsCommands;
let i = 0;
function music(url, musicName, command) {
    i++
    command = command.substring(4)
    command = command.replace(" ", "")
    command = command.toLowerCase()
    console.log('command:' + command)
    if (command !== "") {
        dsCommands = require('./command.json')
        const uid = uuidv4()
        if (dsCommands[command] !== undefined) { return 0 } else {
            dsCommands[command] = 'music/' + uid + musicName
            request.get(url)
                .on('error', console.error)
                .pipe(fs.createWriteStream('music/' + uid + musicName));



            console.log(dsCommands)
            fs.writeFile('./command.json', JSON.stringify(dsCommands), err => {
                if (err) console.log(err);
            })
            return 1
        }
    } else {
        return 2
    }
}

function musicYandex(url, musicName, uuid) {
    const uid = uuidv4()
    let flag = 0;
    const logger = fs.createWriteStream('music/' + uuid)
            request.get(url)
                .on('error', console.error)
                .pipe(logger);
    

    return logger.on('finish', () => {
        console.log(musicName, ' загружена')
        return 'music/' + uuid
    })
}

module.exports.music = music
module.exports.musicYandex = musicYandex