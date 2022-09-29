import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import GoalForm from './GoalForm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
      <Link to={`/details/${id}`} className="header-font"> <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></Link>
        <GoalForm handleSubmit={submitHandler} buttonText={'Add Goal'}  />
    </div>
  )
}

export default CreateGoal;