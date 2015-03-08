function displayOutput1() {
    var userName = document.getElementById("userInput1").value;
    if (userName.length === 0) {
        alert("Please enter a valid input");
        return;
    }
   document.getElementById("player1").innerHTML = userName;
}

function displayOutput2() {
    var userName = document.getElementById("userInput2").value;
    if (userName.length === 0) {
        alert("Please enter a valid input");
        return;
    }
   document.getElementById("player2").innerHTML = userName;
}

$(document).ready(function() {
    $("h1").hover(function() {
        $(".hide1").fadeOut(1500); 
    },
    function() {
        $(".hide2").fadeIn(1000);
    });
    
    $("button").click(function() {
        $(".hide2").fadeOut(1000);
        $("#player1").fadeIn(500);
        $("#player2").fadeIn(500);
        $(".hide3").fadeIn(3000);
    });
    
});
