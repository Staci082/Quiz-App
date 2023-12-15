import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useContext, useState, useEffect } from "react";

function Questions() {
    const path = window.location.pathname;

    // Split the path into segments based on '/'
    const pathSegments = path.split('/');
    
    // Extract parameters from path segments
    const selectedCategory = pathSegments[2]; 
    const selectedAmount = pathSegments[3];  
    const selectedDifficulty = pathSegments[4];

    const [quiz, setQuiz] = useState([]);
    const [question, setQuestion] = useState({});
    const [questionIndex, setQuestionIndex] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [timerKey, setTimerKey] = useState(0);
    const [loading, setLoading] = useState(true); // Add a loading state
    const handleStart = () => {
        const url = `http://localhost:5000/questions/${selectedCategory}/${selectedAmount}/${selectedDifficulty}`;
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Network response was not ok: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setQuiz(data); 
                console.log("quiz:", quiz)
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                console.log("Response status:", error.response?.status);
                console.log("Response text:", error.response?.text());
            });
    };
    

    // Set a Single Question
    useEffect(() => {
        if (quiz.length > questionIndex) {
            setQuestion(quiz[questionIndex]);
            setCorrectAnswer(quiz[questionIndex].answer);
            setQuestionIndex(questionIndex);
        }
    }, [quiz, questionIndex]);

    // shuffle answer
    const shuffle = (array) => { 
        if (Array.isArray(array)) {
            array.sort(() => Math.random() - 0.5); 
        }
        return array;
    };
 

    // Check Answer
    const checkAnswer = (selected) => {
        if (selected === correctAnswer) {
            setScore(score + 1);
            nextQuestion();
        } else {
            nextQuestion();
        }
    };

    // Next Quesion
    const nextQuestion = () => {
        setCorrectAnswer("");
        setSelectedAnswer("");
        setQuestionIndex((prevIndex) => {
            if (prevIndex < quiz.length - 1) {
                return prevIndex + 1;
            }
            return prevIndex; // Prevent exceeding the last index
        });

        if (quiz.length > questionIndex + 1) {
            const nextQuestionOptions = quiz[questionIndex + 1].options;
            const shuffledOptions = shuffle(nextQuestionOptions);
            setQuestion((prevQuestion) => ({ ...prevQuestion, options: shuffledOptions }));
        }
    };

    console.log("score: ", score);
    useEffect(() => {
        if (selectedCategory && selectedAmount) {
            handleStart();
        }
    }, [selectedCategory, selectedAmount]);
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
    console.log("quiz", quiz);

    const resultsLink = `/results/${selectedCategory}/${selectedAmount}/${selectedDifficulty}/${score}`;

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
                        <CountdownCircleTimer key={timerKey} isPlaying size={60} strokeWidth={8} duration={30} colors={["#4ade80", "#a3e635"]} colorsTime={[30, 15]} onComplete={handleTimeOut}>
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
