/**
 * Returns an array with the cumulative character count from the beginning, 
 *     based on the line number
 *
 * @param {array} lineData The lines of the string
 * @param {boolean} lastLineHasNewLineChar Whether or not the last line had a newLineChar
 *
 * @return {array} The cumulative character counts for each line
 *     (e.g.) Line 0 has 18 chars plus a newLine, or 19; Line 1 has 8 chars, so 28, etc, etc.
 */
export function buildLineEndingPositions(lineData, lastLineHasNewLineChar = false ) {
  var cumulativeSum = (sum => lineCharCount => sum += lineCharCount)(0); // Start sum at 0, keep adding the chars from each line.
  var numLines = lineData.length;
  var lineLengths = lineData.map( (line, index) => {
    if(numLines - 1 === index && !lastLineHasNewLineChar) {
        return line.length; // last line, last char was not a new line
    } else {
        return line.length + 1; // new line char was stripped
    }
  });
  return lineLengths.map(cumulativeSum);
}

/**
 * Returns a tuple (array with two elements) containing the split lines
 *     and whether or not the last character was a newLine
 *
 * @param {string} stringData The string to split
 *
 * @return {array} a tuple containing the lines
 *     and a boolean for if the last line has a newLine
 */
export function splitLines(stringData, osLineBreak = '\n') {
  var lines = stringData.split(osLineBreak);
  if(stringData.slice(-1) === osLineBreak) {
      lines.pop(); // Remove last empty line
      return [lines, true];
  } else {
      return [lines, false];
  }
}