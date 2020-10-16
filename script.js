/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });


  let button1 = document.querySelector(".play");



button1.addEventListener("click",function() {
  window.location.replace("https://peddiecompsciclub.github.io/astronomyclubwebsite/videos.html");
});
