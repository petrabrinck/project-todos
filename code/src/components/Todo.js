import React from 'react'
import { useDispatch } from 'react-redux'
import { todoTasks } from 'reducers/todoTasks'

// created our own todo component, a single one
export const Todo = (props) => {
    const dispatch = useDispatch()

    const handleCompleteTodo = () => {
        dispatch(todoTasks.actions.toggleCompleteTodo(props.todo.id))
    }
    const handleRemoveButtonClick = () => {
        dispatch(todoTasks.actions.removeItem(props.todo.id))
    }

    return (
        <li>
            {props.todo.name}

            <label>
                <input
                    type="checkbox"
                    checked={props.todo.completeTodo}
                    onChange={handleCompleteTodo} />
            </label>
            <button type="button" onClick={handleRemoveButtonClick}>
                Remove
                        <span
                    className="emoji"
                    role="img"
                    aria-label="butterfly">
                    🦋
                        </span>
            </button>

        </li>
    )
}