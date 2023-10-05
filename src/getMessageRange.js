"use strict";
const { FIXParser } = require("fixparser");
const fs = require("fs");
const csvFilePath = process.argv[2];
const range_from = process.argv[3] || 1;
const range_to = process.argv[4];
const fixParser = new FIXParser();
let originalFile = fs.readFileSync(csvFilePath, "utf8");

function isValidRange() {
  const org_messages = originalFile.split("\n");
  let maxRange = 1;
  const messages = org_messages.slice(0, org_messages.length - 1);
  for (let i = 0; i < messages.length; i++) {
    let message = fixParser.parse(messages[i]);
    const jsonmsg = message[0].toFIXJSON();
    if (jsonmsg.Body.Text) {
      if (
        jsonmsg.Body.Text.indexOf("TORA") != -1 ||
        jsonmsg.Body.Text.indexOf("REDI") != -1
      ) 
        maxRange = jsonmsg.Body.Text.substr(4);
    }
  }

  if(parseInt(range_from)> parseInt(maxRange) || parseInt(range_to) > parseInt(maxRange)){
    return {
      isValid:false,
      maxRange
    };
  }
  else {
    return {
      isValid:true,
    }
  }
}
exports.isValidRange = isValidRange;
