var dark = document.getElementById("dark");
var white = document.getElementById("white");
var conteudo = document.getElementById("conteudo");
var link = document.getElementById("link");


dark.addEventListener('click', function()
{
    document.getElementById('conteudo').style.backgroundColor = "rgba(0, 0, 0, 0.411)";
    
    document.getElementById('conteudo').style.color = "white";

    document.getElementById('link').style.color = "white";
})


white.addEventListener('click', function (){
    document.getElementById('conteudo').style.backgroundColor = "White";

    document.getElementById('conteudo').style.color= "black";

    document.getElementById('link').style.color = "black";
})