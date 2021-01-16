const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    // res.json.status(500);
  }
});

module.exports = router;
