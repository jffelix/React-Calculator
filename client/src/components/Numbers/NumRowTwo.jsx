import React from "react";
import "./numbers.css";

const NumRowTwo = (props) => {

    return (
        <div className="rowTwo">
            <div className="numFour">
                <span onClick={props.clickButton}>4</span>
            </div>
            <div className="numFive">
                <span onClick={props.clickButton}>5</span>
            </div>
            <div className="numSix">
                <span onClick={props.clickButton}>6</span>
            </div>
        </div>
    )

}

export default NumRowTwo;