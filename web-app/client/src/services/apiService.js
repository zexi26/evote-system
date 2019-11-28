import Api from '@/services/api'

export default {
  castBallot(electionId, voterId, picked) {
    return Api().post('castBallot', {       
      electionId: electionId,
      voterId: voterId,
      picked: picked
    })
  },
  queryAll() {
    return Api().get('queryAll')
  },
  queryByObjectType() {
    return Api().get('queryByObjectType')
  },
  queryWithQueryString(selected) {
    return Api().post('queryWithQueryString', {
      selected: selected
    }) 
  },
  registerVoter(voterId, nationId, firstName, lastName, email, number) {
    return Api().post('registerVoter', {
      voterId: voterId,
      nationId: nationId,
      firstName: firstName,
      lastName: lastName,
      email: email,
      number: number
    }) 
  },
  validateVoter(voterId) {
    return Api().post('validateVoter', {
      voterId: voterId
    }) 
  },
  Checkpick(key) {
    return Api().post('Checkpick', {
      key: key
    }) 
  },
  getCurrentStanding() {
    return Api().get('getCurrentStanding')
  }
}