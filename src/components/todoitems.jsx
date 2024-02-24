const Todoitems = (props)=>{
    var list = props.list;
    var setlist = props.setlist;
    const handlechange = (deleteid)=>{
        var temp = list.filter((item)=>{
            if(item.id === deleteid){
                return false;
            }
            else{
                return true;
            }
        });
        setlist(temp);
    }
    return(
        <div className="flex justify-between">
            <p>{props.id}.{props.activity}</p>
            <button className="text-red-500" onClick={()=>handlechange(props.id)}>Delete</button>
        </div>
    );
};
export default Todoitems;