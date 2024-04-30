export function jsonToEnv(str) {
  const regex = /[^"]+"([^"]+)": "([^"]+)/gm;
  let result = "";
  let m;

  while ((m = regex.exec(str)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
      if (groupIndex == 1) {
        result += match + "=";
      }
      if (groupIndex == 2) {
        result += match += ";";
      }
    });
  }
  return result;
}
export default jsonToEnv;
