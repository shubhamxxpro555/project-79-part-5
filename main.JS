menu_list_array = ["Peppy Paneer","Mexican Green Wave","Deluxe Veggie","Veg Paneer Chill","PEPPER BARBECUE & ONION"];
function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>";
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>';
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>";
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<div class="card">'+'<img src="pizzaimg.png" style="width: 100px; height:80px;"/>'+menu_list_array[i]+'</div>';
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
}