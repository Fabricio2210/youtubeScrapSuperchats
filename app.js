const streamSchedule = require("./helpers/schedule");
const cron = require("node-cron");
const shell = require("shelljs");

  cron.schedule('00 09 * * *', () => {
    shell.exit(0)
  });
streamSchedule("40-59/5 10 * * *", "20 16 * * *", "superchats_day");
streamSchedule("00-20/5 11 * * *", "20 16 * * *", "superchats_day");
streamSchedule("40-59/5 18 * * *", "50 21 * * *", "superchats_night");
streamSchedule("00-20/5 19 * * *", "50 21 * * *", "superchats_night");
console.log("Running superchat bot from agregrator");
