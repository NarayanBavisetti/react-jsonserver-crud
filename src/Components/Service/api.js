import axios from 'axios'

const url = "http://127.0.0.1:5000/users"

export const getUsers = async (id) => {
    id = id || "";
    return await axios.get(`${url}/${id}`)
}
export const addUsers = async (user) => {
    return await axios.post(url,user)
}

export const updateUser = async (id,user) => {
    return await axios.put(`${url}/${id}`,user)
}

export const deleteUserData = async (id) => {
    return await axios.delete(`${url}/${id}`)
}