import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import DeleteButton from "./DeleteButton";

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


  return (
    <div>
      <h4 className="subheader-font" > {student.firstName} {student.lastName}'s Data </h4>
      <div className="row">
        <div className="col-2 m-3 bg-light rounded">
        <h6>Student Information</h6>
          <p>Student Name: {student.firstName} {student.lastName} </p>
          <p>IEP Date: {student.date} </p>
          <p>Teacher: {student.teacher} </p>
          <p>Grade: {student.grade} </p>
          <div className="d-flex justify-content-between align-items-end pb-2">
          <Link to={`/edit/${student._id}`}>Edit</Link> 
          <DeleteButton id={student._id} handleDelete={() => navigate('/') } />
          </div>
        </div>
        <div className="col-8 m-3 bg-light rounded">
          <h6>Goals</h6>
        </div>
      </div>
    </div>
  )
}

export default StudentInfo