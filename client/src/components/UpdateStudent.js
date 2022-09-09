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
          <label className="d-block m-1">First Name:</label>
          {errors.firstName && <p className='m-0 text-danger'>{errors.firstName.message}</p>}
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="m-1"
          />

          <label className="d-block m-1">Last Name:</label>
          {errors.lastName && <p className='m-0 text-danger'>{errors.lastName.message}</p>}
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="m-1"
          />

          <label className="d-block m-1">Grade:</label>
          {errors.grade && <p className='m-0 text-danger'>{errors.grade.message}</p>}
          <select
            name="grade"
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="m-1"
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
          <label className="d-block m-1">Teacher: </label>
          {errors.teacher && <p className='m-0 text-danger'>{errors.teacher.message}</p>}
          <input
            type="text"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
            className="m-1"
          />

          <label className="d-block m-1">IEP Date:</label>
          {errors.date && <p className='m-0 text-danger'>{errors.date.message}</p>}
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="m-1"
          />

          <input
            type="submit"
            className="d-block bg-primary text-white m-3"
            value={"Update Student"}
          />
        </div>
      </form>
    </div>
  )
}

export default UpdateStudent