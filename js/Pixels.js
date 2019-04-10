var pixels = []
var scale = {x: 0, y: 0};
function getPixel(url, size) {
    
    this.isLoaded = false;
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var sticky = new Image();
    sticky.src = "Map/map.png";
 
    sticky.onload = function() {
        context.drawImage(sticky, 0, 0);
        pixels = context.getImageData(0, 0, sticky.width, sticky.height).data;
        setup();
        this.isLoaded = true;
        scale.x = sticky.width;
        scale.y = sticky.height;
    };
}
function isBlack(color){
    if(color[0] == 0 && color[1] == 0 && color[2] == 0){
        return true;
    }
    return false;
}
function setup(){
    var x = 0;
    var z = 0;
    var y = 0;
    var color = 'null';
    for(var i = 0; i < pixels.length; i += 4){
        if(i != 0 && i % (4 * 90) == 0) {
            z++;
            x = 0;
        }
        if (pixels[i] < 255 && pixels[i + 1] < 255 && pixels[i + 2] < 255) { 
            y = pixels[i] / 255 * 35;
            
            var height = (255 - pixels[i]);
            if(height <= 40){
                color = "rock";

            } else if(height <= 70){
                color = "sand";

            }  else if(height >70){
                color = "ground";

            }
            else if(height > 200){

                color = "rock";
            }
          
            var cube = new Cube(x, (255 - pixels[i]) / 8, z, color, [1,(255 - pixels[i]) / 8,1]);
            cube.get().position.y = 0 + cube.get().position.y;
            cube.Create();
            
        }
        x++;
    }
    animate();
}