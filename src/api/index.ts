import axios from "axios"

const api = axios.create({
  baseURL: 'http://localhost:8082/'
})

const mailApi = axios.create({
  baseURL: 'http://localhost:5050/'
})

export { api, mailApi }
