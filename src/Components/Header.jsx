import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

function Header() {
  const { currentUser, logoutUser } = useAppContext()

  return (
    <header className="header">
      <h2>Event Planner</h2>

      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/add-event">Add Event</Link>
        <Link to="/help">Help</Link>
        {!currentUser && <Link to="/">Register</Link>}
        {!currentUser && <Link to="/login">Login</Link>}
        {currentUser && <button onClick={logoutUser}>Logout</button>}
      </nav>
    </header>
  )
}

export default Header