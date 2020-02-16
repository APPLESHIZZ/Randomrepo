const {
    RichEmbed
} = require("discord.js");

const {
    promptMessage
} = require("../functions");

module.exports.run = async (bot, message, args) => {
    if (message.deletable) message.delete();
    const embed = new RichEmbed()
        .setFooter('Welcome to server.', bot.user.displayAvatarURL)
        .setAuthor(`Auoi #1307`) // change this to your bots name / your discord name if you want.
        .setTitle(`Rules.`) // sets title of embed.
        .setDescription('Please go to #role-signup and read carefully what to do. \nOnce you have done so you can open a ticket within that channel at the bottom. \nBut first read the rules below!')
        .setTimestamp() // sets timestamp
        .setThumbnail()
        .addField(`\`\`\`1\`\`\``, `Beef and/or arguing will not be tolerated. If you have an issue with someone, take it elsewhere.`) // adds field to the embed
        .addField(`\`\`\`2\`\`\``, `No spamming or NSFW content. Don't be a jerk or generally obnoxious - nobody likes trolls.`) // adds field to the embed
        .addField(`\`\`\`3\`\`\``, `No scamming. If you see something sketchy, please let a staff member know.`) // adds field to the embed
        .addField(`\`\`\`4\`\`\``, `No illegal activities or services.`) // adds field to the embed
        .addField(`\`\`\`5\`\`\``, `Post your advertisement once every 24 hours. Posting too frequently will result in a mute or restriction from posting in service channels.`) // adds field to the embed
        .addField(`\`\`\`6\`\`\``, `If your username can't be easily mentioned, please set your nickname to something mentionable. For example "ᐃᑦᑎᓂᖅᓯᐅᑐᖅ ᑕᖅᓴᖅ" , isn't particularly useful.`) // adds field to the embed
        .addField(`\`\`\`7\`\`\``, `if we see any of the following words or variations of the word in a discussion here you'll get the boot no exceptions. Selling, promoting or talking about anything that is illegal or even in the grey area of being illegal will not be tolerated. \n jig(s), method, cracked, refunding, giftcards, accounts (spotify, netflix, etc)/n Other words/terms of this nature also apply if it implies anything illegal`); // adds field to the embed

    message.channel.send(embed)

    await message.channel.send(embed).then(async msg => {

        const emoji = await promptMessage(msg, ["✅", "❌"]);

        if (emoji === "✅") {
            member.addRole('674788797363257404')
        }
    });
}
module.exports.help = {
    name: "Welcome", // Name of command goes here, if name is blah and prefix is ; then command will be ;blah
    category: "TEMPLATE", // Category of command
    description: "TEMPLATE", // description of command
    usage: "<TEMPLATE | TEMPLATE>", // usage of command
}