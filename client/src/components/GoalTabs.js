import { useState } from "react";
import { Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const GoalTabs = (props) => {
  const {goals, goalIds, studentId} = props;
  const [tab, setTab] = useState(0)

  const handleClick = (e) => {
    e.preventDefault(); 
    setTab(e.target.value);
  };

  return (
    <div>
      {goals.filter((goal) => {
        return goal !== undefined && goal !== ''
      })
      .map((tab, index) => {
        return (
          <button className="btn tabBackground m-1" value={index} onClick={handleClick}>
              Goal {index +1}
            </button>
        );
      })} 
      <Link to={`/goal/${studentId}`}><FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon></Link>
      <p className="borderTop p-2">{goals[tab]}</p>
      <Link to={`/edit/goal/${goalIds[tab]}/${studentId}`} >Edit Goal</Link>
    </div>
  )
}

export default GoalTabs