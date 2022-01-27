import React, { useState } from "react";
import NumRowOne from "./Numbers/NumRowOne.jsx";
import NumRowTwo from "./Numbers/NumRowTwo.jsx";
import NumRowThree from "./Numbers/NumRowThree.jsx";
import NumRowFour from "./Numbers/NumRowFour.jsx";
import Arithmetic from "./Operators/Arithmetic.jsx";
import NonInteger from "./Operators/NonInteger.jsx";
import InputScreen from "./InputScreen.jsx";

const MainBoard = () => {

    const [ screenView, setScreenView ] = useState("");

    const clickButton = (e) => {
        const integerInput = e.target.innerHTML;
        setScreenView(screenView + integerInput);
    }

    // everything on screenView will be a string at first
    // when you press equal
      // use conditionals to convert string numbers into numbers

    return (
        <div>
            <div>
                <InputScreen screenInput={screenView} />
            </div>
            <div className="numRows">
                <NumRowOne clickButton={clickButton} />
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