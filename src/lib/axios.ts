import axios from 'axios'

const server = axios.create({
  baseURL: 'https://spendmanagement-identity.onrender.com',
})

const mail = axios.create({
  baseURL: 'http://localhost:5050/',
})

export { mail, server }
