
// Get the root element
let colors = document.querySelector(':root');
let icon = document.getElementById('darkmodeIcon')

// Create a function for setting a variable value

function setColors() {
    if (localStorage.getItem('mode') === 'dark') {
        // Set the value of variable --blue to another value (in this case "lightblue")
        colors.style.setProperty('--textColor', '#1f1f24');
        colors.style.setProperty('--accentColor', '#02704d');
        colors.style.setProperty('--backgroundColor', 'white');
        colors.style.setProperty('--backgroundColorHover', 'rgba(232, 254, 247, 0.88)');
        colors.style.setProperty('--buttonTextColor', 'white');
        localStorage.setItem("mode", "light")
        document.getElementById('darkmodeIcon').className = "fa-solid fa-sun"
        document.getElementById('darkmodeText').innerHTML = "Dark mode"
    }
    else {
        colors.style.setProperty('--textColor', '#cecece');
        colors.style.setProperty('--accentColor', '#b1f8e1');
        colors.style.setProperty('--backgroundColor', '#031e15');
        colors.style.setProperty('--backgroundColorHover', 'rgba(177, 248, 225, 0.1)');
        colors.style.setProperty('--buttonTextColor', 'black');
        localStorage.setItem("mode", "dark")
        document.getElementById('darkmodeIcon').className = "fa-solid fa-moon"
        document.getElementById('darkmodeText').innerHTML = "Light mode"
        

    }

}

function loadColors() {
    if (localStorage.getItem('mode') === 'dark') {
        // Set the value of variable --blue to another value (in this case "lightblue")
        colors.style.setProperty('--textColor', '#cecece');
        colors.style.setProperty('--accentColor', '#b1f8e1');
        colors.style.setProperty('--backgroundColor', '#031e15');
        colors.style.setProperty('--backgroundColorHover', 'rgba(177, 248, 225, 0.1)');
        colors.style.setProperty('--buttonTextColor', 'black');

        if (document.getElementById('darkmodeIcon').className === "fa-solid fa-sun") {
            document.getElementById('darkmodeIcon').className = "fa-solid fa-moon"
            document.getElementById('darkmodeText').innerHTML = "Light mode"
        }

        else {
            document.getElementById('darkmodeText').innerHTML = "Light mode"
            document.getElementById('darkmodeIcon').className = "fa-solid fa-moon"
        }
        
    }
    else {
        colors.style.setProperty('--textColor', '#1f1f24');
        colors.style.setProperty('--accentColor', '#02704d');
        colors.style.setProperty('--backgroundColor', 'white');
        colors.style.setProperty('--backgroundColorHover', 'rgba(232, 254, 247, 0.88)');
        colors.style.setProperty('--buttonTextColor', 'white');
        if (document.getElementById('darkmodeIcon').className === "fa-solid fa-moon") {
            document.getElementById('darkmodeIcon').className = "fa-solid fa-sun"
            document.getElementById('darkmodeText').innerHTML = "Dark mode"
        }

        else {
            document.getElementById('darkmodeText').innerHTML = "Dark mode"
            document.getElementById('darkmodeIcon').className = "fa-solid fa-sun"
        }
        
    

    }
}