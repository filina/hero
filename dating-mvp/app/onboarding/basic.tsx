import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function OnboardingBasicScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Basic info</Text>
      <Text style={styles.subtitle}>Tell us a bit about yourself.</Text>
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
