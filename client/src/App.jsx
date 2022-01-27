import React, { useState, useEffect } from "react";
import axios from "axios";
import MainBoard from "./components/MainBoard.jsx";

const App = () => {

    useEffect(() => {
        getTitle();
    }, []);    

    const [ mainTitle, setMainTitle ] = useState("");

    const getTitle = async () => {
        try {
            const fullList = await axios.get("/title");
            setMainTitle(fullList.data);

        } catch(err) {
            console.log("Error received during Axios GET request.", err);
        }
    }

    return (
        <div>
            <h1>{mainTitle}</h1>
            <MainBoard />
        </div>
    )

}

export default App;