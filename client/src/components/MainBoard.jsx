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
    const [ operatorQueue, setOperatorQueue ] = useState(false);

    const clickButton = (e) => {
        const integerInput = e.target.innerHTML;

        // if clicked button is an operator
        if (integerInput === "/" || integerInput === "*" || integerInput === "-" || integerInput === "+") {
            if (!operatorQueue) {
                setOperatorQueue(true);
            } else {
                clickEquals();
                setOperatorQueue(false);
            }
            console.log('operatorQueue: ', operatorQueue);
        }
        
        setScreenView(screenView + integerInput);
    }

    const clickEquals = () => {

        const fullInput = screenView;
        // const splitInput = fullInput.split(/\s/g);
        const splitInput = fullInput.split("");
        const result = eval(screenView);
        // console.log('splitInput: ', splitInput);

        setScreenView(result);
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