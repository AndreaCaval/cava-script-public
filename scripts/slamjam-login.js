debugger

let link = document.location.href
var country = link.split("/")[3]
let email = ""; let pw = ""; let csrf_token = ""; let timerInitilize = ""
let status_login = ""; let status_aco = "BR1"

async function sendText(text, color) {
    document.getElementById("statusSlamjam").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>"
}

async function checkLogin() {
    try {
        let check = document.getElementsByClassName("user-message")[0]
        if (check != undefined) {
            sendText("Logging in...", "blue")
            if (email != "" && email != null && email != "off" && email != undefined || pw != "" && pw != null && pw != "off" && pw != undefined) {
                login()
            } else {
                sendText("Login data error", "red")
            }
        }
        else
            sendText("Already Logged in", "green")
    } catch (error) {
        console.log(error)
    }
}

async function login() {
    var html2 = document.createElement('html')
    if (link != "https://www.slamjam.com/" + country + "/login") {

        await getLogin()
        await res.then(function (result) {
            html2.innerHTML = result
        })
        csrf_token = html2.querySelectorAll("[name='csrf_token']")[0].value
        timerInitilize = html2.querySelectorAll("[name='timerInitilize']")[0].value
        timerInitilize = timerInitilize.replaceAll(' ', '+')
    }
    else {
        csrf_token = document.getElementsByName("csrf_token")[0].value
        timerInitilize = document.getElementById('timerInitilize').value
        timerInitilize = timerInitilize.replaceAll(' ', '+')
    }
    loginR()
}

async function loginR() {
    
    await fetch("https://www.slamjam.com/on/demandware.store/Sites-slamjam-Site/" + country + "/Account-Login?rurl=1", {
        "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://www.slamjam.com/" + country + "/login?rurl=1",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "loginEmail=" + email + "&loginPassword=" + pw + "&timerInitilize=" + timerInitilize + "&timerInitilizeClick=&countValidation=0&g-recaptcha-response=&getPreferences=%2Fon%2Fdemandware.store%2FSites-slamjam-Site%2Fen_IT%2FCaptcha-getPreferences&verificationServer=%2Fon%2Fdemandware.store%2FSites-slamjam-Site%2Fen_IT%2FCaptcha-verificationServer&enableRecaptcha=false&csrf_token=" + csrf_token + "&productId=www.slamjam.com%2Fs%2Fslamjam%2Frurl%3D1.html&redirectBack=",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    })
        .then(response => {
            if (response.status) { sendText("Logged in", "green") }
            else { sendText("Error Logging in", "red") }
        })
        .catch((error) => { console.log(error) });
    ;
}

async function getLogin() {

    await fetch("https://www.slamjam.com/" + country + "/login", {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        },
        "referrer": "https://www.slamjam.com/" + country + "/home",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    })
        .then(response => { res = response.text() })
        .catch((error) => { console.log(error) });
    ;
}

chrome.runtime.sendMessage({ greeting: "email_pw_slamjam" }, function (response) {
    var x = response.farewell
    email = x.split(':')[0]
    pw = x.split(':')[1]
});


chrome.runtime.sendMessage({ greeting: "slamjam_login" }, function (response) {
    status_login = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function (response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "slamjam_login" }, function (response) {
            if (response.farewell == 'on') {
                checkLogin()
            }
        });
    }
    textBox()
});

async function textBox() {
    let color_aco = ""; let color_login = ""
    if (status_aco == "off") { color_aco = "red" }
    else { color_aco = "green" }
    if (status_login == "off") { color_login = "red" }
    else { color_login = "green" }
    try {
        var btn1 = document.getElementsByClassName("header-top")[0].parentNode
        btn1.insertAdjacentHTML("beforebegin", '<div id="CavaScripts" style="font-family: Verdana, Geneva, sans-serif; position: fixed; right:0; top: 500px; z-index: 1000; min-width: 10px; background-color: lightgrey; padding: 5px 10px; color: black; border-radius: 10px;">'
            + ' <br> <p id="statusSlamjam">Status slamJam</p> '
            + " <p>ACO: <span style='font-size:20px; color:" + color_aco + ";'>" + status_aco + "</span> LOGIN: <span style='font-size:20px; color:" + color_login + ";' >" + status_login + "</span></p></div>");
    }
    catch (error) {
        var btn1 = document.getElementsByClassName("checkout-step")[0].parentNode
        btn1.insertAdjacentHTML("beforebegin", '<div id="CavaScripts" style="font-family: Verdana, Geneva, sans-serif; position: fixed; right:0; top: 50px; z-index: 1000; min-width: 10px; background-color: lightgrey; padding: 5px 10px; color: black; border-radius: 10px;">'
            + ' <br> <p id="statusSlamjam">Status slamJam</p> '
            + " <p>ACO: <span style='font-size:20px; color:" + color_aco + ";'>" + status_aco + "</span> LOGIN: <span style='font-size:20px; color:" + color_login + ";' >" + status_login + "</span></p></div>");
    }
}