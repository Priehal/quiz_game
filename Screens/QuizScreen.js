import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Questions from '/Users/prieyadahal/Documents/quiz_game/Data/Questions.js'; // adjust path if needed

export default function QuizScreen({ navigation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const question = Questions[currentQuestion];

  const handleAnswer = (option) => {
    if (answerSubmitted) return;

    setSelectedAnswer(option);
    setAnswerSubmitted(true);

    const isCorrect = option === question.correctAnswer;
    if (isCorrect) setScore(score + 1);

    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = {
      answer: option,
      submitted: true
    };
    setUserAnswers(updatedAnswers);
  };

  const handleNext = () => {
    const next = currentQuestion + 1;
    if (next < Questions.length) {
      setCurrentQuestion(next);

      const nextAnswer = userAnswers[next];
      if (nextAnswer && nextAnswer.submitted) {
        setSelectedAnswer(nextAnswer.answer);
        setAnswerSubmitted(true);
      } else {
        setSelectedAnswer(null);
        setAnswerSubmitted(false);
      }
    } else {
      navigation.navigate('Result', {
        score: score,
        total: Questions.length
      });
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      const prev = currentQuestion - 1;
      setCurrentQuestion(prev);

      const prevAnswer = userAnswers[prev];
      if (prevAnswer && prevAnswer.submitted) {
        setSelectedAnswer(prevAnswer.answer);
        setAnswerSubmitted(true);
      } else {
        setSelectedAnswer(null);
        setAnswerSubmitted(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question.question}</Text>

      {question.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.optionButton,
            selectedAnswer === option && {
              backgroundColor:
                answerSubmitted && option === question.correctAnswer
                  ? 'green'
                  : answerSubmitted && selectedAnswer === option
                  ? 'red'
                  : 'lightgray'
            }
          ]}
          onPress={() => handleAnswer(option)}
          disabled={answerSubmitted}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      {answerSubmitted && (
        <Text style={styles.feedback}>
          {selectedAnswer === question.correctAnswer ? 'Correct!' : 'Incorrect!'}
        </Text>
      )}

      <View style={styles.buttonRow}>
        {currentQuestion > 0 && (
          <Button title="Back" onPress={handleBack} />
        )}
        {answerSubmitted && (
          <Button
            title={currentQuestion + 1 < Questions.length ? 'Next' : 'Finish'}
            onPress={handleNext}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center'
  },
  question: {
    fontSize: 20,
    marginBottom: 20
  },
  optionButton: {
    backgroundColor: 'lightgray',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8
  },
  optionText: {
    fontSize: 18
  },
  feedback: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'blue'
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  }
});
