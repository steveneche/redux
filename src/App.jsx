

// importing dependencies
import "./App.css";
import AddTask from "./components/AddTask";
import { useSelector } from "react-redux";
import ListTask from "./components/ListTask";

// diplaying all components
function App() {
  return (
    <>
      <AddTask />
      <ListTask />
    </>
  );
}

export default App;
