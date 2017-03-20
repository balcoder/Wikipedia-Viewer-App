// $(document).redy(function(){
//   $("#search").click(function(){
//     $.ajax({
//       url:'http://en.wikipedia.org/w/api.php',
//       data: {action:'query'}
//     })
//   })
// })

// $(document).ready(function(){
//         $('#search').click(function() {
//             $.ajax({
//                 url: 'http://en.wikipedia.org/w/api.php',
//                 data: { action: 'query', list: 'search', srsearch: $("input[name=searchTerm]").val(), format: 'json' },
//                 dataType: 'jsonp',
//                 success: processResult
//             });
//         });
//     });
//
//   function processResult(apiResult){
//      for (var i = 0; i < apiResult.query.search.length; i++){
//           $('#display-result').append('<p>'+apiResult.query.search[i].title+'</p>');
//      }
//   }


// Shorthand for $( document ).ready()
$(function() {
  $("#search").on("click", function(){
    var searchTerm = $("#searchTerm").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
    $.ajax({
      url: url,
      type: 'GET',
      contentType: "application/json; charset=utf-8",
      async: false,
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
