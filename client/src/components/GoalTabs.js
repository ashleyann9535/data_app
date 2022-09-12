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
        return goal !== undefined
      })
      .map((tab, index) => {
        return (
          <button className="btn btn-light m-1" value={index} onClick={handleClick}>
              Goal {index +1}
            </button>
        );
      })}
      <p className="border-top p-2">{goals[tab]}</p>
    </div>
  )
}

export default GoalTabs