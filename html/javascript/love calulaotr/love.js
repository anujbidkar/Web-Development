function love()
{
    var love_score = Math.ceil(Math.random()*100);



    if(love_score<50)
    {
        var result = "your love score is :"+love_score+", poor score";
    }
    else if(love_score>50 && love_score<75)
    {
        var result = "your love score is :"+love_score+", Avg score";

    }
    else
    {
        var result = "your love score is :"+love_score+", Good score";

    }

    document.getElementById("result_tab").innerHTML = result;
}