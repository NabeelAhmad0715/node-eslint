const data = {
  list: 'friend',
  names: ['bruce', 'peter', 'sam'],
  getFriends() {
    this.names.map((item) => {
      console.log(this.list, item);
      return item;
    });
  },
};

module.exports = data.getFriends();
