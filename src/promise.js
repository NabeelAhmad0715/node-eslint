const axios = require('axios');

let a;
const error = true;
const promiseData = new Promise((resolved, reject) => {
  if (error) {
    setTimeout(() => {
      a = 'Set Timeout 3 Seconds';
      resolved('done');
    }, 3000);
  } else {
    reject();
  }
});

promiseData
  .then((res) => {
    console.log(`\n ${a}`, res);
  })
  .catch(() => {
    console.log('Error ');
  });
const status = true;
const promise = new Promise((resolved, reject) => {
  const api = axios.get('https://api.github.com/users/lquixada');
  console.log(api);
  if (status) {
    resolved(api);
  } else {
    reject();
  }
});
module.exports = promise
  .then((records) => {
    console.log(records.data);
  })
  .catch(() => {
    console.error('Data Not Found');
  });
