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
function Renderer(color){
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(color);
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.renderer.shadowMapEnabled = true;
    this.renderer.shadowMap.type = THREE.BasicShadowMap;
    document.body.appendChild( this.renderer.domElement );
    this.Update = function(scenes, cam){
        this.renderer.render( scenes, cam );
    }
    
}