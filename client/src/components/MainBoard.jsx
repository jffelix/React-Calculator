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
    const [ screenView, setScreenView ] = useState("0");
    // check if an operator has already been clicked
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

    const checkFullEquation = () => {
        // cannot split string unless length is over 1
        if (debugInput.length > 1) {
            const splitStr = debugInput.split("");
    
            for (var i = 0; i < splitStr.length; i++) {
                if (checkIfOperator(splitStr[i])) {
                    return true;
                }
            }
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
                // if screen is at default state
                if (screenView === "0") {
                    setScreenView(integerInput);
                } else {
                    setScreenView(screenView + integerInput);
                }
            }
            setDebugInput(debugInput + integerInput);

        // if clicked button is an operator
        } else {
            // if debugInput has number-operator-number order
            if (checkFullEquation()) {
                // convert equation to result
                const result = eval(debugInput);
                // concat input to result
                setDebugInput(result + integerInput);
                setScreenView(result);
            } else {
                setDebugInput(debugInput + integerInput);
            }
        
            setOperatorQueue(true);
        }
        
        // setDebugInput(debugInput + integerInput);
    }

    const clickAC = () => {
        setScreenView("0");
        setDebugInput("");
    }

    const clickPlusMinus = () => {
        // if number is already on the board
          // if number is positive
            // turn it negative
          // if number is negative
            // turn it positive
        // if board is at default state ("0")
          // add "-" to setState
    }

    const clickPercent = () => {
        const currentNum = screenView;
        console.log('currentNum / 100: ', currentNum / 100);
    }

    const clickEquals = () => {
        const result = eval(debugInput);

        setDebugInput(result);
        setScreenView(result);
    }

    return (
        <div>
            <div className="fullBoard">
                <div className="horizontalRows">
                    <div className="inputScreen">
                        <InputScreen screenInput={screenView} />
                    </div>
                    <div className="nonInteger">
                        <NonInteger 
                        clickButton={clickButton}
                        clickAC={clickAC}
                        clickPercent={clickPercent} 
                        />
                    </div>
                    <div className="numRows">
                        <NumRowOne clickButton={clickButton} />
                        <NumRowTwo clickButton={clickButton} />
                        <NumRowThree clickButton={clickButton} />
                        <NumRowFour clickButton={clickButton} />
                    </div>
                </div>
                <div className="verticalRows">
                    <div className="operatorRows">
                        <Arithmetic 
                        clickButton={clickButton}
                        clickEquals={clickEquals} 
                        />
                    </div>
                </div>
            </div>
            <div className="debugInput">
                <h3>Debug Input</h3>
                <p>{debugInput}</p>    
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