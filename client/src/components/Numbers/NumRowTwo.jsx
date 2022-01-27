import React from "react";

const NumRowTwo = (props) => {

    return (
        <div>
            <div className="numFour" onClick={props.clickButton}>
                <span>4</span>
            </div>
            <div className="numFive" onClick={props.clickButton}>
                <span>5</span>
            </div>
            <div className="numSix" onClick={props.clickButton}>
                <span>6</span>
            </div>
        </div>
    )

}

export default NumRowTwo;