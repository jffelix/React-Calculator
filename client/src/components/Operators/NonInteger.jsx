import React from "react";

const NonInteger = (props) => {

    return (
        <div>
            <div className="allClear">
                <span onClick={props.clickAC}>AC</span>
            </div>
            <div className="integer">
                <span>+/-</span>
            </div>
            <div className="percentage">
                <span onClick={props.clickPercent}>%</span>
            </div>
        </div>
    )

}

export default NonInteger;