function clickbild(event){
    // overlay div geholt und in variable gespeichert
   let overlay = document.querySelector(".overlay")
   overlay.classList.toggle("hide")
//    klasse hide hinzugefügt oder genommen
   let kind = document.querySelector(".overlay img")
   if (kind){
    overlay.removeChild(kind)
   }
//    selektieren das bild innerhalb des overlays, wenn es existiert, wenn es da ist wird es gelöscht
let bild = document.createElement("img")
bild.src = event.target.src
console.log(bild)
overlay.appendChild(bild)
bild.addEventListener("click", clickbild)
// erzeugen neues bild nach pfad, bild wird in den overlay container angehangen -- onclick funktion sobald geklickt wird

    
    
}