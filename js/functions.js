console.log('hi!');

// проверка длины строки
function checkingLengthString(str, maxLenght) {
  if (str.length >= maxLenght) {
    console.log('проверка пройдена')
    return true;
  }
  console.log('проверка не пройдена')
  return false;
}

let str1 = "это оОООчень длиннннннная строка"
let str2 = "строка максимального размера"
let str3 = "это короткая строка"

let maxLen = str2.length;

console.log('тест1: строка длиннее:')
checkingLengthString(str1, maxLen);

console.log('тест2: строка равна:')
checkingLengthString(str1, maxLen);

console.log('тест3: строка короче:')
checkingLengthString(str3, maxLen);



// проверка строки на палиндром
function checkingPalindrom(str) {
  let newStr;

  // нормализация строки
  newStr = str.replaceAll(' ', '');
  newStr = newStr.toLowerCase();

  let strNorm = newStr;

  // переворот строки

  // Преобразуем строку в массив
  newStr = newStr.split(''); // ['с', 'т', 'р', 'о', 'к', 'а']

  // Разворачиваем элементы массива
  newStr.reverse(); // ['а', 'к', 'о', 'р', 'т', 'с']

  // Преобразуем массив в строку
  newStr = newStr.join(''); // акортс

  if (strNorm === newStr) {
    console.log("строка:  \'" + str + "\' - палиндром");
    return true;
  }
  console.log("строка: \'" + str + "\' - не палиндром");
  return false;
}

let str4 = "А роза упала на лапу Азора"

console.log('тест1: палиндром')
checkingPalindrom(str4);

console.log('тест2: не палиндром')
checkingPalindrom(str1);


// вынимаем цифры из строки

function removeNumbersFromString(str) {

  if (typeof str === "number") {
    str = String(str); // превращаю число в строку
  }

  let num = parseInt(str.replace(/\D+/g, "")); // заменить в строке всё что не цифры (\D) на ""  и преобразовать в число.
  console.log('num: ' + num);

  return num;

}

let str5 = "фываыфвп 1234 вапрапр, 568, asdfgdfgjtymQQQ 9101111"
let namb = -123.45;

console.log('тест1: в строке есть цифры')
removeNumbersFromString(str5);

console.log('тест2: в строке нет цифр')
removeNumbersFromString (str1);

console.log('тест3:  на входе число')
removeNumbersFromString(namb);
