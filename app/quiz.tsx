import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
    ActivityIndicator, StyleSheet, Text, TouchableOpacity, View,
} from "react-native";
import { fetchQuestions } from "../services/quiz";

export default function Quiz() {
  const router = useRouter();

  const [questions, setQuestions] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    try {
      const data = await fetchQuestions(5);
      setQuestions(data);
    } catch (error) {
      alert("Failed to load questions");
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (option: string) => {
    if (selected) return;

    setSelected(option);

    if (option === questions[currentIndex].correct_answer) {
        setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
    } else {
      router.replace({
        pathname: "/result",
        params: { score: score.toString(), total: questions.length.toString() },
      });
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const currentQuestion = questions[currentIndex];

  const options = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ].sort(() => Math.random() - 0.5);

  return (
    <View style={styles.container}>
      <Text style={styles.progress}>
        Question {currentIndex + 1} / {questions.length}
      </Text>

      <Text style={styles.question}>
        {decodeHTML(currentQuestion.question)}
      </Text>

      {options.map((option, index) => {
        const isCorrect =
          option === currentQuestion.correct_answer && selected;
        const isWrong =
          option === selected &&
          option !== currentQuestion.correct_answer;

        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              isCorrect && styles.correct,
              isWrong && styles.wrong,
            ]}
            onPress={() => handleAnswer(option)}
          >
            <Text>{decodeHTML(option)}</Text>
          </TouchableOpacity>
        );
      })}

      {selected && (
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

function decodeHTML(html: string) {
  return html
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, "&");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    paddingTop: 60,
  },
  progress: {
    marginBottom: 10,
    fontWeight: "bold",
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  option: {
    padding: 15,
    borderWidth: 1,
    width: "70%",
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: "center",
  },
  correct: {
    backgroundColor: "#99eead",
  },
  wrong: {
    backgroundColor: "#f4717c",
  },
  nextButton: {
    backgroundColor: "#eeaaaa",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: "80%",        
    alignSelf: "center",
  },
  nextText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});