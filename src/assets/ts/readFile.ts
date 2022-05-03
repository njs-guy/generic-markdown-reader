// Reads an input text file, and then uses mdParse.ts and mdDisplay.ts to return converted HTML.
// For now, just reads and returns text.

/* eslint-disable */
const { marked } = require('marked');
/* eslint-disable */

export function readMD() {
    const filePath = "cheatsheet.md";

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
    const input = text.split(/\r\n|\n/);
    let output: string[] = [];
    input.forEach(i => {
        if(i === "") {
            // output.push("<br>");
        } else {
            output.push(marked.parse(i));
        }
    });

    // Sanitize output. Likely with DOMpurify
    return output;
}