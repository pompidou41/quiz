const Question = require('../Question');

const firstQuestion = new Question({
  theme: 'Эльбрус',
  text: 'Сколько теннисных мячиков в кампусе?',
  answer: 7,
});
const secondQuestion = new Question({
  theme: 'Эльбрус',
  text: 'Сколько уточек в кампусе?',
  answer: 4,
});
const thirdQuestion = new Question({
  theme: 'Эльбрус',
  text: 'Как называется комната для приема пищи?',
  answer: 'Cookies',
});
const fourthQuestion = new Question({
  theme: 'Эльбрус',
  text: 'Есть ли в кампусе дверь с названием "JavaScript?',
  answer: 'Да',
});
const fifthQuestion = new Question({
  theme: 'Эльбрус',
  text: 'Вопрос от основателя Эльбруса: Как называлась первая группа в Эльбрусе?',
  answer: 'Еноты',
  points: 200,
});

firstQuestion.createFile();
secondQuestion.createFile();
thirdQuestion.createFile();
fourthQuestion.createFile();
fifthQuestion.createFile();
