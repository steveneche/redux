import { useDispatch } from "react-redux";
import { editTask, toggleTask } from "../redux/taskSlice";
import { useState } from "react";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDesc, setNewDesc] = useState(task.description);
  const handleSave = () => {
    dispatch(
      editTask({
        id: task.id,
        desc: newDesc,
      })
    );
    setIsEditing(false);
  };
  return (
    <div className="flex items-center gap-2 bg-gray-300">
      <input
        type="checkbox"
        checked={task.isdone}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      {isEditing ? (
        <input
          type="text"
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
        />
      ) : (
        <p>{task.description}</p>
      )}
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </div>
  );
};

export default Task;
