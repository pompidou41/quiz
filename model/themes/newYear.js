const Question = require('../Question');

const question1 = new Question({theme: 'Новый год', text: 'Кто первый назначил празднование Нового года на 1 января?', answer: 'Цезарь'});
const question2 = new Question({theme: 'Новый год', text: 'Кто весь Новый год проводит стоя, не пьёт, не ест и уйти не может?', answer: 'Ёлка'});
const question3 = new Question({theme: 'Новый год', text: 'Сколько раз бьют часы в новогоднюю ночь?', answer: '12'});
const question4 = new Question({theme: 'Новый год', text: 'Где находится резиденция Санта-Клауса?', answer: 'Лапландия'});
const question5 = new Question({theme: 'Новый год', text: 'На каком полюсе земного шара холоднее всего?', answer: 'Южном', points: 200});


question1.createFile();
question2.createFile();
question3.createFile();
question4.createFile();
question5.createFile();







