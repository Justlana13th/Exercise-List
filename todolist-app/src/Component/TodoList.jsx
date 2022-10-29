import React, {useEffect, useState} from 'react'
import FormAdd from './FormAdd';
import axios from 'axios'
import ListItemTodo from './ListItemTodo';

const TodoList = () => {

    const [todos, setTodos] = useState([]);

    const url = "http://localhost:5000/data";

    // GET ALL TODOS
    useEffect(() => {
        axios.get(url).then((res) => {
            try {
                setTodos(res.data)
            } catch (err) {
                console.log(err);
            }
        });
    });

    // Add Todos
    const addTodo = (todo) => {
        axios.post(url, todo);
    }

    // Delete Todo
    const deleteTodo = (id) => {
        axios.delete(`${url}/${id}`);
    }

    // Update Todo
    const updateTodo = (id, todo) => {
        axios.put(`${url}/${id}`, todo);
    }

  return (
    <>
        <FormAdd addData={addTodo}/>
        <ul>
            {todos.map(todo => (
                 <ListItemTodo updateData={updateTodo} deleteData={deleteTodo} todo={todo.todo} key={todo.id} id={todo.id}/>
            )).reverse()}
                
        </ul>
    </>
        
  )
}

export default TodoList