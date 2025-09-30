export const login = (login, password) => {
    return fetch('https://wedev-api.sky.pro/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ login: login, password: password }),
    })
}

export const registration = (name, login, password) => {
    return fetch('https://wedev-api.sky.pro/api/user', {
        method: 'POST',
        body: JSON.stringify({ name: name, login: login, password: password }),
    })
}
