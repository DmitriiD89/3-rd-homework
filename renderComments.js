import { comments } from './index.js'
import { renderLogin } from './renderLogin.js'
import { token, name } from './api.js'
import {
    initLikeListeners,
    initAddCommentListener,
    initReplyListeners,
} from './initListener.js'

export const renderComments = () => {
    const container = document.querySelector('.container')
    const commentsHtml = comments
        .map((comment, index) => {
            return `<li data-index='${index}' class="comment">
          <div class="comment-header">
            <div >${comment.name}</div>
            <div>${comment.date.toLocaleDateString()}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
            ${comment.text}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.likes}</span>
              <button data-num='${index}' class="like-button ${comment.isLiked ? '-active-like' : ''}"></button>
            </div>
          </div>
        </li>`
        })
        .join('')

    const addComentsHtml = `<div class="add-form" id="add-form">
    <input type="text" 
        class="add-form-name" 
        placeholder="Введите ваше имя" 
        readonly 
        value="${name}" 
        id="name-input"
    />
    <textarea 
        class="add-form-text" 
        placeholder="Введите ваш комментарий"
        rows="4"
        id="comment"
    ></textarea>
    <div class="add-form-row">
        <button id="button" class="add-form-button">Написать</button>
    </div>
  </div>
  `

    const linkToLoginText = `<p>чтобы отправить комментарий, <span class="link-login">войдите</span></p>`

    const baseHtml = `<ul class="comments">${commentsHtml}</ul>
    ${token ? addComentsHtml : linkToLoginText}`

    container.innerHTML = baseHtml
    if (token) {
        initLikeListeners(renderComments)
        initReplyListeners()
        initAddCommentListener(renderComments)
    } else {
        const loginLink = document.querySelector('.link-login')
        if (loginLink) {
            loginLink.addEventListener('click', () => {
                renderLogin()
            })
        }
    }
}
