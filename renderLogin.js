import { login } from './authentication.js'
import { setToken, setName } from './index.js'
import { renderUsers } from './render.js'

export const renderLogin = () => {
    const container = document.querySelector('.container')
    const loginHtml = `<div class="add-form">
      <input style="margin-bottom: 10px" type="text" id="login" class="add-form-name" placeholder="Введите логин" />
       <input type="password" id="password" class="add-form-name" placeholder="Введите пароль" />
        <button id='btn-login' class="add-form-button login">Войдите</button>
        <button id='button' class="add-form-button">Зарегистрироваться</button>
      </div>
    </div>`
    container.innerHTML = loginHtml

    const loginEl = document.querySelector('#login')
    const passwordEl = document.querySelector('#password')
    const loginBtn = document.querySelector('#btn-login')
    loginBtn.addEventListener('click', () => {
        login(loginEl.value, passwordEl.value)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setToken(data.user.token)
                setName(data.user.name)
                renderUsers()
            })
    })
}
