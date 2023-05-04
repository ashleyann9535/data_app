import { useState, useEffect } from "react";
import axios from "axios";

const ViewData = (props) => {
  const [goal, setGoal] = useState({});
  const [data, setData] = useState([]);
  const { goalId } = props;

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/goal/633642a499f8a30ea0bb1d00`)
      .then((res) => {
        console.log(res.data.dataList);
        setGoal(res.data);
        setData(res.data.dataList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [goalId]);

  return (
    <div>
      <h5>Goal Data</h5>
      <div className="row">
        {data.map((data, index) => {
          return (
            <div className="col-2" key={index}>
              <div className="card mx-2">
                <div className="card-body">
                  <h5 className="card-title">Date: {data.date} </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Score: {data.score}{" "}
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewData;
