import React, { useState } from 'react';
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";

function TestT() {
    const questions = [
		{
			questionText: 'Что из нижеперечисленного НЕ является встроенным типом языка C#?',
			answerOptions: [
				{ answerText: 'real', isCorrect: true},
				{ answerText: 'uint', isCorrect: false },
				{ answerText: 'object', isCorrect: false },
				{ answerText: 'sbite', isCorrect: false },
			],
		},
		{
			questionText: 'Сколько байт занимает значение типа uint?',
			answerOptions: [
				{ answerText: '8 байт";', isCorrect: false },
				{ answerText: '16 байт";', isCorrect: false },
				{ answerText: '4 байта";', isCorrect: true },
				{ answerText: '1 байт', isCorrect: false },
			],
		},
		{
			questionText: 'Какие из следующих вариантов представляют НЕ корректное определение переменных:',
			answerOptions: [
				{ answerText: 'string person;";', isCorrect: false },
				{ answerText: 'string person = "Tom;";', isCorrect: false },
				{ answerText: 'var person = "Tom";";', isCorrect: false },
				{ answerText: 'var person";', isCorrect: true },
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
								<Link className='pp' to="/T">
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

export {TestT}