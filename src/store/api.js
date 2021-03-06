import axios from 'axios'
const baseURL = 'http://54.218.5.212/api/v1'
const dataApi = axios.create({
  baseURL,
  timeout: 8000,
  headers: {
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
  },

  post ({ url, body }) {
    return dataApi.post(`${url}`, body).then(response => response.data)
  }
}
