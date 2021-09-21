const axios = require('axios');

const getData = async () => {
  try {
    const response = await axios.get('https://api.github.com/users/lquixada');
    return response.data;
  } catch (error) {
    return error.response.body;
  }
};

const records = getData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
module.exports = records;
