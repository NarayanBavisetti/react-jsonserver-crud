import axios from 'axios'

const url = "http://127.0.0.1:5000/users"

export const getUsers = async () => {
    return await axios.get(url)
}
export const addUsers = async (user) => {
    return await axios.post(url,user)
}