import {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

const UpdateStudent = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [teacher, setTeacher] = useState("");
  const [date, setDate] = useState("");
  const [grade, setGrade] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/api/student/${id}`)
    .then((res) => {
      console.log(res.data);
      setFirstName(res.data.firstName);
      setLastName(res.data.lastName);
      setTeacher(res.data.teacher);
      setDate(res.data.date);
      setGrade(res.data.grade);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  const updateHandler = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/student/${id}`, {firstName, lastName, teacher, date, grade})
    .then((res) => {
      console.log(res);
      navigate(`/details/${id}`);
    })
    .catch((err) => {
      console.log(err.response.data.error);
      setErrors(err.response.data.error);
    })
  }


  return (
    <div>
      <h4 className='subheader-font' >Update Student Name</h4>
      <form
        onSubmit={updateHandler}
        className="d-flex w-50 border border-secondary rounded"
      >
        <div className="m-3">
          <label className="d-block m-2">First Name:</label>
          {errors.firstName && <p>{errors.firstName.message}</p>}
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="m-2"
          />

          <label className="d-block m-2">Last Name:</label>
          {errors.lastName && <p>{errors.lastName.message}</p>}
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="m-2"
          />

          <label className="d-block m-2">Grade:</label>
          <select
            name="grade"
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="m-2"
          >
            <option value="Pre-K">Pre-K</option>
            <option value="K">K</option>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
            <option value="5th">5th</option>
          </select>
        </div>
        <div className="m-3">
          <label className="d-block m-2">Teacher: </label>
          <input
            type="text"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
            className="m-2"
          />

          <label className="d-block m-2">IEP Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="m-2"
          />

          <input
            type="submit"
            className="d-block bg-primary text-white"
            value={"Update Student"}
          />
        </div>
      </form>
    </div>
  )
}

export default UpdateStudent