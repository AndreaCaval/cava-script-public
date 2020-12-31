debugger

var email = ""; var pw = ""
var link = document.location.href
var country = link.split('/')[3]

async function sendText(text, color) {
    document.getElementById("statusSolebox").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>"
}

async function checkLogin() {
    var script = ""
    var scripts = document.getElementsByTagName('script')
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].textContent.includes('userLoginStatus')) {
            script = scripts[i].textContent
        }
    }

    eval(script)
    if (dataLayer[0]["userLoginStatus"] == false) {
        sendText("Logging in...", "white")
        if (email != "" && email != null && email != "off" && email != undefined || pw != "" && pw != null && pw != "off" && pw != undefined) {
            login()
        } else {
            sendText("Login data error", "red")
        }
    }
}

async function login() {
    var csrf_token; var span; var data_id; var data_value
    var html2 = document.createElement('html')
    if (link != "https://www.solebox.com/" + country + "/login") {

        await getLogin()
        await res.then(function (result) {
            html2.innerHTML = result
        })
        //html2.innerHTML = html
        csrf_token = html2.querySelectorAll("[name='csrf_token']")[0].value
        span = html2.querySelectorAll('span')
        for (var i = 0; i < span.length; i++) {
            if (span[i].getAttribute('data-id') != null) {
                span = span[i]
            }
        }
        data_id = span.getAttribute('data-id')
        data_value = span.getAttribute('data-value')
    }
    else {

        csrf_token = document.getElementsByName("csrf_token")[0].value
        span = document.getElementsByTagName('span')
        for (var i = 0; i < span.length; i++) {
            if (span[i].getAttribute('data-id') != null) {
                span = span[i]
                console.log(span)
            }
        }
        data_id = span.getAttribute('data-id')
        data_value = span.getAttribute('data-value')
    }

    await fetch("https://www.solebox.com/" + country + "/authentication?rurl=1&format=ajax", {
        "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://www.solebox.com/" + country + "/login?rurl=1",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": data_id + "=" + data_value + "&dwfrm_profile_customer_email=" + email + "&dwfrm_profile_login_password=" + pw + "&csrf_token=" + csrf_token,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    })
        .then(response => { if (response.status) { sendText("Logged in", "green") } })
        .catch((error) => { console.log(error) });
    ;
}

async function getLogin() {

    await fetch("https://www.solebox.com/" + country + "/login", {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        },
        "referrer": "https://www.solebox.com/" + country,
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

chrome.runtime.sendMessage({ greeting: "email_pw_solebox" }, function (response) {
    var x = response.farewell
    email = x.split(':')[0]
    pw = x.split(':')[1]
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function (response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "solebox_login" }, function (response) {
            if (response.farewell == 'on') {
                checkLogin()
            }
        });
    }
    textBox()
});


async function textBox() {
    try {
        var btn1 = document.getElementsByClassName("b-header-wrapper js-sticky-element")[0].parentNode
        btn1.insertAdjacentHTML("beforebegin", '<div id="CavaScripts" style="font-family: Verdana, Geneva, sans-serif; position: fixed; right:0; top: 100px; z-index: 1000; min-width: 300px; background-color: lightgrey; padding: 5px 10px; color: white; border-radius: 10px;">'
            + ' <p id="statusSolebox">Status solebox</p></div>');
    }
    catch (error) { console.log(error) }
}

