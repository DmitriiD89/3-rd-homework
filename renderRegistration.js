import { setToken, registration, setName } from './api.js'
import { fetchAndRenderComments } from './index.js'
import { renderLogin } from './renderLogin.js'

export const renderRegistration = () => {
    const container = document.querySelector('.container')
    const loginHtml = `<div class="add-form">
      <input style="margin-bottom: 10px" type="text" id="login" class="add-form-name" placeholder="Введите логин" />
      <input style="margin-bottom: 10px" type="text" id="name" class="add-form-name" placeholder="Введите имя" />
       <input type="password" id="password" class="add-form-name" placeholder="Введите пароль" />
        <button id='button' class="add-form-button">Зарегистрироваться</button>
        <button id='btn-login' class="add-form-button login">Войдите</button>
      </div>
    </div>`
    container.innerHTML = loginHtml
    document.getElementById('btn-login').addEventListener('click', () => {
        renderLogin()
    })
    const nameEl = document.getElementById('name')
    const loginEl = document.getElementById('login')
    const passwordEl = document.getElementById('password')
    const loginBtn = document.getElementById('btn-login')

    loginBtn.addEventListener('click', () => {
        registration(nameEl.value, loginEl.value, passwordEl.value)
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
