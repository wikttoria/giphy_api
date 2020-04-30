
var api_key = 'zJaLMd0QPeUkihP5tjwUsKDkJmHy6fBi';
var btn = document.querySelector("#btn");
var input = document.querySelector("#search");
var offset 
var select_lang = document.querySelector("#lang");

var req = new XMLHttpRequest();

btn.addEventListener("click", function(event) {
    event.preventDefault();
    show_GIFs();
}); 

function show_GIFs(){

    var q = input.value + '';
    var lang = select_lang.value + '';

    offset = Math.floor(Math.random()*100+1);
    console.log(offset)

    req.onload = function() { 
    if(req.status === 200) { 
        response = JSON.parse(req.responseText);

        var  new_GIFs = '';
        for(i in response.data){
            new_GIFs += '<img src= "'+response.data[i].images.original.url+ '"  />';
            console.log(new_GIFs)
        }

        document.getElementById('container').innerHTML = new_GIFs;
    }
};

    req.open('GET', 'https://api.giphy.com/v1/gifs/search?q='+q+'&api_key='+api_key+'&limit=12&offset='+offset+'&rating=G&lang='+lang, true); 
    req.send();

}


