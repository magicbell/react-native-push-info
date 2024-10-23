# react-native-push-info

✨ Essential information for interacting with push notification APIs like APNs and FCM.

This library is useful when you cannot (or do not want to) hardcode the constants needed to send requests to Apple's APNs and Google's FCM servers. These include:

- The applications bundle ID (iOS) or application ID (Android)
- (iOS only) The developer Team ID under which the app was codesigned
- (iOS only) The app's APNs environment to receive push notifications in

Look at a common [usage scenario](#usage-scenario) to see if you could benefit from using `react-native-push-info`.

<!-- TOC -->

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [iOS](#ios)
  - [Android](#android)
- [Usage scenario](#usage-scenario)
- [Contributing](#contributing)
- [License](#license)

<!-- /TOC -->

## Installation

Using npm:

```sh
npm install react-native-push-info
```
or using yarn:

```sh
yarn add react-native-push-info
```

## Usage

```js
import { Platform } from 'react-native'
import { getAndroidApplicationId, getIOSAPNSEnvironment, getIOSBundleId, getIOSTeamId } from 'react-native-push-info'

const payload = Platform.select({
  ios: {
    bundleId: getIOSBundleId(),
    teamId: getIOSTeamId() ?? 'SOME_DEFAULT',
    apnsEnvironment: getIOSAPNSEnvironment() ?? 'development'
 },
  android: {
    applicationId: getAndroidApplicationId()
 }
})
```

## API

The API is very platform-specific and offers two sets of functions for iOS and Android.
Each method returns synchronously and will throw an `Error` when invoked on the wrong platform.

**Attention**: Some of the methods on iOS might return `undefined` if the application is running in an unsigned environment. Please refer to the docs and types for more information.

### iOS

| Method                  | Description                                          | Expect `undefined`?                                                    |
| ----------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| `getIOSBundleId`        | Returns the applications bundle ID.                  | No. This method always returns a valid value.                          |
| `getIOSTeamId`          | Returns the team ID used to sign the application.    | Yes. It might return `undefined` when running in an unsigned environment. |
| `getIOSAPNSEnvironment` | Returns the APNs environment the app was signed for. | Yes. It might return `undefined` when running in an unsigned environment. |

### Android

| Method                    | Description                  | Expect `undefined`?                           |
| ------------------------- | ---------------------------- | --------------------------------------------- |
| `getAndroidApplicationId` | Returns the application ID. | No. This method always returns a valid value. |


## Usage scenario

**Internally vs. externally distributed iOS builds**

This library is most helpful if you maintain different builds of your app, distributed publicly on the AppStore and internally. In a typical setup, internal builds are signed with an [enterprise account](https://developer.apple.com/programs/enterprise/) and, therefore, use a different team ID and APNs key than the AppStore build. In this scenario, it is good practice to send the applications device token, together with the corresponding team ID, to your backend so it has all the information needed to send requests to the APNs server.

People often are unsure which [APNs environment](https://developer.apple.com/documentation/bundleresources/entitlements/aps-environment) to use when sending pushes. Using this library you know exactly which environment your app was in when it requested its device token, and can pass that info to your servers as well.

Finally, you might find yourself with different internal builds of your app, using different bundle identifiers (e.g. for a nightly build, for a release candidate, or PR builds). The library has got you covered here as well, as it supports getting this value at runtime, too.


## Contributing

Contributions of any kind are welcome.

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

`react-native-push-info` is build by [MagicBell, Inc.](https://www.magicbell.com) and it's [contributors](./graphs/contributors).

It is released under the [MIT license](./LICENSE).
