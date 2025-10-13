import { login, setToken, setName } from './api.js'
import { fetchAndRenderComments } from './index.js'
import { renderRegistration } from './renderRegistration.js'

export const renderLogin = () => {
    const container = document.querySelector('.container')
    const loginHtml = `
    <div class="add-form">
      <input style="margin-bottom: 10px" type="text" id="login" class="add-reg" placeholder="Введите логин" />
       <input type="password" id="password" class="add-reg" placeholder="Введите пароль" />
        <button id='btn-login' class="add-form-button login">Войдите</button>
        <button id='btn-reg' class="add-form-button">Зарегистрироваться</button>
    </div>`
    container.innerHTML = loginHtml

    document.getElementById('btn-reg').addEventListener('click', () => {
        renderRegistration()
    })

    const loginEl = document.getElementById('login')
    const passwordEl = document.getElementById('password')
    const loginBtn = document.getElementById('btn-login')

    loginBtn.addEventListener('click', () => {
        login(loginEl.value, passwordEl.value)
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
