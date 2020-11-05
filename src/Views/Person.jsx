import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Z_STREAM_ERROR } from "zlib";


function Person(props){


    return (
       <div className="container">
          I am the best {props.Name}
       </div>
    
    );
}



export default Person;