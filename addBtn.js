import { token } from './index.js'
const addButton = document.getElementById('button')
const inputName = document.getElementById('input')
const inputComment = document.getElementById('comment')
let curDate = new Date()
let options = { hour: '2-digit', minute: '2-digit' }
export const addBtn = () => {
    addButton.addEventListener('click', () => {
        if (inputName.value === '' || inputComment.value === '') {
            alert('Введите коpректное значение')
        } else {
            const addUser = {
                name: inputName.value
                    .replaceAll('<', '&lt')
                    .replaceAll('>', '&gt'),
                date: `${curDate.toLocaleDateString('ru-Ru')} ${curDate.toLocaleTimeString('ru-Ru', options)}`,
                text: inputComment.value
                    .replaceAll('<', '&lt')
                    .replaceAll('>', '&gt'),
                likes: 0,
                isLiked: false,
            }
            addForm.disabled = true
            addForm.textContent = 'Идет Загрузка'

            fetch('https://wedev-api.sky.pro/api/v2/dmitriy-dudko/comments', {
                method: 'POST',
                headers: {
                    Authorithation: `Bearer ${token}`,
                },
                body: JSON.stringify(addUser),
            })
                .then((response) => {
                    if (response.status === 201) {
                        return response.json()
                    } else {
                        if (response.status === 500) {
                            throw new Error('Сервер сломался, попробуй позже')
                        }
                        if (response.status === 400) {
                            throw new Error('Неверный ввод')
                        }
                        throw new Error('Что-то пошло не так')
                    }
                })

                .then(() => {
                    return fetch(
                        'https://wedev-api.sky.pro/api/v1/dmitriy-dudko/comments',
                    )
                })
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    addForm.disabled = false
                    addForm.innerHTML = `<input type="text" id="input" class="add-form-name" placeholder="Введите ваше имя" />
    <textarea id="comment" type="textarea" class="add-form-text" placeholder="Введите ваш коментарий"
      rows="4"></textarea>
    <div class="add-form-row">
      <button id='button' class="add-form-button">Написать</button>`
                    updateUsers(data.comments)
                    renderUsers()
                    inputName.value = ''
                    inputComment.value = ''
                })
                .catch((error) => {
                    addForm.innerHTML = `<input type="text" id="input" class="add-form-name" placeholder="Введите ваше имя" />
    <textarea id="comment" type="textarea" class="add-form-text" placeholder="Введите ваш коментарий"
      rows="4"></textarea>
    <div class="add-form-row">
      <button id='button' class="add-form-button">Написать</button>`
                    if (error.message === 'Неверный ввод') {
                        alert('Слишком мало символов')
                    }
                })
        }
    })
}
