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
  const [goalOne, setGoalOne] = useState("");
  const [goalTwo, setGoalTwo] = useState("");
  const [goalThree, setGoalThree] = useState("");
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
      setGoalOne(res.data.goalOne);
      setGoalTwo(res.data.goalTwo);
      setGoalThree(res.data.goalThree);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  const updateHandler = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/student/${id}`, {firstName, lastName, teacher, date, grade, goalOne, goalTwo, goalThree})
    .then((res) => {
      console.log(res);
      navigate(`/details/${id}`);
    })
    .catch((err) => {
      console.log(err.response.data.error);
      setErrors(err.response.data.error);
    })
  }

  const convertDate = (date) => {
    let newDate = new Date(date);
    let month = newDate.getMonth();
    let day = newDate.getDate();
    let year = newDate.getFullYear();

    return(`${year}-${month}-${day}`)
  }


  return (
    <div>
      <h4 className='subheader-font' >Update Student Name</h4>
      <form
        onSubmit={updateHandler}
        className="w-50 border border-secondary rounded"
      >
        <div className="d-flex">
          <div className="m-4">
            <label className="d-block m-1">First Name:</label>
            {errors.firstName && (
              <p className="m-0 text-danger">{errors.firstName.message}</p>
            )}
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="m-1"
            />

            <label className="d-block m-1">Last Name:</label>
            {errors.lastName && (
              <p className="m-0 text-danger">{errors.lastName.message}</p>
            )}
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="m-1"
            />

            <label className="d-block m-1">Grade:</label>
            {errors.grade && (
              <p className="m-0 text-danger">{errors.grade.message}</p>
            )}
            <select
              name="grade"
              type="text"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="m-1"
            >
              <option value="">--Please choose a grade--</option>
              <option value="Pre-K">Pre-K</option>
              <option value="K">K</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
              <option value="5th">5th</option>
            </select>
          </div>
          <div className="m-4">
            <label className="d-block m-1">Teacher: </label>
            {errors.teacher && (
              <p className="m-0 text-danger">{errors.teacher.message}</p>
            )}
            <input
              type="text"
              value={teacher}
              onChange={(e) => setTeacher(e.target.value)}
              className="m-1"
            />

            <label className="d-block m-1">IEP Date:</label>
            {errors.date && (
              <p className="m-0 text-danger">{errors.date.message}</p>
            )}
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="m-1"
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="mx-4">
          <label className="d-block m-1">Goal One:</label>
          {errors.goalOne && (
            <p className="m-0 text-danger">{errors.goalOne.message}</p>
          )}
          <input
            type="text"
            value={goalOne}
            onChange={(e) => setGoalOne(e.target.value)}
            className="m-1"
            size={50}
          />
          
          <label className="d-block m-1">Goal Two:</label>
          <input
            type="text"
            value={goalTwo}
            onChange={(e) => setGoalTwo(e.target.value)}
            className="m-1"
            size={50}
          />
          
          <label className="d-block m-1">Goal Three:</label>
          <input
            type="text"
            value={goalThree}
            onChange={(e) => setGoalThree(e.target.value)}
            className="m-1"
            size={50}
          />
          </div>
        </div>

        <input
          type="submit"
          className="d-block bg-primary text-white m-3"
          value={"Update Student"}
        />
      </form>
    </div>
  )
}

export default UpdateStudent