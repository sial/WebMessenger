import axios from 'axios'

var instance = axios.create({
  baseURL: 'http://localhost:8082'
})

export default instance
