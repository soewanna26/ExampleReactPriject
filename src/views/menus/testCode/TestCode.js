import React, { useEffect } from "react";
import TestCodeComponent from "./TestCodeComponent";
import TestCodeCom2 from "./TestCodeCom2";
import { useHistory } from "react-router-dom";

const TestCode=()=>{
  let history = useHistory()

  useEffect(() => {
    let flag = localStorage.getItem(`LoginProcess`);

    if (flag == "true") {
      console.log("Login process success")
    } else {
      history.push(`/Login`);
    }

  })
    return(
        <div>
            <TestCodeCom2 name="Mg Mg" age="12" address="Yangon"/>
            <TestCodeComponent name="Sara"/>
            <TestCodeComponent name="Nice"/>
            <TestCodeCom2 name="Ma Ma" age="13" address="Singapore"/>
        </div>
    )
}

export default TestCode;
