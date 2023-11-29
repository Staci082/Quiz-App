import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useContext, useState } from "react";
import DataContext from "../context/dataContext";

function Questions() {
    const { selectedAmount,
        selectedCategory,
        selectedDifficulty,
        quiz,
        question,
        questionIndex,
        checkAnswer,
        nextQuestion,
        correctAnswer,
        selectedAnswer,
        setSelectedAnswer,
        score, } = useContext(DataContext);

    const [timerKey, setTimerKey] = useState(0);

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            handleTimeOut(); // Handle the timeout when remainingTime reaches 0
        }
        return (
            <div className="timer">
                <div className="value text-2xl">{remainingTime}</div>
            </div>
        );
    };

    const handleTimeOut = () => {
        checkAnswer(selectedAnswer);
        setTimerKey((prevKey) => prevKey + 1);
    };

    const handleSubmit = () => {
        checkAnswer(selectedAnswer);
        setTimerKey((prevKey) => prevKey + 1);
        
    };

    console.log("selected: ", selectedAnswer);
    console.log("correct: ", correctAnswer);

    const resultsLink = `/results?category=${selectedCategory}&amount=${selectedAmount}&difficulty=${selectedDifficulty}&score=${score}`;

    return (
        <section className=" md:w-1/2 w-full  text-xl">
            <header className="flex justify-between p-4 mb-8">
                <a href="/" className="bg-teal-600 rounded-full w-8 h-8 flex justify-center items-center">
                    <MdOutlineArrowBackIosNew />
                </a>
                <button
                    onClick={() => {
                        setTimerKey((prevKey) => prevKey + 1);
                        nextQuestion();
                    }}
                >
                    Skip
                </button>
            </header>
            <main className="flex flex-col items-center justify-center gap-4">
                <div className=" bg-teal-400 rounded-lg h-auto w-80 flex flex-col items-center gap-6 p-4 pt-12 mb-4">
                    <div className="absolute top-16 right-0 left-0 m-auto bg-teal-600 rounded-xl w-36 px-10 py-2 flex flex-col items-center">
                        <h3>Question</h3>
                        <h3>
                            {questionIndex + 1} / {quiz?.length}
                        </h3>
                    </div>
                    <div className="timer-wrapper">
                        <CountdownCircleTimer 
                        key={timerKey} 
                        isPlaying size={60} 
                        strokeWidth={8} 
                        duration={30} 
                        colors={['#4ade80', '#a3e635']}
                        colorsTime={[30, 15]}
                        onComplete={handleTimeOut}>
                            {({ remainingTime }) => renderTime({ remainingTime })}
                        </CountdownCircleTimer>
                    </div>
                    <p className="text-3xl">{question?.question}</p>
                </div>

                {question?.options?.map((option, index) => (
                    <button
                        onClick={() => {
                            setSelectedAnswer(option);
                        }}
                        key={index}
                        className={` bg-teal-400 rounded-lg w-80 py-3 text-3xl border-b-4 border-l-2 border-teal-600 ${selectedAnswer === option ? "border-4 border-white" : ""}`}
                    >
                        {option}
                    </button>
                ))}

                {questionIndex === quiz.length - 1 ? (
                    <a href={resultsLink} disabled={!selectedAnswer} onClick={handleSubmit} className="active:translate-y-1 text-2xl bg-teal-600 rounded-lg w-80 py-3 my-6 border-b-4 border-l-2 border-teal-700">
                        Finish
                    </a>
                ) : (
                    <button disabled={!selectedAnswer} onClick={handleSubmit} className="active:translate-y-1 text-2xl bg-teal-600 rounded-lg w-80 py-3 my-6 border-b-4 border-l-2 border-teal-700">
                        Submit
                    </button>
                )}
            </main>
        </section>
    );
}

export default Questions;
