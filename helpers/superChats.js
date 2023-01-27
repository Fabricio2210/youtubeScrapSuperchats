const axios = require("axios");
const fs = require("fs").promises;
const shell = require("shelljs");
require("dotenv").config();

const getIdLive = async (name) => {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCGAQFQoZNIFUnQQuA-Llu9A&eventType=live&type=video&key=${process.env.API_KEY}`
  const res = await axios.get(url);
  if (res.data.items[0] === undefined) {
    console.log("There no stream in this channel right now...");
  } else {
    const code = `chat_downloader https://www.youtube.com/watch?v=${res.data.items[0].id.videoId} --output ${name}.json --message_groups "superchat"`;
    await fs.writeFile(`chat.sh`, code);
    setTimeout(() => {
      shell.exec("chat.sh");
    }, 2000);
  }
};

module.exports = getIdLive
