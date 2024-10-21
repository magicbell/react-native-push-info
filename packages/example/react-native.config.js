const path = require('path');

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
