import { renderUsers, updateUsers } from './render.js'
// import { like, comment } from './buttons.js'
import { renderLogin } from './renderLogin.js'
import { addBtn } from './addBtn.js'


const addButton = document.getElementById('button')
const inputName = document.getElementById('input')
const list = document.getElementById('list')
const inputComment = document.getElementById('comment')
export const addForm = document.getElementById('add-form')
    let curDate = new Date()
    let options = { hour: '2-digit', minute: '2-digit' }
export let token = ''
export const setToken = (newToken) => {
    token = newToken
}
export const setName = (newName) => {
    name = newName
}
renderLogin()

renderUsers()
// like()
// comment()

fetch('https://wedev-api.sky.pro/api/v2/dmitriy-dudko/comments')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        updateUsers(data.comments)
        renderUsers()
    })

list.disabled = true
list.textContent = 'Идет загрузка...'

addBtn()
