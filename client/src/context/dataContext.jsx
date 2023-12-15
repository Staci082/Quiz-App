
import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

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

    // function getMultipleRandom(arr, num) {
    //     if (!Array.isArray(arr)) {
    //         throw new Error("Data is not an array.");
    //     }
    //     const shuffled = [...arr].sort(() => 0.5 - Math.random());
    //     return shuffled.slice(0, num);
    // }

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
    

    useEffect(() => {
        if (selectedCategory && selectedAmount) {
            handleStart();
        }
    }, [selectedCategory, selectedAmount]);



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
    return (
        <DataContext.Provider
            value={{
                selectedAmount,
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
                score,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
