// document.querySelector("section").addEventListener("scroll")
//
//
// function drawProgressBar(radius, text) {
//     let svg = document.createElement("svg");
//     let circleBg = document.createElement("circle");
//     let circleProgress = document.createElement("circle");
//
//     circleProgress.r = circleBg.r = `${radius}px`;
//     circleProgress.cx = circleProgress.cy = circleBg.cx = circleBg.cy = `${radius + 5}px`;
// }

let gallery = document.querySelector("div.portfolio-gallery");
gallery.addEventListener("mouseover", (event) =>
    console.log(event.target));