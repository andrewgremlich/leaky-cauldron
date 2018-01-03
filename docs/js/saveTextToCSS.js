/*This function takes the CSS template and saves it as a BLOB
and then downloads it for the user.*/

function saveTextToCSS() {
    var textToWrite = style,
        textFileAsBlob = new Blob([textToWrite], {
            type: 'text/css'
        }),
        fileNameToSaveAs = 'course',
        downloadLink = document.createElement("a");

    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";

    if (window.URL !== null) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    } else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    }

    downloadLink.click();
}
