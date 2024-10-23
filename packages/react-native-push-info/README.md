[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![npm version](https://badgen.net/npm/v/react-native-push-info)](https://www.npmjs.com/package/react-native-push-info)

# react-native-push-info

✨ Essential information for interacting with push notification APIs like APNs and FCM.

This library is useful when you cannot (or do not want to) hardcode the constants needed to send requests to Apple's APNs and Google's FCM servers. These include:

- The applications bundle ID (iOS) or application ID (Android)
- (iOS only) The developer Team ID under which the app was codesigned
- (iOS only) The app's APNs environment to receive push notifications in

Look at a common [usage scenario](#usage-scenario) to see if you could benefit from using `react-native-push-info`.

Full documentation, and a common [usage scenario](https://github.com/magicbell/react-native-push-info#usage-scenario) can be found in the [repositories Readme](https://github.com/magicbell/react-native-push-info).

## License

`react-native-push-info` is build by [MagicBell, Inc.](https://www.magicbell.com) and it's [contributors](./graphs/contributors).

It is released under the [MIT license](./LICENSE).
