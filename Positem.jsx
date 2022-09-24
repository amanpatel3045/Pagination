import React from "react";
function Postitem({id,title}){
    return  (
    <div style={{border:"1px solid green",margin:"5px"}}>
        <p>{id}</p>
        <p>{title}</p>
        {/* <p>{body}</p> */}
        </div>
    );
}
export default Postitem