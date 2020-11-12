const Discord = require('discord.js');
const bot = new Discord.Client();

//------------------------------------------------------------

const token = 'NzAzMjUyMDk5ODAyMzMzMTk0.XqL4jg.kLJpjw_vVsic2iwdxZdOsrsumF4'; //Bot token
const PREFIX = '-'; //Bot prefix
var textHelp; //Generated text for help command
var exit = false; //If true the bot will exit after play a sound
const fs = require('fs');
const { Server } = require('http');
const soundPath = 'Assets/Sounds/';
var soundsFX = {}; //List of soundFX avaible
var boardEmojis = {}; //Emoji
var activeEmoji = {}; //CurrentActiveEmoji
//List of emojis
var emojis = [
	'😄','😃','😀','😊','☺','😉','😍','😘','😚','😗','😙','😜','😝','😛','😳','😁','😔','😌','😒','😞','😣','😢','😂','😭','😪','😥','😰','😅','😓','😩','😫','😨','😱','😠','😡','😤','😖','😆','😋','😷','😎','😴','😵','😲','😟','😦','😧','😈','👿','😮','😬','😐','😕','😯','😶','😇','😏','😑','👲','👳','👮','👷','💂','👶','👦','👧','👨','👩','👴','👵','👱','👼','👸','😺','😸','😻','😽','😼','🙀','😿','😹','😾','👹','👺','🙈','🙉','🙊','💀','👽','💩','🔥','✨','🌟','💫','💥','💢','💦','💧','💤','💨','👂','👀','👃','👅','👄','👍','👎','👌','👊','✊','✌','👋','✋','👐','👆','👇','👉','👈','🙌','🙏','☝','👏','💪','🚶','🏃','💃','👫','👪','👬','👭','💏','💑','👯','🙆','🙅','💁','🙋','💆','💇','💅','👰','🙎','🙍','🙇','🎩','👑','👒','👟','👞','👡','👠','👢','👕','👔','👚','👗','🎽','👖','👘','👙','💼','👜','👝','👛','👓','🎀','🌂','💄','💛','💙','💜','💚','❤','💔','💗','💓','💕','💖','💞','💘','💌','💋','💍','💎','👤','👥','💬','👣','💭','🐶','🐺','🐱','🐭','🐹','🐰','🐸','🐯','🐨','🐻','🐷','🐽','🐮','🐗','🐵','🐒','🐴','🐑','🐘','🐼','🐧','🐦','🐤','🐥','🐣','🐔','🐍','🐢','🐛','🐝','🐜','🐞','🐌','🐙','🐚','🐠','🐟','🐬','🐳','🐋','🐄','🐏','🐀','🐃','🐅','🐇','🐉','🐎','🐐','🐓','🐕','🐖','🐁','🐂','🐲','🐡','🐊','🐫','🐪','🐆','🐈','🐩','🐾','💐','🌸','🌷','🍀','🌹','🌻','🌺','🍁','🍃','🍂','🌿','🌾','🍄','🌵','🌴','🌲','🌳','🌰','🌱','🌼','🌐','🌞','🌝','🌚','🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘','🌜','🌛','🌙','🌍','🌎','🌏','🌋','🌌','🌠','⭐','☀','⛅','☁','⚡','☔','❄','⛄','🌀','🌁','🌈','🌊','🎍','💝','🎎','🎒','🎓','🎏','🎆','🎇','🎐','🎑','🎃','👻','🎅','🎄','🎁','🎋','🎉','🎊','🎈','🎌','🔮','🎥','📷','📹','📼','💿','📀','💽','💾','💻','📱','☎','📞','📟','📠','📡','📺','📻','🔊','🔉','🔈','🔇','🔔','🔕','📢','📣','⏳','⌛','⏰','⌚','🔓','🔒','🔏','🔐','🔑','🔎','💡','🔦','🔆','🔅','🔌','🔋','🔍','🛁','🛀','🚿','🚽','🔧','🔩','🔨','🚪','🚬','💣','🔫','🔪','💊','💉','💰','💴','💵','💷','💶','💳','💸','📲','📧','📥','📤','✉','📩','📨','📯','📫','📪','📬','📭','📮','📦','📝','📄','📃','📑','📊','📈','📉','📜','📋','📅','📆','📇','📁','📂','✂','📌','📎','✒','✏','📏','📐','📕','📗','📘','📙','📓','📔','📒','📚','📖','🔖','📛','🔬','🔭','📰','🎨','🎬','🎤','🎧','🎼','🎵','🎶','🎹','🎻','🎺','🎷','🎸','👾','🎮','🃏','🎴','🀄','🎲','🎯','🏈','🏀','⚽','⚾','🎾','🎱','🏉','🎳','⛳','🚵','🚴','🏁','🏇','🏆','🎿','🏂','🏊','🏄','🎣','☕','🍵','🍶','🍼','🍺','🍻','🍸','🍹','🍷','🍴','🍕','🍔','🍟','🍗','🍖','🍝','🍛','🍤','🍱','🍣','🍥','🍙','🍘','🍚','🍜','🍲','🍢','🍡','🍳','🍞','🍩','🍮','🍦','🍨','🍧','🎂','🍰','🍪','🍫','🍬','🍭','🍯','🍎','🍏','🍊','🍋','🍒','🍇','🍉','🍓','🍑','🍈','🍌','🍐','🍍','🍠','🍆','🍅','🌽','🏠','🏡','🏫','🏢','🏣','🏥','🏦','🏪','🏩','🏨','💒','⛪','🏬','🏤','🌇','🌆','🏯','🏰','⛺','🏭','🗼','🗾','🗻','🌄','🌅','🌃','🗽','🌉','🎠','🎡','⛲','🎢','🚢','⛵','🚤','🚣','⚓','🚀','✈','💺','🚁','🚂','🚊','🚉','🚞','🚆','🚄','🚅','🚈','🚇','🚝','🚋','🚃','🚎','🚌','🚍','🚙','🚘','🚗','🚕','🚖','🚛','🚚','🚨','🚓','🚔','🚒','🚑','🚐','🚲','🚡','🚟','🚠','🚜','💈','🚏','🎫','🚦','🚥','⚠','🚧','🔰','⛽','🏮','🎰','♨','🗿','🎪','🎭','📍','🚩','⬆','⬇','⬅','➡','🔠','🔡','🔤','↗','↖','↘','↙','↔','↕','🔄','◀','▶','🔼','🔽','↩','↪','ℹ','⏪','⏩','⏫','⏬','⤵','⤴','🆗','🔀','🔁','🔂','🆕','🆙','🆒','🆓','🆖','📶','🎦','🈁','🈯','🈳','🈵','🈴','🈲','🉐','🈹','🈺','🈶','🈚','🚻','🚹','🚺','🚼','🚾','🚰','🚮','🅿','♿','🚭','🈷','🈸','🈂','Ⓜ','🛂','🛄','🛅','🛃','🉑','㊙','㊗','🆑','🆘','🆔','🚫','🔞','📵','🚯','🚱','🚳','🚷','🚸','⛔','✳','❇','❎','✅','✴','💟','🆚','📳','📴','🅰','🅱','🆎','🅾','💠','➿','♻','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','⛎','🔯','🏧','💹','💲','💱','©','®','™','〽','〰','🔝','🔚','🔙','🔛','🔜','❌','⭕','❗','❓','❕','❔','🔃','🕛','🕧','🕐','🕜','🕑','🕝','🕒','🕞','🕓','🕟','🕔','🕠','🕕','🕖','🕗','🕘','🕙','🕚','🕡','🕢','🕣','🕤','🕥','🕦','✖','➕','➖','➗','♠','♥','♣','♦','💮','💯','✔','☑','🔘','🔗','➰','🔱','🔲','🔳','◼','◻','◾','◽','▪','▫','🔺','⬜','⬛','⚫','⚪','🔴','🔵','🔻','🔶','🔷','🔸','🔹'
];
var boardActive = false; //Show if the board is active
const nBoardOptions = 15; // Max 15

const addBotLink = "https://discord.com/oauth2/authorize?client_id=703252099802333194&scope=bot";

//------------------------------------------------------------

bot.on('ready', () => {
    console.log("This bot is online");

    //Generate soundFX dictionary
    fs.readdir(soundPath, function (err, files) {     
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        //listing all files and populate soundFX
        files.forEach(function (file) {
            soundsFX[file.split('.')[0].toLowerCase()] = soundPath + file;
        }); 
        //Generate textHelp message
        textHelp = "\n General: \n - exit (on/off)\n - clear\n - link\n - random\n - soundboard\n\n SOUNDS FX:";
        for(key in soundsFX) {
            textHelp += "\n - " + key;
        }
        // Create embed
        textHelp = new Discord.MessageEmbed()
                        .setTitle("Commands [Prefix '-']")
                        .setDescription(textHelp)
                        .setColor('BLACK')                      
    });
});

//------------------------------------------------------------

bot.on('message', async message => {
    
    if(!message.author.bot) {
        if(message.member.voice.channel) {
            //Local Variables -------------------------------------
            let prefixMessage = message.content.substring(0,PREFIX.length);
            let args = message.content.substring(PREFIX.length).split(" ");
            let textChannel = message.channel;
            let voiceChannel = message.member.voice.channel;
            
            if(prefixMessage == PREFIX) { // Check if the prefix is right       
                if(!boardActive && args[0].toLowerCase() != 'soundboard') { // Do commands only if the SOundBoard is off

                    /* Commands List out of soundBoard 
                     * Exit => Turn on/off the exit option 
                     * Link => Print the link to add the bot on your discord
                     * Clear => Clear 100 msx on a chat
                     * Stop => Stop the current SOUNDFX and disconnect the bot
                    */

                    //Exit Command -------------------------------------
                    if(args[0].toLowerCase() == 'exit') {                      
                        exit = !exit;             
                        textChannel.send("Exit set to: " + exit);
                    } else if(args[0].toLowerCase() == 'link') {  
                        //Link Command -------------------------------------           
                        let linkText = new Discord.MessageEmbed()
                            .setTitle("Add this bot on another Discord")
                            .setDescription(addBotLink)
                            .setColor('WHITE')
                        textChannel.send(linkText);     
                    } else if(args[0].toLowerCase() == 'clear'){  
                        //Clear Command -------------------------------------                             
                        textChannel.messages.fetch().then(messages => {
                            textChannel.bulkDelete(messages);            
                        }).catch("Clear error");               
                    } else if(args[0].toLowerCase() == 'stop') {   
                        //Stop Command -------------------------------------                         
                        textChannel.bulkDelete(1);
                        textChannel.send("Bot stopped");
                        voiceChannel.leave();
                    } else if(args[0].toLowerCase() == 'help') {
                        //Help Command -------------------------------------
                        textChannel.send(textHelp);                    
                    } else if(args[0].toLowerCase() == 'random') {
                        //SoundFx Commands -------------------------------------
                        tmpKeys = Object.keys(soundsFX);
                        key = tmpKeys[Math.floor(Math.random() * tmpKeys.length)];
                        console.log(key);
                        playAudio(voiceChannel, textChannel, key);                    
                    } else if(args[0].toLowerCase()) { 
                        //SoundFx Commands -------------------------------------
                        playAudio(voiceChannel, textChannel, args[0].toLowerCase());
                    } 
                } 
                //Sound Board Command -------------------------------------     
                if(args[0].toLowerCase() == 'soundboard'){                                     
                    if(boardActive){
                        boardActive = false;
                        textChannel.bulkDelete(3);               
                        voiceChannel.leave();
                        //Reset board emoji
                        boardEmojis = {};
                    } else {                        
                        openSoundboard(voiceChannel,textChannel);                                   
                    } 
                } else if(args[0].toLowerCase() == 'reload' && boardActive) { 
                    textChannel.bulkDelete(2);
                    //Reset board emoji
                    boardEmojis = {};
                    openSoundboard(voiceChannel,textChannel);
                } else if(boardActive) {
                    textChannel.bulkDelete(1);
                }
            } else {
                //Command not found -------------------------------------
                textChannel.bulkDelete(1);
                textChannel.send("The command must begins with '-' (-help to see all the commands)");        
            } 
        } else {
            message.channel.send("'" + message.member.nickname + "'" + " you must be in a vocal channel to use the bot");
        }
    } 
});

bot.on('messageReactionAdd', async (reaction, user) => {
    handleReaction(reaction, user);
})

bot.on("messageReactionRemove", function(reaction, user){
    
});

async function openSoundboard(voiceChannel, textChannel){
    //Sound Board  ------------------------------------- 
    voiceChannel.join(); 
    exit = false;   
    boardActive = true;
    text = "";        
    keys = Object.keys(soundsFX); // get the all keys and shuffle it    
    shuffle(keys); // Shuffle keys                                               
    shuffle(emojis); // Shuffle emojis
    count = 0;
    keys.forEach(key => {
        if(count < nBoardOptions){
            emoji =  emojis[count];
            boardEmojis[emoji] = key;
            count++;
            text += emoji + " - " + key + "\n";
        }        
    });

    let embed = new Discord.MessageEmbed()
    .setTitle('SoundBoard ON')
    .setDescription("Disable with -soundboard" + "\n\n" + text + "\n")
    .setColor('RED')

    let msgEmbed = await textChannel.send(embed)

    for(emoji in boardEmojis) {
        msgEmbed.react(emoji);
    }
}

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}

function handleReaction(reaction, user){
    if(user.bot) return;
    for(emoji in boardEmojis) {
        if(reaction.emoji.name === emoji) {          
            playAudio(reaction.message.member.voice.channel, reaction.message.channel, boardEmojis[emoji], true);                  
        }
    }
}

function playAudio(voiceChannel, textChannel, name, imAmBot){
    find = false;
    for(key in soundsFX) {
        if(key == name) {
            find = true;
            audioFX = soundsFX[key];
            if(!imAmBot){
                //Transform user message to bot message
                textChannel.bulkDelete(1);
                textChannel.send(`Playing "${key}" soundFX`);
            }                 
            //Play sound
            voiceChannel.join().then(connection => {
                    connection.play(audioFX).on('finish', () => {
                        if(exit) { voiceChannel.leave(); }
                        audioFX = null;
                    });        
            }).catch(err => console.log("Errore PlayAudio"));
        }
    }
    if(!find) {
        textChannel.send(`soundFX does not exist (-help)`);
    }
}

bot.login(token);

