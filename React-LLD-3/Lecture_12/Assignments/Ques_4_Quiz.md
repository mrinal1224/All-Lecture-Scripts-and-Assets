### Problem Statement: React Interactive Quiz Application

**Objective:** Build a simple interactive quiz application using React. This application should allow users to take a multiple-choice quiz on a topic of your choice, see the correct answer after each question, and get a score at the end.

**Requirements:**
1. Display a question with multiple-choice answers.
2. Users select an answer and submit it to see if it was correct.
3. Immediately display whether the selected answer was correct or incorrect after submission.
4. At the end of the quiz, show the total score.

### Initial Code Setup

This React code stub includes the necessary imports and the structure of the main component. The stub also has placeholders for key functionalities like handling answer submission and calculating the score.

```javascript
import React, { useState } from 'react';

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Rome', isCorrect: false },
        { answerText: 'Berlin', isCorrect: false }
      ],
    },
    {
      questionText: 'Who is the CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Steve Jobs', isCorrect: false }
      ],
    },
    // Add more questions as needed
  ];

  const handleAnswerOptionClick = (isCorrect) => {
    // Implement answer checking logic
  };

  return (
    <div>
      <h1>Quiz App</h1>
      {showScore ? (
        <div>You scored {score} out of {questions.length}</div>
      ) : (
        <div>
          <div>{questions[currentQuestionIndex].questionText}</div>
          <div>
            {questions[currentQuestionIndex].answerOptions.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option.isCorrect)}>
                {option.answerText}
              </button>
            ))}
          </div>
          <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>
            Next Question
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
```

### Hints and Solution Approach

1. **Handle Answer Submission:** Implement the `handleAnswerOptionClick` function to update the score if the answer is correct and move to the next question.
2. **End of Quiz Logic:** Add logic to check if the current question is the last one and then display the score.
3. **State Management:** Use state variables effectively to manage the user's current position in the quiz, their score, and whether the score should be shown.

### Final Solution

Here’s how the key function might look:

```javascript
const handleAnswerOptionClick = (isCorrect) => {
  if (isCorrect) {
    setScore(score + 1);
  }

  const nextQuestion = currentQuestionIndex + 1;
  if (nextQuestion < questions.length) {
    setCurrentQuestionIndex(nextQuestion);
  } else {
    setShowScore(true);
  }
};
```

### Test Cases

1. **Correct Answer:** When a user selects the correct answer, the score should increment.
2. **Incorrect Answer:** When a user selects an incorrect answer, the score remains the same.
3. **End of Quiz:** When all questions are answered, display the total score.
4. **Multiple Quizzes:** Resetting the quiz should restart the process without retaining the previous score.

This quiz application provides a fundamental demonstration of state management, conditional rendering, and event handling in React.