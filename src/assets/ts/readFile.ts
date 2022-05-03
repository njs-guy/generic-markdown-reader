// Reads an input text file, and then uses mdParse.ts and mdDisplay.ts to return converted HTML.
// For now, just reads and returns text.

/* eslint-disable */
const md  = require('markdown-it')({
    linkify: true,
    typographer: true,
    quotes: '“”‘’'
});
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
    const output = md.render(text);

    // Sanitize output. Likely with DOMpurify
    return output;
}