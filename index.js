import { fetchComments } from './api.js'
import { renderComments } from './renderComments.js'

export let comments = []
export const updateComments = (newComments) => {
    comments = newComments
}

export const fetchAndRenderComments = (isFirstLoading) => {
    if (isFirstLoading) {
        document.querySelector('.container').innerHTML = 'Идет загрузка...'
    }

    fetchComments().then((data) => {
        updateComments(data)
        renderComments()
    })
}

fetchAndRenderComments(true)
