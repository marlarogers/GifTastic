
$(document).ready(function() {
    console.log("ready!");

var apiKey = "jjHwLUhZ89a44z8PdebNFm3eai8F0Ynn";
var apiResults = "";
lastClick = [];

function callAPI (userInput) {
    fetch('http://api.giphy.com/v1/gifs/search?q=' + userInput + '&api_key=jjHwLUhZ89a44z8PdebNFm3eai8F0Ynn&limit=5')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    var apiResults = myJson.data;
    console.log(apiResults);
    for (var i = 0; i < apiResults.length; i++){
        console.log(apiResults[i]);
            
        var respData = apiResults[i];
        var image = respData.images.fixed_height_still.url;
        var gif = respData.images.fixed_height.url;
        

        var dynDiv = $("<div class='dyn-div'>");

        var animalImg = $("<img class='still-image'>");

        animalImg.attr("src", image);
        animalImg.attr("alt", "frame of gif");
        animalImg.attr("data-gif", gif);
        animalImg.attr("class", "animalImg");
        animalImg.attr("data-index", i);
        animalImg.attr("data-img", image);

        dynDiv.append(animalImg);


        $("#append-img-div").prepend($(dynDiv));
       

    $("#gifs").append("<img src='" + apiResults[i].images.fixed_height_still.url + "'>")    
    }
  });
}


var animals = ["cats", "dogs", "guinea pigs", "pigs", "cows", "rabbits", "wolves"]

function appendButtons () {
    for (var i = 0; i < animals.length; i++) {
        $("#buttons").append("<button class='button'>" + animals[i] + "</button>")
    }
}

appendButtons();


$("#submit").click(function () {
    var userInput = $("#user-input").val().trim();
    console.log(userInput);
    animals.push(userInput);
    $("#buttons").empty();
    $("#gifs").empty();
    appendButtons();
    callAPI(userInput);

    
})


})

//I honestly just can't make sense of this any more. I couldn't get the buttons to be clickable and I could figure out how to utilise appending to make the stills clickable. I feel like I'm on the precipice of getting it together but the most I got was to be able to add the buttons with the user input and search for stills of the user input while clearing the last bit. 

//I feel SUPER close to knowing what to do next, if you could help or offer any tips that would be great!!