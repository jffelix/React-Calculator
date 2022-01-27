import React from "react";

const NumRowFour = (props) => {

    return (
        <div>
            <div className="numZero" onClick={props.clickButton}>
                <span>0</span>
            </div>
            <div className="decimal" onClick={props.clickButton}>
                <span>.</span>
            </div>
        </div>
    )

}

export default NumRowFour;