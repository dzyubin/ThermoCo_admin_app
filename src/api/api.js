import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/'
})

export function me () {
  return instance({ url: 'auth/me' })
}

/**
 * Sending login request. On successful login access_token returned inside response payload which is used to
 * authorizing subsequent server requests, e.g. 'http://127.0.0.1:8000/auth/me'
 * @param {object} userCredentials Username and password
 * @returns {Promise}
 */
export function login (userCredentials) {
  return instance.post('auth/login', userCredentials)
}

export function sensors () {
  return instance({ url: 'api/v1/sensors/' })
};

export function createSensor () {
  console.log(getRandomArbitrary(1000, 100000))
  return instance.post('/api/v1/sensors/', {
    id: getRandomArbitrary(1000, 100000),
    description: `Sensor (${new Date()})`,
    samplingPeriod: 5,
    isActive: false
  })
}

function getRandomArbitrary (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

export function deleteSensor (id) {
  return instance.delete(`/api/v1/sensors/${id}`)
}

export default instance
