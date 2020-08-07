module.exports = {
	commands: {
		role: require("./src/role.js"),
		character: require("./src/character.js"),
		design: require("./src/design.js"),
		wiki: require("./src/wiki.js"),
		help: require("./src/help.js")
	},
	exists: function(cmd) {
		return typeof this.commands[cmd] != "undefined";
	},
	get: function(cmd) {
		return this.commands[cmd];
	}
}