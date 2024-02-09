
import React from "react";
//function Info1{name,ntv,edu}){}
function Info1(props){
    const{name , ntv ,edu }=props
    
    return(
        <div>Hi my name is{name}and I belongs to{ntv}.I have completed my{edu}</div>
        
    )
}
export default Info1