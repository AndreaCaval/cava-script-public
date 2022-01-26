debugger

const site = "LDLC"

let link = document.location.href
let country = link.split('/')[3]
if (country != "it-it" && country != "es-es" && country != "fr-ch" && country != "fr-lu" && country != "fr-be")
    country = "fr-fr"

let country_ldlc = ""

let size_range = "random"

let status_aco = ""
let status_login = ""
let is_login = false
let email_login = ""
let pw_login = ""

let payment_mode = ""
let checkout_mode = ""


let profile = []

let brand = ""
let card_id = ""
let card_country = ""
let pan = ""
let request_id = ""
let card_token = ""

let __RequestVerificationToken = ""
let CartType = ""
let Id = ""

let RequestVerificationToken = ""
let VerificationToken = ""
let product_id = ""
let key = ""

let link_product = link
let name_product = '';
let size_product = '';
let price_product = "";
let img_product = ""
let email = ""
let linkpp = ""

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    n = Math.floor(Math.random() * (max - min + 1)) + min;
    return n
}

function arreyMixer(array) {

    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function hasNumber(myString) {
    return /\d/.test(myString);
}

function textBox() {
    let color_aco = "";
    let color_login = ""
    if (status_aco == "off") { color_aco = "red" } else { color_aco = "green" }
    if (status_login == "off") { color_login = "red" } else { color_login = "green" }
    try {
        var btn1 = document.getElementsByClassName("top")[0]
        btn1.insertAdjacentHTML("beforebegin", '<style>.btn_cava {box-shadow: rgb(247 197 192) 0px 1px 0px 0px inset;background: linear-gradient(rgb(252, 141, 131) 5%, rgb(228, 104, 93) 100%) rgb(252, 141, 131);border-radius: 6px;border: 1px solid rgb(216, 53, 38);display: inline-block;cursor: pointer;color: rgb(255, 255, 255);font-family: Arial;font-size: 14px;font-weight: bold;text-decoration: none;text-shadow: rgb(178 62 53) 0px 1px 0px;outline: none;width: 100%;}' +
            '.btn_cava:hover {background:linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);background-color:#e4685d;}' +
            '.btn_cava:active {position:relative;top:1px;} p{font-weight:bold}' +
            '#CavaScripts {position: fixed;right: 0;top: 350px; z-index:1000;width:300px;background-image: url(https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fbackground.png?alt=media&token=90d4ab30-1b59-434f-8729-b2a43a84d445);background-size: cover;padding: 10px 10px;color: black; border-radius: 10px;font-family: Arial;text-align: left;}' +
            '#CavaScriptsheader {padding: 10px;cursor: move;z-index: 10;background-color: #2196F3;color: #fff;border-radius: 10px;text-align: center;}' +
            '.box {width: 100%;background: #ffffff;color: #000;text-align: center;display: inline-block;box-shadow: #A3A3A3 3px 3px 6px -1px;border-radius: 10px;padding: 5px;}</style>' +
            '<div id="CavaScripts"><div id="CavaScriptsheader"><input type="image" id="btn_left" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fleft.png?alt=media&token=ae01ab54-0f26-47ac-9fdf-8774188499bd" style="width: 10px; margin-right: 40px;margin-bottom: -3px;">Click here to move<input type="image" id="btn_right" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fright.png?alt=media&token=887cb8d7-4399-43ff-a197-96afe8626dc6" style="width: 10px;margin-left: 40px;margin-bottom: -3px;"></div>' +
            ' <br> <p id="statusLdlc">Status Ldlc</p> ' +
            "<p style='margin: 20px 0px 0px 0px;text-align: center;font-size: 15px;'>ACO: <span style='margin-right: 15px;font-size: 20px; text-transform: uppercase; color:" + color_aco + ";'>" + status_aco + "</span>LOGIN: <span style='margin-right: 15px;font-size: 20px; text-transform: uppercase; color:" + color_login + ";'>" + status_login + "</span></p></div>");

        dragElement(document.getElementById("CavaScripts"));

        if (localStorage.getItem("box") != null)
            document.getElementById('CavaScripts').style = localStorage.getItem("box")

        let btn_left = document.getElementById('btn_left')
        btn_left.addEventListener("click", function() {
            document.getElementById('CavaScripts').style = "left:0;top: 350px;"
            localStorage.setItem("box", document.getElementById("CavaScripts").getAttribute("style"))
        });

        let btn_right = document.getElementById('btn_right')
        btn_right.addEventListener("click", function() {
            document.getElementById('CavaScripts').style = "right:0;top: 350px;"
            localStorage.setItem("box", document.getElementById("CavaScripts").getAttribute("style"))
        });

        window.onresize = checkPosition;

    } catch (error) {}
}

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:

        if (elmnt.offsetTop - pos2 >= 0 && elmnt.offsetTop - pos2 <= window.innerHeight - document.getElementById("CavaScripts").clientHeight) {
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            // elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            localStorage.setItem("box", document.getElementById("CavaScripts").getAttribute("style"))
        }
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
async function checkPosition() {
    let positon_top = 0
    try {
        positon_top = window.innerHeight - document.getElementById("CavaScripts").clientHeight
        if (positon_top < document.getElementById("CavaScripts").getAttribute("style").replace(/[^\d,.-]/g, '') && positon_top >= 0) {
            document.getElementById('CavaScripts').style = "top:" + positon_top + "px;"
            localStorage.setItem("box", document.getElementById("CavaScripts").getAttribute("style"))
        }
    } catch (error) {}
}
async function sendText(text, color) {
    try { document.getElementById("statusLdlc").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) {}
}


function changeCountry() {
    try {

        let url_product
        if (country != "fr-fr")
            url_product = link.split(country)
        else
            url_product = link.split(".com")

        if (country_ldlc != 'off' && country_ldlc != null && country != country_ldlc) {
            location.replace('https://www.ldlc.com/' + country_ldlc + "/" + url_product[1])
        }
    } catch (error) {
        errorWebhooks(error, "changeCountry")
    }
}

async function checkLogin() {

    isLogin()

    if (link.includes("Login") && status_login == "on") {
        mainLoginBrowser()
    }
}



async function isLogin() {
    await fetch("https://www.ldlc.com/v4/" + country + "/header/user", {
            "headers": {
                "accept": "*/*",
                "accept-language": "it-IT,it;q=0.9,en-XA;q=0.8,en;q=0.7,en-US;q=0.6",
                "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"97\", \"Chromium\";v=\"97\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": link,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResIsLogin(response) })
        .catch((error) => {
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "isLogin fetch")
        });;
}
async function checkResIsLogin(response) {

    try {
        let status = response.status
        let res = await response.json()

        if (status == 200 || status == 201) {
            is_login = res.login
        } else {
            errorWebhook(res, "checkResIsLogin1")
        }

    } catch (error) {
        errorWebhooks(error, "checkResIsLogin2")
        sendText("Error checking login", "red")
    }
}


async function main() {

    if (link.includes("DeliveryPayment")) {
        if (checkout_mode == "Browser")
            mainCheckoutBrowser()
        if (checkout_mode == "Fast")
            mainCheckoutFast()
    } else {
        mainAtc()
    }

}

async function mainLoginBrowser() {

    try {
        await sleep(500)
        if (email_login != "" && document.getElementById("Email").value != email_login) {
            document.getElementById("Email").focus()
            document.execCommand('insertText', false, email_login)
        }
        await sleep(500)
        if (pw_login != "" && document.getElementById("Password").value != pw_login) {
            document.getElementById("Password").focus()
            document.execCommand('insertText', false, pw_login)
        }
        await sleep(500)

        document.querySelector('[type="submit"]').click()

    } catch (error) {}
}

async function mainAtc() {
    try {

        let x = ""
        let s = document.querySelectorAll("script")
        s.forEach(element => {
            if (element.textContent.includes('"@type": "Product",')) {
                x = JSON.parse(element.textContent)
            }
        });

        if (x != "") {
            name_product = x.name
            img_product = x.image[0]
            product_id = x.sku
            size_product = x.sku
            price_product = x.offers.price + " " + x.offers.priceCurrency
            try { key = document.querySelector("button.button.add-to-cart").getAttribute("data-add-offer-key") } catch (error) {}

            if (key != "")
                atcR3()
            else
                atcR2()
        }

    } catch (error) { console.log(error) }
}

async function atcR() {

    sendText("Adding to cart...", "blue")
    await fetch("https://www.ldlc.com/" + country + "/aggiungi-nel-carrello/offerta/" + product_id + "/1/1/0", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "it-IT,it;q=0.9,en-XA;q=0.8,en;q=0.7,en-US;q=0.6",
                "sec-ch-ua": "\"Chromium\";v=\"94\", \"Google Chrome\";v=\"94\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            "referrer": link,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkRes(response) })
        .catch((error) => {
            sendText("Error adding to cart", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "atcRFast")
        });;
}
async function atcR2() {

    sendText("Adding to cart...", "blue")
    await fetch("https://www.ldlc.com/v4/" + country + "/cart/add/offer/" + product_id + "/1/0", {
            "headers": {
                "accept": "*/*",
                "accept-language": "it-IT,it;q=0.9,en-XA;q=0.8,en;q=0.7,en-US;q=0.6",
                "sec-ch-ua": "\"Chromium\";v=\"94\", \"Google Chrome\";v=\"94\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": link,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkRes(response) })
        .catch((error) => {
            sendText("Error adding to cart", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "atcRFast")
        });;
}
async function atcR3() {

    sendText("Adding to cart...", "blue")
    await fetch("https://www.ldlc.com/v4/" + country + "/cart/oneclick/add/offer/" + product_id + "/1/" + key, {
            "headers": {
                "accept": "*/*",
                "accept-language": "it-IT,it;q=0.9,en-XA;q=0.8,en;q=0.7,en-US;q=0.6",
                "sec-ch-ua": "\"Chromium\";v=\"94\", \"Google Chrome\";v=\"94\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": link,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkRes(response) })
        .catch((error) => {
            sendText("Error adding to cart", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "atcRFast")
        });;
}

async function checkRes(response) {
    try {

        let status = response.status
        let res = await response.text()
        res = JSON.parse(res)
        if (status == 200 || status == 201) {
            if (res.status == "OK") {
                sendText("Carted ", "green")
                if (checkout_mode == "Browser" || is_login == false) {
                    sendWebhooks()
                    document.location = "https://secure2.ldlc.com/" + country + "/DeliveryPayment"
                } else if (checkout_mode == "Fast")
                    mainCheckoutFast()
            } else {
                sendText("Error carting ", "red")
            }
        } else {
            sendText("Error carting ", "red")
        }

    } catch (error) { errorWebhooks(error, "checkRes") }
}

async function mainCheckoutBrowser() {
    try {

        document.querySelector('input[name="CardNumber"]').value = profile.CardNumber
        document.querySelector('input[name="ExpirationDate"]').value = profile.MMYY
        document.querySelector('input[name="OwnerName"]').value = profile.CardOwnerName
        document.querySelector('input[name="Cryptogram"]').value = profile.CVV

    } catch (error) { errorWebhooks(error, "mainCheckoutBrowser") }
}

async function mainCheckoutFast() {
    try {

        email = email_login

        if (link != "https://secure2.ldlc.com/" + country + "/DeliveryPayment")
            getCheckoutv2()
        else {
            __RequestVerificationToken = document.querySelector('[name="__RequestVerificationToken"]').value
            CartType = document.querySelector('[name="CartType"]').value
            Id = document.querySelector('[name="Id"]').value

            price_product = document.querySelector('[class="total-costs to-right price"]').textContent.split("€")[0] + "€"

            Order()
        }

    } catch (error) { errorWebhooks(error, "mainCheckoutFast") }
}

async function getCheckoutv2() {
    try {

        sendText("Checking out...", "blue")

        let x = ""

        chrome.runtime.sendMessage({ greeting: "ldlc_checkout&" + country })

        while (x == "" || x == null) {

            chrome.runtime.sendMessage({ greeting: "data_ldlc_checkout" }, function(response) {
                x = response.farewell
            });
            await sleep(500)
        }

        if (x != "error") {
            sendText("checked out", "green")
            open(x, target = "_blank")
            linkpp = x
            sendWebhooks()
        } else {
            sendText("Error checking out", "red")
        }

    } catch (error) { errorWebhooks(error, "getCheckoutv2") }
}

async function Order() {

    sendText("Submitting order...", "blue")
    await fetch("https://secure2.ldlc.com/" + country + "/Sips/Order", {
            "headers": {
                "accept": "*/*",
                "accept-language": "it-IT,it;q=0.9,en-XA;q=0.8,en;q=0.7,en-US;q=0.6",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"97\", \"Chromium\";v=\"97\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://secure2.ldlc.com/" + country + "/DeliveryPayment",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "__RequestVerificationToken=" + __RequestVerificationToken +
                "&CartType=" + CartType +
                "&Id=" + Id +
                "&ExistingOrderId=" +
                "&UnsettledInstalmentsOrderIdSage=" +
                "&CardNumber=" + profile.CardNumber +
                "&ExpirationDate=" + profile.MMYY +
                "&ExpirationMonth=" + profile.MMYY.split("/")[0] +
                "&ExpirationYear=20" + profile.MMYY.split("/")[1] +
                "&OwnerName=" + profile.CardOwnerName +
                "&Cryptogram=" + profile.CVV +
                "&GeneralTermsOfSaleAccepted=true" +
                "&GeneralTermsOfSaleAccepted=false" +
                "&ShippingPassTermsOfSaleAccepted=True" +
                "&X-Requested-With=XMLHttpRequest",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResOrder(response) })
        .catch((error) => {
            sendText("Error submitting order", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "Order")
        });;
}
async function checkResOrder(response) {

    try {
        let status = response.status
        let res = await response.json()
        if (status == 200 || status == 201) {
            linkpp = res.redirectUrl
                // sendWebhooks()
            open(res.redirectUrl, target = "_blank")
            sendText("Checked out", "green")
        } else {
            sendText("Error submitting order", "red")
        }
    } catch (error) { errorWebhooks(error, "checkResOrder") }
}


async function sendWebhooks() {
    chrome.runtime.sendMessage({ greeting: "checkout_webhook&-&" + name_product + "&-&" + link_product + "&-&" + img_product + "&-&" + site + " " + country + "&-&" + size_product + "&-&" + price_product + "&-&" + email + "&-&" + linkpp })
}

async function errorWebhooks(error, position) {
    chrome.runtime.sendMessage({ greeting: "error_webhook&-&" + site + "&-&" + error + "&-&" + position })
}

async function resInfoWebook(message, position) {
    chrome.runtime.sendMessage({ greeting: "info_webhook&-&" + site + "&-&" + message + "&-&" + position })
}

chrome.runtime.sendMessage({ greeting: "country_ldlc" }, function(response) {
    switch (response.farewell) {
        case "it":
            country_ldlc = "it-it"
            break
        case "en":
            country_ldlc = "en"
            break
        case "fr":
            country_ldlc = "fr-fr"
            break
        case "ch":
            country_ldlc = "fr-ch"
            break
        case "be":
            country_ldlc = "fr-be"
            break
        case "lu":
            country_ldlc = "fr-lu"
            break
        case "es":
            country_ldlc = "es-es"
        default:
            country_ldlc = "off"
            break
    }
});

chrome.runtime.sendMessage({ greeting: "status_aco_ldlc" }, function(response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "status_login_ldlc" }, function(response) {
    status_login = response.farewell
});

chrome.runtime.sendMessage({ greeting: "email_pw_ldlc" }, function(response) {
    var x = response.farewell
    email_login = x.split(':')[0]
    pw_login = x.split(':')[1]
});

chrome.runtime.sendMessage({ greeting: "payment_mode_ldlc" }, function(response) {
    payment_mode = response.farewell
});

chrome.runtime.sendMessage({ greeting: "checkout_mode_ldlc" }, function(response) {
    checkout_mode = response.farewell
});

chrome.runtime.sendMessage({ greeting: "profile_ldlc" }, function(response) {
    chrome.runtime.sendMessage({ greeting: response.farewell }, function(response) {
        try {
            profile = JSON.parse(response.farewell)
        } catch (error) {}
    });
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        textBox()
        chrome.runtime.sendMessage({ greeting: "status_aco_ldlc" }, function(response) {
            if (response.farewell == 'on') {
                changeCountry()
                checkLogin()
                main()
            }
        });
    }
});