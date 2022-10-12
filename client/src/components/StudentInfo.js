import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import GoalTabs from "./GoalTabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import ViewData from "./ViewData";

const StudentInfo = () => {
  const [student, setStudent] = useState({});
  const {id} = useParams();
  const navigate = useNavigate();
  const [goals, setGoals] = useState([]);
  const [goalDataId, setGoalDataId] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/student/${id}`)
    .then((res) => {
      setStudent(res.data);
      setGoals(res.data.goals);
  })
    .catch((err) =>{
      console.log(err);
    });
  }, [])

  let goalList = goals.filter(a => a.isActive !== false).map(a => a.goal);
  let goalIds = goals.map(a => a._id);

  const convertDate = (date) => {
    let newDate = new Date(date);
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate() +1 ;
    let year = newDate.getFullYear();

    if(parseInt(month) < 10){
      month = '0' + month
    }

    if(parseInt(day) < 10){
      day = '0' + day
    }

    return(`${month}/${day}/${year}`)
  }

  const goalData = (id) => {
    console.log(id)
    setGoalDataId(id)
  }


  return (
    <div>
      <h4 className="subheader-font" > {student.firstName} {student.lastName}'s Data </h4>
      <div className="row">
        <div className="col-2 m-3 background rounded">
        <h6 className="boldFont">Student Information</h6>
          <p>Student Name: {student.firstName} {student.lastName} </p>
          <p>IEP Date: {convertDate(student.date)} </p>
          <p>Teacher: {student.teacher} </p>
          <p>Grade: {student.grade} </p>
          <div className="d-flex justify-content-between align-items-end pb-2">
          <Link to={`/edit/${student._id}`} state={student}><FontAwesomeIcon icon={faUserPen}></FontAwesomeIcon></Link> 
          <DeleteButton id={student._id} handleDelete={() => navigate('/') } />
          </div>
        </div>
        <div className="col-8 m-3 background rounded">
          <h6> <GoalTabs goals={goalList} goalIds={goalIds} studentId={student._id} returnGoalId={goalData} /> </h6>
        </div>
      </div>
      <div className="m-1 p-2 background rounded" >
        <ViewData goalDataId={goalDataId} />
      </div>
    </div>
  )
}

export default StudentInfo