
document.addEventListener('DOMContentLoaded', () => {
    let changeThemeButton = document.querySelector('#changeTheme');
    let themes = ['warble', 'simple'];
    let currentTheme = 0;
    function changeTheme() {
        let container = document.querySelector('.container');
        let themeValue = themes[currentTheme];
        changeThemeButton.innerHTML = themeValue;
        container.classList.remove(themeValue);
        console.log(themeValue);
        currentTheme += 1;
        if (currentTheme >= themes.length) {
            currentTheme = 0;
        } 
        themeValue = themes[currentTheme];
        container.classList.add(themeValue);

        console.log(themeValue);

    }
    changeThemeButton.addEventListener('click', () => {
        changeTheme();
    });
})

