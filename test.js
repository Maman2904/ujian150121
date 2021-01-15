
function cetakField(a) {
   
    var field = ""
    for (var i = 0; i < a; i++) {
        field += "<input type='text id='fieldId'>";
    }

    document.getElementById('matrix1').innerHTML = field;
    document.getElementById('matrix2').innerHTML = field;
    document.getElementById('hasil').innerHTML = field;
}


function tambahan (){
    var a = parseInt(document.getElementById("matrik1").value);
    var b = parseInt(document.getElementById("matrik2").value);

    document.getElementById("hasil").value = tambah(a,b);
}

function tambah(a,b){
    return a+b;
}

