const cron = require("node-cron");
const shell = require("shelljs");

cron.schedule('00 10 * * *', () => {
    shell.exec("superchatbot.sh")
  });
console.log("running index from superchatbot")