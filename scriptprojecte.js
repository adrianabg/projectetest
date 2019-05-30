
$(document).ready(function(){

    var box = $("#box");
    var btn = $("#button");

    // AJAX Call
    
    function getJoke(){
        $.ajax({
            url: "http://api.icndb.com/jokes/random",
            dataType: "json",
            type: "GET",
            success: function(data){
                var result = "<p>" + data.value.joke + "</p>";
                box.html(result);
            },
            error: function(){
                console.log("An error has ocurred");
                box.html("Something went wrong... try again in a minute!")

            }
        });
    }
    
    btn.click(function(){
        getJoke();
    });

    getJoke();

    // Effects

    btn.mousedown(function(){
        btn.css("background", "#E1E9E9");
        btn.css("color", "black");
        btn.css("box-shadow", "0 0 50px lightyellow");
    });

    btn.mouseup(function(){
        btn.css("background", "#D0CCD0");
        btn.css("color", "black");
        btn.css("box-shadow", "0 0 10px whitesmoke");
    });

    function biggerfont(){
        box.css("font-size", "26px");
    }
    function smallerfont(){
        box.css("font-size", "18px");
    }
    box.hover(biggerfont, smallerfont);

});
