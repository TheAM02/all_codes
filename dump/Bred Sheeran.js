const Discord = require('discord.js')
const fetch = require("node-fetch")
const serverRevive = require("./server")
const client = new Discord.Client()



client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

//test ping pong message

client.on("message", msg => {
  if(msg.content === "ping") {
    msg.channel.send("pong")
  }
})

//arrays

const c_adios = ["bye", "Bye", "BYE", "adios", "Adios", "sayonara", "Sayonara", "Goodbye", "goodbye"]

const c_adios_reply = ["Goodbye! We are expecting you soon again.",
 "Bye, see ya soon.", "Adios my comrade.",
 "Goodbye, come back soon.",
 "We're hoping to see you soon."

]
const c_laugh = ["xD", "XD", "lol", "lmao", "haha", "Lol", "Lmao", "Haha", "LMAO", "LOL"]

const c_laughreply = ["Haha, yeah that was funny.", "XDDDDDDD", "Damn that one got me laughing bad too.", "XD that was good.", "Ahahah lol"]

const c_level = ["do you know that you just advanced to level"]

const c_arsalanhate = ["I hate you Arsalan.", "Get lost man.","Fuck off.","We hate you in here, Arsalan.","Stop talking!!!","Ugh just shut up bro.","You make my servers feel weird.","Marjaoooo","Salai manhoos admi."]

const c_goodbotreply = ["Thankyouuu!!","Aww I love you.","Thanks alot.",":)","You are a good human too!!","^^"]



//end of arrays





//embed example



const theambed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('The AM')
	.setURL('https://theam.ga/')
	.setAuthor('The AM', 'https://i.imgur.com/KrTm9aJ.png', 'https://theam.ga')
	.setDescription('This is test embed for the embed feature demonstration on discord.js')
	.setThumbnail('https://i.imgur.com/KrTm9aJ.png')
	.addFields(
    {
      name: 'Bot name', value: 'Bred Sheeran #5043'
    },
    {
      name: 'Made by', value: 'The AM #5448'
    }
		
	)
	.setTimestamp()
	.setFooter('Bot made by The AM #5448', 'https://i.imgur.com/KrTm9aJ.png');
// end of embed 


//embeds go here

const e_generalhelp = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Help')
	.setURL('https://bred.theam.ga/help/')
	.setAuthor('Bred Sheeran', 'https://i.imgur.com/FMt3Ipu.jpg', 'https://bred.theam.ga')
	.setDescription('This is help regarding Bred Sheeran. Following are the commands you can use. Type Hey Bred help me with <the topic>')
	.setThumbnail('https://i.imgur.com/FMt3Ipu.jpg')
	.addFields(
    {
      name: 'Formal commands:', value: 'Hi, Bye, How are you bot, Hello'
    },
    {
      name: 'Cheer up the bot:', value: 'Good bot'
    },
    {
      name: "Fun commands:", value:"Hey bred repeat <whatever-you-want-Bred-to-repeat>, What is my avatar, Hey Bred tell a joke."
    },
    {
      name:"Thats enough commands for now.", value:"Check back later for more."
    }
		
	)
	.setTimestamp()
	.setFooter('Bot made by The AM #5448', 'https://i.imgur.com/KrTm9aJ.png');
//embeds end here.










//client trigger messages conditions


client.on("message", msg => 
{
  if (msg.author.bot) return

if(msg.content === "hi") {
    msg.channel.send("Hi! Let me guess, are you on desktop?") 
  }


if(msg.content === "Hi") {
    msg.channel.send("Hi!")
  }

  if (c_laugh.some(word => msg.content.includes(word))) {
      
        const c_laughreply_temp = c_laughreply[Math.floor(Math.random() * c_laughreply.length)]
        msg.channel.send(c_laughreply_temp)
  }

  
  
  //    nice



  if (msg.content === "xd") {
   msg.channel.send("Hey you cant say xd. You have to say xD or XD.")
  }

  if (msg.content === "Xd") {
   msg.channel.send("Hey you cant say Xd. You have to say xD or XD.")
  }

})

//client trigger message conditions #2

client.on('message', message => {

  if (message.content.includes('hat is my avatar')) {
    message.channel.send(`${message.author}'s avatar is ` + message.author.displayAvatarURL());
  }

  //end of avatar send

  if (message.content === 'good bot') {
    message.channel.send(`Aww thank you ${message.author}!`)
  }

  if (message.content.includes("ood bot")) {
    const c_goodbotreply_temp = c_goodbotreply[Math.floor(Math.random()*c_goodbotreply.length)]
    message.channel.send(c_goodbotreply_temp)
  }

  //end of good bot

  if (message.content === 'bye'){
    message.channel.send('Hoping to see ya soon!')
  }

  //end of adios

  
  
  if (message.content.startsWith("Hey bred repeat")){
    c_repeated = (message.content.split("Hey bred repeat "))
    message.channel.send(c_repeated)
    
  }

  if (c_level.some(word => message.content.includes(word))){
    message.channel.send("Yeah we know that MEE6. Shut up.")
  }
  
  if (message.author.id === "740177323931992134"){
    const c_arsalanhate_temp = c_arsalanhate[Math.floor(Math.random()*c_arsalanhate.length)]
    message.channel.send(c_arsalanhate_temp)
  }

  if (message.content === "Hey bred give server status") {
    message.channel.send("Server is online.")
    message.channel.send("Bot is up.")
    message.channel.send(`Logged in as ${client.user.tag}.`)
    message.channel.send(`Status requested by ${message.author.tag}.`)
    message.channel.send("Client token: ||YOU JUST GOT PRANKED BRO XD||.")
  }

  if (message.content.includes("ello")) {
    message.channel.send("We ain't got no Bri-ish in here, bro.")
  }

  if (message.content.includes("ow are you bot")){
    message.channel.send("I'm fine! How are you?")
  }

  if (message.content.includes("ow are you, bot")){
    message.channel.send("I'm fine! How are you?")
  }
  
  if (message.content === ("Hey bred help")){
    message.channel.send("Oh no looks like somebody needs help. How may I help you with? e.g. '*Hey bred help me with general*'")
    message.channel.send("Syntax: ```Hey bred help me with <what-you-need-help-with>```")
  }



  if (message.content === "Hey bred send test embed"){
    message.channel.send(theambed)
  }

  if (message.content === "Hey bred tell a joke")
  {
  message.channel.send("Your life.")
  }

  if (message.content === "Hey bred"){
    message.channel.send("Yeah?")
  }

  if (message.content === "Hey bred help me with general"){
    message.channel.send(e_generalhelp)
  }





   

 
});



//arrays again cus JS is a compiler



//end of arrays for now.


serverRevive()

client.login(process.env.TOKEN)