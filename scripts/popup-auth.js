debugger

const button = document.querySelector("button")
if (button.getAttribute("id") == "button_in") sing_in()
else if (button.getAttribute("id") == "button_out") sing_out()

function sing_in() { /* popup-sign-in-script.js */
    try {
        const button_in = document.getElementById("button_in");

        button_in.addEventListener('mouseover', () => {
            button_in.style.backgroundColor = 'black';
            button_in.style.color = 'white';
            button_in.style.transform = 'scale(1.3)';
        });
        button_in.addEventListener('mouseleave', () => {
            button_in.style.backgroundColor = '#fd7a00';
            button_in.style.color = 'black';
            button_in.style.transform = 'scale(1)';
        });
        button_in.addEventListener('click', () => {
            const license = document.getElementById("license").value
            chrome.runtime.sendMessage({ greeting: 'login', license: license }, function(response) {
                if (response.farewell == 'success') {
                    window.location.replace("/popup/popup-site-aco.html");
                }
            });
        });
    } catch (error) {
        console.log(error)
    }
}

function sing_out() { /* popup-sign-out-script.js */
    try {
        const button_out = document.getElementById('button_out');
        button_out.addEventListener('mouseover', () => {
            button_out.style.backgroundColor = 'black';
            button_out.style.color = 'white';
            button_out.style.transform = 'scale(1.3)';
        });
        button_out.addEventListener('mouseleave', () => {
            button_out.style.backgroundColor = '#ff7b00';
            button_out.style.color = 'black';
            button_out.style.transform = 'scale(1)';
        });
        button_out.addEventListener('click', () => {
            chrome.runtime.sendMessage({ greeting: 'logout' }, function(response) {
                if (response.farewell == 'success') {
                    window.location.replace("/popup/popup-login.html");
                }
            });
        });
    } catch (error) {
        console.log(error)
    }
}