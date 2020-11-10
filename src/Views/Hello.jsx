import React, { useEffect, useState } from "react";
import logo from "../logo.svg"
import image1 from "../testImage1.PNG"
import { Link } from "react-router-dom";
import { Z_STREAM_ERROR } from "zlib";
import Person from "./Person";
//import Login from "./Login";
import LoginWithContext from "./LoginWithContext";
const image2 = require("../testImage2.JPG");

function Hello(){
    const [apiResponse, setPage] = useState( "" )
    const [apiName, setName] = useState( "" )
    const [apiUsers, setUsers] = useState([]); 
    const [hasError, setErrors] = useState(false);

    async function fetchUsers(){
      const res = await fetch("https://webdev.talos.net.nz/~todd/api/users");
      res
        .json() 
        .then(res => setUsers(res))
        .catch(err => setErrors(err));
    }
    useEffect(() => {
     fetchUsers();
    },[] ); // This is the dependency array without it re-renders in a knock on loop
            // https://maxrozen.com/learn-useeffect-dependency-array-react-hooks/

    if(apiUsers)
    return (
       <div className="container">
           <img src={logo} alt="Logo" with="100px" height="100px"/>
           <img src={image1} alt="Logo" with="100px" height="100px"/>
           <img src={image2} alt="Logo" with="100px" height="100px"/>
           <h1>ello</h1>
           <p> <ul> {apiUsers.map(x =><li><Person Name={x.Name}/></li>)} </ul> </p>
           <LoginWithContext />
       </div>
    
    );
    else return null;
}

export default Hello;
