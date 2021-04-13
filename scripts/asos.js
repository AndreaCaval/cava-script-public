debugger

const site = "Asos"

let link = document.location.href
let country = link.split('/')[2]
let country2 = link.split('/')[3]

let size_range = "random"
let mode = ""

let status_aco = "";
let delay = "0";

let link_product = link
let name_product = '';
let size_product = '';
let price_product = "";
const img_product = "https://diginomica.com/sites/default/files/images/2020-04/Screenshot%202020-04-14%20at%2013.43.39.png"

let url_check_stock = "https://www.asos.com"

let variants = ""
let variant_id = ""
let instock_variants = []
let access_token = ""
let bag_id = ""
let customers_id = ""
let item_carted = 0
let lang = document.documentElement.lang

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
    if (status_aco == "off") { color_aco = "red" } else { color_aco = "green" }
    try {
        var btn1 = document.getElementById("chrome-header")
        btn1.insertAdjacentHTML("beforebegin", '<style>.btn_cava {box-shadow: rgb(247 197 192) 0px 1px 0px 0px inset;background: linear-gradient(rgb(252, 141, 131) 5%, rgb(228, 104, 93) 100%) rgb(252, 141, 131);border-radius: 6px;border: 1px solid rgb(216, 53, 38);display: inline-block;cursor: pointer;color: rgb(255, 255, 255);font-family: Arial;font-size: 14px;font-weight: bold;text-decoration: none;text-shadow: rgb(178 62 53) 0px 1px 0px;outline: none;width: 100%;}' +
            '.btn_cava:hover {background:linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);background-color:#e4685d;}' +
            '.btn_cava:active {position:relative;top:1px;} p{font-weight:bold}' +
            '#CavaScripts {position: fixed;right: 0;top: 350px; z-index:1000;width:300px;background-image: url(https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/estensione%20grafica%2Fsfondo.png?alt=media&token=f403fdf7-32ee-4773-a1a9-4022916f4bea);background-size: cover;padding: 10px 10px;color: black; border-radius: 10px;font-family: Arial;text-align: left;}' +
            '#CavaScriptsheader {padding: 10px;cursor: move;z-index: 10;background-color: #2196F3;color: #fff;border-radius: 10px;text-align: center;}' +
            '.box {width: 100%;background: #ffffff;color: #000;text-align: center;display: inline-block;box-shadow: #A3A3A3 3px 3px 6px -1px;border-radius: 10px;padding: 5px;}</style>' +
            '<div id="CavaScripts"><div id="CavaScriptsheader"><input type="image" id="btn_left" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/estensione%20grafica%2Fleft.png?alt=media&token=4bfb16c9-cb38-4493-b80e-452dc18f35ba" style="width: 10px; margin-right: 40px;margin-bottom: -3px;">Click here to move<input type="image" id="btn_right" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/estensione%20grafica%2Fright.png?alt=media&token=45a8c855-ccf9-4f80-9c55-113ccd8ed863" style="width: 10px;margin-left: 40px;margin-bottom: -3px;"></div>' +
            ' <br> <p id="statusAsos">Status asos</p> ' +
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
        if (error != "TypeError: Cannot read property 'parentNode' of undefined" && error != "TypeError: Cannot read property 'insertAdjacentHTML' of undefined")
            errorWebhooks(error, "textBox")
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
    try { document.getElementById("statusAsos").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) {}
}

function getToken() {
    data = JSON.parse(localStorage.getItem("Asos.TokenManager.token"))
    access_token = data["access_token"]
}

async function main() {
    try {

        scripts = document.querySelectorAll("script")
        scripts.forEach(element => {
            if (element.textContent.includes("stockPriceApiUrl =")) {
                splits = element.textContent.split('\'')
                splits.forEach(element2 => {
                    if (element2.includes("/api/product/catalogue/v3/stockprice?productIds"))
                        url_check_stock += element2
                });
            }
        });
        if (url_check_stock != "https://www.asos.com") {
            mainCheckStock()
        }

    } catch (error) { errorWebhooks(error, "main") }
}

async function mainCheckStock() {
    try {

        while (true) {
            await checkStock()
            await sleep(parseInt(delay))
            sendText("Monitoring...", "blue")
        }

    } catch (error) { errorWebhooks(error, "mainCheckStock") }
}

async function checkStock() {
    await fetch(url_check_stock, {
            "headers": {
                "accept": "*/*",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "asos-c-name": "asos-web-productpage",
                "asos-c-version": "1.0.0-742a2eb1bb95-2805",
                "if-none-match": "\"96e039da-0f8b-4724-9610-4aa34cd6cf4b\"",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
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
            sendText("Error checking stock", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "checkStock")
        });;
}
async function checkResCheckStock(response) {
    try {
        let status = response.status
        let res = await response.text()
        res = JSON.parse(res)

        if (status == 200 || status == 201) {
            variants = res[0]["variants"]
            variants.forEach(element => {
                if (element["isInStock"] == true)
                    instock_variants.push(element["variantId"])
            });

            if (instock_variants.length != 0) { mainAtc() } else { sendText("Item out of stock", "red") }

        } else {
            sendText("Error checking stock", "red")
        }

    } catch (error) {
        sendText("Error checking stock", "red")
        errorWebhooks(error, "checkResCheckStock")
    }
}

async function mainAtc() {

    if (size_range == "random") {
        n = getRandomIntInclusive(0, instock_variants.length - 1)
        variant_id = instock_variants[n]
    }


    dict_bag_id = JSON.parse(localStorage.getItem("Asos.Commerce.Bag.Sdk"))
    Object.keys(dict_bag_id).forEach(function(key) {
        if (key.includes("bagId")) {
            bag_id = dict_bag_id[key]["data"]
        }
    });

    getToken()

    if (bag_id != "" && access_token != "") {
        atcR()
    } else {
        if (bag_id == "") {
            sendText("Generate a valid Bag Id", "orange")
        }
    }
}

async function getBagId() {

    sendText("Getting bag id...", "blue")
    await fetch("https://www.asos.com/api/commerce/bag/v4/customers/" + customers_id + "/bags/getbag?expand=summary,total&lang=it-IT&keyStoreDataversion=hnm9sjt-28", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "asos-c-ismobile": "false",
                "asos-c-istablet": "false",
                "asos-c-name": "Asos.Commerce.Bag.Sdk",
                "asos-c-plat": "Web",
                "asos-c-store": "IT",
                "asos-c-ver": "5.1.0",
                "asos-cid": "ae215a02-b81e-4ccf-8ed5-491fd8c4c8a2",
                "authorization": "bearer " + access_token,
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
            "body": "{\"currency\":\"EUR\",\"lang\":\"" + lang + "\",\"sizeSchema\":\"" + country2.toUpperCase() + "\",\"country\":\"" + country2.toUpperCase() + "\",\"originCountry\":\"" + country2.toUpperCase() + "\"}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResGetBagId(response) })
        .catch((error) => {
            sendText("Error checking stock", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "getBagId")
        });;
}
async function checkResGetBagId(response) {
    try {

        let status = response.status
        let res = await response.text()
        res = JSON.parse(res)

        if (status == 200 || status == 201) {
            item_carted = res["bag"]["items"].length
            bag_id = res["bag"]["id"]
            atcR()
        } else {
            sendText("Error getting bag id", "red")
        }

    } catch (error) {
        sendText("Error getting bag id", "red")
        errorWebhooks(error, "checkResGetBagId")
    }
}


async function atcR() {

    sendText("Adding to cart...", "blue")
    await fetch("https://www.asos.com/api/commerce/bag/v4/bags/" + bag_id + "/product?expand=summary,total&lang=" + lang, {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "asos-bag-origin": "EUW",
                "asos-c-ismobile": "false",
                "asos-c-istablet": "false",
                "asos-c-name": "Asos.Commerce.Bag.Sdk",
                "asos-c-plat": "Web",
                "asos-c-store": "IT",
                "asos-c-ver": "5.1.0",
                "asos-cid": "4401fe9a-30a3-4a65-8d5f-8609c64838c3",
                "authorization": "bearer " + access_token,
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
            "body": "{\"variantId\":" + variant_id + "}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResGetBagId(response) })
        .catch((error) => {
            sendText("Error adding to cart", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "atcR")
        });;
}
async function checkResGetBagId(response) {
    try {

        let status = response.status
        let res = await response.text()
        res = JSON.parse(res)

        if (status == 200 || status == 201) {
            if (res["bag"]["items"].length != item_carted) {
                sendText("Carted", "green")

                item = res["bag"]["items"][0]
                name_product = item["name"]
                price_product = item["price"]["current"]["text"]
                size_product = item["size"]

                mainCheckout()
            }
        } else {
            sendText("Error adding to cart", "red")
        }

    } catch (error) {
        sendText("Error adding to cart", "red")
        errorWebhooks(error, "checkResGetBagId")
    }
}

async function mainCheckout() {
    try {

        sendWebhooks()

        if (document.querySelector('[data-testid="miniBagIcon"]').href != undefined)
            document.location = document.querySelector('[data-testid="miniBagIcon"]').href
        else
            document.location = document.querySelector('[data-test-id="bag-link"]').href

    } catch (error) {}
}


async function sendWebhooks() {
    chrome.runtime.sendMessage({ greeting: "checkout_webhook&-&" + name_product + "&-&" + link_product + "&-&" + img_product + "&-&" + site + "&-&" + size_product + "&-&" + price_product })
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

chrome.runtime.sendMessage({ greeting: "asos" }, function(response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "asos" }, function(response) {
            if (response.farewell == 'on') {
                main();
            }
        });
        textBox()
    }
});