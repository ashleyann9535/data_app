import axios from 'axios';
import React from 'react';

const DeleteButton = (props) => {
    const {id, handleDelete} = props;

    const deleteStudent = () => {
        axios.delete(`http://localhost:8000/api/student/${id}`)
        .then((res) => {
            handleDelete();
        })
    }

  return (
    <div>
        <p onClick={deleteStudent}>Delete</p>
    </div>
  )
}

export default DeleteButton