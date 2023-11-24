// const ReadFile = require('./ReadFile.js')
// const User = require('./User.js')
const fs = require('fs');
const readlinesync = require('readline-sync');

let userName = readlinesync.question('Привет! Как тебя зовут? ');
console.log('Привет, ' + userName + '!');
let themes = ['Эльбрус', 'Новый_Год'];
let index = readlinesync.keyInSelect(themes, 'Выбери тему:');
console.log(`Ты выбрал тему ${themes[index]}. Поехали!`);
let logPoints = console.log('У тебя points баллов.');
logPoints;
let i = 0;
while (i < 5) {
  i++;
  fs.readFileSync(`../topics/${themes[index]}.txt`, 'utf-8')
}

module.exports = GameLogic;
