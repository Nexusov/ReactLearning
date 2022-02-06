import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "395cfa01-bf70-4e82-bad5-24895eba6c7f"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize)  {
        return (
            instance
                .get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data
                })
        );
    },

    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
}


