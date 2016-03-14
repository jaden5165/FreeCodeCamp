var human = "X";
var AI = "O";
var turn = 0;
var a1,a2,a3,b1,b2,b3,c1,c2,c3 = "";

function getValue() {
    a1 = $("#a1").html();
    a2 = $("#a2").html();
    a3 = $("#a3").html();

    b1 = $("#b1").html();
    b2 = $("#b2").html();
    b3 = $("#b3").html();

    c1 = $("#c1").html();
    c2 = $("#c2").html();
    c3 = $("#c3").html();
}

function bingoCheck() {
    //Check for X
    //Row check
    if (a1 == human && a2 == human && a3 == human || b1 == human && b2 == human && b3 == human || c1 == human && c2 == human && c3 == human) {
        // X win
        alert("X win");
    }
    //Column check
    else if (a1 == human && b1 == human && c1 == human || a2 == human && b2 == human && c2 == human || a3 == human && b3 == human && c3 == human) {
        // X win
        alert("X win");
    }
    //Diagonal check
    else if (a1 == human && b2 == human && c3 == human || a3 == human && b2 == human && c1 == human) {
        // X win
        alert("X win");
    }
    //Check for O
    //Row check
    else if (a1 == AI && a2 == AI && a3 == AI || b1 == AI && b2 == AI && b3 == AI || c1 == AI && c2 == AI && c3 == AI) {
        // O win
        alert("O win");
    }
    //Column check
    else if (a1 == AI && b1 == AI && c1 == AI || a2 == AI && b2 == AI && c2 == AI || a3 == AI && b3 == AI && c3 == AI) {
        // O win
        alert("O win");
    }
    //Diagonal check
    else if (a1 == AI && b2 == AI && c3 == AI || a3 == AI && b2 == AI && c1 == AI) {
        // O win
        alert("O win");
    }
    else if (a1 != "" && a2 != "" && a3 != "" && b1 != "" && b2 != "" && b3 != "" && c1 != "" && c2 != "" && c3 != "") {
        alert("DRAW");
    }

}

//Enhance the algorithme in future
function AImove() //AImove copied from other party
{
    debugger;
    if (a1 == "" && ((a3 == "X" && a2 == "X") || (c3 == "X" && b2 == "X") || (c1 == "X" && b1 == "X"))) {
        $('#a1').text("O");
        turn = 0;
    } else {
        if (a2 == "" && ((a1 == "X" && a3 == "X") || (c2 == "X" && b2 == "X"))) {
            $('#a2').text("O");
            turn = 0;
        }
        else{
            if (a3 == "" && ((a1 == "X" && a2 == "X") || (c1 == "X" && b2 == "X") || (c3 == "X" && b3 == "X"))) {
                $('#a3').text("O");
                turn = 0;
            }
            else{
                if (c3 == "" && ((c1 == "X" && c2 == "X") || (a1 == "X" && b2 == "X") || (a3 == "X" && b3 == "X"))) {
                    $('#c3').text("O");
                    turn = 0;
                }
                else{
                    if (c1 == "" && ((c3 == "X" && c2 == "X") || (a3 == "X" && b2 == "X") || (a1 == "X" && b1 == "X"))) {
                        $('#c1').text("O");
                        turn = 0;
                    }
                    else{
                        if (c2 == "" && ((c3 == "X" && c1 == "X") || (a2 == "X" && b2 == "X"))) {
                            $('#c2').text("O");
                            turn = 0;
                        }
                        else{
                            if (b1 == "" && ((b3 == "X" && b2 == "X") || (a1 == "X" && c1 == "X"))) {
                                $('#b1').text("O");
                                turn = 0;
                            }
                            else{
                                if (b3 == "" && ((a3 == "X" && c3 == "X") || (b2 == "X" && b1 == "X"))) {
                                    $('#b3').text("O");
                                    turn = 0;
                                }
                                else{
                                    if (b2 == "" && ((a3 == "X" && c1 == "X") || (c3 == "X" && a1 == "X") || (b3 == "X" && b1 == "X") || (c2 == "X" && a2 == "X"))) {
                                        $('#b2').text("O");
                                        turn = 0;
                                    }
                                    else{ // IF NO OPP TO BLOCK A WIN, THEN PLAY IN ONE OF THESE SQUARES
                                        if (b2 == "") {
                                            $('#b2').text("O");
                                            turn = 0;

                                        }
                                        else{
                                            if (a1 == "") {
                                                $('#a1').text("O");
                                                turn = 0;

                                            }
                                            else{
                                                if (c3 == "") {
                                                    $('#c3').text("O");
                                                    turn = 0;

                                                } 
                                                else {
                                                    if (c2 == "") {
                                                        $('#c2').text("O");
                                                        turn = 0;

                                                    }
                                                    else{
                                                        if (b1 == "") {
                                                            $('#b1').text("O");
                                                            turn = 0;

                                                        }
                                                    }
                                                }
                                            }


                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }   
}

function startGame() 
{
    turn = 0;
    $(".row div").text("");
    getValue();

    $(".row div").one("click", function () {
        if(!turn)
        {
            $(this).text(human);
            getValue();
            bingoCheck();
            turn = 1;
            AImove();
            getValue();
            bingoCheck();            
        }
    });
}

$(document).ready(function () {
    startGame();

    $("button").click(function () {
        startGame();
    });

});