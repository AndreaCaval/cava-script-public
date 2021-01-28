debugger

var email = "";
var pw = "";
var status_login = "";
var status_aco = "";
let country_snipes = "";
let discord_namee = "";
let versions = ""
var link = document.location.href
var country = link.split("/")[2]
var url_errors = "https://discordapp.com/api/webhooks/797771572240187392/LjgL9QhCvmByjlPbAtHF2fxEVFTS6J8sv4LG2Nw0zpI2qzgyyKL03wJqhVeobyFeDzLA"


async function sendText(text, color) {
    try { document.getElementById("statusSnipes").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) {}
}

async function changeCountry() {
    try {
        let url_product = link.split(country)
        if (country_snipes != 'off' && country.split('.')[2] != country_snipes) {
            location.replace('https://www.snipes.' + country_snipes + "" + url_product[1])
        }
    } catch (error) { errorWebhooks(error, "changeCountry") }
}

async function checkLogin() {
    try {

        var script = ""
        var scripts = document.getElementsByTagName('script')
        for (var i = 0; i < scripts.length; i++) {
            if (scripts[i].textContent.includes('userLoginStatus')) {
                script = scripts[i].textContent
            }
        }

        eval(script)
        if (dataLayer[0]["userLoginStatus"] == false) {
            sendText("Logging in...", "blue")
            if (email != "" && email != null && email != "off" && email != undefined || pw != "" && pw != null && pw != "off" && pw != undefined) {
                login()
            } else {
                sendText("Login data error", "red")
            }
        }
    } catch (error) {
        if (error != "ReferenceError: dataLayer is not defined")
            errorWebhooks(error, "checkLogin")
    }
}

async function login() {
    try {
        var csrf_token;
        var span;
        var data_id;
        var data_value
        var html2 = document.createElement('html')
        if (link != "https://www.snipes." + country + "/login") {

            await getLogin()
            await res.then(function(result) {
                html2.innerHTML = result
            })
            csrf_token = html2.querySelectorAll("[name='csrf_token']")[0].value
            span = html2.querySelectorAll('span')
            for (var i = 0; i < span.length; i++) {
                if (span[i].getAttribute('data-id') != null) {
                    span = span[i]
                }
            }
            data_id = span.getAttribute('data-id')
            data_value = span.getAttribute('data-value')
        } else {

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
    } catch (error) {
        if (error != "TypeError: span.getAttribute is not a function" && error != "ReferenceError: res is not defined")
            errorWebhooks(error, "login")
    }

    await fetch("https://" + country + "/authentication?rurl=1&format=ajax", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://" + country + "/login",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": data_id + "=" + data_value + "&dwfrm_profile_customer_email=" + email + "&dwfrm_profile_login_password=" + pw + "&csrf_token=" + csrf_token,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => {
            if (response.status == 200 || response.status == 201) {
                sendText("Logged in", "green")
            } else { sendText("Error logging in", "red") }
        })
        .catch((error) => { errorWebhooks(error, "authentication") });;
}

async function getLogin() {

    await fetch("https://" + country + "/login", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            "referrer": "https://" + country + "/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { res = response.text() })
        .catch((error) => {
            if (error != "TypeError: Failed to fetch")
                errorWebhook(error, "getLogin")
        });;
}

async function errorWebhooks(msg_error, position) {
    var request = new XMLHttpRequest();
    request.open("POST", url_errors);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: "Snipes Login Error",
        color: ("16744192"),
        fields: [{
                name: 'Message',
                value: '```' + msg_error + '```',
                inline: true
            },
            {
                name: 'Position',
                value: position,
                inline: true
            },
            {
                name: 'Discord',
                value: discord_namee,
                inline: true
            }
        ],
        footer: {
            text: 'Cava-Scripts ' + versions + ' | ' + String(time),
            icon_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Pok%C3%A9ball.png',
        },
    }

    var params = {
        username: "",
        embeds: [myEmbed]
    }

    request.send(JSON.stringify(params));

}

chrome.runtime.sendMessage({ greeting: "discord_name" }, function(response) {
    discord_namee = response.farewell
});

chrome.runtime.sendMessage({ greeting: "version" }, function(response) {
    version = response.farewell
});

chrome.runtime.sendMessage({ greeting: "country_snipes" }, function(response) {
    country_snipes = response.farewell
});

chrome.runtime.sendMessage({ greeting: "email_pw_snipes" }, function(response) {
    var x = response.farewell
    email = x.split(':')[0]
    pw = x.split(':')[1]
});

chrome.runtime.sendMessage({ greeting: "snipes" }, function(response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "snipes_login" }, function(response) {
    status_login = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "snipes_login" }, function(response) {
            if (response.farewell == 'on') {
                checkLogin()
                changeCountry()
            }
        });
    }
    textBox()
});

async function textBox() {
    let color_aco = "";
    let color_login = ""
    if (status_aco == "off") { color_aco = "red" } else { color_aco = "green" }
    if (status_login == "off") { color_login = "red" } else { color_login = "green" }
    try {
        var btn1 = document.getElementsByClassName("b-header-sticky js-header-sticky js-header-search")[0].parentNode
        btn1.insertAdjacentHTML("beforebegin", '<div id="CavaScripts" style="font-family: Verdana, Geneva, word-wrap: break-word; sans-serif; position: fixed; right:0; top: 500px; z-index: 1000; min-width: 10px; max-width: 500px; background-color: lightgrey; padding: 5px 10px; color: black; border-radius: 10px;">' +
            ' <p id="statusSnipes">Status snipes</p> ' +
            " <p>ACO: <span style='font-size:20px; color:" + color_aco + ";'>" + status_aco + "</span> LOGIN: <span style='font-size:20px; color:" + color_login + ";' >" + status_login + "</span></p></div>");
    } catch (error) {
        if (error != "TypeError: Cannot read property 'parentNode' of undefined")
            errorWebhooks(error, "textBox")
    }
}