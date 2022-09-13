import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import GoalTabs from "./GoalTabs";

const StudentInfo = () => {
  const [student, setStudent] = useState({});
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/student/${id}`)
    .then((res) => {
      console.log(res.data);
      setStudent(res.data);
    })
    .catch((err) =>{
      console.log(err);
    });
  }, [])

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
          <Link to={`/edit/${student._id}`}>Edit</Link> 
          <DeleteButton id={student._id} handleDelete={() => navigate('/') } />
          </div>
        </div>
        <div className="col-8 m-3 background rounded">
          <h6> <GoalTabs goals={[student.goalOne, student.goalTwo, student.goalThree]}/> </h6>
        </div>
      </div>
    </div>
  )
}

export default StudentInfo