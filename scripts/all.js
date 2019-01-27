
function populateArray(aCrds) {
	for (var j=1;j<=22;j++) {
		aCrds.push("../rws/w300px/A"+j+".jpg");
	}
	for (var i=1;i<=14;i++) {
		aCrds.push("../rws/w300px/S"+i+".jpg");
		aCrds.push("../rws/w300px/C"+i+".jpg");
		aCrds.push("../rws/w300px/W"+i+".jpg");
		aCrds.push("../rws/w300px/D"+i+".jpg");
	}
	return aCrds;
}
