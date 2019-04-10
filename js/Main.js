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
    