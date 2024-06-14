console.log("VRworld.js boot");
function doorOpen(_doorNum) {
  console.log("door handle clicked");
  console.log(HTML_firstDoor);
  HTML_firstDoor.setAttribute("rotation","0 -90");
  HTML_firstDoor.setAttribute("position", "0.6 0 -5.5")
}