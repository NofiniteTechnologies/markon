import React from "react";
import { ReactMarkon } from "@nofinite/markon"

function App() {
    // Value must be a string
    const value = "#b[Markon]#, #br#, #link[Markon, https://github.com/NofiniteTechnologies/markon]#, #list[Item 1, Item 2]#";

    // Component returns formatted content
    return <ReactMarkon content={value} />;
}

export default App;
