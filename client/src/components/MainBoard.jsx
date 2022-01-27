import React from "react";
import NumRowOne from "./Numbers/NumRowOne.jsx";
import NumRowTwo from "./Numbers/NumRowTwo.jsx";
import NumRowThree from "./Numbers/NumRowThree.jsx";
import NumRowFour from "./Numbers/NumRowFour.jsx";
import Arithmetic from "./Operators/Arithmetic.jsx";
import NonInteger from "./Operators/NonInteger.jsx";

const MainBoard = () => {

    return (
        <div>
            <div className="numRows">
                <NumRowOne />
                <NumRowTwo />
                <NumRowThree />
                <NumRowFour />
            </div>
            <div className="operatorRows">
                <Arithmetic />
                <NonInteger />
            </div>
        </div>
    )

}

export default MainBoard;