

// importing dependencies
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  const { list } = useSelector((state) => state.tasks);

  return (
    <div>{list.length > 0 && list.map((item) => <Task task={item} />)}</div>
  );
};

export default ListTask;
