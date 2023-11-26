module.exports = function splitByCharLength(inputString, chunkSize) {
  const lines = inputString.split("\n");
  const result = [];

  let currentChunk = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (currentChunk.length + 2 + line.length + 2 <= chunkSize) {
      currentChunk += line + "\n";

      if (i === lines.length - 1) {
        // Last line, add the current chunk to the result
        result.push(currentChunk.trim());
      }
    } else {
      // Add the current chunk to the result and start a new one
      result.push(currentChunk.trim() + "\n");
      currentChunk = line + "\n";
    }
  }

  return result;
};
