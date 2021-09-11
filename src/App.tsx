import React, {useState} from "react";
import {fetchQuizQuestions, DIFFICULTY, QuestionState} from './API'

import QuestionCard from "./components/QuestionCard";

import {GlobalStyles, Wrapper} from './App.styles'

const TOTAL_QUESTIONS = 10

export type answerObject = {
  question: string,
  answer: string,
  correctAnswer: string,
  correct: boolean
}

function App() {

  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<answerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)
    const questions = await fetchQuizQuestions(TOTAL_QUESTIONS, DIFFICULTY.medium)
    setQuestions(questions)
    setScore(0)
    setNumber(0)
    setUserAnswers([])
    setLoading(false)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver) {
      const answer = e.currentTarget.value
      const correctAnswer = questions[number].correct_answer
      const correct = answer === correctAnswer
      if(correct) setScore(prev => prev+1)
      const answerObject = {
        question: questions[number].question,
        answer,
        correctAnswer,
        correct
      }
      setUserAnswers((prev) => [...prev, answerObject])
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1
    if(nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
  }

  return (
    <>
    <GlobalStyles />
      <div className="App">
        <Wrapper>
        <h1>Quiz App</h1>
          {gameOver || userAnswers.length === TOTAL_QUESTIONS ? <button className="start" onClick={startTrivia}>Start Trivia!</button> : null} 
          {!loading && !gameOver && <p className="score">Score: {score}</p>}
          {loading && !gameOver &&  <p>Loading Questions ...</p>}
          {!loading && !gameOver && (
                  <QuestionCard question={questions[number].question} 
                  answers={questions[number].answers} 
                  callback={checkAnswer}
                  questionNr={number+1} 
                  totalQuestions={TOTAL_QUESTIONS}
                  userAnswer={userAnswers ? userAnswers[number] : undefined} />
          )}
          {!loading && !gameOver && userAnswers.length === number + 1 && userAnswers.length !== TOTAL_QUESTIONS && (
            <button className="next" onClick={nextQuestion}>next question</button>
          )}
        </Wrapper>
      </div>
    </>
  );
}

export default App;
