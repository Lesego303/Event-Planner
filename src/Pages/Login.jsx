import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

function Login() {
  const navigate = useNavigate()
  const { loginUser } = useAppContext()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    const success = loginUser(username, password)

    if (success) {
      navigate('/dashboard')
    } else {
      alert('Invalid login details')
    }
  }

  return (
    <div className="container">
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
export default Login