import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {

    useEffect(() => {
        getTitle();
    }, []);    

    const [ mainTitle, setMainTitle ] = useState("");

    const getTitle = () => {
        axios.get("/title")
        .then(response => {
            setMainTitle(response.data);
        })
        .catch(err => {
            console.log("Error received during Axios GET request.", err);
        })
    }

    return (
        <div>
            <h1>{mainTitle}</h1>
        </div>
    )

}

export default App;