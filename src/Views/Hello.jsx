import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Z_STREAM_ERROR } from "zlib";
import Person from "./Person";


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
           <h1>ello</h1>
           <p> <ul> {apiUsers.map(x =><li><Person Name={x.Name}/></li>)} </ul> </p>
       </div>
    
    );
    else return null;
}

export default Hello;