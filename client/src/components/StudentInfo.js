import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";

const StudentInfo = () => {
  const [student, setStudent] = useState({});
  const {id} = useParams();

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
      <h4> {student.firstName} {student.lastName} Data </h4>
      <div className="row">
        <div className="col-4">
        <h6>Student Information</h6>
          <p>Student Name: {student.firstName} {student.lastName} </p>
          <p>IEP Date: {student.date} </p>
          <p>Teacher: {student.teacher} </p>
          <p>Grade: {student.grade} </p>
          {/* <Link to={"/student/edit/" + student._id}>Edit</Link> */}
        </div>
        <div className="col-8">
          <h6>Goals</h6>
        </div>
      </div>
    </div>
  )
}

export default StudentInfo