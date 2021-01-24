debugger

let email = ""; let pw = ""; let status_aco = ""; let status_login = ""
let link = document.location.href
let country = link.split('/')[3]

async function sendText(text, color) {
    try { document.getElementById("statusKickz").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" }
    catch (error) { }
}

async function checkLogin() {
    let log = ""
    if (document.querySelectorAll('[data-prop="user"]')[0] != undefined) {
        log = document.querySelectorAll('[data-prop="user"]')[0].textContent
        if (log == "\"\"" || log == null || log == undefined || log == "") {
            sendText("Logging in...", "blue")
            await login()
        }
        else {
            sendText("Already logged in", "green")
        }
    }
    else {
        sendText("Already logged in", "green")
    }

}

async function login() {

    await fetch("https://www.kickz.com/en/user/login", {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
            "cache-control": "max-age=0",
            "content-type": "application/x-www-form-urlencoded",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        },
        "referrer": link,
        "referrerPolicy": "same-origin",
        "body": "login=" + email + "&password=" + pw,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    })
        .then(response => {
            if (response.status == 200 || response.status == 201) {
                sendText("Logged in", "green")
            }
            else {
                sendText("Error logging in...", "red")
            }
        })
        .catch((error) => { console.log(error) });
    ;
}

chrome.runtime.sendMessage({ greeting: "email_pw_kickz" }, function (response) {
    let x = response.farewell
    email = x.split(':')[0]
    pw = x.split(':')[1]
});

chrome.runtime.sendMessage({ greeting: "kickz" }, function (response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "kickz_login" }, function (response) {
    status_login = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function (response) {
    textBox()
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "kickz_login" }, function (response) {
            if (response.farewell == 'on') {
                checkLogin()
            }
        });
    }
});

async function textBox() {
    let color_aco = ""; let color_login = ""
    if (status_aco == "off") { color_aco = "red" }
    else { color_aco = "green" }
    if (status_login == "off") { color_login = "red" }
    else { color_login = "green" }
    try {
        let btn1 = document.getElementsByClassName("section-main d-flex align-items-center")[0]
        btn1.insertAdjacentHTML("beforebegin", '<div id="CavaScripts" style="font-family: Verdana, Geneva, sans-serif; position: fixed; right:0; top: 500px; z-index: 1000; min-width: 10px; background-color: lightgrey; padding: 5px 10px; color: black; border-radius: 10px;">'
            + ' <p id="statusKickz">Status kickz</p>'
            + " <p>ACO: <span style='font-size:20px; color:" + color_aco + ";'>" + status_aco + "</span> LOGIN: <span style='font-size:20px; color:" + color_login + ";' >" + status_login + "</span></p></div>");
    }
    catch (error) { }
}