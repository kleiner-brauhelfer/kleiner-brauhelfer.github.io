---
---

//-> Theme Test Button (unused)
function addListeners() {
    var toggleDarkMode = document.querySelector('.js-toggle-dark-mode');
    if (toggleDarkMode){
        jtd.addEvent(toggleDarkMode, 'click', function() {
            if (jtd.getTheme() === 'dark') {
                jtd.setTheme('light');
                toggleDarkMode.textContent = 'Preview dark color scheme';
            } else {
                jtd.setTheme('dark');
                toggleDarkMode.textContent = 'Return to the light side';
            }
        });
    }
}

// Theme Setter (after Pageload)
function setThemes() {
    var theme_color = sessionStorage.getItem('theme');
    if (theme_color == 'dark' || theme_color == 'night') {
        console.info("Setting Theme", theme_color);
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
    }
}