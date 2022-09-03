import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'
import useGlobalState from '../globalState'
import { sensors, createSensor, deleteSensor } from '../api/api'
// import Noty from 'noty'
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css' // for React, Vue and Svelte

function Dashboard () {
  const [user] = useGlobalState('user')
  const [sensorsList, setSensorsList] = useState([{ name: 'sdfds' }])
  const notyf = new Notyf()

  useEffect(() => {
    sensors()
      .then(res => {
        notyf.success('Sensors data was fetched')
        setSensorsList(res.data)
      })
      .catch(err => {
        notyf.error('Error when fetching sensors data')
        console.log(err)
      })
  }, [])

  const requestSensorCreation = () => createSensor()
    .then(res => {
      notyf.success('Sensor was created')
      setSensorsList([
        ...sensorsList,
        res.data
      ])
    })
    .catch(err => {
      console.log(err)
      notyf('Error when creating sensor')
    })

  const btnStyle = { position: 'absolute', top: '30px', left: '30px' }

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>User</h2>
      <p>Full name: {user.full_name}</p>
      <p>Email: {user.email}</p>
      <h3>Sensors</h3>
      <ul>{sensorsList.map((s, k) => {
        return <Sensor key={k} sensor={s} setSensorsList={setSensorsList} sensorsList={sensorsList} />
      })}</ul>
      <button style={btnStyle} onClick={() => requestSensorCreation()}>Add Sensor</button>
    </div>
  )
}

/* eslint-disable */
const Sensor = ({ sensor, setSensorsList, sensorsList }) => {
  const notyf = new Notyf()
  
  const requestSensorDeletion = id => deleteSensor(id)
  .then(() => {
    console.log(id);
    notyf.success('Sensor was deleted')
    setSensorsList(sensorsList.filter(s => s.id !== id))
    /* eslint-enable */
    })
    .catch(err => {
      console.log(err)
      notyf.error(err.response.statusText)
    })

  return <li>
    <p>Description: {sensor.description}</p>
    <p>Active: {sensor.isActive ? 'yes' : 'no'}</p>
    <button onClick={() => requestSensorDeletion(sensor.id)}>Delete Sensor</button>
  </li>
}

Sensor.propTypes = {
  sensor: propTypes.objectOf({
    id: propTypes.number,
    description: propTypes.string,
    isActive: propTypes.bool
  })
}

export default Dashboard
