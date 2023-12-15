import { Quiz } from "../models/Quiz.js";

export async function getQuestions(req, res) {
    const { category, amount, difficulty } = req.params;
    console.log('Received Parameters:', category, amount, difficulty);

    try {
        const questions = await Quiz.aggregate([
            { $match: { category: category, difficulty: difficulty } },
            { $sample: { size: parseInt(amount) } }
        ]);
        
        console.log('Retrieved Questions:', questions);
        
        res.json(questions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}