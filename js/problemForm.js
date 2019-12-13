function showTrain() {
    var x = document.getElementById("trainForm");
    var a = document.getElementById("trainForm2");
    var y = document.getElementById("stationForm");
    var z = document.getElementById("otherForm");
    x.style.display = "block";
    a.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
}

function showStation() {
    var x = document.getElementById("stationForm");
    var a = document.getElementById("stationForm2");
    var b = document.getElementById("trainForm2");
    var y = document.getElementById("trainForm");
    var z = document.getElementById("otherForm");
    x.style.display = "block";
    a.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
    b.style.display = "none";
}

function showOther(){
    var x = document.getElementById("stationForm");
    var y = document.getElementById("trainForm");
    var a = document.getElementById("stationForm2");
    var b = document.getElementById("trainForm2");
    var z = document.getElementById("otherForm");
    z.style.display = "block";
    y.style.display = "none";
    x.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
}

function otherFormField(){
    var field = document.getElementById('describe')
    field.prop('required', true)
}

function otherFormField2(){
    var field2 = document.getElementById('describe2')
    field2.prop('required', true)
}