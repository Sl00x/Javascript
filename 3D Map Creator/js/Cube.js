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

function Cube(x,y,z, color, size){
    this.size = new THREE.BoxGeometry( size[0], size[1], size[2] );

    var texture = new THREE.TextureLoader().load( "textures/"+color+".png" );
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 10, size[1] * 10 );

    this.material = new THREE.MeshPhongMaterial({ 
    map: texture, side : THREE.DoubleSide}),
    new THREE.MeshPhongMaterial({ map: texture, side : THREE.DoubleSide}),
    new THREE.MeshPhongMaterial({ map: texture, side : THREE.DoubleSide}),
    new THREE.MeshPhongMaterial({ map: texture, side : THREE.DoubleSide}),
    new THREE.MeshPhongMaterial({ map: texture, side : THREE.DoubleSide}),
    new THREE.MeshPhongMaterial({ map: texture, side : THREE.DoubleSide}),
    this.cube = new THREE.Mesh( this.size, this.material );
    this.cube.castShadow = true;
    this.cube.receiveShadow = false;
    this.goTo = {
        left: false,
        right: false,
        front: false,
        back: false,
    };

    this.move = function(){
        if(this.goTo.left){
            this.cube.position.x -= this.statistics.speed;
        }
        if(this.goTo.right){
            this.cube.position.x += this.statistics.speed;
        }
        if(this.goTo.front){
            this.cube.position.z -= this.statistics.speed;
        }
        if(this.goTo.back){
            this.cube.position.z += this.statistics.speed;
        }
    }
    
    this.Create = function(){
        this.cube.position.x = x;
        this.cube.position.y = y;
        this.cube.position.z = z;
        scene.add(this.cube);
    }
    this.Destroy = function(){
        scene.remove(this.cube);
    }
    this.get = function(){
        return this.cube;
    }

}