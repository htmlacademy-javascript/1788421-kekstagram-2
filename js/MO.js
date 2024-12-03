//======= открытие и закрытие МО =======

//функция проверки нажатия Esc - её можно вынести в util.js 
//(не забыть сделать экспорт\импорт)
const isEscapeKey = (evt) => evt.key === 'Escape';

//функция проверки нажатия Enter - её можно вынести в util.js 
const isEnterKey = (evt) => evt.key === 'Enter';

//находим МО
const userModalElement = document.querySelector('.setup');

//находим элемент при нажатии на который МО откроется
const userModalOpenElement = document.querySelector('.setup-open');

//назодим кнопку "Х" в МО - для закрытия
const userModalCloseElement = userModalElement.querySelector('.setup-close');

//запишем обработчик в переменную для корректного удаления
//и передадим его в addEventListener и removeEventListener.
const onDocumentKeydown = (evt) => {
	if (isEscapeKey(evt)) {
		evt.preventDefault(); //отмена действия по умолчанию
		closeUserModal();
	}
};

// функция открытия МО
function openUserModal() {
	// удаляем с МО класс "hidden"
	userModalElement.classList.remove('hidden');

	// Содержимое МО генерируется после открытия
	renderSimilarList();

	//обработчик вешается на document, 
	//keydown - нажатие любой клавиши
	document.addEventListener('keydown', onDocumentKeydown);
}

// функция закрытия МО
function closeUserModal() {
	// добавляем МО класс "hidden"
	userModalElement.classList.add('hidden');

	// Содержимое МО удаляется после закрытия
	clearSimilarList();

	//Удаление обработчика
	document.removeEventListener('keydown', onDocumentKeydown);
}

//открываем МО по клику
userModalOpenElement.addEventListener('click', () => {
	openUserModal();
});

//открываем МО по нажатию Ентер
userModalOpenElement.addEventListener('keydown', (evt) => {
	if (isEnterKey(evt)) {
		openUserModal();
	}
});

//закрываем МО по клику и Esc
userModalCloseElement.addEventListener('click', () => {
	closeUserModal();
});

//открываем МО по нажатию Ентер
userModalCloseElement.addEventListener('keydown', (evt) => {
	if (isEnterKey(evt)) {
		closeUserModal();
	}
});
