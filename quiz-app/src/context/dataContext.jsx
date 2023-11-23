import { useLocation } from "react-router-dom";
import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const selectedAmount = queryParams.get("amount");
    const selectedCategory = queryParams.get("category");
    const selectedDifficulty = queryParams.get("difficulty");

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
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Network response was not ok: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                const randomQuestions = getMultipleRandom(data[selectedCategory], selectedAmount);
                setQuizs(randomQuestions);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                console.log("Response status:", error.response?.status);
                console.log("Response text:", error.response?.text());
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
            setCorrectAnswer(quizs[questionIndex].answer);
            setQuestionIndex(questionIndex);
        }
    }, [quizs, questionIndex]);

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
            if (prevIndex < quizs.length - 1) {
                return prevIndex + 1;
            }
            return prevIndex; // Prevent exceeding the last index
        });
    };
    console.log("score: ", score);
    return (
        <DataContext.Provider
            value={{
                selectedCategory,
                selectedDifficulty,
                handleStart,
                quizs,
                question,
                questionIndex,
                checkAnswer,
                nextQuestion,
                correctAnswer,
                selectedAnswer,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
