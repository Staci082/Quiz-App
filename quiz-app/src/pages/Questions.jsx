import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useContext, useState } from "react";
import DataContext from "../context/dataContext";

const renderTime = ({ remainingTime }) => {
    return (
        <div className="timer">
            <div className="value text-2xl">{remainingTime}</div>
        </div>
    );
};

function Questions() {
    const { score, setSelectedAnswer, selectedAnswer, selectedAmount, quizs, question, questionIndex, selectedCategory, selectedDifficulty, checkAnswer, nextQuestion, correctAnswer } = useContext(DataContext);
    const [timerKey, setTimerKey] = useState(0);
    const handleTimeOut = () => {
        nextQuestion();
    };

    const handleSubmit = (selected) => {
        checkAnswer(selected);
        setTimerKey(prevKey => prevKey + 1);
        // if (correctAnswer) {
        //     correctAnswer.classList.add("bg-lime-400"); 
        // }
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
                <button onClick={() => {
                    setTimerKey(prevKey => prevKey + 1);
                    nextQuestion()}}>Skip</button>
            </header>
            <main className="flex flex-col items-center justify-center gap-4">
                <div className=" bg-teal-400 rounded-lg h-auto w-80 flex flex-col items-center gap-6 p-4 pt-12 mb-4">
                    <div className="absolute top-16 right-0 left-0 m-auto bg-teal-600 rounded-xl w-36 px-10 py-2 flex flex-col items-center">
                        <h3>Question</h3>
                        <h3>
                            {questionIndex + 1} / {quizs?.length}
                        </h3>
                    </div>
                    <div className="timer-wrapper">
                        <CountdownCircleTimer
                        key={timerKey}
                            isPlaying
                            size={60}
                            strokeWidth={4}
                            duration={30}
                            colors={["#a3e635"]}
                            onComplete={() => {
                                return { handleTimeOut, shouldRepeat: true };
                            }}
                        >
                            {({ remainingTime }) => renderTime({ remainingTime })}
                        </CountdownCircleTimer>
                    </div>
                    <p className="text-2xl">{question?.question}</p>
                </div>

                {question?.options?.map((option, index) => (
                    <button
                        onClick={() => {
                            setSelectedAnswer(option);
                        }}
                        key={index}
                        className={` bg-teal-400 rounded-lg w-80 py-3 border-b-4 border-l-2 border-teal-600 ${selectedAnswer === option ? "border-white" : ""} ${correctAnswer === option ? "border-lime-400" : ""}`}
                    >
                        {option}
                    </button>
                ))}

                {questionIndex === quizs.length - 1 ? (
                    <a
                    href={resultsLink}
                        disabled={!selectedAnswer}
                        onClick={() => {
                            handleSubmit(selectedAnswer);
                        }}
                        className="active:translate-y-1 text-2xl bg-teal-600 rounded-lg w-80 py-3 my-6 border-b-4 border-l-2 border-teal-700"
                    >
                        Finish
                    </a>
                ) : (
                    <button
                        disabled={!selectedAnswer}
                        onClick={() => {
                            handleSubmit(selectedAnswer);
                        }}
                        className="active:translate-y-1 text-2xl bg-teal-600 rounded-lg w-80 py-3 my-6 border-b-4 border-l-2 border-teal-700"
                    >
                        Submit
                    </button>
                )}
            </main>
        </section>
    );
}

export default Questions;
