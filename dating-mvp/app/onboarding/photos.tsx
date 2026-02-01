import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function OnboardingPhotosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add photos</Text>
      <Text style={styles.subtitle}>Upload a few photos to get started.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    opacity: 0.7,
  },
});
