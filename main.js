var canvas=new fabric.Canvas("myCanvas");

player_x=10;
player_y=10;
hero_image_width=30;
hero_image_height=30;

var player_object="";
var hero_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x

    });
    canvas.add(player_object);
    });

   
}

function new_image(get_image ){
    fabric.Image.fromURL(get_image,function(Img){
        hero_image_object=Img;
        hero_image_object.scaleToWidth(hero_image_width);
        hero_image_object.scaleToHeight(hero_image_height);
        hero_image_object.set({
            top:player_y,
            left:player_x

    });
    canvas.add(hero_image_object);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
key_Pressed=e.keyCode;
console.log(key_Pressed);
if(e.shiftKey==true && key_Pressed=="80"){
    console.log("p and shift pressed together");
    hero_image_width=hero_image_width+10;
    hero_image_height=hero_image_height+10;
    document.getElementById("current_width").innerHTML=hero_image_width;
    document.getElementById("current_height").innerHTML=hero_image_height;
}

if(e.shiftKey==true && key_Pressed=="77"){
    console.log("m and shift pressed together");
    hero_image_width=hero_image_width-10;
    hero_image_height=hero_image_height-10;
    document.getElementById("current_width").innerHTML=hero_image_width;
    document.getElementById("current_height").innerHTML=hero_image_height;
}

if(key_Pressed=="38"){
    up();
    console.log("up");
}

if(key_Pressed=="40"){
    down();
    console.log("down");
}

if(key_Pressed=="37"){
    left();
    console.log("left");
}


if(key_Pressed=="39"){
    right();
    console.log("right");
}

if(key_Pressed=="70"){
    new_image("ironman_face.png");
    console.log("f");
}





if(key_Pressed=="66"){
    new_image("spiderman_body.png");
    console.log("b");
}

if(key_Pressed=="67"){
    new_image("captain_america_left_hand.png");
    console.log("c");
}

if(key_Pressed==""){
    new_image("yellow_wall.png");
    console.log("y");
}

if(key_Pressed=="72"){
    new_image("thor_right_hand.png");
    console.log("h");
}

if(key_Pressed=="76"){
    new_image("hulk_legs.png");
    console.log("l");
}

}

function up(){
    if(player_y>=0){
        player_y=player_y-hero_image_height;
        console.log("hero image height="+hero_image_height);
        console.log("when up arrow key is pressed, x= "+player_x+" ,y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y<=500){
        player_y=player_y+hero_image_height;
        console.log("hero image height="+hero_image_height);
        console.log("when down arrow key is pressed, x= "+player_x+" ,y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x>=0){
        player_x=player_x-hero_image_width;
        console.log("hero image width="+hero_image_width);
        console.log("when left arrow key is pressed, x= "+player_x+" ,y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x<=850){
        player_x=player_x+hero_image_width;
        console.log("hero image width="+hero_image_width);
        console.log("when right arrow key is pressed, x= "+player_x+" ,y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}