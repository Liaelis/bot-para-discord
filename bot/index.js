const Discord = require('discord.js'); //importando arquivo biblioteca discord
const ffmpegPath = require('ffmpeg-binaries');
//spawn(ffmpegPath, ['-i', 'video.mkv', 'video.mp4']);
const bot = new Discord.Client();
const ytdl = require('ytdl-core');//biblioteca que permite passar streams
const streamOptions = {seek: 0, volume:1 };


const token ='***********';
bot.login(token);
bot.on('ready', ()=>{
    console.log('cheguei com os refri')

})

bot.on('message', msg =>{
    if(msg.content === 'oi'){
        msg.reply('oitenta e três');
    }
    if(msg.content ==='voice'){
        msg.reply('To chegando com os Refri');
    }
})

bot.on('message', msg=>{
    if(msg.author.bot){
        return
    }
    if(msg.content.toLowerCase().startsWith("?go")){
        const GERAL = msg.guild.channels.cache.find(channel => channel.id === '********');

        if(GERAL == null){
            console.log('canal não encontrado')
        }
        if(GERAL != null){
            console.log(' o canal foi encontrado');

            GERAL.join().then(connection =>{
                const stream = ytdl('https://www.youtube.com/watch?v=q0hyYWKXF0Q',
                {filter:'audioonly'});

                const DJ = connection.play(stream, streamOptions); // metodo que faz tocar
                DJ.on('end', end=>{
                    GERAL.leave();
                });
            })
            .catch(console.error);
        }
        
    }
})


//dependencias 
//ffmpeg-binaries
//discord.js
//opusscript
//ytdl-core