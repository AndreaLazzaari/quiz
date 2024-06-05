import { useState } from 'react';
import './App.css';
import StartQuiz from './components/start-quiz/StartQuiz';
import PageQuiz from './components/page-quiz/PageQuiz';
import Results from './components/results/Results';

function App() {
  const [page, setPage] = useState('start-quiz') //stato per gestire la pagina corrente
  const [userAnswers, setUserAnswers] = useState([]);

  const handleStart = () => setPage('page-quiz');
  const handleFinish = () => setPage('results');
  const handleRestart = () => {
    setUserAnswers([]);
    setPage('start-quiz'); // Nuova funzione per gestire il riavvio del quiz
  }
  const handleAnswers = (answers) => setUserAnswers(answers);


  return (
    <>
      <main>
        <div className="container">
          {page === 'start-quiz' && <StartQuiz onStart={handleStart} />}
          {page === 'page-quiz' && <PageQuiz onFinish={handleFinish} onSaveAnswers={handleAnswers} />}
          {page === 'results' && <Results userAnswers={userAnswers} onRestart={handleRestart} />}
        </div>

      </main>
    </>
  )
}

export default App
