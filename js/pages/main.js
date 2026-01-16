import {BASE_URL} from "../../constans";
import {ValidateQuizJson} from "../utils/validation";
import {QuizGenerator} from "../components/quizGenerator";
import {saveQuiz} from "../utils/storage";

const form = document.forms['json-block'];
const buttonSubmit = document.querySelector('.generator-submit');
const textarea = document.querySelector('.generator-input');

const quizGenerator = new QuizGenerator(ValidateQuizJson, saveQuiz);

const inputJSONHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(BASE_URL + '/generator.json');
}
