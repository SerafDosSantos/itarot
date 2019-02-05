
function populateArray(aCrds) {
	for (var j=1;j<=22;j++) {
		aCrds.push("../tmcbd/w300px/A"+j+".jpg");
	}
	for (var i=1;i<=14;i++) {
		aCrds.push("../tmcbd/w300px/S"+i+".jpg");
		aCrds.push("../tmcbd/w300px/C"+i+".jpg");
		aCrds.push("../tmcbd/w300px/W"+i+".jpg");
		aCrds.push("../tmcbd/w300px/D"+i+".jpg");
	}
	return aCrds;
}
