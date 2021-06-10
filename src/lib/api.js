import axios from 'axios'

 // will be a env variables
const API_URL = 'https://my.api.mockaroo.com/'
const API_KEY = '66c20ac0'


export const getUsers = () => {
    return axios.get(`${API_URL}users.json?key=${API_KEY}`)
}