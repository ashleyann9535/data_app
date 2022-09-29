import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Form from "./Form";

const StudentForm = () => {

  const navigate = useNavigate();

  const submitHandler = (studentInfo, setErrors) => {
    axios
      .post("http://localhost:8000/api/student/create", studentInfo)
      .then((res) => {
        console.log(res.date);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data.error);
        setErrors(err.response.data.error);
      });
  };

  return (
    <div>
      <Link to={`/`} className="header-font"> <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></Link>
      <h4 className="subheader-font mx-1 py-3 px-2 d-inline-block">Add a Student</h4>
      <Form handleSubmit={submitHandler} buttonText={'Add Student'} />
    </div>
  );
};

export default StudentForm;
