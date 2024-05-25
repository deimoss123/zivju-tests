/**
 * @typedef {{
 *   imgUrl: string,
 *   question: string,
 *   answers: string[],
 *   correctAnswers: number[]
 *   multipleChoice?: boolean
 * }[]} Questions
 */

/** @type {Questions} */
const zivis = [
  // piemēra jautājumi, pēctam var dzēst
  {
    imgUrl: "", // bildes url, ja nav tad atstāt tukšu
    question: "Vai zivis dzīvo ūdenī?",
    answers: ["Jā", "Nē"],
    correctAnswers: [0], // pareizās atbildes indeki "answers" masīvā, var būt vairāki
  },
  {
    imgUrl: "", // bildes url, ja nav tad atstāt tukšu
    question: "Kuras no šīm ir zivis?",
    answers: ["Līdaka", "Suns", "Kaķis", "Asaris"],
    correctAnswers: [0, 3], // pareizās atbildes indekss "answers" masīvā
    multipleChoice: true, // ja ir vairāku izvēļu jautājums (ar checkboxiem)
  },
];


/** @type {Questions} */
const parastaZvejosana = [
  // piemēra jautājumi, pēctam var dzēst
  {
    imgUrl: "", // bildes url, ja nav tad atstāt tukšu
    question: "Vai zivis dzīvo ūdenī?",
    answers: ["Jā", "Nē"],
    correctAnswers: [0], // pareizās atbildes indeki "answers" masīvā, var būt vairāki
  },
  {
    imgUrl: "", // bildes url, ja nav tad atstāt tukšu
    question: "Kuras no šīm ir zivis?",
    answers: ["Līdaka", "Suns", "Kaķis", "Asaris"],
    correctAnswers: [0, 3], // pareizās atbildes indekss "answers" masīvā
    multipleChoice: true, // ja ir vairāku izvēļu jautājums (ar checkboxiem)
  },
];


/** @type {Questions} */
const zemledusZvejosana = [
  // piemēra jautājumi, pēctam var dzēst
  {
    imgUrl: "", // bildes url, ja nav tad atstāt tukšu
    question: "Vai zivis dzīvo ūdenī?",
    answers: ["Jā", "Nē"],
    correctAnswers: [0], // pareizās atbildes indeki "answers" masīvā, var būt vairāki
  },
  {
    imgUrl: "", // bildes url, ja nav tad atstāt tukšu
    question: "Kuras no šīm ir zivis?",
    answers: ["Līdaka", "Suns", "Kaķis", "Asaris"],
    correctAnswers: [0, 3], // pareizās atbildes indekss "answers" masīvā
    multipleChoice: true, // ja ir vairāku izvēļu jautājums (ar checkboxiem)
  },
];

const categories = {
  zivis: {
    fullName: 'Tests par zivīm',
    questions: zivis,
  },
  parastaZvejosana: {
    fullName: 'Tests par parasto zvejošanu',
    questions: parastaZvejosana,
  },
  zemledusZvejosana: {
    fullName: 'Tests par zemledus zvejošanu',
    questions: zemledusZvejosana,
  },
};

export default categories;
