import React from "react"
import FitnessCard from "./FitnessCard"

const FitnessList = ({ fitnessList, onClickDeleteExercise }) => {
  return (
        <ul className="fitness-container">

            {fitnessList.map(list => (
                <FitnessCard list={list} key={list.id} onClickDeleteExercise={onClickDeleteExercise}/>
            ))}
        </ul>
  )
}

export default FitnessList
