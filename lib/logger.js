var config = require("../config.json");

module.exports = {
  log: function(data){
    if(typeof data != "string")
    data = String(data);
    console.log("[" + new Date().toLocaleTimeString("en-US", {hour12: !config.logger["24hourFormat"]}) + "] " + data);
  }
}
