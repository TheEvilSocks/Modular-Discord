var config = require("./config.json");
var moduleLoader = require(config.dir.libDir + "moduleLoader.js");


var modules = moduleLoader.seekModules();
var commands = moduleLoader.loadModules(modules);

var flipArgs = "head|tails";
console.log(commands["flip"].action(flipArgs.split(" "),[]));
