$(document).ready(function(){
    $('.header').height($(window).height());
})

var $navBar = null;
var $mushrooms = null;

$(document).ready(function() {
    
    $navBar = $(".scrollnav")[0];
    $mushrooms = $("section#mushrooms")[0];

    //$(".navbar").hide(); //Hide the navigation bar first
    if($(window).width() > 768){



    $(window).scroll(function() { //Listen for the window's scroll event
      if ($navBar != undefined && $navBar != null ) {
        if (isScrolledAfterElement($mushrooms)) { //if it has scrolled beyond the #content elment
            $navBar.style.transform = 'translateY(0)';
        } else {
            $navBar.style.transform = 'translateY(-100px)';
        }
      }
    });
  
    //Function that returns true if the window has scrolled beyond the given element
    function isScrolledAfterElement($elem) {
  
      var elemTop = $elem.getBoundingClientRect().top;

      return elemTop < 0;
    }
  } else {
    $navBar.style.transform = 'translateY(0)'}
});

(function($) {
  "use strict"; // Start of use strict



  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

})(jQuery); // End of use strict

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top
      }, 1000);
  }
});

//instafeed

$(document).ready(function() {
      var userFeed = new Instafeed({
        get: 'user',
        userId: '4619679958',
        accessToken: '4619679958.1677ed0.ec916d812190469daae40a3567b4dd5f',
        resolution: 'standard_resolution',
        template: '<a href="{{link}}" target="_blank" id="{{id}}" class="col-10 col-sm-5 col-md-4 mb-3"><div class="card border-0 shadow-sm card-shadow"><img class="card-img-top mh-100" src="{{image}}" alt="Card image cap"><div class="card-body"><p class="card-text">{{caption}}</p></div></div></a>',
        sortBy: 'most-recent',
        limit: 6,
        links: false
      });
      userFeed.run();
    


// <div class="col-3 gallery"> <a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" class="img-fluid align-center"><span>{{caption}}</span></a></div>'

//twitterfetch

 /*var configProfile = {
    "profile": {"screenName": 'hiveurbanfarms'},
    "domId": 'twitter-posts',
    "maxTweets": 4,
    "enableLinks": true, 
    "showUser": true,
    "showTime": true,
    "showImages": true,
    "lang": 'en',
  };

  twitterFetcher.fetch(configProfile); */

  
  var config8 = {
    "profile": {"screenName": 'hiveurbanfarms'},
    "dataOnly": true,
    "maxTweets": 6,
    "customCallback": populateTpl
  };
  
  twitterFetcher.fetch(config8);

  function populateTpl(tweets){
    var element = document.getElementById('twitter-posts');
    var html = '<div id="columns">';
    for (var i = 0, lgth = tweets.length; i < lgth ; i++) {
      var tweetObject = tweets[i];
      html += '<div class="row tweet p-2 mr-lg-3 mb-3"><a href="' + tweetObject.permalinkURL + '">'
        + (tweetObject.image ? '<div class="tweet-img"><img src="'+tweetObject.image+'" /></div>' : '')
        + '<div class="name-width"><p>' + tweetObject.author + '</p></div>'
        + '<div class="padding73"><p class="tweet-content">' + tweetObject.tweet + '</p></div>'
        + '<div class="tweet-time"><p>' + tweetObject.time + '</p></div>'
      + '</a></div>';
    }
    html += '</div>';
    element.innerHTML = html;
  } 

  
});








