import React, { useState } from "react";
import NumRowOne from "./Numbers/NumRowOne.jsx";
import NumRowTwo from "./Numbers/NumRowTwo.jsx";
import NumRowThree from "./Numbers/NumRowThree.jsx";
import NumRowFour from "./Numbers/NumRowFour.jsx";
import Arithmetic from "./Operators/Arithmetic.jsx";
import NonInteger from "./Operators/NonInteger.jsx";
import InputScreen from "./InputScreen.jsx";

const MainBoard = () => {

    // debug visual for calculations behind the scenes
    const [ debugInput, setDebugInput ] = useState("");
    // visual for users
    const [ screenView, setScreenView ] = useState("");

    const [ operatorQueue, setOperatorQueue ] = useState(false);

    const checkIfOperator = (input) => {
        if (input === "/" || input === "*" || input === "-" || input === "+") {
            setOperatorQueue(true);
            return true;
        } else {
            setOperatorQueue(false);
            return false;
        }
    }

    const clickButton = (e) => {
        const integerInput = e.target.innerHTML;
        // if clicked button is an integer
        if (!checkIfOperator(integerInput)) {
            // if an operator came before the integer
            if (operatorQueue) {
                setScreenView(integerInput);
            // if an integer came before the integer
            } else {
                setScreenView(screenView + integerInput);
            }
        }
        
        setDebugInput(debugInput + integerInput)
    }

    const clickEquals = () => {

        const fullInput = screenView;
        // const splitInput = fullInput.split(/\s/g);
        const splitInput = fullInput.split("");
        const result = eval(debugInput);
        // console.log('splitInput: ', splitInput);

        setDebugInput(result);
        setScreenView(result);
    }

    return (
        <div>
            <div>
                <h3>Debug Input</h3>
                <p>{debugInput}</p>    
            </div>
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



// BACKUP CODE

        // // if clicked button is an operator
        // if (integerInput === "/" || integerInput === "*" || integerInput === "-" || integerInput === "+") {

        //     // if another operator is pressed
        //       // replace previous operator with current one
        //     // if another number is pressed
        //       // invoke clickEquals

        //     console.log("operator clicked");

        // } else {
        //     setScreenView(screenView + integerInput);
        // }