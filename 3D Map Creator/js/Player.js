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
function Player(){
    this.collideBox = new THREE.Box3();
    this.goTo = {
        left: false,
        right: false,
        front: false,
        back: false,
        up: false,
        down: false,

        rotate: {
            left: false,
            right: false,
        },
    };
    this.statistics = {
        speed: 0.1,
        healt : 100,
        rotationSpeed: 0.5,
    };
    this.player = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    this.player.position.y = 2;
    this.collideBox.setFromCenterAndSize( new THREE.Vector3( 0, 0, 1 ), new THREE.Vector3( 1, 1, 1 ) );
    this.Camera = function(){
        return this.player;
    };
    this.move = function(){
        if(this.goTo.left){
            this.player.position.x -= Math.cos(this.player.rotation.y);
            this.player.position.z -= Math.sin(this.player.rotation.y);
        }
        if(this.goTo.right){
            this.player.position.x += Math.cos(this.player.rotation.y);
            this.player.position.z += Math.sin(this.player.rotation.y);
        }
        if(this.goTo.front){
            this.player.position.z -= Math.cos(this.player.rotation.y);
            this.player.position.x -= Math.sin(this.player.rotation.y);
        }
        if(this.goTo.back){
            this.player.position.z += Math.cos(this.player.rotation.y);
            this.player.position.x += Math.sin(this.player.rotation.y);
        }
        if(this.goTo.up){
            this.player.position.y += 1;
        }
        if(this.goTo.down){
            this.player.position.y -= 1;
        }
        if(this.goTo.rotate.left){
            this.player.rotation.y -= this.statistics.rotationSpeed;
        }
        if(this.goTo.rotate.right){
            this.player.rotation.y += this.statistics.rotationSpeed;
        }
    };

    this.BoxColliderHelper = function(bool){
        if(bool){
            var helper = new THREE.Box3Helper( this.collideBox, 'red' );
            scene.add( helper );
        }
    }
}