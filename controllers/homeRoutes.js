const router = require('express').Router();
const nodemailer = require('nodemailer');

// Get Routes
router.get('/', (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.json.status(500);
  }
});
router.get('/aboutme', (req, res) => {
  try {
    res.render('aboutme');
  } catch (err) {
    res.json.status(500);
  }
});
router.get('/projects', (req, res) => {
  try {
    res.render('projects');
  } catch (err) {
    res.json.status(500);
  }
});

router.get('/contactme', (req, res) => {
  try {
    res.render('contact');
  } catch (err) {
    res.json.status(500);
  }
});
router.get('/site_info', (req, res) => {
  try {
    res.render('siteinfo');
  } catch (err) {
    res.json.status(500);
  }
});

// POST Routes
router.post('/contactme', (req, res) => {
  try {
    console.log(req.body);
    ('use strict');

    async function main() {
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: 'bar@example.com, baz@example.com', // list of receivers
        subject: req.body.First + req.body.Last, // Subject line
        text: req.body.message, // plain text body
        html: '<b>Hello world?</b>', // html body
      });

      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }

    main().catch(console.error);
  } catch (err) {
    res.json.status(500);
  }
});

module.exports = router;
