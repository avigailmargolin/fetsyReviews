const axios = require('axios');

function getReviews(id) {
  return axios.get(`http://localhost:3002/api/items/${id}/reviews`).catch((err) => {
    console.log(err);
  });
}

module.exports = { getReviews };
