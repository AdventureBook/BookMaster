require("dotenv").config()
const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');

const {DISCORD_CLIENT_ID, DISCORD_BOT_TOKEN, DEV_GUILD} = process.env

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
    new SlashCommandBuilder().setName("link").setDescription('Link your discord id with AdventureBook'),
	new SlashCommandBuilder().setName("play").setDescription("add session to campaign")
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(DISCORD_BOT_TOKEN);

rest.put(Routes.applicationCommands(DISCORD_CLIENT_ID), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);