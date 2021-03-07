var scroll = new SmoothScroll('a[href*="#"]');

$(document).ready(function () {
  
  var words = [
    'UX and UI Design',
    'App Development',
    'Web Development',
    'Cloud, Devops, Hosting',
    'SEO and SEM',
    'Social Media Marketing',
    'Creative Content Writing',
    'Professional Logo Design'
  ], i = 0;

  setInterval(function () {
    $('#changeText').fadeOut(400, function () {
      $(this).text(words[(i === words.length - 1) ? i = 0 : i += 1]).fadeIn(400);
    });
  }, 3000);




})