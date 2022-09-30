import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import GoalForm from './GoalForm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrash } from "@fortawesome/free-solid-svg-icons";

const UpdateGoal = () => {
    const {id, studentId, removeFromList} = useParams();
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

    const deleteHandler = () => {
        axios.put(`http://localhost:8000/api/goal/${id}`, {isActive: false})
        .then(res => {
            console.log(res.data)
            navigate(`/details/${studentId}`);
        })
        .catch(err => console.log(err))
    }

  return (
    <div>
        <Link to={`/details/${studentId}`} className="header-font"> <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></Link>
        {oldGoal && <GoalForm handleSubmit={updateHandler} buttonText={'Edit Goal'} oldGoal={oldGoal} />}
        <FontAwesomeIcon icon={faTrash} onClick={deleteHandler}></FontAwesomeIcon>
    </div>
  )
}

export default UpdateGoal