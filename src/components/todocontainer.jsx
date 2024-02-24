import Todoform from "./todoform";
import Todolist from "./todolist";
import { useState } from "react";

const Todocontainer = () => {
  const [list, setlist] = useState([
    // { id: 1, activity: "go to sleep" },
    // { id: 2, activity: "Have breakfast" },
    // { id: 3, activity: "get fresh air" },
  ]);
  return (
    <div>
      <div className="flex gap-5 flex-wrap">
        <Todoform list={list} setlist={setlist}/>
        <Todolist list={list} setlist={setlist}/>
      </div>
    </div>
  );
};

export default Todocontainer;
