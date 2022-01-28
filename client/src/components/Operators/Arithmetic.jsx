import React from "react";
import "./operators.css";

const Arithmetic = (props) => {

    return (
        <div>
            <div className="divide">
                <span onClick={props.clickButton}>/</span>
            </div>
            <div className="multiply">
                <span onClick={props.clickButton}>*</span>
            </div>
            <div className="subtract">
                <span onClick={props.clickButton}>-</span>
            </div>
            <div className="addition">
                <span onClick={props.clickButton}>+</span>
            </div>
            <div className="equals">
                <span onClick={props.clickEquals}>=</span>
            </div>
        </div>
    )
}

export default Arithmetic;