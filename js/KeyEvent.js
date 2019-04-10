window.addEventListener('keydown', function(e){
    console.log("KeyDown: " + e.keyCode)
    if(e.key == 'z'){
        player.goTo.front = true;
    }
    if(e.key == 'q'){
        player.goTo.left = true;
    }
    if(e.key == 's'){
        player.goTo.back = true;
    }
    if(e.key == 'd'){
        player.goTo.right = true;
    }
    if(e.keyCode == 38){
        player.goTo.up = true;
    }
    if(e.keyCode == 40){
        player.goTo.down = true;
    }
});

window.addEventListener('keyup', function(e){
    if(e.key == 'z'){
        player.goTo.front = false;
    }
    if(e.key == 'q'){
        player.goTo.left = false;
    }
    if(e.key == 's'){
        player.goTo.back = false;
    }
    if(e.key == 'd'){
        player.goTo.right = false;
    }
    if(e.keyCode == 38){
        player.goTo.up = false;
    }
    if(e.keyCode == 40){
        player.goTo.down = false;
    }
});