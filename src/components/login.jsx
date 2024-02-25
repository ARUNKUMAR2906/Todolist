import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const navigate = useNavigate();
  var udata = props.udata;
  const [euname, seteuname] = useState("");
  const handleeuname = (e) => {
    seteuname(e.target.value);
  };
  const [epword, setepword] = useState("");
  const handleepword = (e) => {
    setepword(e.target.value);
  };
  const [ruser, setruser] = useState(true);
  const checkuser = () => {
    var userfound = false;
    udata.forEach((item) => {
      if (item.uname === euname && item.pword === epword) {
        console.log("login successfull");
        userfound = true;
        navigate("/landing", { state: { user: euname } });
      }
    });
    if (userfound === false) {
      console.log("login failed");
      setruser(false);
    }
  };
  return (
    <div className="bg-black p-10 h-[100vh] flex items-center justify-center">
      <div className="bg-[#efefef] p-10 rounded-md">
        <h1 className="text-3xl font font-medium">Hey Hi!</h1>
        {ruser ? (
          <p>Login to track your Activities :)</p>
        ) : (
          <p className="text-red-500">
            Login failed!! please signup before login{" "}
          </p>
        )}
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
        </div>
        <button
          className="bg-teal-400 px-3 py-2 rounded-md"
          onClick={checkuser}
        >
          Login
        </button>
        <p>
          Don't have an account? please{" "}
          <Link to={"/signup"} className="underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
