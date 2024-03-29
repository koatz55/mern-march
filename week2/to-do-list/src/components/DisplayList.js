import React, {useState} from 'react';
const DisplayList = (props) => {

    const {todoList, setTodoList} = props

    const markTask = (list) => {
        const updatedList = todoList.map((listItem) => {
            if (listItem === list) {
                listItem.taskCompleted = !list.taskCompleted 
            }
            return listItem
        })
        setTodoList(updatedList)
    }

    const deleteHandler = (list) => {
        const updatedList = todoList.filter((listItem) => listItem !== list)
        setTodoList(updatedList)
    }

    return (
        <div className='List'>
            {
                todoList.map((list, idx) => (
                <div key={idx} className='Item' >
                    {
                        list.taskCompleted ?
                        <h2 className = "marked-off">{list.task}</h2>:
                        <h2>{list.task}</h2>
                    }
                    <input className='checkbox' type="checkbox" name="taskCompleted" checked={list.taskCompleted} onClick={ () => markTask(list) }/>
                    <button className='Delete-button' onClick={() => deleteHandler(list)}>Delete</button>
                </div>
                ))
            }
        </div>
    )
}

export default DisplayList;