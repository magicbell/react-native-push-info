const path = require('path');

console.log("x")
console.log(path.join(__dirname, '../react-native-push-info'))
console.log("y")
module.exports = {
  project: {
    ios: {
      automaticPodsInstallation: true,
    },
  },
  dependencies: {
    'react-native-push-info': {
      root: path.join(__dirname, '../react-native-push-info'),
    },
  },
};
