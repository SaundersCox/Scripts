import React from "react";
import Script from "./Script";
import FormatSteps from "./formatStepsToComments";
import Camelize from "./camelize";

const HelloWorld = () => {
  return (
    <div>
      <h3>Scripts</h3>
      <p>Hit Ctrl+C on popup to copy.</p>
      <Script
        script={FormatSteps}
        scriptName="Format Steps to Comments"
        initText={`1
Open eDock Dockworker application



drag
2
Login with the Terminal Credentials

- Enter Forklift ID - 893929
- Enter Operator ID - 01007



drag
3
Click Log In button`}
      />
      <Script
        script={Camelize}
        scriptName="Convert a phrase into Camel Case"
        initText="Hello! How are you?"
      />
    </div>
  );
};

export default HelloWorld;
