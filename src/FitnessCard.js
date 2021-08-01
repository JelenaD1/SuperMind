import React from "react"
import { RiCloseCircleLine } from "react-icons/ri"

const FitnessCard = ({ list, onClickDeleteExercise }) => {
  const handleDelete = () => {
    fetch(`${process.env.REACT_APP_API_URL}/workouts/${list.id}`, {
      method: "DELETE"
    })
    onClickDeleteExercise(list.id)
  }

  return (
        <span className="item fitness-card" >
          <p>Date: {list.date} </p>
          <p>Type: {list.type} </p>
          <p>About: {list.about} </p>
          <RiCloseCircleLine className='delete-icon' onClick={handleDelete}/>
        </span>

  )
}

export default FitnessCard
