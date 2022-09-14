import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": 'dc9a46e1-3abb-429f-8842-52a165e17468'
    }
})

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getAuthMe() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getFollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    getUnfollow(userId) {
        return instance.post(`follow/${userId}`, {}).then(response => response.data)
    }
}
