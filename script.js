var btn = $("#btn");
var box = $("#container");
var html = "<div ></div>";
var color = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick'];

btn.click(function(event){
    box.append('<div class="ball" style="background-color: ' + color[Math.floor(Math.random()*14)] + '"></div>');
    

})
$('#container div').addClass('ball');
