debugger

const site = "Awlab"
const site1 = "Awlab1"

const fetch_link = {
    "en.aw-lab.com": {
        "GetAvailability": "https://en.aw-lab.com/on/demandware.store/Sites-awlab-en-Site/en_GB/Product-GetAvailability?format=ajax&pid=",
        "AddProduct": "https://en.aw-lab.com/on/demandware.store/Sites-awlab-en-Site/en_GB/Cart-AddProduct?format=ajax"
    },
    "es.aw-lab.com": {
        "GetAvailability": "https://es.aw-lab.com/on/demandware.store/Sites-awlab-es-Site/es_ES/Product-GetAvailability?format=ajax&pid=",
        "AddProduct": "https://es.aw-lab.com/on/demandware.store/Sites-awlab-es-Site/es_ES/Cart-AddProduct?format=ajax"
    },
    "www.aw-lab.com": {
        "GetAvailability": "https://www.aw-lab.com/on/demandware.store/Sites-awlab-it-Site/it_IT/Product-GetAvailability?format=ajax&pid=",
        "AddProduct": "https://www.aw-lab.com/on/demandware.store/Sites-awlab-it-Site/it_IT/Cart-AddProduct?format=ajax"
    }
}

let link = document.location.href
let country = link.split('/')[2]

let size_range = "random"

let status_aco = ""
let status_login = ""

let email_login = ""
let pw_login = ""

let coupon = ""
let continue_coupon = ""

let payment_mode = ""
let checkout_mode = "ATC Only"
let mode = ""

let pid = ""
let sizepid = ""
let sizepid_instock = []

let link_product = link
let name_product = '';
let size_product = '';
let price_product = "";
let img_product = ""
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

function textBox() {
    let color_aco = "";
    if (status_aco == "off") { color_aco = "red" } else { color_aco = "green" }
    try {
        var btn1 = document.getElementsByClassName("b-header__banner js-cmp-inited js-cmp-header")[0]
        btn1.insertAdjacentHTML("beforebegin", '<div id="CavaScripts" style="font-size:15px; font-family: Verdana, Geneva, word-wrap: break-word; sans-serif; position: fixed; right:0; top: 350px; z-index: 1000; min-width: 10px; max-width: 500px; background-color: lightgrey; padding: 15px 10px; color: black; border-radius: 10px;">' +
            ' <p id="statusAwlab">Status Awlab</p> ' +
            " <p>ACO: <span style='font-size:20px; color:" + color_aco + ";'>" + status_aco + "</span></p></div>");
    } catch (error) {
        if (error != "TypeError: Cannot read property 'parentNode' of undefined" && error != "TypeError: Cannot read property 'insertAdjacentHTML' of undefined" && error != "TypeError: Cannot read property 'insertAdjacentHTML' of null")
            console.log(error)
    }
}

async function sendText(text, color) {
    try { document.getElementById("statusAwlab").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) {}
}


async function main() {

    await getMainPid()

    if (pid != "")
        checkStock()

}


async function getMainPid() {
    try { pid = document.getElementsByClassName("b-pdp b-size-selector__active js-cmp-inited js-cmp-productMain")[0].getAttribute("data-product-id") } catch (error) {
        if (error != "TypeError: Cannot read property 'getAttribute' of undefined") errorWebhook(error, "getMainPid")
    }
}


async function checkStock() {

    sendText("Getting size...", "blue")
    await fetch(fetch_link[country]["GetAvailability"] + pid, {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
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
        .then(response => { checkResCheckStock(response) })
        .catch((error) => {
            if (error != "TypeError: Failed to fetch")
                errorWebhook(error, "checkStock")
            sendText("Error getting size", "orange")
        });;
}

async function checkResCheckStock(response) {
    try {

        let status = response.status
        let res = await response.text()
        let x = res
        res = JSON.parse(res)
        if (status == 200 || status == 201) {
            getSizepidInstock(res)
        } else {
            sendText("Error Getting size...", "red")
            errorWebhook(x, "checkResCheckStock")
        }

    } catch (error) {
        sendText("Error Getting size...", "red")
        errorWebhook(x, "checkResCheckStock_2")
    }
}

async function getSizepidInstock(pids) {
    try {

        for (var key in pids) {
            if (pids.hasOwnProperty(key)) {
                if (pids[key]["status"] != "Sold out" && key.startsWith(pid))
                    sizepid_instock.push(key)
            }
        }

        if (sizepid_instock.length != 0) {
            mainAtc()
        } else {
            sendText("Item out of stock...", "red")
        }

    } catch (error) {
        sendText("Error, Item out of stock...", "red")
        errorWebhook(error, "getSizepidInstock")
    }
}

async function mainAtc() {
    try {

        if (size_range == "random") {
            let n = getRandomIntInclusive(0, sizepid_instock.length - 1)
            sizepid = sizepid_instock[n]
        }

        if (sizepid != "")
            atcR()

    } catch (error) { errorWebhook(error, "mainAtc") }
}

async function atcR() {

    sendText("Trying atc...", "blue")
    await fetch(fetch_link[country]["AddProduct"], {
            "headers": {
                "accept": "text/html, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": link,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "Quantity=1&sizeTable=&cartAction=add&pid=" + sizepid,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResAtc(response) })
        .catch((error) => {
            if (error != "TypeError: Failed to fetch")
                errorWebhook(error, "atcR")
            sendText("Error adding to cart", "orange")
        });;
}

async function checkResAtc(response) {
    try {

        let status = response.status

        if (status == 200 || status == 201) {
            sendText("Carted", "green")
            setDataProduct()
            mainCheckout()
        } else { sendText("Error carting", "red") }

    } catch (error) { errorWebhook(error, "checkResAtc") }
}

function setDataProduct() {
    try {
        name_product = pid
        size_product = sizepid
        price_product = document.getElementsByClassName("b-price__sale")[0].textContent
        img_product = document.getElementsByClassName("main-image-class")[0].src
    } catch (error) { errorWebhook(error, "setDataProduct") }
}

async function mainCheckout() {

    if (checkout_mode == "ATC Only") {
        sendWebhooks1()
        document.location = "https://" + country + "/checkout"
    }

}

async function sendWebhooks() {
    chrome.runtime.sendMessage({ greeting: "checkout_webhook&-&" + name_product + "&-&" + link_product + "&-&" + img_product + "&-&" + site + "&-&" + size_product + "&-&" + price_product + "&-&" + email + "&-&" + linkpp })
}

async function sendWebhooks1() {
    chrome.runtime.sendMessage({ greeting: "checkout_webhook&-&" + name_product + "&-&" + link_product + "&-&" + img_product + "&-&" + site1 + "&-&" + size_product + "&-&" + price_product })
}

async function errorWebhook(error, position) {
    chrome.runtime.sendMessage({ greeting: "error_webhook&-&" + site + "&-&" + error + "&-&" + position })
}

async function resInfoWebook(message, position) {
    chrome.runtime.sendMessage({ greeting: "info_webhook&-&" + site + "&-&" + message + "&-&" + position })
}

chrome.runtime.sendMessage({ greeting: "awlab" }, function(response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        textBox()
        chrome.runtime.sendMessage({ greeting: "awlab" }, function(response) {
            if (response.farewell == 'on') {
                main()
            }
        });
    }
});