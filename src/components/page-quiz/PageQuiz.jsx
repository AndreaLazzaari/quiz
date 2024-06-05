import { useEffect, useState } from 'react';
import * as data from '../../quiz.json';


export default function PageQuiz({ onFinish, onSaveAnswers }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const randomizeQuestions = data.quiz.map(question => {
            const randomizeQuestion = { ...question };
            randomizeQuestion.risposte.sort(() => Math.random() - 0.5);
            return randomizeQuestion;
        });
        setQuestions(randomizeQuestions);
    }, []);

    const handleAnswerChange = (answer) => {
        setSelectedAnswer(answer);
    }


    const handleNextQuestion = () => {
        const newUserAnswers = [...userAnswers, { questionId: questions[currentQuestion].id, answer: selectedAnswer }];
        setUserAnswers(newUserAnswers);
        setSelectedAnswer(null);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            onSaveAnswers(newUserAnswers);
            onFinish()
        }
    }
    return (
        <>
            <h1>Quiz</h1>
            <div>
                <h2>{questions[currentQuestion]?.domanda}</h2>
                <ul>
                    {questions[currentQuestion]?.risposte.map((risposta, index) => (
                        <li key={index}>
                            <label htmlFor="">
                                <input type="checkbox"
                                    checked={selectedAnswer === risposta}
                                    onChange={() => handleAnswerChange(risposta)}
                                />
                                {risposta}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <button className='next-quiz' onClick={handleNextQuestion} disabled={!selectedAnswer}>
                {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
            </button>
        </>
    );
}