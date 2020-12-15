import { useState } from 'react'
import Data, {data} from './Data'
import './App.css'

function App () {
  const [userInformations] = useState([...Data])
  const [userAttendanceInfos] = useState([...data])

  return (
    <select class="form-control w-75 mx-auto bg-dark text-light border-0 shadow-none mb-4" name="username"
        id="usernameSelect" defaultValue='DEFAULT' required>
        <option value="DEFAULT" disabled>Select student by full name</option>
        return (
          {
            userInformations.map(userInformation =>
              <option value={userInformation.id} key={userInformation.id}>
                {userInformation.name} {userInformation.surname}
              </option>
            )
          }
        )
    </select>
  )

}

export default App
