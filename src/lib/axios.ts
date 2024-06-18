import axios from 'axios'

const server = axios.create({
  baseURL: 'https://docker-containers-keycloak.8ya11r.easypanel.host/',
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
})

export { server }

