const axios = require('axios');
// var profile = {};
// var repos = {};

const getProfile = () => {
  axios.get('https://api.github.com/users/perezcarlos93');
};
getProfile();

const getRepos = () => {
  axios.get('https://api.github.com/users/perezcarlos93/repos');
};
getRepos();

// console.log('returned profile: ' + profile);
// console.log('returned repos: ' + repos);

module.exports = {
  getRepos,
  getProfile,
};
