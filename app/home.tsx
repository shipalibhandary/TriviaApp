import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Trivia App!!!</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("./quiz")}>
        <Text style={styles.cardTitle}>Trivia Quiz</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("./profile")}>
        <Text style={styles.cardTitle}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.card]}
        onPress={() => router.replace("./login")}>
        <Text style={styles.cardTitle}>Logout</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f5f7fa",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#ecb2b2",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

});