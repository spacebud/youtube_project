
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

function search(){
  gapi.client.setApiKey('AIzaSyCb6euLmg2fYjePaIF3h8JjfDG4WlktMeA');
  gapi.client.load('youtube', 'v3', function() {
    makeRequest();
  });
}


function makeRequest() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });
  request.execute(function(response) {
    $('#result').empty()
    var srchItems = response.result.items;
    $.each(srchItems, function(index, item) {
    vidTitle = item.snippet.title;
    vidDescription = item.snippet.description;
    vidThumburl =  item.snippet.thumbnails.default.url;
    vidThumbimg = '<pre><img id="thumb" src="'+vidThumburl+ '" alt="No  Image Available." style="width:204px;height:128px"></pre>';
    $('#result').append('<pre>' + vidTitle + vidThumbimg+'</pre>');
   });
 })
}
