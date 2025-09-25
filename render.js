export let users = []
export const updateUsers = (newUsers) => {
    users = newUsers
}
export const renderUsers = () => {
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
    list.innerHTML = usersHtml
}
