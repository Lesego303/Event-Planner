import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [events, setEvents] = useState([])

  const registerUser = (user) => {
    setUsers([...users, user])
  }

  const loginUser = (username, password) => {
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    )

    if (foundUser) {
      setCurrentUser(foundUser)
      return true
    }

    return false
  }

  const logoutUser = () => {
    setCurrentUser(null)
  }

  const addEvent = (event) => {
    setEvents([...events, { ...event, id: Date.now() }])
  }

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id))
  }

  const updateEvent = (updatedEvent) => {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    )
  }

  return (
    <AppContext.Provider
      value={{
        users,
        currentUser,
        events,
        registerUser,
        loginUser,
        logoutUser,
        addEvent,
        deleteEvent,
        updateEvent,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}