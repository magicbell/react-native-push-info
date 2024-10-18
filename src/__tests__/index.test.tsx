import {
  getAndroidApplicationId,
  getIOSAPNSEnvironment,
  getIOSBundleId,
  getIOSTeamId,
} from '../index';

import { Platform } from 'react-native';

// Mocking constants from the native module
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  RN.NativeModules.PushInfo = {
    getConstants: jest.fn().mockImplementation(() => ({
      // Android
      applicationId: 'example.applicationId',
      // iOS
      bundleId: 'example.bundleId',
      teamId: 'example.teamId',
      apnsEnvironment: 'development',
    })),
  };

  return RN;
});

describe('on Android', () => {
  beforeEach(() => {
    jest.replaceProperty(Platform, 'OS', 'android');
  });

  describe('getAndroidApplicationId', () => {
    it('returns the expected', () => {
      expect(getAndroidApplicationId()).toBe('example.applicationId');
    });
  });

  describe('getIOSAPNSEnvironment', () => {
    it('returns the expected', () => {
      expect(() => {
        getIOSAPNSEnvironment();
      }).toThrow();
    });
  });

  describe('getIOSBundleId', () => {
    it('returns the expected', () => {
      expect(() => {
        getIOSBundleId();
      }).toThrow();
    });
  });

  describe('getIOSTeamId', () => {
    it('returns the expected', () => {
      expect(() => {
        getIOSTeamId();
      }).toThrow();
    });
  });
});

describe('on iOS', () => {
  beforeEach(() => {
    jest.replaceProperty(Platform, 'OS', 'ios');
  });

  describe('getAndroidApplicationId', () => {
    it('throws as expected', () => {
      expect(() => {
        getAndroidApplicationId();
      }).toThrow();
    });
  });

  describe('getIOSAPNSEnvironment', () => {
    it('returns the expected', () => {
      expect(getIOSAPNSEnvironment()).toBe('development');
    });
  });

  describe('getIOSBundleId', () => {
    it('returns the expected', () => {
      expect(getIOSBundleId()).toBe('example.bundleId');
    });
  });

  describe('getIOSTeamId', () => {
    it('returns the expected', () => {
      expect(getIOSTeamId()).toBe('example.teamId');
    });
  });
});
