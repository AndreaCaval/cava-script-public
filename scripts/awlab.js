const site = "Awlab"
const site1 = "Awlab1"

const site_region = {
    "en.aw-lab.com": " EN",
    "es.aw-lab.com": " ES",
    "www.aw-lab.com": " IT"
}

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
        btn1.insertAdjacentHTML("beforebegin", '<style>.btn_cava {box-shadow: rgb(247 197 192) 0px 1px 0px 0px inset;background: linear-gradient(rgb(252, 141, 131) 5%, rgb(228, 104, 93) 100%) rgb(252, 141, 131);border-radius: 6px;border: 1px solid rgb(216, 53, 38);display: inline-block;cursor: pointer;color: rgb(255, 255, 255);font-family: Arial;font-size: 14px;font-weight: bold;text-decoration: none;text-shadow: rgb(178 62 53) 0px 1px 0px;outline: none;width: 100%;}' +
            '.btn_cava:hover {background:linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);background-color:#e4685d;}' +
            '.btn_cava:active {position:relative;top:1px;} p{font-weight:bold}' +
            '#CavaScripts {position: fixed;right: 0;top: 350px; z-index:1000;width:300px;background-image: url(https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/estensione%20grafica%2Fsfondo.png?alt=media&token=f403fdf7-32ee-4773-a1a9-4022916f4bea);background-size: cover;padding: 10px 10px;color: black; border-radius: 10px;font-family: Arial;text-align: left;}' +
            '#CavaScriptsheader {padding: 10px;cursor: move;z-index: 10;background-color: #2196F3;color: #fff;border-radius: 10px;text-align: center;}' +
            '.box {width: 100%;background: #ffffff;color: #000;text-align: center;display: inline-block;box-shadow: #A3A3A3 3px 3px 6px -1px;border-radius: 10px;padding: 5px;}</style>' +
            '<div id="CavaScripts"><div id="CavaScriptsheader"><input type="image" id="btn_left" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/estensione%20grafica%2Fleft.png?alt=media&token=4bfb16c9-cb38-4493-b80e-452dc18f35ba" style="width: 10px; margin-right: 40px;margin-bottom: -3px;">Click here to move<input type="image" id="btn_right" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/estensione%20grafica%2Fright.png?alt=media&token=45a8c855-ccf9-4f80-9c55-113ccd8ed863" style="width: 10px;margin-left: 40px;margin-bottom: -3px;"></div>' +
            ' <br> <p id="statusAwlab">Status awlab</p> ' +
            "<p style='margin: 20px 0px 0px 0px;text-align: center;font-size: 15px;'>ACO: <span style='margin-right: 15px;font-size: 20px; text-transform: uppercase; color:" + color_aco + ";'>" + status_aco + "</span></p></div>");

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
    } catch (error) {
        if (error != "TypeError: Cannot read property 'parentNode' of undefined" && error != "TypeError: Cannot read property 'insertAdjacentHTML' of undefined" && error != "TypeError: Cannot read property 'insertAdjacentHTML' of null")
            console.log(error)
    }
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

        if (elmnt.offsetTop - pos2 >= 0) {
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
        if (error != "TypeError: Cannot read property 'getAttribute' of undefined")
            errorWebhook(error, "getMainPid")
        try {
            y = link.replace(/[^a-zA-Z0-9_]/g, '-');
            y = y.split('-')
            y.forEach(element => {
                if (element.startsWith("AW")) {
                    pid = element
                }
            });
        } catch (error) { errorWebhook(error, "getMainPid2") }
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
    try {

        sendWebhooks1()
        document.location = "https://" + country + "/checkout"

    } catch (error) { errorWebhook(error, "mainCheckout") }
}




async function sendWebhooks() {
    chrome.runtime.sendMessage({ greeting: "checkout_webhook&-&" + name_product + "&-&" + link_product + "&-&" + img_product + "&-&" + site + site_region[country] + "&-&" + size_product + "&-&" + price_product + "&-&" + email + "&-&" + linkpp })
}

async function sendWebhooks1() {
    chrome.runtime.sendMessage({ greeting: "checkout_webhook&-&" + name_product + "&-&" + link_product + "&-&" + img_product + "&-&" + site1 + site_region[country] + "&-&" + size_product + "&-&" + price_product })
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