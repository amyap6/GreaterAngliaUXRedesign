function showTrain() {
    var x = document.getElementById("trainForm");
    var y = document.getElementById("stationForm");
    x.style.display = "block";
    y.style.display = "none";
}

function showStation() {
    var x = document.getElementById("stationForm");
    var y = document.getElementById("trainForm");
    x.style.display = "block";
    y.style.display = "none";
}

function otherFormField(){
    var field = document.getElementById('describe')
    field.prop('required', true)
}

function otherFormField2(){
    var field2 = document.getElementById('describe2')
    field2.prop('required', true)
}