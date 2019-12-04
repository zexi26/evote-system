import axios from 'axios'

export default(backend_url) => {
  return axios.create({
    baseURL: backend_url
  })
}