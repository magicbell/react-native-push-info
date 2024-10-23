import { StyleSheet, View, Text, Platform } from 'react-native';

import {
  getAndroidApplicationId,
  getIOSAPNSEnvironment,
  getIOSBundleId,
  getIOSTeamId,
} from 'react-native-push-info';

function IOSInfo() {
  return (
    <>
      <Text>Bundle ID: {getIOSBundleId() || 'unknown'}</Text>
      <Text>Team ID: {getIOSTeamId() || 'unknown'}</Text>
      <Text>APNs Environment: {getIOSAPNSEnvironment() || 'unknown'}</Text>
    </>
  );
}

function AndroidInfo() {
  return (
    <>
      <Text>Application ID: {getAndroidApplicationId() || 'unknown'}</Text>
    </>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      {Platform.select({
        ios: <IOSInfo />,
        android: <AndroidInfo />,
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
