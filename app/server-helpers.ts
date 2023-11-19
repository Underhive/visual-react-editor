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

export function convertCssToJsx(cssString) {
  const styleObject = {};
  // Split the CSS string by semicolons and filter out empty strings
  const styles = cssString.split(';').filter(style => style.trim());

  styles.forEach(style => {
      // Split each style into property and value by the colon
      let [property, value] = style.split(':');

      if (property && value) {
          property = property.trim();
          value = value.trim();

          // Convert CSS property to camelCase for JSX
          const camelCaseProperty = property.replace(/-./g, match => match.charAt(1).toUpperCase());

          // Add to style object
          styleObject[camelCaseProperty] = value;
      }
  });

  return styleObject;
}

export function jsonToJsx(jsonString, spaces = 2) {
  try {
      // Parse the JSON string into an object
      const jsonObj = JSON.parse(jsonString);
      const spacer = ' '.repeat(spaces);
      const exitSpacer = ' '.repeat(spaces < 2 ? spaces : spaces - 2);

      // Convert the object into a JSX style string
      let jsxString = '{\n ';
      for (const key in jsonObj) {
          if (jsonObj.hasOwnProperty(key)) {
              // Convert to camelCase and add the property and value to the string
              const camelCaseKey = key.replace(/-./g, match => match.charAt(1).toUpperCase());
              jsxString += `${spacer}${camelCaseKey}: "${jsonObj[key]}",\n `;
          }
      }
      // Remove the trailing comma and space, and close the brace
      jsxString = jsxString.replace(/, $/, '') + exitSpacer + '}';

      return jsxString;
  } catch (error) {
      console.error('Invalid JSON string');
      return '{}'; // Return an empty JSX object on error
  }
}
