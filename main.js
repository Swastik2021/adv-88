var canvas= new fabric.Canvas("myCanvas");
block_img_width= 30;
block_img_height= 30;
player_x=10;
player_y=10;
var player_object ="";
var block_img_obj ="";
function player_update(){
fabric.Image.fromURL("player.png", function(Img){
    player_object= Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
    })
    canvas.add(player_object);
})
}
function new_image(get_img){
    fabric.Image.fromURL(get_img, function(Img){
        block_img_obj= Img;
        block_img_obj.scaleToWidth(block_img_width);
        block_img_obj.scaleToHeight(block_img_height);
        block_img_obj.set({
            top:player_y,
            left:player_x
        })
        canvas.add(block_img_obj);
    })
    }
window.addEventListener("keydown", my_keydown)

function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '80' && e.shiftKey==true){
        console.log("shift and p pressesd together");
        block_img_width= block_img_width+10;
        block_img_height=block_img_height+10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if (keypressed == '77' && e.shiftKey==true){
        console.log("shift and p pressesd together");
        block_img_width= block_img_width-10;
        block_img_height=block_img_height-10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if (keypressed == '87' ){
        console.log("w");
       new_image("wall.jpg");
    }
    if (keypressed == '71' ){
        console.log("g");
       new_image("ground.png");
    }
    if (keypressed == '76' ){
        console.log("l");
       new_image("light_green.png");
    }
    if (keypressed == '84' ){
        console.log("t");
       new_image("trunk.jpg")
    }
    if (keypressed == '82' ){
        console.log("r");
       new_image("roof.jpg")
    }
    if (keypressed == '89' ){
        console.log("y");
       new_image("yellow_wall.png")
    }
    if (keypressed == '68' ){
        console.log("d");
       new_image("dark_green.png")
    }
    if (keypressed == '85' ){
        console.log("u");
       new_image("unique.png")
    }
    if (keypressed == '67' ){
        console.log("c");
       new_image("cloud.jpg")
    }
    if (keypressed == '38'){
        console.log("up");
        up();
    }
    if (keypressed == '40'){
        console.log("down");
        down();
    }
    if (keypressed == '37'){
        console.log("left");
        left();
    }
    if (keypressed == '39'){
        console.log("right");
        right();
    }
}
function up() {
    if ( player_y>=0){
        player_y=player_y-block_img_height;
        console.log("block img height ="+ block_img_height);
        console.log("when up arrow is pressed x=" + player_x + " y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down() {
    if ( player_y<=500){
        player_y=player_y+block_img_height;
        console.log("block img height ="+ block_img_height);
        console.log("when down arrow is pressed x=" + player_x + " y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left() {
    if ( player_x>=0){
        player_x=player_x-block_img_width;
        console.log("block img width ="+ block_img_width);
        console.log("when left arrow is pressed x=" + player_x + " y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right() {
    if ( player_x<=850){
        player_x=player_x+block_img_width;
        console.log("block img width ="+ block_img_width);
        console.log("when right arrow is pressed x=" + player_x + " y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}