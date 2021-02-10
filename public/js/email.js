require('dotenv');
const nodemailer = require('nodemailer');

const sendMessage = () => {
  const transporter = nodemailer.createTransport({
    service: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PW,
    },
  });

  const mail = {
    from: '"Nodemailer" <cperez.enterprises@gmail.com>',
    to: 'perez.carlos_a@yahoo.com',
    subject: 'Hello From Nodemailer',
    text: 'This is an email from Nodemailer',
    html: '<p>Hello World</p>',
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) console.log(err);
    if (data) console.log(data);
  });
};
