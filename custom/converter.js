exports.rgbToHex = function(red, green, blue) {

  var redHex   = red.toString(16);
  var greenHex = green.toString(16);
  var blueHex  = blue.toString(16);

  var retValue = pad(redHex) + pad(greenHex) + pad(blueHex);
  
  //console.log(retValue);
  return retValue;

};

function pad(hex) {
  return (hex.length === 1 ? "0" + hex : hex);
}

exports.hexToRgb = function(hexVal) {

	var R = hexToR(hexVal);
	var G = hexToG(hexVal);
	var B = hexToB(hexVal);

	var arr = [];
	arr.push(R);
	arr.push(G);
	arr.push(B);

	//console.log(arr);
	return arr;

};

function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16);}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16);}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16);}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h;}