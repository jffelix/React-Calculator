import React from "react";
import "./operators.css";

const NonInteger = (props) => {

    return (
        <div className="non-integer">
            <div className="allClear">
                <span onClick={props.clickAC}>AC</span>
            </div>
            <div className="integer">
                <span onClick={props.clickPlusMinus}>+/-</span>
            </div>
            <div className="percentage">
                <span onClick={props.clickPercent}>%</span>
            </div>
        </div>
    )

}

export default NonInteger;