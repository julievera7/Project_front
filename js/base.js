const form = document.getElementById("formmain");
const email = document.getElementById("email");

form.addEventListener("submit", (e)=> {
    if(form.checkValidity()===false) {
      e.preventDefault();
      e.stopPropagation();
      form.classList.add("was-validated");
      validateInput();
      return false;
    }
  });

const isValidEmail = email => {
    const correo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return correo.test(String(email).toLowerCase());
}


var requests, OpenLibrary;
(function () {
  'use strict';

  requests = {
    get: function(url, callback){
      $.get(url, function(results){       
      }).done(function(data){
        if (callback) {callback(data);}
      });
    },
    post: function(url, callback){
      $.post(url, function(results){       
      }).done(function(data){
        if (callback) {callback(data);}
      });
    },    

    put: function(url, callback){
      $.put(url, function(results){       
      }).done(function(data){
        if (callback) {callback(data);}
      });
    }, 
  };
  OpenLibrary = {
    search: function(query, callback) {
      var url = "https://openlibrary.org/search/inside.json?q="+query 
      requests.get(url,function(response) {callback(response.hits.hits)});
    },
  };

  var debounce = function (fun, threshold, execAsap) {
    var timeout;
    return function debounce () {
      var obj = this, args = arguments;
      function delayed () {
        if (!execAsap)
          fun.apply(obj, args);
        timeout = null;
      };
      if (timeout) {
        clearTimeout(timeout);
      } 
      else if (execAsap) {
        fun.apply(obj, args);
      }
      timeout = setTimeout (delayed, threshold || 100);
    };
  };
  $(document).keyup('#booksearch', debounce(function(event) {
    $('.bookmatch').empty();
    $('.bookmatch').addClass('loader');
      }, 100, false));
      
      $(document).keyup('#booksearch', debounce(function(event) {
    OpenLibrary.search($('#booksearch input').val(), function(results) {
        var match = results[0];
        $('.bookmatch').removeClass('loader');
        $('.bookmatch').append(
      '<a href="https://openlibrary.org' + match.edition.key + '">' +
          '<img src="' + match.edition.cover_url + '">' +
      '</a>'
        );
    });
      }, 1000, false));
}());


