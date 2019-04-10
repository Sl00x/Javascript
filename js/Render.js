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