import { useState } from "react";

const GoalTabs = (props) => {
  const {goals} = props;
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
      <p className="borderTop p-2">{goals[tab]}</p>
    </div>
  )
}

export default GoalTabs