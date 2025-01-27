//функция для алгоритма тасования Фишера-Йетса
// создание массива из перемешанных случайно элементов
function sortRandomy(arr) {
	let newArr = [...arr];
	for (let i = newArr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[newArr[i], newArr[j]] = [newArr[j], newArr[i]];
	console.log(j);
  }

	return newArr;
}

//функция проверки нажатия Esc
const isEscapeKey = (evt) => evt.key === 'Escape';

// сортировка по колличеству комментариев (по убыванию: b-a)
const sortByComments = (commA, commB) => {
  return commB.comments.length - commA.comments.length;
}

// Функция взята из интернета и доработана
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example

function debounce (callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться, пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}

export {
  sortRandomy,
  sortByComments,
  debounce,
  isEscapeKey
};
