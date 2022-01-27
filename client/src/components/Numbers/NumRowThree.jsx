import React from "react";

const NumRowThree = (props) => {

    return (
        <div>
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