import { useLocation } from "react-router-dom";
import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const selectedAmount = queryParams.get("amount");
    const selectedCategory = queryParams.get("category");
    const selectedDifficulty = queryParams.get("Difficulty");

    const [quizs, setQuizs] = useState([]);
    const [question, setQuestion] = useState({});
    const [questionIndex, setQuestionIndex] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [score, setScore] = useState(0);

    function getMultipleRandom(arr, num) {
        if (!Array.isArray(arr)) {
            throw new Error("Data is not an array.");
        }
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    // Load JSON Data

    const handleStart = () => {
        fetch(`../src/dataset/${selectedCategory}.json`)
            .then((res) => res.json())
            .then((data) => {
                const randomQuestions = getMultipleRandom(data[selectedCategory], selectedAmount);
                setQuizs(randomQuestions);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };
    useEffect(() => {
        if (selectedCategory && selectedAmount) {
            handleStart();
        }
    }, [selectedCategory, selectedAmount]);

    // Set a Single Question
    useEffect(() => {
        if (quizs.length > questionIndex) {
            setQuestion(quizs[questionIndex]);
        }
    }, [quizs, questionIndex]);

    // Check Answer
    const checkAnswer = (event, selected) => {
        if (!selectedAnswer) {
            setCorrectAnswer(question.answer);
            setSelectedAnswer(selected);

            if (selected === question.answer) {
                event.target.classList.add("bg-lime-400");
                setScore(score + 5);
            } else {
                event.target.classList.add("bg-red-400");
            }
        }
    };

    // Next Quesion
    const nextQuestion = () => {
        setCorrectAnswer("");
        setSelectedAnswer("");
        const wrongBtn = document.querySelector("button.bg-lime-400");
        wrongBtn?.classList.remove("bg-lime-400");
        const rightBtn = document.querySelector("button.bg-red-400");
        rightBtn?.classList.remove("bg-red-400");
        setQuestionIndex((prevIndex) => {
            if (prevIndex < quizs.length - 1) {
                return prevIndex + 1;
            }
            return prevIndex; // Prevent exceeding the last index
        });
    };

    return (
        <DataContext.Provider
            value={{
                selectedCategory,
                selectedDifficulty,
                handleStart,
                quizs,
                question,
                checkAnswer,
                nextQuestion,
                correctAnswer,
                selectedAnswer,
                score,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
