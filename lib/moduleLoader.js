var config = require("../config.json");

var logger = require("./logger.js");
var fs = require("fs");
var path = require("path");




module.exports = {
  seekModules: function(){
    var moduleList = [];
    var files = fs.readdirSync(config.dir.moduleDir);
    for(i=0;i<files.length;i++){
      if(path.extname(files[i]) == ".js"){
        moduleList.push({"name": path.basename(files[i], path.extname(files[i])), "path": config.dir.moduleDir + files[i]});
      }
    }
    return moduleList;
  },
  loadModules: function(moduleArray){
    var loadedModules = [];
    for(i=0;i<moduleArray.length;i++){
      loadedModules[moduleArray[i].name] = require("." + moduleArray[i].path);
    }
    return loadedModules;
  }



}
