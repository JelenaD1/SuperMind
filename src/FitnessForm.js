import React, { useState } from "react"

const FitnessForm = ({ onAddExercise }) => {
  const [formData, setFormData] = useState({
    date: "",
    type: "",
    about: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.date && formData.about) {
      onAddExercise(formData)
    } else {
      alert("Please enter workout details!")
    }
    setFormData({
      date: "",
      type: "",
      about: ""

    })
  }

  return (

    <form onSubmit={handleSubmit} className="todo-form">
            <h2 className="darkblue">Did You Workout Today?!</h2>
            <form id="fitness-form">
            <label className="darkblue">Date*:</label>
            <input
            className="i"
            type="text"
            name="date"
            placeholder="m/d/y"
            value={formData.date}
            onChange={handleChange} />
            <span className="span">
            <h3 className="darkblue">Choose your exercise</h3>
            <select value={formData.type} onChange={handleChange} name="type" className="select">
                <option value="cardio">Cardio</option>
                <option value="lifting">Lifting</option>
            </select>
            </span>
            <br/>
            <span className="span">
            <input className="search-bar"
            type="text"
            name="about"
            placeholder="How was your workout?"
            value={formData.about}
            onChange={handleChange} />
            <br/>
            <button className="search-button">Add exercise</button>
            </span>
            </form>

            </form>
  )
}

export default FitnessForm
