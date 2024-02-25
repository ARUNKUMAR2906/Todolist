import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
    const navigate = useNavigate();
    var udata = props.udata;
    var setudata = props.setudata;
    const [euname,seteuname] = useState('');
    const handleeuname = (e)=>{
          seteuname(e.target.value);
    }
    const [epword,setepword] = useState('');
    const handleepword = (e)=>{
      setepword(e.target.value);
    }
    const adduser = ()=>{
        setudata([...udata,{uname:euname,pword:epword}]);
        navigate('/');
    }
  return (
    <div className="bg-black p-10 h-[100vh] flex items-center justify-center">
      <div className="bg-[#efefef] p-10 rounded-md">
        <h1 className="text-3xl font font-medium">Hey Hi!</h1>
        <p>Signup Here :)</p>
        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            value={euname}
            className="border border-black rounded-md w-44 md:w-52 p-2"
            placeholder="username"
            onChange={handleeuname}
          />
          <input
            type="text"
            value={epword}
            className="border border-black rounded-md w-44 md:w-52 p-2"
            placeholder="password"
            onChange={handleepword}
          />
          <input
            type="text"
            className="border border-black rounded-md w-44 md:w-52 p-2"
            placeholder="confirm password"
          />
        </div>
        <button className="bg-violet-400 px-3 py-2 rounded-md" onClick={adduser}>signup</button>
        <p>
          Already have an account?{" "}
          <Link to={"/"} className="underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
