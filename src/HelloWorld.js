import React from "react";
import Script from "./Script";
import FormatSteps from "./formatStepsToComments";
import Camelize from "./camelize";
// import GithubIcon from "./images/githubicon.png";

const HelloWorld = () => {
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
          padding: "40px",
          // fontFamily = "Roboto"
        }}
      >
        <div>
          <span>
            <h3>Handy Scripts</h3>
            <img src={GithubIcon} />
          </span>
        </div>
        <p>Ctrl+A, Ctrl+C on output text to copy.</p>
        <hr />
        <div>
          <Script
            script={(str) => "Output"}
            scriptName="Script Name"
            initText="Input"
            disabled
          ></Script>
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
      </div>
    </div>
  );
};

export default HelloWorld;
