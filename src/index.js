const {getPassword} = require('./utils.js')
const { sendMail } = require("./newmailservice.js");
const readlineSync = require('readline-sync');
const getFixMessageDiff = require('./GetFixMessageDiff.js')
const { isValidRange } = require("./getMessageRange");

async function toSendEmailOrNot(){
      let choice = readlineSync.question('Do you want to send the email, Press y for yes, n for no : ');
      return(choice);
  }
async function run(){
    if(isValidRange().isValid){
        const choice = await toSendEmailOrNot();
        if(choice == 'Y' || choice == 'y'){
            // const pass = await getPassword();
            const email = getFixMessageDiff();
            sendMail(email)
        }
        else
            getFixMessageDiff();
    }
    else{
        console.log("Max Range exceeds the number of message in the log file, Max Range is",isValidRange().maxRange);
        process.exit(0)
    }
}

run()

