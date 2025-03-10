import "../styles/main.css";


function gridCellDimensions() {
    const element = document.createElement("div");
    element.style.position = "fixed";
    element.style.height = "var(--line-height)";
    element.style.width = "1ch";
    document.body.appendChild(element);
    const rect = element.getBoundingClientRect();
    document.body.removeChild(element);
    return { width: rect.width, height: rect.height };
  }
  

  function adjustMediaPadding() {
    const cell = gridCellDimensions();
  
    function setHeightFromRatio(media, ratio) {
        const rect = media.getBoundingClientRect();
        const realHeight = rect.width / ratio;
        const diff = cell.height - (realHeight % cell.height);
        media.style.setProperty("padding-bottom", `${diff}px`);
    }
  
    function setFallbackHeight(media) {
        const rect = media.getBoundingClientRect();
        const height = Math.round((rect.width / 2) / cell.height) * cell.height;
        media.style.setProperty("height", `${height}px`);
    }
  
    function onMediaLoaded(media) {
      var width, height;
      switch (media.tagName) {
        case "IMG":
          width = media.naturalWidth;
          height = media.naturalHeight;
          break;
        case "VIDEO":
          width = media.videoWidth;
          height = media.videoHeight;
          break;
      }
      if (width > 0 && height > 0) {
        setHeightFromRatio(media, width / height);
      } else {
        setFallbackHeight(media);
      }
    }
  
    const medias = document.querySelectorAll("img, video");
    for (media of medias) {
      switch (media.tagName) {
        case "IMG":
          if (media.complete) {
            onMediaLoaded(media);
          } else {
            media.addEventListener("load", () => onMediaLoaded(media));
            media.addEventListener("error", function() {
                setFallbackHeight(media);
            });
          }
          break;
        case "VIDEO":
          switch (media.readyState) {
            case HTMLMediaElement.HAVE_CURRENT_DATA:
            case HTMLMediaElement.HAVE_FUTURE_DATA:
            case HTMLMediaElement.HAVE_ENOUGH_DATA:
              onMediaLoaded(media);
              break;
            default:
              media.addEventListener("loadeddata", () => onMediaLoaded(media));
              media.addEventListener("error", function() {
                setFallbackHeight(media);
              });
              break;
          }
          break;
      }
    }
  }
  
  adjustMediaPadding();
  window.addEventListener("load", adjustMediaPadding);
  window.addEventListener("resize", adjustMediaPadding);
  
  function checkOffsets() {
    const ignoredTagNames = new Set([
      "THEAD",
      "TBODY",
      "TFOOT",
      "TR",
      "TD",
      "TH",
    ]);
    const cell = gridCellDimensions();
    const elements = document.querySelectorAll("body :not(.debug-grid, .debug-toggle)");
    for (const element of elements) {
      if (ignoredTagNames.has(element.tagName)) {
        continue;
      }
      const rect = element.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) {
        continue;
      }
      const top = rect.top + window.scrollY;
      const left = rect.left + window.scrollX;
      const offset = top % (cell.height / 2);
      if(offset > 0) {
        element.classList.add("off-grid");
        console.error("Incorrect vertical offset for", element, "with remainder", top % cell.height, "when expecting divisible by", cell.height / 2);
      } else {
        element.classList.remove("off-grid");
      }
    }
  }


/* the code starts here */
  
  

var countDownDate = new Date("May 2, 2025 10:30:00").getTime();
  

  var x = setInterval(function() {
  
    var now = new Date().getTime();
  

    var distance = countDownDate - now;
  
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementsByName("days")[0].value = days
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s Untill the battle pass ends";
  
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);

var startingLevel = document.getElementsByName("startingLevel")[0].value
var finalLevel = document.getElementsByName("finalLevel")[0].value
document.getElementsByName("XPEarnedTF")[0].value = false


document.getElementsByName("startingLevel")[0].addEventListener('change', startingLevelAssigning);
document.getElementsByName("finalLevel")[0].addEventListener('change', finalLevelAssigning);
document.getElementsByName("XPEarned")[0].addEventListener('change', XPEarnedAssigning);


function startingLevelAssigning(){
    document.getElementsByName("startingLevel")[0].value = checkNumberRange(Number(document.getElementsByName("startingLevel")[0].value))
    startingLevel = Number(document.getElementsByName("startingLevel")[0].value)
    checkIfStartIsLowerThanFinal()
    distance()
}

function finalLevelAssigning(){
    document.getElementsByName("finalLevel")[0].value = checkNumberRange(Number(document.getElementsByName("finalLevel")[0].value))
    finalLevel = Number(document.getElementsByName("finalLevel")[0].value)
    checkIfStartIsLowerThanFinal()
    distance()
}

function XPEarnedAssigning(){
    var XPEarned = Number(document.getElementsByName("XPEarned")[0].value)
    if(XPEarned === 0) document.getElementsByName("XPEarnedTF")[0].value = false;
    else document.getElementsByName("XPEarnedTF")[0].value = true;
    distance()
    
}

function checkIfStartIsLowerThanFinal(){
    if(startingLevel >= finalLevel){
        finalLevel = Number(startingLevel) + 1
        document.getElementsByName("finalLevel")[0].value = finalLevel
        if(finalLevel > 200){
            finalLevel = 200
            document.getElementsByName("finalLevel")[0].value = finalLevel
        }
        console.log("new start is: "+ startingLevel +" and new final is: "+finalLevel)
    }
}

function checkNumberRange(object){
    if(object > 200){
        return object = 200
    }else if(object < 1){
        return object = 1
    }else return object
}

function distance(){
    if(document.getElementsByName("XPEarnedTF")[0].value === false){
var BPdistance = finalLevel - startingLevel
document.getElementById('BPDistance').innerHTML = "Distance : " + BPdistance.toLocaleString()
var XPneeded = Number(BPdistance) * 80000
document.getElementById('BPXPneeded').innerHTML = "you need : " + (Number(XPneeded)).toLocaleString() +" XP"   
var XPperDay = Math.floor(XPneeded/Number(document.getElementsByName("days")[0].value))
document.getElementById('BPDaysNeeded').innerHTML = "That is : "+XPperDay.toLocaleString()+" XP in "+(Number(document.getElementsByName("days")[0].value)).toLocaleString()+" Days"
}else if(document.getElementsByName("XPEarnedTF")[0].value === true){
var BPdistance = finalLevel - startingLevel
document.getElementById('BPDistance').innerHTML = "Distance : " + BPdistance.toLocaleString()
var XPneeded = Number(BPdistance) * 80000
document.getElementById('BPXPneeded').innerHTML = "you need : " + (Number(XPneeded)).toLocaleString() +" XP"   
var XPperDay = Number(document.getElementsByName("XPEarned")[0].value)
var days = Math.floor(XPneeded/XPperDay)
document.getElementById('BPDaysNeeded').innerHTML = "That is : "+XPperDay.toLocaleString()+" XP in "+days.toLocaleString()+" Days"
if(days > Number(document.getElementsByName("days")[0].value)) document.getElementById('BPWillMakeIt').innerHTML = "You will Not make it"
else document.getElementById('BPWillMakeIt').innerHTML = "You will make it"

}}