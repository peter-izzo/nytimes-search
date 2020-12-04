var APIKey = '33w2uC3hUUAwJrBOIkEb7qdjhdabqTF9';
var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${APIKey}`


$.ajax({
url: url,
method: "GET"
}).then(function(resp) {
    console.log(JSON.stringify(resp.response.docs, null, 2));
})

//clears all forms
$("#clear").on("click", function () {
    $(".form-control").val('');
})