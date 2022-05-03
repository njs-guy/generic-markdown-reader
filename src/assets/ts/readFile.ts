// Reads an input text file, and then uses mdParse.ts and mdDisplay.ts to return converted HTML.
// For now, just reads and returns text.

/* eslint-disable */
const { marked } = require('marked');
/* eslint-disable */

export function readMD() {
    const filePath = "test.txt";

    const fileFetch = fetch(filePath)
    .then((res) => res.text())
    .then((data) => {
        return convertOutput(data);
    })
    .catch(err => console.log(err));

    return fileFetch as Promise<Array<string>>; // This returns a promise, so you need to use await to get the actual result
}

// Converts the input to HTML. For now, just splits it into an array.
function convertOutput(text:string) {
    const output = text.split(/\r\n|\n/);
    const output2 = [marked.parse('# Wow'), "", marked.parse("## What a heading")];

    // Sanitize output. Likely with DOMpurify
    return output2;
}