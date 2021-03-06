import React from "react";
import "./numbers.css";

const NumRowOne = (props) => {

    return (
        <div className="rowOne">
            <div className="numOne">
                <span onClick={props.clickButton}>1</span>
            </div>
            <div className="numTwo">
                <span onClick={props.clickButton}>2</span>
            </div>
            <div className="numThree">
                <span onClick={props.clickButton}>3</span>
            </div>
        </div>
    )

}

export default NumRowOne;