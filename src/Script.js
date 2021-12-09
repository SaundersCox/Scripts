import React, { useState, useRef } from "react";

export function Script(props) {
  const [input, setInput] = useState(props.initText);
  const outputText = useRef(props.script(props.initText));
  return (
    <form>
      <label>
        <span style={{ display: "inline-block", width: "250px" }}>
          {props.scriptName}:
        </span>
        <textarea
          id={props.id + "-input"}
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            outputText.current = props.script(e.target.value);
          }}
          rows={props.rows}
          disabled={props.disabled}
        ></textarea>
        <textarea
          id={props.id + "-output"}
          type="text"
          value={outputText.current}
          ref={outputText}
          disabled={props.disabled}
        ></textarea>
      </label>
    </form>
  );
}

export default Script;
