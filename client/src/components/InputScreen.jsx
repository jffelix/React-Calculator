import React from "react";

const InputScreen = (props) => {

    return (
        <div>
            <p>Screen Below</p>
            <span>{props.screenInput}</span>
            <p>Screen Above</p>
        </div>
    )

}

export default InputScreen;