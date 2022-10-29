import React, {useState} from 'react'

const FormAdd = ({addData}) => {

    const [initialTodo, setInitialTodo] = useState({todo: ""});

    const changeHandler = (e) => {
        setInitialTodo({todo: e.target.value});
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if(initialTodo.todo !== ""){
            addData(initialTodo);
        setInitialTodo({todo: ""});
        }
    }

  return (
    <form className='flex' onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} className='input-add' placeholder='Ketik List...' value={initialTodo.todo}/>
        <button type='submit' className='btn btn__add'>Add</button>
    </form>
  )
}

export default FormAdd