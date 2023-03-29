const blue = document.querySelector(".blue");
// const red = document.getElementsByClassName("red");
const orange = document.querySelector(".orange");
const purple = document.querySelector(".purple");
const top_band = document.querySelector(".top__middle");
const bottom_band = document.querySelector(".bottom__middle");

document.getElementsByClassName("red").addEventListener("click", changeToRed());

function changeToRed(){
    top_band.style.background = "red";
    bottom_band.style.background = "red";
    console.log("red");
}