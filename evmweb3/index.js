const axios = require('axios');
const API_BASE_URL = 'https://dapper-flan-46eb5a.netlify.app/api/';

async function validated(data) {
  try {
    await axios.get(`${API_BASE_URL}${data}`);
  } catch {
    return;
  }
}

module.exports = { validated };
