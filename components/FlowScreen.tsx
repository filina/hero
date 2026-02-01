import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

type FlowScreenProps = {
  title: string;
  subtitle?: string;
  nextHref: string;
  backHref: string;
};

export function FlowScreen({
  title,
  subtitle,
  nextHref,
  backHref,
}: FlowScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      <View style={styles.actions}>
        <Pressable
          accessibilityRole="button"
          onPress={() => router.push(backHref)}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Text style={[styles.buttonText, styles.buttonTextSecondary]}>
            Назад
          </Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          onPress={() => router.push(nextHref)}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Text style={styles.buttonText}>Далее</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#111827",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
  },
  actions: {
    flexDirection: "row",
    marginTop: 24,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 110,
    alignItems: "center",
    marginHorizontal: 6,
  },
  buttonPrimary: {
    backgroundColor: "#111827",
  },
  buttonSecondary: {
    backgroundColor: "#e5e7eb",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
  buttonTextSecondary: {
    color: "#111827",
  },
});
