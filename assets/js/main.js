// Top News
$(function () {
    $.ajax({
          url: "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=API_KEY",
          "Content-Type": "application/json",
          success: function (results) {
                $.each(results.articles, function(i) {
                    //if(i < 20) {  
                var source = results.articles[i].source.name;
                var title = results.articles[i].title;
                var description = results.articles[i].description;
                var image = results.articles[i].urlToImage;
                var url = results.articles[i].url;
                var dateString = results.articles[i].publishedAt;
                var d = new Date(dateString);
                var date = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
                if (image == null) {
                    image = "assets/images/techride.png"
                }
                if (description == null) {
                    description = "";
                }
                $('#topNews').append(
                      "<div class='col-md-4 cardAlignment'><div class='mainCard'><div class='cardContainer'><h6 class='techHead'>Source: <b><i>" + source + "</i></b> published on " +
                      date + " </h6></div><hr><img class='newsImage' src='" + image +
                      "'><div class='cardContainer'><h4 class='mainHeading'>" + title +
                      "</h4><p class='newsDesc'>" + description + "</p><p class='newsDesc'><a href='" +
                      url +
                      "' target='_blank'>Read more..</a></p></div></div></div>"
                );
                      //}
          });
          }
    });
});
// Top News
