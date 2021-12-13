const formatStepsToComments = (str) => {
  let result = "";
  let stepNum = "";
  let recentNum = false;

  for (const line of str.split(/\r?\n/)) {
    if (!isNaN(line)) {
      stepNum = line;
      recentNum = true;
    } else if (line !== "drag" && line !== "null" && line !== "") {
      if (recentNum) {
        result += "// " + stepNum + " " + line + "\n";
      } else {
        result += "// " + line + "\n";
      }
      recentNum = false;
    }
  }
  return result;
};
export default formatStepsToComments;
