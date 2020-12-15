import { useState } from 'react'
import Data, {data} from './Data'
import './App.css'

function App () {
  const [userInformations] = useState([...Data])
  const [userAttendanceInfos] = useState([...data])
  const [userAttendances, setUserAttendances] = useState([])

  const showUserAttendances = (evt => {
    setUserAttendances(userAttendanceInfos.filter(userAttendanceInfo => userAttendanceInfo.userId === Number(evt.target.value)))
  })

  return (
    <>
    <select className="form-control w-75 mx-auto bg-dark text-light border-0 shadow-none mb-4" name="username"
    id="usernameSelect" defaultValue='DEFAULT' onChange={showUserAttendances.bind(null)} required>
    <option value="DEFAULT" disabled>Select student by full name</option>
      {
        userInformations.map(userInformation => {
          return (
            <option value={userInformation.id} key={userInformation.id}>
            {userInformation.name} {userInformation.surname}
            </option>
          )
        }
        )
      }
    </select>

    <table className="table w-75 mx-auto table-dark rounded overflow-hidden">
      <thead>
        <tr>
        <th scope="col">Date</th>
        <th scope="col">Visit</th>
        <th scope="col">Score</th>
        </tr>
      </thead>
      <tbody id="userInfoTableBody">
        {
          userAttendances.map(userAttendance => {

            return (
              <tr key={userAttendance.id}>
                <td>{userAttendance.date}</td>
                <td>{userAttendance.visit ? 'OK' : '-'}</td>
                <td>{userAttendance.score}</td>
              </tr>
            )
          }
          )
        }
      </tbody>
    </table>
  </>
  )
}

export default App
