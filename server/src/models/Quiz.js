import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema(
    {
        category: {
            type: String,
        },
        question: {
            type: String
        },
        answer: {
            type: String
        },
        options: [
            {
                type: String
            }
        ],
        difficulty: {
            type: String
        }
    }
)

export const Quiz = mongoose.model("questions", QuizSchema, "questions");

export default Quiz;