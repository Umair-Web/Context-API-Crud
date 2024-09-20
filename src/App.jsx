import React from 'react'
import { UserProvider } from './provider/UserProvider'
import Users from './Users'

const App = () => {
  return (
    <UserProvider>
      <Users/>
    </UserProvider>
  )
}

export default App