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

/*
<?php
    $keys = array('id_number','first_name');
$csv_line = array();
foreach($keys as $key){
    array_push($csv_line,'' . $_GET[$key]);
}
$fname = 'file_to_write_to.csv';
$csv_line = implode(',',$csv_line);
if(!file_exists($fname)){$csv_line = "\r\n" . $csv_line;}
$fcon = fopen($fname,'a');
$fcontent = $csv_line;
fwrite($fcon,$csv_line);
fclose($fcon);
    ?>

 https://stackoverflow.com/questions/22264375/how-to-export-html-form-to-csv-file
 */


