import axios from 'axios'
const dataApi = axios.create({
  baseURL: 'http://34.211.19.44:8082/api/',
  timeout: 8000,
  headers: {
    'Authorization': 'Basic cm15ZXJzQGthcnN5bmMuY29tOmthcnN5bmMx',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getAll (url) {
    return dataApi.get(url).then(response => response.data)
  },

  getById ({ url, id }) {
    return dataApi.get(`${url}/${id}`).then(response => response.data)
  }
}
