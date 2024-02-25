// import { useState } from "react";
import Todoitems from "./todoitems";

const Todolist = (props) => {
    var list = props.list;
    var setlist = props.setlist
  return (
    <div
      className="
         flex-grow bg-violet-300 rounded p-5"
    >
      <h1 className="text-xl md:text-2xl font-medium">Today's Activity</h1>
      {list.length === 0? <p>you haven't added anything yet.</p>:""}
      {
        list.map((item)=>{
            return <Todoitems id={item.id} activity = {item.activity} list={list} setlist={setlist}/>
        })
      }                                         
    </div>
  );
};
export default Todolist;
