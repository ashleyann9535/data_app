import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa-thin fa-arrow-right } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/student')
    .then((res) => {
      console.log(res.data);
      setList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div>
      <h1>Welcome Teacher</h1>
      <h4>List of Students</h4>
      {list
        .sort((a,b) => {
          if(a.firstName < b.firstName){
            return -1;
          }
          if(a.firstName > b.firstName){
            return 1;
          }
          return 0;
        })
        .map((student, index) => {
          return (
          <div className="container-fluid">
            <div className="row">
              <div className="col">
            <p key={index}> <Link to={`/details/${student._id}`}> {student.firstName} {student.lastName} <i class="fa-thin fa-arrow-right"></i></Link>
             </p>
            </div>
            </div>
          </div>
        )})
      }
    </div>
  )
}

export default Main