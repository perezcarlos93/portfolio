const router = require('express').Router();
const emailjs = require('emailjs-com');
require('dotenv');

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
router.post('/contactme', ({ body }, res) => {
  try {
    console.log(body);

    var templateParams = {
      email: body.email,
      name: body.name,
      company: body.company,
      subject: body.subject,
      message: body.message,
    };

    emailjs.send('service_nw6nq09', 'template_68tleul', templateParams).then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text);
      },
      function (error) {
        console.log('FAILED...', error);
      }
    );
  } catch (err) {
    console.log(err);
  }
});

router.get('*', (req, res) => {
  res.send('<h1>Page not found</h1>');
});

module.exports = router;
