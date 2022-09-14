import loader from "../../../assets/images/Hourglass.gif";
import React from "react";

const Preloader = (props) => {

    return (
        <div style={{backgroundColor: 'white'}}>
            <img src={loader}/>
        </div>
    )

}

export default Preloader;