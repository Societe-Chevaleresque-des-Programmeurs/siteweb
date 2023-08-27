var events = document.getElementsByClassName("event"); // tous les événements à venir
var len = events.length;
function moveCarousel(event) {
    if (event.target.classList.contains("avant") && len < events.length) {
        for (let e of events) {
            e.style.transform += "translateX(16.5em)";
        }
        len++;
    }

    if (event.target.classList.contains("apres") && len != 1) { // event "apres"
        for (let e of events) {
            e.style.transform += "translateX(-16.5em)";
        }
        len--;
    }
   
    event.target.classList.contains("avant").disabled = true;
    event.target.classList.contains("apres").disabled = len != 1 ? false : true;
}