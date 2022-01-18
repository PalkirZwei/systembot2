const { CommandInteraction, Client, MessageEmbed } = require("discord.js");
const { connection } = require("mongoose");
const { execute } = require("../../Events/Client/ready");
require("../../Events/Client/ready");

module.exports = {
    name: "status",
    description: "Displays the status of the client and database connection.",
    /**
     * 
     * @param {CommandInteraction} interction 
     * @param {Client} client 
     */
    async execute(interction, client) {
        const Response = new MessageEmbed()
        .setColor("AQUA")
        .setDescription(`**Client**: \`🟢 ONLINE\` - \`${client.ws.ping}ms\`\n **Uptime**: <t:${parseInt(client.readyTimestamp)}:R>\n
        **Database**: \`${switchTo(connection.readyState)}\``)

        interction.reply({embeds: [Response]})
    }
}

function switchTo(val) {
    var status = " ";
    switch(val) {
        case 0 : status = `🔴 DISCONNECTED`
        break;
        case 1 : status = `🟢 CONNECTED`
        break;
        case 2 : status = `🟠 CONNECTING`
        break;
        case 3 : status = `🟣 DISCONNECTING`
        break;
    }
    return status;
}