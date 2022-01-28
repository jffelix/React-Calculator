import React from "react";
import "./numbers.css";

const NumRowThree = (props) => {

    return (
        <div className="rowThree">
            <div className="numSeven">
                <span onClick={props.clickButton}>7</span>
            </div>
            <div className="numEight">
                <span onClick={props.clickButton}>8</span>
            </div>
            <div className="numNine">
                <span onClick={props.clickButton}>9</span>
            </div>
        </div>
    )

}

export default NumRowThree;