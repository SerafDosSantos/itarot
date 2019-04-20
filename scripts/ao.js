//
//
//
var aImgsC = document.getElementsByClassName("constellation");
var aImgsP = document.getElementsByClassName("planet");
var aRndCrdsC = new Array();
var aRndCrdsP = new Array();
var iImgsC = aImgsC.length;
var iImgsP = aImgsP.length;
var sCS;	// card size on appear
var sCB;	// cardback
var iMrgnStrt; // margin start
var iCrdMrgn; // card margin

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
		if (elmnt.src.includes(sCB)) {
      if (elmnt.className.includes("planet")) {
        elmnt.src = aRndCrdsP.shift();
      } else {
        elmnt.src = aRndCrdsC.shift();
      }
	  }
		elmnt.style.width = sCS;
		elmnt.style.zIndex = 100;

    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
		// stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function placeElement(iTot,iNdx,oEnt) {
	oEnt.style.left = (iMrgnStrt+iCrdMrgn*iNdx+"px");
	oEnt.style.top = (iMrgnStrt+"px");
}

function pp() {
  return false;
}
