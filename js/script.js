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
        $(".hide2").delay(500).fadeIn(1000);
    });

    $("#submitButton1").click(function() {
        $("#userInput1").hide();
        $("#submitButton1").hide();
    })

    $("#submitButton2").click(function() {
        $("#userInput2").hide();
        $("#submitButton2").hide();
    })
    
    $("button").click(function() {
        $(".hide2").fadeOut(500);
        $("#player1").fadeIn(500);
        $("#player2").fadeIn(500);
        $(".hide3").fadeIn(500);
        $(".hide4").delay(10000).fadeIn(500);
    });

    $("#newPhrase").click(function() {
        $("button").html(initialize());
    });
    
});
