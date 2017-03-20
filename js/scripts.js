// $(document).redy(function(){
//   $("#search").click(function(){
//     $.ajax({
//       url:'http://en.wikipedia.org/w/api.php',
//       data: {action:'query'}
//     })
//   })
// })

$(document).ready(function(){
        $('#search').click(function() {
            $.ajax({
                url: 'http://en.wikipedia.org/w/api.php',
                data: { action: 'query', list: 'search', srsearch: $("input[name=searchTerm]").val(), format: 'json' },
                dataType: 'jsonp',
                success: processResult
            });
        });
    });

  function processResult(apiResult){
     for (var i = 0; i < apiResult.query.search.length; i++){
          $('#display-result').append('<p>'+apiResult.query.search[i].title+'</p>');
     }
  }
