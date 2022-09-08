require("dotenv").config()
const { Client, GatewayIntentBits } = require("discord.js")

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.on("ready", () => {
    console.log(`[+] bot ready: ${client.user.tag}`)
})

client.on("interactionCreate", async(interaction) => {
    console.log(`received command by ${interaction.user.id}`)
    switch(interaction.commandName) {
        case "ping":
            await interaction.reply("pong")
            break
        case "link":
            await interaction.reply(`visit http://localhost:4000/link?userId=${interaction.user.id}`)
    }
})

client.login(process.env.DISCORD_BOT_TOKEN)