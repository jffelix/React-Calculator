import React, { useState } from "react";
import NumRowOne from "./Numbers/NumRowOne.jsx";
import NumRowTwo from "./Numbers/NumRowTwo.jsx";
import NumRowThree from "./Numbers/NumRowThree.jsx";
import NumRowFour from "./Numbers/NumRowFour.jsx";
import Arithmetic from "./Operators/Arithmetic.jsx";
import NonInteger from "./Operators/NonInteger.jsx";
import InputScreen from "./InputScreen.jsx";
import "./Numbers/numbers.css";

const MainBoard = () => {
    // debug visual for calculations behind the scenes
    const [ debugInput, setDebugInput ] = useState("");
    // visual for users
    const [ screenView, setScreenView ] = useState("0");
    // check if an operator has already been clicked
    const [ operatorQueue, setOperatorQueue ] = useState(false);

    const [ debugShow, setDebugShow ] = useState(false);

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
                    // setSeperator(splitStr[i]);
                    return true;
                }
            }
            return false;
        }
  
    }

    const clickButton = (e) => {
        const integerInput = e.target.innerHTML;
        // error handling for multiple zeros (ex: "009");
        if (debugInput === "" && integerInput === "0") {
            return;
        }
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
        if (debugInput.length > 0) {
            const convertToNum = parseInt(debugInput);
            // if number is positive
            if (convertToNum > 0) {
                const toNegative = -Math.abs(convertToNum);
                setScreenView(toNegative.toString());
                setDebugInput(toNegative.toString());
            // if number is negative
            } else if (convertToNum < 0) {
                const toPositive = Math.abs(convertToNum);
                setScreenView(toPositive.toString());
                setDebugInput(toPositive.toString());
            }
        // if board is at default state ("0")
        } else if (debugInput.length === 0) {
            setScreenView("-");
            setDebugInput("-");
        }
    }

    const clickPercent = () => {
        const currentNum = screenView;
        const percentage = currentNum / 100;
        
        setScreenView(percentage);
        setDebugInput(percentage);
    }

    const clickEquals = () => {
        const result = eval(debugInput);

        setDebugInput(result);
        setScreenView(result);
    }

    const toggleDebugView = () => {
        setDebugShow(debugShow => !debugShow);
    }

    return (
        <div>
            <div className="inputScreen">
                <InputScreen screenInput={screenView} />
            </div>
            <div className="fullBoard">
                <div className="horizontalRows">
                    <div className="nonInteger">
                        <NonInteger 
                        clickButton={clickButton}
                        clickAC={clickAC}
                        clickPlusMinus={clickPlusMinus}
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
            <div className="debugInput" onClick={toggleDebugView}>
                <h3>Debug View (click to show)</h3>
                {
                    debugShow ? <p>{debugInput}</p> : null   
                }
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