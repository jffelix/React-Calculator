import React from "react";
import "./numbers.css";

const NumRowFour = (props) => {

    return (
        <div className="rowFour">
            <div className="numZero">
                <span onClick={props.clickButton}>0</span>
            </div>
            <div className="decimal">
                <span onClick={props.clickButton}>.</span>
            </div>
        </div>
    )

}

export default NumRowFour;