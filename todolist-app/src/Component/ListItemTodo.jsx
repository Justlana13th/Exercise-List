import React from 'react'
import { useState } from 'react';

const ListItemTodo = ({todo, id, deleteData, updateData}) => {

    const [isEdit, setIsEdit] = useState(false);
    const [initialTodo, setInitialTodo] = useState({todo: todo});

    const changeHandler = (e) => {
        setInitialTodo({todo: e.target.value});
    }

    const deleteHandler = () => {
        deleteData(id);
    }

    const switchEditButton = ()=> {
        setIsEdit(!isEdit);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setIsEdit(!isEdit);
        updateData(id, initialTodo);
    }

  return (
    <li className='todo-item'>
    <form className='form-edit' onSubmit={submitHandler}>
        {!isEdit ? <input disabled type="text" className='input-no-border' value={initialTodo.todo}/> : <input type="text" className='input-with-border' value={initialTodo.todo} onChange={changeHandler}/>}
    </form>

    {!isEdit ? <><button className='btn btn__action btn__action-edit' onClick={switchEditButton}>Edit</button>
    <button className='btn btn__action btn__action-delete' onClick={deleteHandler}>Hapus</button></> : <><button className='btn btn__action' onClick={submitHandler}>Simpan</button>
    <button className='btn btn__action btn__action-batal' onClick={switchEditButton}>Batal</button></>}
</li>
  )
}

export default ListItemTodo