import React from "react";

const NumRowOne = (props) => {

    return (
        <div>
            <div className="numOne" onClick={props.clickButton}>
                <span>1</span>
            </div>
            <div className="numTwo" onClick={props.clickButton}>
                <span>2</span>
            </div>
            <div className="numThree" onClick={props.clickButton}>
                <span>3</span>
            </div>
        </div>
    )

}

export default NumRowOne;