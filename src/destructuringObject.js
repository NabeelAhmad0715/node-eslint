const user = {
  name: 'Nabeel Amjad',
  email: 'nabeel.amjad@invozone.com',
  mobile: +923117064200,
};
const { mobile, ...record } = user;
const records = (mobile, record);
module.exports = records;
