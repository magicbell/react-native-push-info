import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-push-info' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const PushInfo = NativeModules.PushInfo
  ? NativeModules.PushInfo
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

const assertPlatform = (os: 'ios' | 'android', property: string) => {
  if (Platform.OS !== os) {
    throw new Error(
      `${property} is not available on this platform (${Platform.OS})`
    );
  }
};

export function getIOSBundleId(): string {
  assertPlatform('ios', 'getIOSBundleId');
  return PushInfo.getConstants().bundleId;
}

export function getIOSTeamId(): string | undefined {
  assertPlatform('ios', 'getIOSTeamId');
  return PushInfo.getConstants().teamId;
}

export function getIOSAPNSEnvironment(): string | undefined {
  assertPlatform('ios', 'getIOSAPNSEnvironment');
  return PushInfo.getConstants().apnsEnvironment;
}

export function getAndroidApplicationId(): string {
  assertPlatform('android', 'getAndroidApplicationId');
  return PushInfo.getConstants().applicationId;
}
