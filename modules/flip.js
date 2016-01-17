var uidFromMention = /<@([0-9]+)>/;
module.exports = {
  lastTime: 0,
  cooldown: 500,
  description:"flip <value 1|value 2|ect...> - Let the bot choose a random value",
  permission: {
    onlyMonitored: true
  },
  action: function(args, e) {
	var fullArg = args.join(" ");
	var flip = fullArg.split("|");
	var rand = Math.floor(Math.random()*flip.length);
	return(flip[rand]);
  }
}
