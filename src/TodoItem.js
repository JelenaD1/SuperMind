import React, {useState} from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';




const TodoItem = ({todo, onDeleteTodo}) => {
  
    const { description, id, completed } = todo

    const [checked, setChecked] = useState(false)

    const handleOnChange = () => {
        setChecked(!checked)
      }

    
    
    function handleDelete() {
        fetch(`http://localhost:3000/myTodos/${id}`, {
            method: "DELETE"
        })
        onDeleteTodo(id)
    }
    
    return (
        <li className="item">
            <strong className="description">{description}</strong>
            <label>
                Completed?
                <input
                    type="checkbox"
                    onChange={handleOnChange}
                    checked={completed}
                />
            </label>
            <RiCloseCircleLine className='delete-icon' onClick={handleDelete}/>
        </li>
    )
}



export default TodoItem