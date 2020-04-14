'use srtict';

function game1() {
  let rightNumber = 7;
  number = prompt("Угадай число от 1 до 100");
  const game2 = function () {
    if (number === null) {
      return;
    }
    if (isNaN(number) === true) {
      number = prompt("Введите число!");
      return game2();
    }
    if (number > rightNumber) {
      alert("Загаданное число меньше");
      number = prompt("Угадай число от 1 до 100");
      return game2();
    } else if (number < rightNumber) {
      alert("Загаданное число больше");
      number = prompt("Угадай число от 1 до 100");
      return game2();
    } else {
      alert("Вы угадали!");
    }
  };
  return game2;
}

let resultGame = game1();
resultGame();