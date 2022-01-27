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

        // if clicked button is an operator
        if (integerInput === "/" || integerInput === "*" || integerInput === "-" || integerInput === "+") {
            setScreenView(screenView + " " + integerInput + " ");
            
        // if clicked button is NOT an operator
        } else {
            setScreenView(screenView + integerInput);
        }
    }

    const clickEquals = () => {
        // create variable for string
        // split string by whitespace
        // iterate over split string
          // if current value is not an operator
            // convert to number
        
        const fullInput = screenView;
        const splitInput = fullInput.split(/\s/g);
        const result = [];
        console.log('splitInput: ', splitInput);
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
                <NumRowTwo clickButton={clickButton} />
                <NumRowThree clickButton={clickButton} />
                <NumRowFour clickButton={clickButton} />
            </div>
            <div className="operatorRows">
                <Arithmetic 
                clickButton={clickButton}
                clickEquals={clickEquals} />
                <NonInteger clickButton={clickButton} />
            </div>
        </div>
    )

}

export default MainBoard;