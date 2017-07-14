$(function() {
  randomQuote();
});

$("button").click(function() {
  randomQuote();
});

function randomQuote() {
  $.ajax({
    url: "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json",
    dataType: "jsonp",
    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    success: function(response) {
      $("#random_quote").html(
        "<p id='random_quote' class='lead text-center'>" +
          response.quoteText
      );
      $("#author_name").html(
        "<p id='author_name' class='lead text-center'>" +
          response.quoteAuthor
      );
      // Tweet the quote
      $("#tweet").attr(
        "href",
        "https://twitter.com/home/?status=" +
          response.quoteText +
          " (" +
          response.quoteAuthor +
          ")"
      );
    }
  });
}