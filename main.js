
 
function preload() {

	
	mario_gameover = loadSound("gameover.wav");
	mario_jump = loadSound("jump.wav")
	mario_coin = loadSound("coin.wav")
	mario_kick = loadSound("kick.wav")
	mario_die =  loadSound("mariodie.wav")
    world_start = loadSound("world_start.wav")
	
	setSprites();
	MarioAnimation();
    
}

function setup() {

//-----------CREA TU LIENZO CON MEDIDAS 1240 X 336 --------------------------
canvas=createCanvas(1240,336);
instializeInSetup(mario);

//---------------CARGA TU LIENZO EN UN DIV PARA PODER VERLO ----------------
canvas.parent('lienzo')



//---------------CARGA TU CAMARA CON VIDEO Y PONLE EL TAMAÑO DEL LIENZO ------------
video=createCapture(VIDEO);
video.size(800,400);

//---------------CARGA LA CÁMARA SOBRE UN DIV PARA VERLA -------------------
video.parent('camaraenconsola');


//---------------CARGA Y ACTIVA EL MODELO POSENET PARA QUE DETECTE TU NARIZ-----------------
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);



}


//-------COMPLETA LA FUNCION DE MODELO CARGADO ------------

function modelLoaded() 
{
	console.log("modelocargado");
}



//------------CREA LA FUNCIÓN gotPoses PARA LEER LA POSICION DE LA NARIZ --------------

function gotPoses(results)
{
if(results.length>0){
	noseX=results[0].pose.nose.x;
	noseY=results[0].pose.nose.y;
}
}
   

function draw() 
{
	game();
}





