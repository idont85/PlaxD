const header = document.getElementById("header");
const cPSCounter = document.getElementById("cPSCounter");
const cpsDisp = document.getElementById("cpsDisp");
const secsDisp = document.getElementById("secsDisp");

let clicks = 0;
let dS = 0;
const dSLimit = 100;
let cPS = 0;
let pastCPS = 0;

let secsElapsed;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function initScaleAnim() {
    cpsDisp.classList.add("scale1-anim");
    sleep(100).then(() => {
        cpsDisp.classList.remove("scale1-anim");
    });
}

function sliceCPSStr() {
    cPS = clicks / (dS / 10);
    if (cPS < 10) {
        cPS = cPS.toString().slice(0, 3);
    } else {
        cPS = cPS.toString().slice(0, 4);
    }
    if (cPS.slice(-1) === ".") {
        cPS = cPS.slice(0, -1);
    }

    return cPS;
}

function crtAndAppRstBtn() {
    const reset = document.createElement("p");
    reset.setAttribute("id", "reset");
    reset.style.marginTop = "-10px"
    reset.classList.add("fade-in-anim");
    reset.innerHTML = "<p>↻</p>";
    cPSCounter.appendChild(reset);
    sleep(3000).then(() => {
        cPSCounter.setAttribute("onclick", "location.reload();");
    });
}

function incrementSecs() {
    if (dS < dSLimit) {
        dS++;

        cpsDisp.innerHTML = sliceCPSStr();
        secsDisp.innerHTML = dS / 10 + "s";
    } else {
        crtAndAppRstBtn()
        header.innerHTML = "CPS:" + cPS;
        cpsDisp.innerHTML = "";
        secsDisp.innerHTML = "";

        clearInterval(secsElapsed);

        header.classList.add("scale1-anim");
        sleep(100).then(() => {
            cpsDisp.classList.remove("scale1-anim");
        });
    }
}

function countCPS() {
    if (clicks === 0) {
        secsDisp.innerHTML = dS;
        secsElapsed = setInterval(incrementSecs, 100);
    }

    if (dS < dSLimit) {
        cPSCounter.classList.add("btn-click-p1-anim");
        cpsDisp.classList.add("btn-click-p2-anim");
        sleep(100).then(() => {
            cPSCounter.classList.remove("btn-click-p1-anim");
            cpsDisp.classList.remove("btn-click-p2-anim");
        });

        clicks++;
    }
}