debugger

const site = "Kickz"

let link = document.location.href
let country = link.split('/')[3]

let size_range = "random"
let delay = "0"

let email_login = "";
let pw_login = "";

let status_login = "";
let status_aco = "";

let is_login = false

let productVariantIdAjax = ""

let link_product = link
let size_product = "";
let sku_product = "";
let price_product = ""
let img_product = ""


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
        let btn1 = document.getElementsByClassName("section-main d-flex align-items-center")[0]
        btn1.insertAdjacentHTML("beforebegin", '<div id="CavaScripts" style="font-family: Verdana, Geneva, sans-serif; position: fixed; right:0; top: 500px; z-index: 1000; min-width: 10px; background-color: lightgrey; padding: 5px 10px; color: black; border-radius: 10px;">' +
            ' <p id="statusKickz">Status kickz</p>' +
            " <p>ACO: <span style='font-size:20px; color:" + color_aco + ";'>" + status_aco + "</span> LOGIN: <span style='font-size:20px; color:" + color_login + ";' >" + status_login + "</span></p></div>");
    } catch (error) {
        if (error != "TypeError: Cannot read property 'parentNode' of undefined" && error != "TypeError: Cannot read property 'insertAdjacentHTML' of undefined")
            errorWebhooks(error, "textBox")
    }
}

async function sendText(text, color) {
    try { document.getElementById("statusKickz").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) {}
}

async function errorRefresh() {
    sendText("Sleep " + delay + "ms...", "blue")
    await sleep(parseInt(delay))
    location.reload()
}

async function main() {
    if (link == "https://www.kickz.com/" + country + "/cart") {
        document.getElementsByClassName("checkout_btn_link checkout_btn_table")[0].click()
    } else if (link == "https://www.kickz.com/" + country + "/checkout/paymentSummary") {
        mainCk()
    } else {
        mainAtc()
    }
}


async function checkLogin() {

    try {

        let log = ""
        if (document.querySelectorAll('[data-prop="user"]')[0] != undefined) {
            log = document.querySelectorAll('[data-prop="user"]')[0].textContent
            if (log == "\"\"" || log == null || log == undefined || log == "") {
                sendText("Logging in...", "blue")
                await loginR()
            } else {
                is_login = true
            }
        } else {
            is_login = true
        }

    } catch (error) {
        errorWebhooks(error, "checkLogin")
        sendText("Error logging in...", "red")
    }
}

async function loginR() {

    try {
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
                "body": "login=" + email_login + "&password=" + pw_login,
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            })
            .then(response => { checkResLogin(response) })
            .catch((error) => { errorWebhooks(error, "authentication") });;

    } catch (error) {
        errorWebhooks(error, "loginR")
        sendText("Error logging in...", "red")
    }
}

async function checkResLogin(response) {

    let status = response.status
    if (status == 200 || status == 201) {
        sendText("Logged in", "green")
        is_login = true
    } else {
        sendText("Error logging in...", "red")
    }
}


async function mainAtc() {
    try {
        let x = 0 //0 eu, 1 uk, 2 us; 
        let f = "getSizeInfo"
        let div = document.getElementsByClassName("chooseSizeContainer")[x]
        let sizes = div.getElementsByClassName("chooseSizeLinkContainer active")
        sizes = Array.prototype.slice.call(sizes)
        sizes = arreyMixer(sizes)

        if (size_range == "random") {
            let n = getRandomIntInclusive(0, sizes.length - 1)
            let size = sizes[n].querySelectorAll('a')[0].getAttribute('onclick')
            let y = size.indexOf('(')
            f += size.substring(y)
        } else {
            if (size_range.includes('-')) {
                for (let index = 0; index < sizes.length; index++) {
                    if (parseFloat(sizes[index].querySelectorAll('a')[0].getAttribute('data-size')) >= parseFloat(size_range.split('-')[0]) && parseFloat(sizes[index].querySelectorAll('a')[0].getAttribute('data-size')) <= parseFloat(size_range.split('-')[1])) {
                        let size = sizes[index].querySelectorAll('a')[0].getAttribute('onclick')
                        let y = size.indexOf('(')
                        f += size.substring(y)
                        break
                    }
                }
            } else {
                for (let index = 0; index < sizes.length; index++) {
                    if (parseFloat(sizes[index].querySelectorAll('a')[0].getAttribute('data-size')) == parseFloat(size_range)) {
                        let size = sizes[index].querySelectorAll('a')[0].getAttribute('onclick')
                        let y = size.indexOf('(')
                        f += size.substring(y)
                        break
                    }
                }
            }
        }

        if (f != "getSizeInfo")
            eval(f)

    } catch (error) {}

}

async function getSizeInfo(a, size_id_product, price_1, price_2, b, price_saved, size_p, c, d, e, f, g, h, stock_size_product, size_product_type, sku_p, i, l, m, n, o) {
    productVariantIdAjax = size_id_product
    size_product = size_p
    sku_product = sku_p
    price_product = price_1
    img_product = document.querySelectorAll("[class='productDetailPic']")[0].src
    atcR()
}

async function atcR() {

    let ttoken = document.querySelectorAll('[name="ttoken"]')[0].value
    sendText("Trying atc fast...", "blue")
    await fetch("https://www.kickz.com/" + country + "/cart/ajaxAdd", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": link,
            "referrerPolicy": "same-origin",
            "body": "productVariantIdAjax=" + productVariantIdAjax + "&ttoken=" + ttoken,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkRes(response) })
        .catch((error) => { console.log(error) });;
}

async function checkRes(response) {
    try {
        sendText("Carting...", "blue")
        let status = response.status
        let res = await response.text()
        res = JSON.parse(res)
        let isError = ""
        let statusCode = ""

        if (status == 200 || status == 201) {
            isError = res["isError"]
            statusCode = res["statusCode"]
            if (statusCode != "500" && isError != true) {
                sendText("Carted", "green")
                sendWebhooks()
                open("https://www.kickz.com/" + country + "/cart", "_self")
            } else {
                sendText("Error carting", "red")
                errorRefresh()
            }
        } else {
            sendText("Error carting", "red")
            errorRefresh()
        }
    } catch (error) {}
}


async function mainCk() {
    try {
        document.querySelector('[value = "SOFORTUEBERWEISUNG"]').click()
        document.getElementById("checkbox-terms_accepted").click()
        await sleep(500)
        document.getElementsByClassName("btn btn-block btn-green btn-lg mb-2 mb-tablet-1")[0].click()
    } catch (error) {}
}


async function sendWebhooks() {
    chrome.runtime.sendMessage({ greeting: "checkout_webhook&-&" + sku_product + "&-&" + link_product + "&-&" + img_product + "&-&" + site + "&-&" + size_product + "&-&" + price_product })
}

async function errorWebhooks(error, position) {
    chrome.runtime.sendMessage({ greeting: "error_webhook&-&" + site + "&-&" + error + "&-&" + position })
}

async function resInfoWebook(message, position) {
    chrome.runtime.sendMessage({ greeting: "info_webhook&-&" + site + "&-&" + message + "&-&" + position })
}

chrome.runtime.sendMessage({ greeting: "delay" }, function(response) {
    delay = response.farewell
});

chrome.runtime.sendMessage({ greeting: "email_pw_kickz" }, function(response) {
    var x = response.farewell
    email_login = x.split(':')[0]
    pw_login = x.split(':')[1]
});

chrome.runtime.sendMessage({ greeting: "kickz" }, function(response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "kickz_login" }, function(response) {
    status_login = response.farewell
});

chrome.runtime.sendMessage({ greeting: "kickz_size" }, function(response) {
    if (response.farewell != "off" && hasNumber(response.farewell))
        size_range = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        textBox()
        chrome.runtime.sendMessage({ greeting: "kickz" }, function(response) {
            if (response.farewell == 'on') {
                main();
            }
        });
        chrome.runtime.sendMessage({ greeting: "kickz_login" }, function(response) {
            if (response.farewell == 'on') {
                checkLogin();
            }
        });
    }
});