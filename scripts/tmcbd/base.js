//
//
//
sCB = "cardback.jpg";	// cardback
sCS = "133px";	// card size on appear
aRndCrds = populateArray(aRndCrds);
aRndCrds = shuffle(aRndCrds);

for (i=0; i<iImgs; i++) {
	oImg =  aImgs[i];
	dragElement(oImg);
	placeElement(iImgs,i,oImg);
}
