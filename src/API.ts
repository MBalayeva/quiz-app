import {shuffleArray} from './utils'

export enum DIFFICULTY {
    easy="easy",
    medium="medium",
    hard="hard"
}

export type Question = {
    category: string,
    correct_answer: string,
    difficulty: string,
    question: string,
    incorrect_answers: string[],
    type: string
}

export type QuestionState = Question & {answers: string[]}

export const fetchQuizQuestions = async (amount: number, difficulty: DIFFICULTY) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    const data = await( await fetch(url)).json()
    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }))
}