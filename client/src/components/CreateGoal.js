import axios from 'axios';
import {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CreateGoal = () => {
    const [goal, setGoal] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

const submitHandler = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8000/api/goal/${id}`, {goal})
    .then((res) => {
        console.log(res.data)
        setGoal('');
        navigate(`/details/${id}`)
    })
    .catch((err) => {
      console.log(err)
    })
}

  return (
    <div>
        <h4> Add Create </h4>
        <form onSubmit={submitHandler} >
        <input
              type="text"
              value={goal}
              name="goal"
              onChange={(e) => setGoal(e.target.value)}
              className="m-1"
              placeholder='Add goal...'
            />
            <input className="btn btn-secondary" type="submit" value={"Submit"} />
        </form>
    </div>
  )
}

export default CreateGoal;