const router = require('express').Router();
const emailjs = require('emailjs-com');
// const { getProfile, getRepos } = require('../public/js/API');
const axios = require('axios');

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
    var repos;
    const profile = {};

    axios
      .get('https://api.github.com/users/perezcarlos93')
      .then((res) => {
        profile = {
          login: res.login,
          blog: res.blog,
          location: res.location,
          email: res.email,
          repos: res.public_repos,
          last_update: res.updated_at,
        };

        return profile;
      })
      .catch((err) => console.log(err));

    // getRepos
    //   .then((res) => {
    //     repos = {
    //       name: res[0].name,
    //       description: res[0].description,
    //       language: res[0].language,
    //       commits_url: res[0].commits_url,
    //       repos: res[0].public_repos,
    //       last_update: res[0].updated_at,
    //     };

    //     return repos;
    //   })
    //   .catch((err) => console.log(err));

    res.render('projects', profile, repos);
  } catch (err) {
    console.log(err);
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

router.get('/contactme', (req, res) => {
  try {
    res.render('contact');
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

    // emailjs.send('service_nw6nq09', 'template_68tleul', templateParams).then(
    //   function (response) {
    //     console.log('SUCCESS!', response.status, response.text);
    //   },
    //   function (error) {
    //     console.log('FAILED...', error);
    //   }
    // );
  } catch (err) {
    console.log(err);
  }
});

router.get('*', (req, res) => {
  res.send('<h1>Page not found</h1>');
});

module.exports = router;
