import React from "react";

const Arithmetic = (props) => {

    // equals will need a different onClick function

    return (
        <div>
            <div className="divide" onClick={props.clickButton}>
                <span>/</span>
            </div>
            <div className="multiply" onClick={props.clickButton}>
                <span>*</span>
            </div>
            <div className="subtract" onClick={props.clickButton}>
                <span>-</span>
            </div>
            <div className="addition" onClick={props.clickButton}>
                <span>+</span>
            </div>
            <div className="equals" onClick={props.clickEquals}>
                <span>=</span>
            </div>
        </div>
    )
}

export default Arithmetic;