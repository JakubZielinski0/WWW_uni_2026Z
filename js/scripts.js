let interval_id = setInterval(zegar, 1000)
let isZegarRunning = true

function zegar() {
    let text = ""
    if(new Date().getHours() < 10) {
        text += "0"
    }
    text += new Date().getHours()
    text += ":"

    if(new Date().getMinutes() < 10) {
        text += "0"
    }
    text += new Date().getMinutes()
    text += ":"

    if(new Date().getSeconds() < 10) {
        text += "0"
    }
    text += new Date().getSeconds()

    document.getElementById("zegar").innerHTML = text
}

function reset_zegar() {
    if(isZegarRunning) {
        clearInterval(interval_id)
        isZegarRunning = false
    } else {
        interval_id = setInterval(zegar, 1000)
        isZegarRunning = true
    }
}


const motywBtn = document.getElementById("motyw-btn");

motywBtn.addEventListener("click", () => {
    const ciemny = document.body.classList.toggle("dark");
    motywBtn.setAttribute("aria-pressed", String(ciemny));
    motywBtn.textContent = ciemny ? "Jasny motyw" : "Ciemny motyw";
});
