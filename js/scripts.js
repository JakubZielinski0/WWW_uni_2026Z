let interval_id = setInterval(zegar, 1000)
let isZegarRunning = true
const zegarBtn = document.getElementById("zegar-btn")
const motywBtn = document.getElementById("motyw-btn")

function zegar() {
    let text = ""

    text += new Date().getDay() + "." + new Date().getMonth() + "." + new Date().getFullYear() +"   "

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
        zegarBtn.textContent = "Wznów zegar";
        zegarBtn.setAttribute("aria-pressed", "true")
    } else {
        interval_id = setInterval(zegar, 1000)
        isZegarRunning = true
        zegarBtn.textContent = "Zatrzymaj zegar";
        zegarBtn.setAttribute("aria-pressed", "false")
    }
}

motywBtn.addEventListener("click", () => {
    const ciemny = document.body.classList.toggle("dark")
    motywBtn.setAttribute("aria-pressed", String(ciemny))
    motywBtn.textContent = ciemny ? "Jasny motyw" : "Ciemny motyw"
})

const formularz = document.getElementById("formularz")

if (formularz) {
    formularz.addEventListener("submit", (event) => {
        const dataOd = new Date(document.getElementById("data-od").value)
        const dataDo = new Date(document.getElementById("data-do").value)
        const roznica = (dataDo - dataOd) / (1000 * 60 * 60 * 24)

        if (roznica < 3) {
            event.preventDefault()
            document.getElementById("blad").textContent =
                "Data 'do' musi być co najmniej 3 dni po dacie 'od'."
        } else {
            document.getElementById("blad").textContent = ""
        }
    })
}
