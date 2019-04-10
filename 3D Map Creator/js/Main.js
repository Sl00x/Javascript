/*
    __  ___          __        ____           _____ ______  ____      
   /  |/  /___ _____/ /__     / __ )__  __   / ___// / __ \/ __ \_  __
  / /|_/ / __ `/ __  / _ \   / __  / / / /   \__ \/ / / / / / / / |/_/
 / /  / / /_/ / /_/ /  __/  / /_/ / /_/ /   ___/ / / /_/ / /_/ />  <  
/_/  /_/\__,_/\__,_/\___/  /_____/\__, /   /____/_/\____/\____/_/|_|  
   ___   ____ _______            /____/                               
  |__ \ / __ <  / __ \                                                
  __/ // / / / / /_/ /                                                
 / __// /_/ / /\__, /                                                 
/____/\____/_//____/    

Project : 3D Map Builder
Version: 1.0
Author: Alexis QUENNEHEN - Sl00x
Date : 10/04/2019
                                                                      
*/
var scene = new THREE.Scene();

var renderer = new Renderer('dodgerblue');


var player = new Player();

var Aimbient = new AimbientLigh(0xffffff);
Aimbient.Create();

var Point = new PointLight(0,50,0,0xffffff, 0.5, 10000);
Point.Create();

var PixelImg = new getPixel("Map/map.png", [10,10]);

function Update(){
	player.move();
}

var animate = function () {
	requestAnimationFrame( animate );	
	Update();
	renderer.Update(scene, player.Camera());
};
    