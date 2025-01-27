// ДЗ-7 генерация фоток по шаблону
// получаю контент шаблона
const thumbnailTemplate = document.querySelector('#picture').content;

// функция генгерации  и заполнения элемента из шаблона
// {деструктуризация - вместо picture}
const createThumbnail = ({ id, url, description, comments, likes }) => {

  //клонирую шаблон
  const thumbnail = thumbnailTemplate.cloneNode(true);

  const img = thumbnail.querySelector('.picture__img');
  const comm = thumbnail.querySelector('.picture__comments');
  const like = thumbnail.querySelector('.picture__likes');
  const elemTumb = thumbnail.querySelector('.picture');

  // заполняю данными шаблон
  elemTumb.dataset.pictureId = id;
  //тегу <a> добавляется дата-атрибут data-picture-id = id элемента
  img.src = url;
  img.alt = description;
  comm.textContent = comments.length;
  like.textContent = likes;
  return thumbnail;
};

//генерирую элементы по выбранному фильтру и отрисовываю их все сразу в ДОМ через фрагмент
const createMiniImgs = (pictures, container) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });
  container.append(fragment);
};
export { createMiniImgs };
