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

function setThemes() {
    var theme = '';
    var theme_size = sessionStorage.getItem('theme_size');
    var theme_color = sessionStorage.getItem('theme_color');
    if (theme_size == 'big'){
        theme = (theme_color) ? 'big_' + theme_color : 'big_light';
    }else{
        theme = (theme_color) ? theme_color : 'light';
    }
    console.info("Setting Theme", theme);
    jtd.setTheme(theme);
}