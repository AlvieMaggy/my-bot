const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Estoy listo!`);

});

client.on('message', message => {
    var prefix = 'b-';
    var msg_backup = message.content;
    var msg = msg_backup.toLowerCase();
    var args = message.content.substring(prefix.length).split(" ");
    var command = args[0].toLowerCase();
    const bot = new Discord.Client();

if (msg.startsWith(prefix + "ping")) {
        message.channel.send("Pinging...").then(sentMsg => {
        sentMsg.edit(`:ping_pong: Pong! Me ha llevado \`${sentMsg.createdTimestamp - message.createdTimestamp}ms\` `);
});
}

if(msg.startsWith(prefix + "invite")){
  message.channel.send("Espera...").then(sentMsg => {
  sentMsg.edit("Aquí está mi link de invitación (https://discordapp.com/oauth2/authorize?client_id=394002120774516737&permissions=2080763094&scope=bot)")

})};

if(msg.startsWith(prefix + "eval")){
  var result, code, erro, ownerID = '258698579898531851';
                    if (message.author.id != ownerID) return message.reply("Unauthorized!");
                    code = message.content.substring((prefix + " eval").length, message.content.length);
                    if (!code.length) message.reply("No code provided!");
                    try {
                        result = eval(code);
                    } catch(error) {
                                result = JSON.stringify(error, null, 2);
                                erro = true;
                    } finally {
                                if (["boolean","number"].some(x => typeof result === x))
                                        result = result.toString();
                                if (typeof result === "object")
                                        result = JSON.stringify(result, null, 2);
                                if (!result) result = "No output";
                                if (erro === true) result = 'Error de compilación!';
                                if (result === '{}'){
                                    result = "El script funciono correctamente!";
                                }

                                embed = {
                                    color: 0xf6ff00,
                                    title: ``,
                                    description: result,
                                  };

                                message.channel.send(`Espera...`).then(sentMsg => {
                                sentMsg.edit(`Done! I took just \`${sentMsg.createdTimestamp - message.createdTimestamp}ms\` :smile:`, { embed });

                    })}
}
});
client.login('Mzk0MDAyMTIwNzc0NTE2NzM3.DUevtQ.IJU9IcuZHVj5bbBxSNG1KvwJuks');
