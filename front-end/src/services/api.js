import axios from 'axios'

const api = axios.create({
    baseURL: 'https://consultorio-back-end.herokuapp.com/'
})

export default api