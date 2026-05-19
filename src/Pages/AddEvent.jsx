import { useState } from 'react'
import { useAppContext } from '../context/AppContext'

function AddEvent() {
  const { addEvent } = useAppContext()

  const [eventData, setEventData] = useState({
    name: '',
    date: '',
    time: '',
    description: '',
    location: '',
  })

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    addEvent(eventData)

    alert('Event added!')

    setEventData({
      name: '',
      date: '',
      time: '',
      description: '',
      location: '',
    })
  }

  return (
    <div className="container">
      <h1>Add Event</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          value={eventData.name}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={eventData.date}
          onChange={handleChange}
        />

        <input
          type="time"
          name="time"
          value={eventData.time}
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={eventData.location}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={eventData.description}
          onChange={handleChange}
        />

        <button type="submit">Add Event</button>
      </form>
    </div>
  )
}
export default AddEvent