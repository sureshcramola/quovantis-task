const apiUrl = `https://reqres.in/api`;
 
export function loginUser(username, password) {
    console.log(username, password);
    return fetch(`${apiUrl}/login`, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            "email": username,
            "password": password
        })

    }).then(response => response.json())
        .catch((error) => { throw error })
}

export function getUsersList(pageNo) {
    return fetch(`${apiUrl}/users?page=${pageNo}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        }
    }).then(response => response.json())
        .catch((error) => { throw error })
}

export function getUserDetail(userId) {
    return fetch(`${apiUrl}/users/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        }
    }).then(response => response.json())
        .catch((error) => { throw error })
}