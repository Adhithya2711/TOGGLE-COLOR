import { useState } from "react";

import "./style.css";

function ToggleButtonColor()  {


    const [backgroundColor, setBackgroundColor] = useState("white");
    const [textColor,setTextColor] = useState("black");
    const [buttonStyle, setButtonStyle] = useState("white");


    function handleClick(){
        setBackgroundColor(backgroundColor==="white" ?"black":"white");
        setTextColor(textColor==="black" ?"#ffa31a":"black");
        setButtonStyle(backgroundColor==="white" ?"black":"white");
    }


  return (
    <>
    <section style={{backgroundColor,color:textColor}}>
        <button onClick={handleClick} style={{buttonStyle,color:textColor,border:`2px solid ${textColor}`}}>
             {backgroundColor==="black"?"Black Theme":"White Theme"};
        </button>



        <section className="content">
        <h1>Welcome To A<br/>Real World Of <br/>---Adhithya---</h1>

    </section>
    </section>

    
    </>
  )
}

export default ToggleButtonColor;