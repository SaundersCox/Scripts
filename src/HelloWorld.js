import React from "react";
import Script from "./Script";
import FormatSteps from "./formatStepsToComments";

const HelloWorld = () => {
  return (
    <div>
      <h3>Scripts</h3>
      <p>Hit Ctrl+C on popup to copy.</p>
      <Script script={FormatSteps} scriptName="Format Steps to Comments" />
    </div>
  );
};

export default HelloWorld;
