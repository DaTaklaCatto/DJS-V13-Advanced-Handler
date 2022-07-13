//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//                   Command Template
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
const Discord = require("discord.js");

module.exports = {
  name: '',
  aliases: [],
  usage: '',
  description: '',
  cooldown: 10,
  userPermissions: "",
  botPermissions: "",
  ownerOnly: false,
  toggleOff: false,

  /**
   * @param {Discord.Client} client 
   * @param {Discord.Message} message
   * @param {String[]} args
   */

  async execute(client, message, args, config, embedcolor) {
    try {
      // Code
    } catch (e) {
      console.log(String(e.stack).bgRed)
    }
  }
}

// --------------------------------------------------- //
// --------------------------------------------------- //
// --------------------------------------------------- //
// --------------------------------------------------- //

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//                 Slash Command Template
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const Discord = require("discord.js");

module.exports = {
  name: '',
  usage: '',
  description: '',
  cooldown: 10,
  userPermissions: "",
  botPermissions: "",
  ownerOnly: false,
  toggleOff: false,

  /**
   * @param {Discord.Client} client 
   * @param {Discord.CommandInteraction} interaction
   * @param {String[]} args
   */

  async execute(client, interaction, args, config, embedcolor) {
    try {
      // Code
    } catch (e) {
      console.log(String(e.stack).bgRed)
    }
  }
}

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  ❂ Made by Nadid Wasique
  ❂ https://github.com/NWR57/ << Github
  ❂ https://nadid-wasique.netlify.app << Website
  ❂ https://discord.gg/Mdh23bsrhp << Discord Support Server

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */