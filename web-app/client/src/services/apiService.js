import Api from '@/services/api'

export default {
  castBallot(backend_url, electionId, voterId, picked) {
    return Api(backend_url).post('castBallot', {
      electionId: electionId,
      voterId: voterId,
      picked: picked
    })
  },
  queryAll(backend_url) {
    return Api(backend_url).get('queryAll')
  },
  queryByObjectType(backend_url) {
    return Api(backend_url).get('queryByObjectType')
  },
  queryWithQueryString(backend_url, selected) {
    return Api(backend_url).post('queryWithQueryString', {
      selected: selected
    }) 
  },
  registerVoter(backend_url, voterId, nationId, firstName, lastName, email, number) {
    return Api(backend_url).post('registerVoter', {
      voterId: voterId,
      nationId: nationId,
      firstName: firstName,
      lastName: lastName,
      email: email,
      number: number
    }) 
  },
  validateVoter(backend_url, voterId) {
    return Api(backend_url).post('validateVoter', {
      voterId: voterId
    }) 
  },
  Checkpick(backend_url, key) {
    return Api(backend_url).post('Checkpick', {
      key: key
    }) 
  },
  getCurrentStanding(backend_url) {
    return Api(backend_url).get('getCurrentStanding')
  }
}