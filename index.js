const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const embed = new Discord.RichEmbed()
const bot = new Discord.Client({
    disableeveryone: true
});

bot.commands = new Discord.Collection();
bot.catergories = fs.readdirSync("./commands/");
bot.aliases = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't find commands.");
        return;
    }

    console.log(`Loading ${jsfile.length} commands!`);

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${i+1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});



bot.on('ready', async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("ResellAlerts", {
        type: "STREAMING"
    });

})

bot.on("message", async message => {
    let prefix = botconfig.prefix

    const args = message.content.slice(prefix.length).split('');
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);

})

bot.login(botconfig.token);