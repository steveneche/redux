import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const AddTask = () => {
  const [description, setDescription] = useState();
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addTask(description));
    setDescription("");
  };
  return (
    <div className="mt-3 ml-1">
      <input className="border-2 rounded-2xl"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAdd} className= " ml-4 mb-1.5 cursor-pointer bg-gradient-to-r from-[#EB3349] to-[#F45C43] px-6 py-2 rounded text-white font-semibold shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] hover:shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-10px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] focus:shadow-[inset_-12px_-8px_40px_#46464620] transition-shadow" >Add Task</button >
    </div>
  );
};

export default AddTask;
