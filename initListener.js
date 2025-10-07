import { updateComments, comments } from './index.js'
import { postComment } from './api.js'
import { renderComments } from './renderComments.js'

export const initReplyListeners = () => {
    const text = document.getElementById('text-input')
    const commentsElements = document.querySelectorAll('.comment')

    for (const commentElement of commentsElements) {
        commentElement.addEventListener('click', () => {
            const currentComment = comments[commentElement.dataset.index]
            text.value = `${currentComment.name}: ${currentComment.text}`
        })
    }
}
export const initLikeListeners = () => {
    const likeButtons = document.querySelectorAll('.like-button')
    for (const likeButton of likeButtons) {
        likeButton.addEventListener('click', (e) => {
            const num = likeButton.dataset.num
            e.stopPropagation()
            if (comments[num].isLiked == true) {
                comments[num].likes -= 1
                comments[num].isLiked = !comments[num].isLiked
            } else {
                comments[num].likes += 1
                comments[num].isLiked = !comments[num].isLiked
            }

            renderComments()
        })
    }
}
export const initAddCommentListener = (renderComments) => {
    const name = document.getElementById('name-input')
    const text = document.getElementById('text-input')
    const addButton = document.querySelector('.add-form-button')

    addButton.addEventListener('click', () => {
        if (!name.value || !text.value) {
            console.error('Заполните форму')
            return
        }
        document.querySelector('.form-loading').style.display = 'block'
        document.querySelector('.add-form').style.display = 'none'

        const sanitizeHTML = (value) => {
            return value.replaceAll('<', '&lt;').replaceAll('>', '&gt;')
        }
        postComment(sanitizeHTML(text.value), sanitizeHTML(name.value))
            .then((data) => {
                document.querySelector('.form-loading').style.display = 'none'
                document.querySelector('.add-form').style.display = 'flex'
                updateComments(data)
                renderComments()
                name.value = ''
                text.value = ''
            })
            .catch((error) => {
                document.querySelector('.form-loading').style.display = 'none'
                document.querySelector('.add-form').style.display = 'flex'

                if (error.message === 'Ошибка сервера') {
                    alert('Ошибка сервера')
                }
                if (error.message === 'Неверный запрос') {
                    alert('Имя и комментарий должны быть не короче 3х символов')
                }
            })
    })
}
