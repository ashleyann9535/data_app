import { useState } from "react";
import { Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const GoalTabs = (props) => {
  const {goals, goalIds, studentId} = props;
  const [tab, setTab] = useState(0)

  const handleClick = (e) => {
    e.preventDefault(); 
    setTab(e.target.value);
    props.returnGoalId(goalIds[tab])
  };

  return (
    <div>
      {goals.map((tab, index) => {
        return (
          <button className="btn tabBackground m-2" value={index} onClick={handleClick}>
              Goal {index +1}
            </button>
        );
      })} 
      <Link to={`/goal/${studentId}`}><FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon></Link>
      <div className="borderTop p-2 d-flex">
      <Link to={`/edit/goal/${goalIds[tab]}/${studentId}`} ><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></Link>
      <p className="mx-2" >{goals[tab]}</p>
      </div>
    </div>
  )
}

export default GoalTabs