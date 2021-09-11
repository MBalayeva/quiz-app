import React from 'react'
import {answerObject} from '../App'

import {Wrapper, ButtonWrapper} from './QuestionCard.styles'

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: answerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNr, totalQuestions}) => {
    return (
        <Wrapper> 
            <p className="number">Question {questionNr} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{__html: question}}></p>
            {answers.map(answer => {
                return (
                    <ButtonWrapper correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer}>
                        <button disabled={!!userAnswer} onClick={callback} key={answer} value={answer}>
                            <span dangerouslySetInnerHTML={{__html: answer}}></span>
                        </button>
                    </ButtonWrapper>
                )
            })}
        </Wrapper>
    )
}

export default QuestionCard
