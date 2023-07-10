const female = document.getElementById("female");
const headline1 = document.getElementById("headline1");
const headline2 = document.getElementById("headline2");
const subheadline = document.getElementById("subheadline");
const learnMore = document.getElementById("learnMore");
const logo = document.getElementById("logo");
const replay = document.getElementById("replay");

let repeat = "";

function onLoadFemale() {
  female.style.opacity = "1";
  female.style.transition = "0.4s";
}

function removeFemale() {
  female.style.opacity = 0;
  female.style.transition = "0.5s";
}

function onLoadHeadline1() {
  headline1.style.marginLeft = "0vh";
}

function removeHeadline1pop() {
  headline1.style.Width = "105vh";
  headline1.style.transition = "0.2s";
  headline1.style.transform = "scale(1.2)";
}

function removeHeadline1shrink() {
  headline1.style.transform = "scale(0)";
  headline1.style.transition = "0.3s";
}

function onLoadHeadline2() {
  headline2.style.marginLeft = "0vh";
}

function onLoadSubheadline() {
  subheadline.style.opacity = "1";
  subheadline.style.transition = "0.4s";
}

function learnMoreShow() {
  learnMore.style.opacity = "1";
  learnMore.style.transition = "0.5s";
}

function onLoadLogo() {
  logo.style.left = "55vw";
  logo.style.transition = "1.2s";
}

function onLoadReplay() {
  replay.style.opacity = "1";
  replay.style.transition = "0.4s";
}

function replayFunction() {
  window.location.reload();
  console.log("Hey");
}

replay.addEventListener("click", replayFunction);

onLoadHeadline1();
onLoadFemale();
setTimeout(removeFemale, 3000);
setTimeout(removeHeadline1pop, 3300); //here release headline2
setTimeout(removeHeadline1shrink, 3600);

setTimeout(onLoadHeadline2, 2800);
setTimeout(onLoadSubheadline, 4200);
setTimeout(learnMoreShow, 4800);
setTimeout(onLoadLogo, 5000);

setTimeout(onLoadReplay, 6200);
