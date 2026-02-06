import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Result() {
  const router = useRouter();
  const { score, total } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Completed</Text>
      <Text style={styles.score}>You scored {score} / {total}</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.replace("/quiz")}>
        <Text style={styles.buttonText}>Play again</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonAlt} onPress={() => router.replace("/home")}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "600", marginBottom: 12 },
  score: { fontSize: 18, marginBottom: 20 },
  button: { backgroundColor: "#4c6ef5", paddingVertical: 12, paddingHorizontal: 30, borderRadius: 8, marginBottom: 10 },
  buttonAlt: { backgroundColor: "#333", paddingVertical: 12, paddingHorizontal: 30, borderRadius: 8 },
  buttonText: { color: "#fff", fontWeight: "700", textAlign: "center" },
});