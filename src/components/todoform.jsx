import { useState } from "react";

const Todoform = (props) => {
  var list = props.list;
  var setlist = props.setlist;
  const [newlist, setnewlist] = useState("");

  const handlechange = (e) => {
    setnewlist(e.target.value);
  };

  const addlist = () => {
    setlist([...list, { id: list.length + 1, activity: newlist }]);
    setnewlist("");
  };

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-medium">Manange Activities</h1>
      <div>
        <input
          value={newlist}
          type="text"
          onChange={handlechange}
          placeholder="Next Activity"
          className="p-3 border border-black rounded bg-transparent"
        ></input>
        <button className="p-3 bg-black text-white rounded" onClick={addlist}>
          Add
        </button>
      </div>
    </div>
  );
};
export default Todoform;
