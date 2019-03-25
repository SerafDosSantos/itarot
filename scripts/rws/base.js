//
//
//
(function () {
	sCB = "1865.jpg";	// cardback

	aRndCrds = populateArray(aRndCrds);
	aRndCrds = shuffle(aRndCrds);

  for (i=0; i<iImgs; i++) {
  	oImg =  aImgs[i];
  	dragElement(oImg);
  	placeElement(iImgs,i,oImg);
  }
})()
