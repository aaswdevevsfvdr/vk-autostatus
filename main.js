const fetch = require('node-fetch') // не бейте сильно за фетч, мне так удобнее(

const API_URL = 'https://api.vk.com/method/status.setImage'
const STATUSES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30] // id статусов
const API_TOKEN = 'XXX' // ваш токен

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}; // функция для рандома

setInterval(() => {
	fetch(`${API_URL}?v=5.103&status_id=${STATUSES[getRandomInRange(0, STATUSES.length - 1)]}&access_token=${API_TOKEN}`, {
  		"method": "GET"
	})
	.then((res) => res.json())
	.then((res) => {
		if (res.response == 1) {
			console.log('Статус обновлен!')
		} else {
			console.log(`Ошибка при обновлении статуса. ${JSON.stringify(res)}`)
		}
	})
	.catch((err) => {
		console.log(`Ошибка при обновлении статуса. ${err}`)
	})
}, 400) // интервал обновления статуса
