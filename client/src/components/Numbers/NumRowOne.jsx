import React from "react";

const NumRowOne = (props) => {

    return (
        <div>
            <div className="numOne" onClick={props.clickInteger} value={1}>
                <span>1</span>
            </div>
            <div className="numTwo">
                <span>2</span>
            </div>
            <div className="numThree">
                <span>3</span>
            </div>
        </div>
    )

}

export default NumRowOne;