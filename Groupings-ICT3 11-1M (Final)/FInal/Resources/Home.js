let Audio = document.getElementById("audio");

function AudioToggle() { 
    Audio.muted = !Audio.muted;
  } 
  {

    window.addEventListener("scroll", function () {
      var header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
    });
  
    let bgVideo = document.querySelector('.BG');
  
  document.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let opacity = Math.min(scrollTop / window.innerHeight, 1);
      bgVideo.style.opacity = opacity;
      bgVideo.style.display = opacity > 0 ? 'block' : 'none';
  });
  }
