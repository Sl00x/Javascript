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
function AimbientLigh(color){
    this.light = new THREE.AmbientLight( color ); 
    this.Create = function(){
        this.light.castShadow = true;
        scene.add( this.light );
    }
}

function PointLight(x,y,z, color, intensity, distance){
    this.light = new THREE.PointLight( color, intensity, distance );
    this.light.position.set( x, y, z );
    this.Create = function(){
        this.light.castShadow = true;
        scene.add( this.light );
    }
}