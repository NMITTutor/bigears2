import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";




function Hello(){
    const [apiResponse, setPage] = useState( "" )

    useEffect(() => {
      fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setPage(res));
    }, []);

    return (
       <div className="container">
           <h1>ello</h1>
           <p>  {apiResponse} </p>
       </div>
    
    );
}

export default Hello;