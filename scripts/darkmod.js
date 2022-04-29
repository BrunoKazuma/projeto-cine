var dark = document.getElementById("dark");
var white = document.getElementById("white");
var conteudo = document.getElementById("conteudo");
var hello = document.getElementById("hello");
var link = document.getElementsByClassName("link");

dark.addEventListener('click', function()
{
    document.getElementById('conteudo').style.backgroundColor = "rgba(0, 0, 0, 0.411)";
    
    document.getElementById('conteudo').style.color = "white";

    document.getElementById('hello').style.color = "white";


})


white.addEventListener('click', function (){
    document.getElementById('conteudo').style.backgroundColor = "White";

    document.getElementById('conteudo').style.color= "black";

    document.getElementById('hello').style.color = "black";
})