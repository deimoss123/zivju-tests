/*
questionType: "list" | "input",
imgUrl?: string, // bildes url, ko rāda aukšā, nav obligāts
question: string, // jautājuma teksts

// list tipa jautājums
answers?: string[], // atbilžu varianti
correctAnswers?: number[], // pareizās atbildes indeksi, ja būs vairāk nekā viena, tad automātiski būs checkboxi
multipleChoice?: boolean, // vai ir vairākas pareizās atbildes
imgAnswers?: boolean, // vai atbildes ir attēli

// input tipa jautājums
correntAnswer?: string, // pareizā atbilde
*/

const zivis = [
  {
    // 1
    questionType: "list",
    question: "Kurš no šiem dzīvniekiem ir zivs?",
    answers: [
      "./images/1_Delfins.jpg",
      "./images/1_Zivs.jpg",
      "./images/1_Turtle.jpg",
    ],
    correctAnswers: [1],
    imgAnswers: true,
  },
  {
    // 2
    questionType: "list",
    question: "Kā sauc zivju elpošanas orgānu?",
    answers: ["Aknas", "Nieres", "Žaunas"],
    correctAnswers: [2],
  },
  {
    // 3
    questionType: "list",
    question: "Kura no šīm ir dziļūdens zivis?",
    answers: ["Forele", "Klāņģe", "Lasis", "Ķirzakzivs", "Āmurzivs"],
    correctAnswers: [1, 3],
    multipleChoice: true,
  },
  {
    // 4
    questionType: "list",
    question: "Kura zivs ir pazīstama ar spēju elektrizēt citus dzīvniekus?",
    answers: ["Karpa", "Lasis", "Zutis"],
    correctAnswers: [2],
  },
  {
    // 5
    questionType: "list",
    question: "Kur dzīvo/sastopamas piranjas?",
    answers: [
      "Amazonē",
      "Baltijas jūrā",
      "Brazīlijā",
      "Vidusjūrā",
      "Dienvidamerikā",
    ],
    correctAnswers: [0, 2, 4],
    multipleChoice: true,
  },
  {
    // 6
    questionType: "list",
    question: "Vai zivis var dzirdēt?",
    answers: ["Jā", "Nē", "Nezinu"],
    correctAnswers: [0],
  },
  {
    // 7
    questionType: "list",
    question: "Vai visām zivīm ir asinis?",
    answers: ["Jā", "Nē", "Nepatīk asinis"],
    correctAnswers: [0],
  },
  {
    // 8
    questionType: "list",
    question: "Vai haizivis elpo, izmantojot muti?",
    answers: ["Jā", "Nē"],
    correctAnswers: [1],
  },
  {
    // 9
    questionType: "list",
    question: "Kā sauc procesu, kad zivis vairojas?",
    answers: ["Nārstošana", "Apaugļošana", "Netflix&Chill"],
    correctAnswers: [0],
  },
  {
    // 10
    questionType: "list",
    question: "Kādu peldēšanas orgānu izmanto zivis, lai pārvietotos ūdenī?",
    answers: ["Spuras", "Pēdas", "Asti"],
    correctAnswers: [0],
  },
];

const parastaZvejosana = [
  {
    // 1
    questionType: "list",
    question: "Kāds ir zvejas veids, kurā izmanto makšķeri un ēsmu?",
    answers: ["Beibleidošana", "Spiningošana", "Tīklošana"],
    correctAnswers: [1],
  },
  {
    // 2
    questionType: "list",
    question: "Kuri no šiem rīkiem nav izmantojams zvejošanai?",
    answers: ["Āķis", "Spole", "Āmurs", "Zāģis", "Finieris"],
    correctAnswers: [2, 3, 4],
    multipleChoice: true,
  },
  {
    // 3
    questionType: "list",
    question: "Kura zvejas metode tiek izmantota zivju ķeršanai no laivām?",
    answers: ["Gruntēšana", "Troļļošana", "Musināšana"],
    correctAnswers: [1],
  },
  {
    // 4
    questionType: "list",
    question: "Kura no šīm ir populāra zvejas vieta Latvijā?",
    answers: [
      "Daugava",
      "Tērvetes ezers",
      "Bolderājas karjers",
      "Lubānas ezers",
      "Buļļupe",
    ],
    correctAnswers: [0, 4],
    multipleChoice: true,
  },
  {
    // 5
    questionType: "list",
    question:
      "Kuru no šiem dzīvajiem radījumiem izmanto kā dabisku ēsmu svaigūdens zvejā?",
    answers: [
      "./images/2_5_Tarps.jpg",
      "./images/2_5_Garneles.jpg",
      "./images/2_5_Prusaks.jpg",
    ],
    correctAnswers: [0],
    imgAnswers: true,
  },
  {
    // 6
    questionType: "list",
    question: "Kura būtu vislabāka vieta zvejot?",
    answers: [
      "./images/2_6_Upe.jpg",
      "./images/2_6_Musars.jpg",
      "./images/2_6_Dikis.jpg",
    ],
    correctAnswers: [0],
    imgAnswers: true,
  },
  {
    // 7
    questionType: "list",
    question:
      "Vai elektroniskās zvejas atrašanās vietas ierīces ir aizliegtas zvejā?",
    answers: ["Jā", "Nē"],
    correctAnswers: [1],
  },
  {
    // 8
    questionType: "list",
    question: "Vai katrai zvejas metodei nepieciešama īpaša licence?",
    answers: ["Jā", "Nē"],
    correctAnswers: [0],
  },
  {
    // 9
    questionType: "list",
    question: "Kā sauc zivju izvilināšanu no ūdens, izmantojot ēsmu?",
    answers: ["Makšķerēšana", "Bait'n'Switch", "Ķeršana"],
    correctAnswers: [2],
  },
  {
    // 10
    questionType: "list",
    question: "Kura no bildēm ir parādīta makšķere?",
    answers: [
      "./images/2_10_Makskere.jpg",
      "./images/2_10_Koks.jpg",
      "./images/2_10_Spear.jpg",
    ],
    correctAnswers: [0],
    imgAnswers: true,
  },
];

const zemledusZvejosana = [
  {
    // 1
    questionType: "list",
    question:
      "Kāds rīks nepieciešams, lai uz ledus izveidotu atveri zvejošanai?",
    answers: ["Lāpsta", "Šķēres", "Urbis"],
    correctAnswers: [2],
  },
  {
    // 2
    questionType: "list",
    question: "Kāda zvejas metode tiek izmantota zemledus zvejā?",
    answers: ["Troļļošana", "Ķeršana ar makšķeri", "Tīklošana"],
    correctAnswers: [1],
  },
  {
    // 3
    questionType: "list",
    question: "Kura ēsma visbiežāk tiek izmantota zemledus zvejā?",
    answers: [
      "./images/3_3_Corn.jpg",
      "./images/3_3_Tarps.jpg",
      "./images/3_3_Maneklis.jpg",
    ],
    correctAnswers: [1],
    imgAnswers: true,
  },
  {
    // 4
    questionType: "list",
    question: "Kā sauc zivis, kas bieži tiek ķertas zemledus zvejā?",
    answers: ["Siļķes", "Foreles", "Karūsas", "Lasis"],
    correctAnswers: [2],
    multipleChoice: true,
  },
  {
    // 5
    questionType: "list",
    question:
      "Kurā bildē vispareizāk ir sagatavota zemledus makšķerēšanas vieta?",
    answers: [
      "./images/3_5_Laba.jpg",
      "./images/3_5_Slikta.jpg",
      "./images/3_5_Slikta2.jpg",
    ],
    correctAnswers: [0],
    imgAnswers: true,
  },
  {
    // 6
    questionType: "list",
    question: "Vai zemledus zvejošanai nepieciešams īpašs apģērbs?",
    answers: ["Jā", "Nē"],
    correctAnswers: [0],
  },
  {
    // 7
    questionType: "list",
    question:
      "Vai zemledus zvejošana ir atļauta visos publiskajos ūdenstilpēs?",
    answers: ["Jā", "Nē"],
    correctAnswers: [1],
  },
  {
    // 8
    questionType: "list",
    question: "Kurā bildē parādīta droša vieta zemledus zvejošanai?",
    answers: ["./images/3_8_Safe.jpg", "./images/3_8_Unsafe.jpg"],
    correctAnswers: [0],
    multipleChoice: true,
    imgAnswers: true,
  },
  {
    // 9
    questionType: "list",
    question:
      "Kā sauc gaismas avotu, ko izmanto zemledus zvejā, lai piesaistītu zivis?",
    answers: ["Lukturis", "Lāpa", "Spuldzīte"],
    correctAnswers: [0],
  },
  {
    questionType: "list",
    question:
      "Kā sauc īpašo rokturi, ko izmanto, lai vieglāk izvilktu zivis caur ledus caurumu?",
    answers: ["Virve", "Āķis", "Spole"],
    correctAnswers: [1],
  },
];

const categories = {
  zivis: {
    fullName: "Tests par zivīm",
    questions: zivis,
  },
  parastaZvejosana: {
    fullName: "Tests par parasto zvejošanu",
    questions: parastaZvejosana,
  },
  zemledusZvejosana: {
    fullName: "Tests par zemledus zvejošanu",
    questions: zemledusZvejosana,
  },
};

export default categories;
