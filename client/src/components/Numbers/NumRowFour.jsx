import React from "react";

const NumRowFour = (props) => {

    return (
        <div>
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