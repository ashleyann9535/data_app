import { useState } from "react";

const GoalForm = (props) => {
  const { handleSubmit, buttonText, oldGoal } = props;
  const [goal, setGoal] = useState(oldGoal || '');

  const submitHandler = (e) => {
    e.preventDefault();
    handleSubmit(goal);
  };

  return (
    <div>
      <h4> {buttonText} </h4>
      <form onSubmit={submitHandler}>
        <textarea
          rows="4"
          cols="50"
          value={goal}
          name="goal"
          onChange={(e) => setGoal(e.target.value)}
          className="m-1"
          placeholder="Add goal..."
        ></textarea>
        <input className="btn btn-secondary d-block" type="submit" value={buttonText}  />
      </form>
    </div>
  );
};

export default GoalForm;
