const fs = require('fs');
const { EOL } = require('os');
const {
  firstQuestion,
  secondQuestion,
  thirdQuestion,
  fourthQuestion,
  fifthQuestion,
} = require('./themes/elbrus');

const {
  question1,
  question2,
  question3,
  question4,
  question5,
} = require('./themes/newYear');

// class ReadFile {
//   static readFile(theme) {
//     const path = `./topics/${theme}.txt`;
//     const themeText = fs.readFileSync(path, 'utf-8');
//     const formattedText = themeText.match(/([\s\S]+?)\n\n/g);
//     const obj = {};
//     for (let i = 0; i < formattedText.length; i++) {
//       obj[question] = formattedText[i].split('');
//     }
//     console.log(formattedText);
//   }
// }

class ReadFile {
  static readFile(theme) {
    
  }
}

ReadFile.readFile('Эльбрус');

module.exports = ReadFile;
