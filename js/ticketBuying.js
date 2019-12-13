$(document).ready(function () {
    var database = [];

    function handleFiles(data) {
        // Check for the various File API support.
        if (window.FileReader) {
            // FileReader are supported.
            getAsText(files[0]);
        } else {
            alert('FileReader are not supported in this browser.');
        }
    }

    function getAsText(fileToRead) {
        var reader = new FileReader();
        // Read file into memory as UTF-8
        reader.readAsText(fileToRead);
        // Handle errors load
        reader.onload = loadHandler;
        reader.onerror = errorHandler;
    }

    function loadHandler() {
        database = $.ajax({
            url: "Data/test.csv",
            dataType: "Text",
        });
        processData(csv);
    }

    function processData(csv) {
        var allTextLines = csv.split(/\r\n|\n/);
        for (var i=0; i<allTextLines.length; i++) {
            var data = allTextLines[i].split(';');
            var tarr = [];
            for (var j=0; j<data.length; j++) {
                tarr.push(data[j]);
            }
            database.push(tarr);
        }
        console.log(database);
    }

    function errorHandler(evt) {
        if (evt.target.error.name == "NotReadableError") {
            alert("Canno't read file !");
        }
    }

    function setText(id,newvalue) {
        var s= document.getElementById(id);
        s.innerHTML = newvalue;
    }

    setText("fromStation", database[0]);
});



