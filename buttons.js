// import { users, renderUsers } from './render.js'
// const inputName = document.getElementById('input')
// const inputComment = document.getElementById('comment')
// export function like() {
//     const likeButtons = document.querySelectorAll('.like-button')
//     for (const likeButton of likeButtons) {
//         likeButton.addEventListener('click', (e) => {
//             const num = likeButton.dataset.num
//             e.stopPropagation()
//             if (users[num].isLiked == true) {
//                 users[num].likes -= 1
//                 users[num].isLiked = !users[num].isLiked
//             } else {
//                 users[num].likes += 1
//                 users[num].isLiked = !users[num].isLiked
//             }

//             renderUsers()
//         })
//     }
// }
// export function comment() {
//     const backComments = document.querySelectorAll('li')
//     for (const backComment of backComments) {
//         backComment.addEventListener('click', (e) => {
//             const backUser = backComment.dataset.index
//             e.stopPropagation()

//             inputComment.value =
//                 users[backUser].author.name +
//                 ' ' +
//                 '>' +
//                 users[backUser].text +
//                 '<'
//         })
//     }
//     inputName.value = ''
//     inputComment.value = ''
// }
