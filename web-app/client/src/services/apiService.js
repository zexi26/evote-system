import Api from '@/services/api'

export default {
  castBallot(electionId, voterId, picked) {
    return Api("http://localhost:8081").post('castBallot', {
      electionId: electionId,
      voterId: voterId,
      picked: picked
    })
  },
  queryAll() {
    return Api("http://localhost:8081").get('queryAll')
  },
  queryByObjectType() {
    return Api("http://localhost:8081").get('queryByObjectType')
  },
  queryWithQueryString(selected) {
    return Api("http://localhost:8081").post('queryWithQueryString', {
      selected: selected
    }) 
  },
  registerVoter(voterId, nationId, firstName, lastName, email, number) {
    return Api("http://localhost:8081").post('registerVoter', {
      voterId: voterId,
      nationId: nationId,
      firstName: firstName,
      lastName: lastName,
      email: email,
      number: number
    }) 
  },
  validateVoter(voterId) {
    return Api("http://localhost:8081").post('validateVoter', {
      voterId: voterId
    }) 
  },
  Checkpick(key) {
    return Api("http://localhost:8081").post('Checkpick', {
      key: key
    }) 
  },
  getCurrentStanding(backend_url) {
    return Api(backend_url).get('getCurrentStanding')
  }
}