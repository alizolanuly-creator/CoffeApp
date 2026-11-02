import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Fall in Love with Coffee in Blissful Delight!</Text>
        <Text style={styles.subtitle}>
          Welcome to our cozy coffee corner, where every cup is a delightful for you.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0f14',
    justifyContent: 'flex-end',
  },
  content: {
    padding: 30,
    paddingBottom: 50,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 14,
    color: '#9b9b9b',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#C67C4E',
    height: 62,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});