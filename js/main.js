setTimeout(function() {
    alert('Vous êtes le 1 000 000e visiteur !!!!!!')
}, 10000);

function changingColors() {
    if(document.body.style.backgroundColor !== "magenta") {
        document.body.style.backgroundColor = "magenta";

    } else {
        document.body.style.backgroundColor = "#fff";
    }

}

function changeTxtButton() {
    let txt = document.getElementById("changingTxtButton").innerHTML;
    if(txt === "Changer le background en magenta") {
        document.getElementById("changingTxtButton").innerHTML = "Revenir à la couleur initiale";
    } else {
        document.getElementById("changingTxtButton").innerHTML = "Changer le background en magenta";
    }
}