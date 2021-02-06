var current_event="";
var last_position_x, last_position_y;
 
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
current_event="mousedown";
 colour= document.getElementById("Colour").value;
 line_width= document.getElementById("linewidth").value;
 radius= document.getElementById("radius").value;

}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){

    
    current_position_x=e.clientX-canvas.offsetLeft;
    current_position_y=e.clientY-canvas.offsetTop;

    
    if (current_event=="mousedown"){
    
     
     console.log("last_position_of_x=" + last_position_x + "last_position_of_y=" + last_position_y);
     ctx.moveTo(last_position_x, last_position_y);
     console.log("current_position_of_x=" + current_position_x + "current_position_of_y=" + current_position_y);
     ctx.lineTo(current_position_x, current_position_y);
     ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=line_width;
ctx.arc(current_position_x, current_position_y, radius, 0, 2*Math.PI);
ctx.stroke();

     


    }
last_position_x= current_position_x;
last_position_y= current_position_y;

}

canvas.addEventListener("mouseleave", my_mouse_leave);

function my_mouse_leave(e){

    current_event="mouseleave";
}

canvas.addEventListener("mouseup" ,my_mouse_up);

function my_mouse_up(e){

    current_event="mouseup";
}

function cleararea(){
    ctx.clearRect( 0, 0, canvas.width, canvas.height);
    }