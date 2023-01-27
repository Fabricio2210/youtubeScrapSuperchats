const cron = require("node-cron");
const superChats = require("./superChats");
const moment = require("moment");
const date = moment().format("YYYY-MM-DD");
const shell = require("shelljs");

const streamSchedule = (timeStart, timeEnd, name) => {
  cron.schedule(
    timeStart,
    () => {
      superChats(`${date}_${name}`);
    },
    {
      scheduled: true,
      timezone: "America/Los_Angeles",
    }
  );
  cron.schedule(
    timeEnd,
    () => {
      shell.exec("kill.bat");
    },
    {
      scheduled: true,
      timezone: "America/Los_Angeles",
    }
  );
};

module.exports = streamSchedule;
