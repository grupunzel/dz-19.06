$('#form2').hide();
$('#form1').show();

function check() {
    let elem = document.getElementById("name").value;
    if (elem.length < 2) {
        alert("The gab Name should contain 2 or more symbols.");
        if (document.getElementById("pass1").value != document.getElementById("pass2").value) {
            alert("Passwords don't match.");
        }
    }
    else {
        alert("You signed up successfully!");
    }
}

function logIn() {
    $('#form1').hide();
    $('#form2').show();
}

function returnToPreviousPage() {
    $('#form2').hide();
    $('#form1').show();
}