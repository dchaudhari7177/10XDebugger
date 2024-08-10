const nodemailer = require("nodemailer");

async function sendMailNotification(to,text) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "pkothalkar9021@gmail.com",
      pass: "fxrwvnnqatkntdub",
    },
  });

  const mailOptions = {
    from: "Hackathon Solutions",
    to: to,
    subject: "Emergency Alert",
    text: text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent");
  } catch (err) {
    console.log(err);
  }
}

module.exports = sendMailNotification;