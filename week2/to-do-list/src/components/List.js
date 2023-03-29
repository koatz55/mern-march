import React, { useState } from "react"

const List = (props) => {
    const {todoList, setTodoList} = props
    const [list, setList] = useState({ task:"",taskCompleted:false})
    
    const handleTask = (e) => {
        if (e.target.type === "checkbox") {
            setList({...list, taskCompleted: !list.taskCompleted})
        }else {
        setList({...list, [e.target.name]: e.target.value});
        }
    };

    const createList = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        setTodoList([...todoList, list])
//         console.log("List created", newList);
        setList({task: "", taskCompleted: false});
    }

    return (
        <div>
        <form onSubmit={ createList }>
            <div>
                {
                    list.task.length < 1 ?
                    <p>Enter task name </p>:
                    null
                }
                <label>task: </label> 
                <input type="text" name="task" value={list.task} onChange={ handleTask } />
                {
                    list.task < 1  ?
                    <input type="submit" value="ADD" disabled /> : 
                    <input type="submit" value="ADD" />
                }
                <div>
                    <input type="checkbox" name="taskCompleted" value={list.taskCompleted} onChange={ handleTask }/>
                </div>
            </div>
        </form>
    </div>
    );

};
export default List;