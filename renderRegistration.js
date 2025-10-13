import { setToken, registration, setName } from './api.js'
import { fetchAndRenderComments } from './index.js'
import { renderLogin } from './renderLogin.js'

export const renderRegistration = () => {
    const container = document.querySelector('.container')
    const regHtml = `<div class="add-form">
      <input style="margin-bottom: 10px" type="text" id="login" class="add-reg" placeholder="Введите логин" />
      <input style="margin-bottom: 10px" type="text" id="name" class="add-reg" placeholder="Введите имя" />
       <input type="password" id="password" class="add-reg" placeholder="Введите пароль" />
        <button id='button' class="add-form-button">Зарегистрироваться</button>
        <button id='btn-login' class="add-form-button login">Войдите</button>
      </div>
    </div>`
    container.innerHTML = regHtml
    document.getElementById('btn-login').addEventListener('click', () => {
        renderLogin()
    })
    const nameEl = document.getElementById('name')
    const loginEl = document.getElementById('login')
    const passwordEl = document.getElementById('password')
    const passwordBtn = document.getElementById('button')

    passwordBtn.addEventListener('click', () => {
        registration(loginEl.value, nameEl.value, passwordEl.value)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setToken(data.user.token)
                setName(data.user.name)
                fetchAndRenderComments()
            })
    })
}
