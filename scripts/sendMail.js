"use strict";
const nodemailer = require("nodemailer");

require("dotenv").config({
  path: ".env.local"
});

// async..await is not allowed in global scope, must use a wrapper
module.exports = function(name, email, mobile, emailText) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE, // use SSL
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  let message = `
TEL.:
${mobile}

E-MAIL:
${email}

NAME:
${name}


${emailText}
`;

  // send mail with defined transport object
  return transporter
    .sendMail({
      from: `"${name}" <${email}>`, // sender address
      replyTo: email,
      to: process.env.SMTP_USER, // list of receivers
      subject: `Nachricht von ${name}`,
      text: message // plain text body
    })
    .then(info => {
      if (
        process.env.NODE_ENV === "development" ||
        process.env.NODE_ENV === "dev"
      ) {
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      }
    });
};
