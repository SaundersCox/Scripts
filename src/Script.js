import React, { useState, useRef } from "react";
import camelize from "./camelize";

export function Script(props) {
  const [input, setInput] = useState(props.initText);
  const [output, setOutput] = useState(props.initText);
  const outputText = useRef(props.script(props.initText));
  const scriptID = camelize(props.scriptName);
  return (
    <form>
      <label>
        <span
          style={{
            display: "inline-flex",
            width: "250px",
            height: "35px",
          }}
        >
          {props.scriptName}:
        </span>
      </label>
      <span style={{ position: "absolute" }}>
        <textarea
          id={scriptID + "-input"}
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            outputText.current = props.script(e.target.value);
            setOutput(props.script(e.target.value));
          }}
          rows={props.rows ? props.rows : 2}
          disabled={props.disabled}
        ></textarea>
        <textarea
          id={scriptID + "-output"}
          type="text"
          value={outputText.current}
          ref={outputText}
          disabled={props.disabled}
          rows={props.rows ? props.rows : 2}
        ></textarea>
      </span>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(output);
        }}
        style={{
          position: "relative",
          height: "36px",
          width: "46px",
          left: "350px",
        }}
        disabled={props.disabled}
      >
        Copy
      </button>
    </form>
  );
}

export default Script;
