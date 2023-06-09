var canvas= new fabric.Canvas("myCanvas")

blockImageWidth=30;

blockImageHeight=30;

player_x = 10;

player_y = 10;

var playerObject = ""
var blockImageObject=""

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(img){
    playerObject=img;
    playerObject.scaleToWidth(150)
    playerObject.scaleToHeight(150)
    playerObject.set({
        top:player_y, left:player_x
    })
    canvas.add(playerObject)
})
}


function newImage(getImage){
    fabric.Image.fromURL(getImage, function(img){
        blockImageObject=img;
        blockImageObject.scaleToWidth(blockImageWidth)
        blockImageObject.scaleToHeight(blockImageHeight)
        blockImageObject.set({
            top:player_y, left:player_x
        })
        canvas.add(blockImageObject)
    })
}

window.addEventListener("keydown",my_keydown)

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed)
    if(e.shiftKey == true && keyPressed == "65"){
       blockImageWidth = blockImageWidth+10;
       blockImageHeight = blockImageHeight+10;
       document.getElementById("current_width").innerHTML=blockImageWidth;
       document.getElementById("current_height").innerHTML=blockImageHeight;
    }

    if(e.shiftKey == true && keyPressed == "83"){
        blockImageWidth = blockImageWidth-10;
        blockImageHeight = blockImageHeight-10;
        document.getElementById("current_width").innerHTML=blockImageWidth;
        document.getElementById("current_height").innerHTML=blockImageHeight;
    }

    if(keyPressed == "38"){
        up()
    }
    if(keyPressed == "40"){
        down()
    }
    if(keyPressed == "37"){
        left()
    }
    if(keyPressed == "39"){
        right()
    }

    if(keyPressed == "87"){
        newImage("wall.jpg")
    }

    if(keyPressed == "71"){
        newImage("ground.png")
    }
    
    if(keyPressed == "76"){
        newImage("light_green.png")
    }

    if(keyPressed == "84"){
        newImage("trunk.jpg")
    }

    if(keyPressed == "82"){
        newImage("roof.jpg")
    }

    if(keyPressed == "89"){
        newImage("yellow_wall.png")
    }

    if(keyPressed == "68"){
        newImage("dark_green.png")
    }
    

    if(keyPressed == "85"){
        newImage("unique.png")
    }
    
    if(keyPressed == "67"){
        newImage("cloud.jpg")
    }
}

function up(){
    if(player_y>=0){
        player_y=player_y-blockImageHeight
        canvas.remove(playerObject)
        playerUpdate()
    }
}

function down(){
    if(player_y<=600){
        player_y=player_y+blockImageHeight
        canvas.remove(playerObject)
        playerUpdate()
    }
}

function right(){
    if(player_x<=1000){
        player_x=player_x+blockImageWidth
        canvas.remove(playerObject)
        playerUpdate()
    }
}

function left(){
    if(player_x>=0){
        player_x=player_x-blockImageWidth
        canvas.remove(playerObject)
        playerUpdate()
    }
}