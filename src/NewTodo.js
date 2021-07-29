import React, {useState} from "react"


const NewTodo = ({todos, onAddTodo}) => {
   

    const [formData, setFormData] = useState({
        description: ""
    })

      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        })
      }

      const handleSubmit = (event) => {
          event.preventDefault()
          if(formData.description) {
          onAddTodo(formData)
          } else {
              alert("Please enter description")
          }

          setFormData({
            description: ""

          })

      }
  
  
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <h2 className="darkblue">What's The Plan For Today?</h2>
            <label className="darkblue"htmlFor="description">Description:</label>
            <input className="search-bar" name="description"
                type="text"
                id="description"
                value={formData.description}
                onChange={handleChange}
            />
            <button className="search-button" type="submit">Add todo</button>
        </form>
    )
}



    


export default NewTodo