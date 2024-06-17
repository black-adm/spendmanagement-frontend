import axios from 'axios'

const server = axios.create({
  baseURL: 'https://docker-containers-keycloak.8ya11r.easypanel.host/realms/10000/protocol/openid-connect',
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
})

export { server }

