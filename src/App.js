import Login from "./components/login";
import Signup from "./components/signup";
import Landing from "./components/landing";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from "react";

const App = ()=>{
  const [udata, setudata] = useState([{ uname: "Arun", pword: '2902' }]);
  return(
      <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login udata={udata} setudata={setudata} />}></Route>
          <Route path='/signup' element={<Signup udata={udata} setudata={setudata}/>}></Route>
          <Route path='/landing' element={<Landing/>}></Route>
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App;
