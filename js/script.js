/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
    });
function band (decade){
    if (decade === "20's"){
        return 4; 
    } else if (decade="10's"){
        return 3;
    } else if (decade === "90's"){
        return 5;
    }
}
 function music (genre){
    if (genre==="Indie"){
        return 3;
    } else if (genre === "Rap"){
        return 4;
    } else if (genre === "Pop")
}
  function location (home){
    if (home === "Big city"){
        return 4;
    } else if (home === "Small Town") { 
        return 3;
    }
}
    function totalScore () {
        var q1Result = $("#question1").val();
        var score = network (q1Result);
        var q2Result = $("question2").val();
        score = show (q2Result) + score;
        var q3Result = $("#question3").val();
        score === actors (q3Result) + score;
        if (score>=10 || score<=14){ 
            var finalvariable = "BrockHampton";
        } else if (score >= 26 || score <=29 ){
            finalvariable = "BackStreet Boys";
        }
        $("button").text(finalvariable);
    }

