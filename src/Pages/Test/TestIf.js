import React, { useState } from 'react';
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";

function TestIf() {
    const questions = [
		{
			questionText: 'едующий код: string person = "Tom"; person = "Sam"; Console.WriteLine(person);',
			answerOptions: [
				{ answerText: 'Tom', isCorrect: false },
				{ answerText: 'Sam', isCorrect: true },
				{ answerText: 'person', isCorrect: false },
				{ answerText: 'Программа завершит выполнение с ошибкой', isCorrect: false },
			],
		},
		{
			questionText: 'Какоу из следующих вариантов представляют корректное определение переменных:',
			answerOptions: [
				{ answerText: 'string person = "Tom";', isCorrect: true },
				{ answerText: 'person = "Tom";', isCorrect: false },
				{ answerText: 'string "Tom";', isCorrect: false },
				{ answerText: 'Нет правильных вариантов', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='hzz'>
		<div className='app'>
		
			{showScore ? (
								<Link className='pp' to="/If">
								<div className='score-section'>
									Вы ответили на {score} из {questions.length}
								</div>
								</Link>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Вопрос {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
                        
					</div>

				</>
			)}

		</div>
		</div>
    );
}

export {TestIf}