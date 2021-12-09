import React, { useState } from "react";

export function Script(props) {
  const [name, setName] = useState("");
  console.log(typeof props.script);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`${props.script(name)}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        {props.scriptName}:
        <textarea
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Script;
