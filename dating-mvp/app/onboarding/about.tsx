import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function OnboardingAboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About you</Text>
      <Text style={styles.subtitle}>Share what makes you unique.</Text>
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
