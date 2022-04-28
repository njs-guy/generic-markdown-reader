// Reads an input text file, and then uses mdParse.ts and mdDisplay.ts to return converted HTML.
// For now, just reads and returns text.

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
    return output;
}