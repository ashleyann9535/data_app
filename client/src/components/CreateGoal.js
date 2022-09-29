import axios from 'axios';
import {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import GoalForm from './GoalForm';

const CreateGoal = () => {
    const {id} = useParams();
    const navigate = useNavigate();

const submitHandler = (goal) => {
    axios.post(`http://localhost:8000/api/goal/${id}`, {goal})
    .then((res) => {
        console.log(res.data)
        navigate(`/details/${id}`)
    })
    .catch((err) => {
      console.log(err)
    })
}

  return (
    <div>
        <GoalForm handleSubmit={submitHandler} buttonText={'Add Goal'} />
    </div>
  )
}

export default CreateGoal;