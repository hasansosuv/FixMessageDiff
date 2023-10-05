const nodemailer = require("nodemailer");
const mailaddress =  require('./mailaddress.json')

async function sendMail(fixMsgDiff, userpassword){

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: `${mailaddress.sender}`,
          pass: mailaddress.passwd,
        },
      });

    await sendFixMsgDiff(fixMsgDiff,transporter)
    
}

async function sendFixMsgDiff(fixMsgDiff,transporter) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `${mailaddress.sender}`, // sender address
      to: `${mailaddress.receivers}`, // list of receivers
      subject: "REDI vs TORA Fix Messages", // Subject line
      text: '', // plain text body
      html: fixMsgDiff, // html body
    });
    console.log("Message sent: %s", info.messageId);
  
  }

module.exports.sendMail = sendMail