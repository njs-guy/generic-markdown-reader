// Reads an input text file, and then uses markdown-it to parse markdown

/* eslint-disable */
const md  = require('markdown-it')({
    linkify: true,
    typographer: true,
    quotes: '“”‘’'
});
/* eslint-disable */

// Opens cheatsheet.md from the public dir
export function openMDFile() {
    const filePath = "cheatsheet.md";

    const fileFetch = fetch(filePath)
    .then((res) => res.text())
    .then((data) => {
        return convertOutput(data);
    })
    .catch(err => console.log(err));

    return fileFetch as Promise<Array<string>>; // This returns a promise, so you need to use await to get the actual result
}

// Converts the input to HTML.
export function convertOutput(text:string) {
    const output = md.render(text);

    // Sanitize output. Likely with DOMpurify
    return output;
}