import React from 'react'
import AddUser from './AddUser'
import DisplayUser from './DisplayUser'
import { useState } from 'react'

function LiftingState() {
    const [user, setUser] = useState('')
  return (
    <div>
        <AddUser setUser={setUser} />
        <DisplayUser user={user} />
    </div>
  )
}

export default LiftingState