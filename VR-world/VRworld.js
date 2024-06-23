console.log("VRworld.js boot");
function showDevon() {
  devonscareonplayer.setAttribute("visible", "true");
  console.log("jumpscare");
  sleep(2000).then(() => { devonscareonplayer.setAttribute("visible", "false"); });
}
//code from sitepoint.com
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
//end of sitepoint.com code