let flight = document.getElementById("activate-flight")

flight.addEventListener("click", function (fly) {
    flight.classList.toggle("enabled")
})

let Mind = document.getElementById("activate-mindreading")

Mind.addEventListener("click", function (mind) {
    Mind.classList.toggle("enabled")
})

let xray = document.getElementById("activate-xray")

xray.addEventListener("click", function (Xray) {
    xray.classList.toggle("enabled")
})

let allon = document.getElementById("activate-all")

allon.addEventListener("click", function (allon) {
    xray.classList.toggle("enabled")
    Mind.classList.toggle("enabled")
    flight.classList.toggle("enabled")
})

let aloff = document.getElementById("deactivate-all")

aloff.addEventListener("click", function (aloff) {
    xray.classList.toggle("disabled" )
    xray.classList.remove("enabled" )

    Mind.classList.remove("enabled" )
    Mind.classList.toggle("disabled")
    flight.classList.remove("enabled" )
    flight.classList.toggle("disabled")
})

