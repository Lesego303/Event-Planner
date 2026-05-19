import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Header from './components/Header'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import AddEvent from './Pages/AddEvent'
import Help from './Pages/Help'

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-event" element={<AddEvent />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App