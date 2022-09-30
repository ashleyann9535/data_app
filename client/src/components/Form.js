import { useState } from "react";

const Form = (props) => {
  const { handleSubmit, buttonText, oldStudent } = props;

  const [studentInfo, setStudentInfo] = useState( oldStudent || {
    firstName: "",
    lastName: "",
    teacher: "",
    date: "",
    grade: "",
  });

  const [errors, setErrors] = useState({});

  const convertDate = (dataDate) => {
    let newDate = new Date(dataDate);
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate() + 1;
    let year = newDate.getFullYear();

    if (parseInt(month) < 10) {
      month = "0" + month;
    }

    if (parseInt(day) < 10) {
      day = "0" + day;
    }

    console.log(`${year}-${month}-${day}`);

    return `${year}-${month}-${day}`;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleSubmit(studentInfo, setErrors);
  };

  const handleChange = (e) => {
    setStudentInfo({ ...studentInfo, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="w-50 rounded-bottom background borderTop pb-2"
      >
        <div className="d-flex">
          <div className="m-4">
            <label className="d-block m-1">First Name:</label>
            {errors.firstName && (
              <p className="m-0 text-danger">{errors.firstName.message}</p>
            )}
            <input
              type="text"
              value={studentInfo.firstName}
              name="firstName"
              onChange={handleChange}
              className="m-1"
            />

            <label className="d-block m-1">Last Name:</label>
            {errors.lastName && (
              <p className="m-0 text-danger">{errors.lastName.message}</p>
            )}
            <input
              type="text"
              value={studentInfo.lastName}
              name="lastName"
              onChange={handleChange}
              className="m-1"
            />

            <label className="d-block m-1">Grade:</label>
            {errors.grade && (
              <p className="m-0 text-danger">{errors.grade.message}</p>
            )}
            <select
              name="grade"
              type="text"
              value={studentInfo.grade}
              onChange={handleChange}
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
              value={studentInfo.teacher}
              name="teacher"
              onChange={handleChange}
              className="m-1"
            />

            <label className="d-block m-1">IEP Date:</label>
            {errors.date && (
              <p className="m-0 text-danger">{errors.date.message}</p>
            )}
            <input
              type="date"
              value={convertDate(studentInfo.date)}
              name="date"
              onChange={handleChange}
              className="m-1"
            />
          </div>
        </div>

        <input
          type="submit"
          className="d-block buttonBackground text-white m-3 rounded border-0"
          value={buttonText}
        />
      </form>
    </div>
  );
};

export default Form;
