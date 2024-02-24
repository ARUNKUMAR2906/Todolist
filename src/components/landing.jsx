import { useLocation } from "react-router-dom";
import Header from "./header";
import Card from "./card";
import Todocontainer from "./todocontainer";
const Landing = ()=>{
    const data = useLocation()
    return(
    <div className="md:bg-black md:p-16 h-auto">
      <div className="bg-[#efefef] p-16 rounded-md">
        <Header username={data.state.user} />
        <div className="flex gap-7 justify-between my-5 flex-wrap">
          <Card bg={"#8272DA"} title={"23"} subtitle={"Banglore"} />
          <Card bg={"#FD6663"} title={"february"} subtitle={"14:23:08"} />
          <Card bg={"#FCA201"} title={"Build using"} subtitle={"React.js"} />
        </div>
        <div>
          <Todocontainer />
        </div>
      </div>
    </div>
    )
}
export default Landing;


