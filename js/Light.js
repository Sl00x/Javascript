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