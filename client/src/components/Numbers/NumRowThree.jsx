import React from "react";

const NumRowThree = (props) => {

    return (
        <div>
            <div className="numSeven" onClick={props.clickButton}>
                <span>7</span>
            </div>
            <div className="numEight" onClick={props.clickButton}>
                <span>8</span>
            </div>
            <div className="numNine" onClick={props.clickButton}>
                <span>9</span>
            </div>
        </div>
    )

}

export default NumRowThree;