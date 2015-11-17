var canvas;
var gl;


function start(){
	canvas = document.getElementById("glcanvas");
	alert("entro1");
	gl = initGL(canvas);
	alert("entro2")

	if (gl) {
		alert("entro3")
		gl.clearColor(0.0,0.0,0.0,1.0);
		gl.clearDepth(1.0);
		gl.enable(gl.DEPTH_TEST);
		gl.depthFunc(gl.LEQUAL);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
		alert("entro4")
	}
}

function initGL(){
	gl = null;
	try{
		alert("entrogl1")
		gl = canvas.getContext("webgl") || canvas.getContext("webgl-experimental");
	} catch (e){}

	if (!gl) {
		alert("Unable to initialise WebGL");
	}
	return gl;
}