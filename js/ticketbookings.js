$(document).ready(function () {

    $('input[type="radio"]').click(function(){
        if($(this).attr("value")=="Return"){
            $('.returnDiv').show('slow');
        }
        if($(this).attr("value")=="Open Return"){
            $('.returnDiv').hide('slow');
        }
        if($(this).attr("value")=="One Way"){
            $('.returnDiv').hide('slow');
        }

    });
    $('input[type="radio"]').trigger('click');

    Date.prototype.toDateInputValue = (function() {
        var local = new Date(this);
        return local.toJSON().slice(0,10);
    });

    Date.prototype.toTimeInputValue = (function() {
        var date = new Date(this);
        return date.getHours() + ':' + date.getMinutes();
    });

    $('input[type="date"]').val(new Date().toDateInputValue());
    $('input[type="number"]').val(1)
    $('input[type="time"]').val(new Date().toTimeInputValue());
});

/*Export to .csv*/
function exportTableToCSV(html, filename) {
    var csv = [];
    var data = document.querySelectorAll("input");

    for(var i = 0; i < data.length; i++){
        csv.push(data[i].value);
    }

    // download csv file
    downloadCSV(csv.join("\n"), filename);
}

/*download to csv function*/
function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

    if (window.Blob == undefined || window.URL == undefined || window.URL.createObjectURL == undefined) {
        alert("Your browser doesn't support Blobs");
        return;
    }

    csvFile = new Blob([csv], {type:"text/csv"});
    downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

