import { useRef } from "react";

export default function Answers({
    answers,
    selectedAnswer,
    answerState,
    clickHandler
}) {
    const shuffledAnswersRef = useRef();

    if (!shuffledAnswersRef.current) {
        shuffledAnswersRef.current = [...answers];
        shuffledAnswersRef.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
            {shuffledAnswersRef.current.map((answer) => {
                const isSelected = selectedAnswer === answer;
                let cssClass = '';

                if (answerState === 'answered' && isSelected) {
                    cssClass = 'selected';
                }

                if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                    cssClass = answerState;
                }

                return (
                    <li key={answer} className="answer">
                        <button
                            onClick={() => clickHandler(answer)}
                            className={cssClass}
                            disabled={answerState !== ''}
                        >
                            {answer}
                        </button>
                    </li>
                );
            }
            )}
        </ul>
    );
}