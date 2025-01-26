let compteur=1;

function moveright() {
    let doc = document.getElementById("barreblancheid");
    let liste=document.getElementById("carousselimage");

    // Récupérer la largeur actuelle de la barre (en pixels)
    let val = doc.style.width;
    let valpxliste=-(compteur*430);

    // Si la largeur est vide (au premier chargement), la mettre à "0%"
    if (val === "") {
        val = "0%";
        doc.style.width = val;
    }

    let valNumber = parseFloat(val);

    // Si la largeur est inférieure à 100%, on ajoute 20%
    if (compteur < 6) {
        let newVal = valNumber + 20;
        doc.style.width = newVal + '%'; // On applique la nouvelle largeur en pixels
        liste.style.left=(valpxliste-430)+"px";
        compteur++;
        console.log(compteur);
    } else {
        console.log("pas possible de défiler plus");
    }
}

function moveleft(){
    let doc = document.getElementById("barreblancheid");
    let liste=document.getElementById("carousselimage");

    // Récupérer la largeur actuelle de la barre (en pixels)
    let val = doc.style.width;
    let valpxliste=-(compteur*430);

    // Si la largeur est vide (au premier chargement), la mettre à "0%"
    if (val === "") {
        val = "0%";
        doc.style.width = val;
    }

    let valNumber = parseFloat(val);

    // Si la largeur est superieur à 0%, on soustrait 20%
    if (compteur >= 2) {
        let newVal = valNumber - 20;
        doc.style.width = newVal + '%'; // On applique la nouvelle largeur en pixels
        liste.style.left=(valpxliste+430)+"px";
        compteur--;
    } else {
        console.log("pas possible de défiler moins");
    }
}
