export default function Results({ userAnswers, onRestart }) {
    return (
        <>
            <h1>Quiz Results</h1>
            <ul>
                {userAnswers.map((answer, index) => (
                    <li key={index}>
                        <strong>Question {answer.questionId}:</strong> {answer.answer}
                    </li>
                ))}
            </ul>
            <button className='next-quiz' onClick={onRestart}>Restart Quiz</button>
        </>
    );
}
