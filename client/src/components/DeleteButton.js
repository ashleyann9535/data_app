import axios from 'axios';

const DeleteButton = (props) => {
    const {id, handleDelete} = props;

    const inActiveStudent = () => {
      axios.put(`http://localhost:8000/api/student/${id}`, {isActive: false})
      .then((res) => {
        console.log(res);
        handleDelete();
      })
      .catch((err) => {
        console.log(err);
      })
    }

  return (
    <div>
        <p onClick={inActiveStudent} className= 'm-0 p-1 btn btn-danger'>Delete</p>
    </div>
  )
}

export default DeleteButton