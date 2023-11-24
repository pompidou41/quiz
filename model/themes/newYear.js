const Question = require('../Question');

const question1 = new Question({
  theme: 'Новый_год',
  text: 'Кто первый назначил празднование Нового года на 1 января?',
  answer: 'Цезарь',
});
const question2 = new Question({
  theme: 'Новый_год',
  text: 'Кто весь Новый год проводит стоя, не пьёт, не ест и уйти не может?',
  answer: 'Ёлка',
});
const question3 = new Question({
  theme: 'Новый_год',
  text: 'Сколько раз бьют часы в новогоднюю ночь?',
  answer: '12',
});
const question4 = new Question({
  theme: 'Новый_год',
  text: 'Где находится резиденция Санта-Клауса?',
  answer: 'Лапландия',
});
const question5 = new Question({
  theme: 'Новый_год',
  text: 'Какой фильм показывается перед Новым годом на российском телевидении вот уже 40 лет подряд?',
  answer: 'Ирония судьбы',
  points: 200,
});

question1.createFile();
question2.createFile();
question3.createFile();
question4.createFile();
question5.createFile();

const newYearQuestions = [
  question1,
  question2,
  question3,
  question4,
  question5,
];

module.exports = { newYearQuestions };
