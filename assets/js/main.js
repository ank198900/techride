$(function(){
    $.ajax({
    url: "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b023e7d89f064287b363a6691cd99344",
    dataType: 'application/json',
    success: function(results){
        var title = results.articles.title;
        var description = results.articles.description;
        $('#topNews').append("<div class='row'><div class='col-md-3'><div class='mainCard'><div class='cardContainer'><h4><b>title</b></h4><p>description</p></div></div></div></div>");
        console.log(results);
    }
});
});