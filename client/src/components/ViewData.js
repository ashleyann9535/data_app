import { useState, useEffect } from "react";
import axios from "axios";

const ViewData = (props) => {
  const [goal, setGoal] = useState({});
  const [dataId, setDataId] = useState([]);
  const [dataInfo, setDataInfo] = useState([]);
  const { goalId } = props;


  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/goal/633642a499f8a30ea0bb1d00`)
      .then((res) => {
        console.log(res.data.dataList);
        setGoal(res.data);
        setDataId(res.data.dataList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [goalId]);

  useEffect(() => {
    const fetchData = () => {
      const requests = dataId.map(id =>
        axios.get(`http://localhost:8000/api/data/${id}`)
      );
      Promise.all(requests)
        .then(responses => {
          const responseData = responses.map(response => response.data);
          setDataInfo(responseData);
        })
        .catch(error => {
          console.error(error);
        });
    };

    fetchData();
  }, [])


  console.log(`Goal Id: ${goalId}`)

  let goalData = dataInfo.map(a => a);
  console.log(`Data Id: ${goalData}`)

  return (
    <div>
      <h5>Goal Data</h5>
      <div className="row">
        {goalData.map((data, index) => {
          // console.log(data)
          return (
            <div className="col-2" key={index}>
              <div className="card mx-2">
                <div className="card-body">
                  <h5 className="card-title">Date: {data.date} </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Score: {data.score}{" "}
                  </h6>
                  <p className="card-text">
                    Notes: {data.notes}
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
