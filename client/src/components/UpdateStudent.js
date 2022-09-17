import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Form from "./Form";

const UpdateStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {state} = useLocation();
  const [oldStudent, setOldStudent] = useState(null)

  useEffect(() => {
    if(!state){
      axios
      .get(`http://localhost:8000/api/student/${id}`)
      .then((res) => {
        console.log(res.data);
        setOldStudent(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
    } else{
      setOldStudent(state)
    }
    
  }, [id]);

  const updateHandler = (studentInfo, setErrors) => {
    axios
      .put(`http://localhost:8000/api/student/${id}`, studentInfo)
      .then((res) => {
        console.log(res);
        navigate(`/details/${id}`);
      })
      .catch((err) => {
        console.log(err.response.data.error);
        setErrors(err.response.data.error);
      });
  };

  return (
    <div>
      <Link to={`/details/${id}`} className="header-font"> <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></Link>
      <h4 className="subheader-font mx-1 py-3 px-2 d-inline-block">Update Student Name</h4>
      {oldStudent && <Form handleSubmit={updateHandler} buttonText={'Update Student'} oldStudent={oldStudent} />}
    </div>
  );
};

export default UpdateStudent;
