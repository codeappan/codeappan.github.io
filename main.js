var scroll = new SmoothScroll('a[href*="#"]');

$(document).ready(function(){

    
    var words = [
        'Web Development',
        'App Development',
        'Digital Marketing',
        'Software Development',
        'Branding'  
      ], i = 0;
      
      setInterval(function () {
          $('#changeText').fadeOut(400, function() {
            $(this).text( words[ (i === words.length - 1) ? i = 0 : i += 1 ] ).fadeIn(400);
        });
      }, 3000);




})