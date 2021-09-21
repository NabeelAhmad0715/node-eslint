const item = {
  name: 'nabeel',
  getName: (name) => `normal ${name}`,
  getNameArrow: (message) => `arrow ${message}`,
};

const results = item.getNameArrow(item.getName(item.name));

module.exports = results;
