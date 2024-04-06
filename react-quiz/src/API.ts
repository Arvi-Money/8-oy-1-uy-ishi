import { log } from "console";


export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hars',
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.comapi.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    const data = await (await fetch(endpoint)).json();
    console.log(data);
    
}