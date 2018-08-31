import http from '../../../service/http.js'

const api = {
  fetchProfile: user => http.get(`/users/${user}`),
  fetchRepos: user => http.get(`/users/${user}/repos`)
}

export default api
