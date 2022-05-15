// Reads an input text file, and then uses markdown-it to parse markdown

/* eslint-disable */
const md  = require('markdown-it')({
    linkify: true,
    typographer: true,
    quotes: '“”‘’'
});
/* eslint-enable */

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

// Saves a text file as txt, md, or html
export function saveFile(text:string, filename:string, type:string) {
    let file = new Blob([text], {type: type});

    let a = document.createElement("a");
    let url = URL.createObjectURL(file);

    a.href = url;
    a.download = filename + "." + type;
    document.body.appendChild(a);
    a.click();
    
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Converts the input to HTML.
export function convertOutput(text:string) {
    const output = md.render(text);
    return output;
}