import React, { useState } from 'react';
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";

function Test() {
	const questions = [
		{
			questionText: 'Где правильно создана переменная?',
			answerOptions: [
				{ answerText: 'x = 0;', isCorrect: false },
				{ answerText: '$x = 10;', isCorrect: false },
				{ answerText: 'int num = "1"', isCorrect: false },
				{ answerText: 'char symbol = "A', isCorrect: true },
			],
		},
		{
			questionText: 'Для чего можно использовать язык C#?',
			answerOptions: [
				{ answerText: 'Для создания веб сайтов', isCorrect: false },
				{ answerText: 'Для написания игр', isCorrect: false },
				{ answerText: 'Для создания программ под ПК', isCorrect: false },
				{ answerText: 'Всё перечисленное', isCorrect: true },
			],
		},
		{
			questionText: 'Какие циклы существуют в языке C#?',
			answerOptions: [
				{ answerText: 'for, while', isCorrect: false },
				{ answerText: 'for, while, foreach', isCorrect: false },
				{ answerText: 'for, while, do while, foreach', isCorrect: true },
				{ answerText: 'for', isCorrect: false },
			],
		},
		{
			questionText: 'Какие типы переменных существуют?',
			answerOptions: [
				{ answerText: 'Все перечисленные', isCorrect: true },
				{ answerText: 'int, char, bool, float, double', isCorrect: false },
				{ answerText: 'int, char, bool, string', isCorrect: false },
				{ answerText: 'Ни один из них', isCorrect: false },
			],
		},
		{
			questionText: 'Где верно происходит вывод данных в консоль?',
			answerOptions: [
				{ answerText: 'Console.write("Hi");', isCorrect: false },
				{ answerText: 'сonsole.log("Hi");', isCorrect: false },
				{ answerText: 'Console.WriteLine("Hi");', isCorrect: true },
				{ answerText: 'print("Hi");', isCorrect: false },
			],
		},
		{
			questionText: 'Какой из перечисленных типов является десятичным?',
			answerOptions: [
				{ answerText: 'decimal', isCorrect: true },
				{ answerText: 'int', isCorrect: false },
				{ answerText: 'long', isCorrect: false },
				{ answerText: 'sbyte', isCorrect: false },
			],
		},
		{
			questionText: 'Выберите символьный тип данных',
			answerOptions: [
				{ answerText: 'char', isCorrect: true },
				{ answerText: 'ulong', isCorrect: false },
				{ answerText: 'bool', isCorrect: false },
				{ answerText: 'ushot', isCorrect: false },
			],
		},
		{
			questionText: 'Выберите оператор инкремента',
			answerOptions: [
				{ answerText: '--', isCorrect: false },
				{ answerText: '++', isCorrect: true },
				{ answerText: '%', isCorrect: false },
				{ answerText: 'Нет правильного ответа', isCorrect: false },
			],
		},
		{
			questionText: 'Результатом вычисления print (25 // 3) будет число:',
			answerOptions: [
				{ answerText: '++', isCorrect: false },
				{ answerText: '--', isCorrect: true },
				{ answerText: '%', isCorrect: false },
				{ answerText: 'Нет правильного ответа', isCorrect: false },
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
								<Link className='pp' to="/">
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

export {Test}