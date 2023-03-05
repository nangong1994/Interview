/**
 * 
 * @param { string[] } paths 
 * @returns { string[] }
 */
function filter(paths) {
  const allowedPaths = paths.filter((value) => {
    return value;
  }).map(test => ({test})); // [{ test: "path1.spec.js" }, { test: "path2.spec.js" }, etc]

  console.log(allowedPaths)
  return allowedPaths;
}

module.exports = testPaths => {
  return {
    filtered: filter(testPaths),
  };
};
