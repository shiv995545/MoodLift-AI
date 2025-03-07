/* Section Hide and Show */

function showDis() {
  document.getElementById("disDiv").style.display = "block";
}
function showCon() {
  document.getElementById("conDiv").style.display = "block";
}
function hideCon() {
  setTimeout(function () {
    document.getElementById("conDiv").style.display = "none";
  }, 10000);
}
function hideDis() {
  setTimeout(function () {
    document.getElementById("disDiv").style.display = "none";
  }, 10000);
}

/* Iframe Handling */

function myChatbot() {
    document.getElementById("main-frame").src = "Chatbot/chatbot.html";
}
function myVidcall() {
    document.getElementById("main-frame").src = "Videocall/index.html";
}
function myRead() {
    document.getElementById("main-frame").src = "Discover/read.html";
}
function myWatch() {
    document.getElementById("main-frame").src = "Discover/watch.html";
}
function myListen() {
    document.getElementById("main-frame").src = "Discover/listen.html";
}
function mySketch() {
    document.getElementById("main-frame").src = "Canvas/index.html";
}
function myStories() {
    document.getElementById("main-frame").src = "Connect/stories.html";
}