const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    // res.json.status(500);
  }
});
router.get('/aboutme', (req, res) => {
  try {
    res.render('aboutme');
  } catch (err) {
    // res.json.status(500);
  }
});
router.get('/projects', (req, res) => {
  try {
    res.render('projects');
  } catch (err) {
    // res.json.status(500);
  }
});
router.get('/contactme', (req, res) => {
  try {
    res.render('contact');
  } catch (err) {
    // res.json.status(500);
  }
});

module.exports = router;
