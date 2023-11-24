const Question = require('Question');

const firstQuestion = new Question({ theme: 'Эльбрус', text: 'Сколько теннисных мячиков в кампусе', answer: 7 });
const secondQuestion = new Question({ theme: 'Эльбрус', text: 'Сколько уточек в кампусе', answer: 4 });
const thirdQuestion = new Question({ theme: 'Эльбрус', text: 'Как называется комната для приема пищи', answer: 'Cookies' });
const fourthQuestion = new Question({ theme: 'Эльбрус', text: 'Есть ли в кампусе дверь с названием "JavaScript', answer: 'Да' });

firstQuestion.createFile();
secondQuestion.createFile();
thirdQuestion.createFile();
fourthQuestion.createFile();