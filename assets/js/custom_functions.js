---
---


// Slideshow from w3css ---
var slideIndex = 0;

function carousel() {
  var i;
  var x = document.querySelectorAll('.dark-choice .mySlides.hide-light');
  if (!x.length){
      x = document.querySelectorAll('.mySlides.hide-dark');
  }
  if (!x.length){
      console.info('no Slideshow found');
      return
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000);
}
// ---/ Slideshow from w3css


// Bind EventListeners
function addListeners() {
    // Theme Switcher
    var themeSwitches = document.querySelectorAll('.theme-switcher');
    for (let index = 0; index < themeSwitches.length; index++) {
        jtd.addEvent(themeSwitches[index], 'click', function() {
            // Set Preferences, mark Dot, load Theme
            var theme = this.dataset.theme;
            sessionStorage.setItem('theme', theme);
            this.classList.add('active');
            setThemes();
        });
    }
}

// Theme Setter (after Pageload)
function setThemes() {
    var theme_color = sessionStorage.getItem('theme') || 'light';
    // deactovate all Markers
    var marker = document.querySelectorAll('.theme-switcher');
    for (let inner_idx = 0; inner_idx < marker.length; inner_idx++) {
        if (marker[inner_idx].dataset.theme == theme_color){
            marker[inner_idx].classList.add('active');
        }else{
            marker[inner_idx].classList.remove('active');
        }
    }
    if (theme_color == 'dark' || theme_color == 'night') {
        // Mark new Choice
        console.info("Setting Theme", theme_color);
        document.body.classList.remove('light-choice');
        document.body.classList.add('dark-choice');
        // Color and Hide light Theme and future unstyled Elements
        document.body.style.backgroundColor = '#27262b';
        var content = document.querySelectorAll('body > *');
        for (let index = 0; index < content.length; index++) {
            content[index].style.cssText = content[index].style.cssText + 'visibility: hidden;';
        }
        // set Theme
        jtd.setTheme(theme_color);
        // unhide Elements and reset Color to defaults
        setTimeout(function(){
            for (let index = 0; index < content.length; index++) {
                content[index].style.cssText = content[index].style.cssText.replaceAll('visibility: hidden;', '');
            }
            document.body.style.backgroundColor = '';
        }, 400); // aprox. time until new CSS has been fetched/loaded
    }else{
        jtd.setTheme(theme_color);
        document.body.classList.remove('dark-choice');
        document.body.classList.add('light-choice');
    }
}

// Expand / Collapse following Paragraph
function toggleParagraph(that) {
    that.parentNode.classList.toggle('open');
    var p_id = that.parentNode.id + '_box';
    p = document.getElementById(p_id);
    p.classList.toggle('w3-hide');
}