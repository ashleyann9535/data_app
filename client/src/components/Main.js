import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/student")
      .then((res) => {
        console.log(res.data);
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const deleteStudent = (id) => {
  //   const newList = list.filter((student)=> {
  //     return student._id !== id;
  //   });
  //   setList(newList)
  // }

  return (
    <div>
      <h1 className="header-font">Welcome Teacher</h1>
      <h4 className= 'd-inline-block subheader-font'>
        List of Students
      </h4>
      <Link to={"/addstudent"} className='mx-2'>
          <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon>
        </Link>{" "}
      <div className="container-fluid bg-light main-dem w-75 mx-0">
        <div className="row">
          {list
            .sort((a, b) => {
              if (a.firstName < b.firstName) {
                return -1;
              }
              if (a.firstName > b.firstName) {
                return 1;
              }
              return 0;
            })
            .filter((student) =>{
              return student.isActive !== false
            })
            .map((student, index) => {
              return (
                <div className="col-3 my-3">
                  <p key={index} >
                    {" "}
                    <Link to={`/details/${student._id}`} className='header-font'>
                      {" "}
                      {student.firstName} {student.lastName}{" "}
                      <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </Link>
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Main;
