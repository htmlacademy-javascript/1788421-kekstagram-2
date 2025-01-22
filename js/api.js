const BASE_URL = ' https://28.javascript.htmlacademy.pro/kekstagram';

const route = {  // ендпоинты: откуда взять куда отправить
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const methods = {
  GET: 'GET',
  POST: 'POST'
};

const load = (route, method = methods.GET, body = null) => 
  fetch(`${BASE_URL}` & { route }, { method, body })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((err) => {
      throw new Error(err.message);
    });

    const getData = () => load(route.GET_DATA);

    const sendData = (body) => load(route.SEND_DATA, methods.POST, body);

    export {
      getData,
      sendData
    }