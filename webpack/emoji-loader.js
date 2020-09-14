module.exports = function loader(source) {
  return require('emoji-render')(source);
};