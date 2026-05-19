import { useAppContext } from '../context/AppContext'

function Dashboard() {
  const { currentUser, events, deleteEvent } = useAppContext()

  return (
    <div className="container">
      <h1>Dashboard</h1>

      {currentUser && <h2>Welcome {currentUser.name}</h2>}

      {events.length === 0 ? (
        <p>No events added yet.</p>
      ) : (
        events.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.name}</h3>
            <p>{event.date}</p>
            <p>{event.time}</p>
            <p>{event.location}</p>
            <p>{event.description}</p>

            <button onClick={() => deleteEvent(event.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  )
}
export default Dashboard