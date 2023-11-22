import { useLocation } from "react-router-dom";
import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const selectedCategory = queryParams.get("category");
    const selectedLevel = queryParams.get("level");

    const [quizs, setQuizs] = useState([]);
    const [question, setQuestion] = useState({});
    const [questionIndex, setQuestionIndex] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [score, setScore] = useState(0);

    useEffect(() => {
        fetch(`../src/dataset/${selectedCategory}.json`)
            .then((res) => res.json())
            .then((data) => setQuizs(data));
    }, []);

    console.log(quizs);
    return (
        <DataContext.Provider
            value={{
                selectedCategory,
                selectedLevel,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
