import React from "react";
import Script from "./Script";
import FormatSteps from "./formatStepsToComments";
import Camelize from "./camelize";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "#DEF",
        fontFamily: "Roboto, sans-serif",
        vw: "100%",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          margin: "auto",
          width: "50%",
          minWidth: "650px",
          backgroundColor: "#F8F8FF",
          border: "2px solid #AAD",
          borderStyle: "groove",
          borderRadius: "25px",
          padding: "50px",
        }}
      >
        <div>
          <span>
            <h3>Handy Scripts</h3>
          </span>
        </div>
        <p>Ctrl+A, Ctrl+C on output text to copy.</p>
        <hr />
        <div>
          <Script
            script={(str) => "Output"}
            scriptName="Sample Script Name"
            initText="Input"
            disabled
          ></Script>
          <Script
            script={FormatSteps}
            scriptName="Format Steps to Comments"
            initText={`1
Open application
drag
2
Login with Credentials
- Enter ID - 555
- Enter ID2 - 123
drag
3
Click Log In button`}
          />
          <Script
            script={Camelize}
            scriptName="Convert a Phrase into Camel Case"
            initText="Hello! How are you?"
          />
        </div>
      </div>
      <div
        style={{
          margin: "auto",
          width: "55%",
          minWidth: "650px",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <a href="https://github.com/SaundersCox/Scripts" target="_blank">
          Github
        </a>
      </div>
    </div>
  );
};

export default App;
