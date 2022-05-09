// Reads an input text file, and then uses markdown-it to parse markdown

/* eslint-disable */
const md  = require('markdown-it')({
    linkify: true,
    typographer: true,
    quotes: '“”‘’'
});
/* eslint-disable */

export function openMDFile(/* filepath here */) {
    // const filePath = "cheatsheet.md";

    // const fileFetch = fetch(filePath)
    // .then((res) => res.text())
    // .then((data) => {
    //     return convertOutput(data);
    // })
    // .catch(err => console.log(err));

    // return fileFetch as Promise<Array<string>>; // This returns a promise, so you need to use await to get the actual result

    const reader = new FileReader();
    const file = document.querySelector('input[type=file]');

    if(file) {
        let output = String(reader.result);
        return output;
    } else {
        alert("Please select a valid file.");
        return;
    }

    // reader.addEventListener("load", () => {
    //     output = reader.result;
    // }, false);
}

// Converts the input to HTML.
export function convertOutput(text:string) {
    const output = md.render(text);

    // Sanitize output. Likely with DOMpurify
    return output;
}