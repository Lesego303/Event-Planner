import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

function Register() {
  const navigate = useNavigate()
  const { registerUser } = useAppContext()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !formData.name ||
      !formData.email ||
      !formData.username ||
      !formData.password
    ) {
      alert('Please fill in all fields')
      return
    }

    if (!formData.email.includes('@')) {
      alert('Please enter a valid email')
      return
    }

    registerUser(formData)
    alert('Registration successful!')
    navigate('/login')
  }

  return (
    <div className="container">
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  )
}
export default Register