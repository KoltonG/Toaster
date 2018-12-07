/**
 * Imports
 */
import cssToObject from 'css-to-object';
import fs from 'fs';


/**
 * Constants
 */
const commands = process.argv;


/**
 * Transforms .css files to .json files
 *
 * @param {String} inputPath - The path of the input file
 * @param {String} outputPath - The path of the output file
 */
function start(inputPath, outputPath) {
  // Read input file
  const css = fs.readFileSync(inputPath, 'utf8');

  // Transform input file to an object
  const cssObject = cssToObject(css, {
    camelCase: true,
    numbers: true
  });

  // Save file to output path
  fs.writeFileSync(outputPath, JSON.stringify(cssObject, null, 2));
}


/**
 * Init
 */
start(commands[3], commands[4]);
