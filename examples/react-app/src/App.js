import React from "react";
import { ReactMarkon } from "@nofinite/markon";

function App() {
    // Value must be a string
    const value = "#b[I'm Bold Markon Text]# #br# #u[I'm Underline Markon Text] #br# #e[I'm Emphasized Markon Text] #br# #link[I'm Link Markon Text, https://github.com/NofiniteTechnologies/markon]# #br# #list[We, Are, List, Markon, Text]#";

    // Component returns formatted content
    return <ReactMarkon content={value} />;
}

export default App;
