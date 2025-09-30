// const list = document.getElementById('list')
import { token } from './index.js'
import { addBtn } from './addBtn.js'

import { renderLogin } from './renderLogin.js'

// import { loginHtml } from './renderLogin.js'
export let users = []
export const updateUsers = (newUsers) => {
    users = newUsers
}

export const renderUsers = () => {
    const container = document.querySelector('.container')
    const usersHtml = users
        .map((user, index) => {
            return `<li data-index='${index}' class="comment">
      <div class="comment-header">
        <div >${user.author.name}</div>
        <div>${user.date}</div>
      </div>
      <div class="comment-body">
        <div class="comment-text">
        ${user.text}
        </div>
      </div>
      <div class="comment-footer">
        <div class="likes">
          <span class="likes-counter">${user.likes}</span>
          <button data-num='${index}' class="like-button ${user.isLiked ? '-active-like' : ''}"></button>
        </div>
      </div>
    </li>`
        })
        .join('')
    const addCommentHtml = ` <ul id="list" class="comments">
    </ul>
    <div class="add-form"  id="add-form">
      <input type="text" id="input" class="add-form-name" placeholder="Введите ваше имя" />
      <textarea id="comment" type="textarea" class="add-form-text" placeholder="Введите ваш коментарий"
        rows="4"></textarea>
      <div class="add-form-row">
        <button id='button' class="add-form-button">Написать</button>
      </div>
    </div>`
    const linkLogin = `<p>Для отправки комментария <span class="link-login">войдите</span>`

    const baseHtml = `<ul class='comments'>${usersHtml}</ul>
    ${token ? addCommentHtml : linkLogin}`
    container.innerHTML = baseHtml
    if (token) {
        return addBtn
    } else {
        document.querySelector('.link-login').addEventListener('click', () => {
            renderLogin()
        })
    }
    // list.innerHTML = usersHtml
}
