import { Quiz } from "../models/Quiz.js";

export async function getQuestions(req, res) {
    const { category } = req.params ;
    try {
        const questions = await Quiz.find({ category: `${category}` });
        console.log('Retrieved Questions:', questions);
        res.json(questions);
    } catch (error) {
        console.log(error);
        
    }
}