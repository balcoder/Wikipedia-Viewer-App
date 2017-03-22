
// Shorthand for $( document ).ready()
$(function() {
  $("#search").on("click", function(){
    // when the search box is clicked store the search term in a variable
    var searchTerm = $("#searchTerm").val();
    // add the search term to the endpoit url and format as json
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
    //use jquery ajax request
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      success: function(data, status, jqXHR){
        $("#results").html();
        for(var i=0; i<data[1].length; i++){
          $("#results").prepend("<div><div class= 'well-lg'><a href=" + data[3][i] + "><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>")
        }
      },
    })
    .done(function(){
      console.log("success");
    })
    .fail(function(){
      console.log("error");
    })
    .always(function(){
      console.log("complete");
    });
  });

});
