import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import GoalForm from './GoalForm';

const UpdateGoal = () => {
    const {id, studentId} = useParams();
    const navigate = useNavigate();
    const {state} = useLocation(); 
    const [oldGoal, setOldGoal] = useState(null);

    useEffect(() => {
            axios.get(`http://localhost:8000/api/goal/${id}`)
            .then((res) => {
                console.log(res.data);
                setOldGoal(res.data.goal);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id])

    const updateHandler = (goal) => {
        axios.put(`http://localhost:8000/api/goal/${id}`, {goal})
        .then((res) => {
            console.log(res.data);
            navigate(`/details/${studentId}`);
        })
        .catch((err) => {
            console.log(err)
        })
    }

  return (
    <div>
        {oldGoal && <GoalForm handleSubmit={updateHandler} buttonText={'Edit Goal'} oldGoal={oldGoal} />}
    </div>
  )
}

export default UpdateGoal