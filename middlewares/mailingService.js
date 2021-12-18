var nodemailer = require('nodemailer');
require('dotenv').config()
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
});
// console.log(process.env.EMAIL, process.env.EMAIL_PASSWORD);
function sendMail(name, email, subject, message){
    var mailOptions = {
        from: process.env.EMAIL,
        to: 'manavdoda7@gmail.com',
        subject: subject,
        html: `Mail from: <a href"mailto:${email}">${name}</a> <br> ${message}`
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = sendMail