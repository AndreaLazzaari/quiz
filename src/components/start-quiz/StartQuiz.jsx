import './StartQuiz.css'

export default function StartQuiz({ onStart }) {
    return <>
        <section className='text-center'>
            <h1>
                Quanto ne sai sulla Storia?
            </h1>
            <div>
                <button className='next-quiz' onClick={onStart}>Inizia il quiz</button>
            </div>
        </section>
    </>
}