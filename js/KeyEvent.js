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