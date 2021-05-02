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
        btn1.insertAdjacentHTML("beforebegin", '<style>.btn_cava {box-shadow: rgb(247 197 192) 0px 1px 0px 0px inset;background: linear-gradient(rgb(252, 141, 131) 5%, rgb(228, 104, 93) 100%) rgb(252, 141, 131);border-radius: 6px;border: 1px solid rgb(216, 53, 38);display: inline-block;cursor: pointer;color: rgb(255, 255, 255);font-family: Arial;font-size: 14px;font-weight: bold;text-decoration: none;text-shadow: rgb(178 62 53) 0px 1px 0px;outline: none;width: 100%;}' +
            '.btn_cava:hover {background:linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);background-color:#e4685d;}' +
            '.btn_cava:active {position:relative;top:1px;} p{font-weight:bold}' +
            '#CavaScripts {position: fixed;right: 0;top: 350px; z-index:1000;width:300px;background-image: url(https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fbackground.png?alt=media&token=90d4ab30-1b59-434f-8729-b2a43a84d445);background-size: cover;padding: 10px 10px;color: black; border-radius: 10px;font-family: Arial;text-align: left;}' +
            '#CavaScriptsheader {padding: 10px;cursor: move;z-index: 10;background-color: #2196F3;color: #fff;border-radius: 10px;text-align: center;}' +
            '.box {width: 100%;background: #ffffff;color: #000;text-align: center;display: inline-block;box-shadow: #A3A3A3 3px 3px 6px -1px;border-radius: 10px;padding: 5px;}</style>' +
            '<div id="CavaScripts"><div id="CavaScriptsheader"><input type="image" id="btn_left" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fleft.png?alt=media&token=ae01ab54-0f26-47ac-9fdf-8774188499bd" style="width: 10px; margin-right: 40px;margin-bottom: -3px;">Click here to move<input type="image" id="btn_right" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fright.png?alt=media&token=887cb8d7-4399-43ff-a197-96afe8626dc6" style="width: 10px;margin-left: 40px;margin-bottom: -3px;"></div>' +
            ' <br> <p id="statusKickz">Status kickz</p> ' +
            "<p style='margin: 20px 0px 0px 0px;text-align: center;font-size: 15px;'>ACO: <span style='margin-right: 15px;font-size: 20px; text-transform: uppercase; color:" + color_aco + ";'>" + status_aco + "</span> LOGIN: <span style='font-size: 20px; text-transform: uppercase; color:" + color_login + ";' >" + status_login + "</span></p></div>");

        dragElement(document.getElementById("CavaScripts"));
        window.onresize = checkPosition;
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
    try { document.getElementById("statusKickz").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) {}
}

async function errorRefresh() {
    if (delay != "0") {
        sendText("Sleep " + delay + "ms...", "blue")
        await sleep(parseInt(delay))
        location.reload()
    }
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
                document.location = "https://www.kickz.com/" + country + "/cart"
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

chrome.runtime.sendMessage({ greeting: "delay_kickz" }, function(response) {
    delay = response.farewell
});

chrome.runtime.sendMessage({ greeting: "email_pw_kickz" }, function(response) {
    var x = response.farewell
    email_login = x.split(':')[0]
    pw_login = x.split(':')[1]
});

chrome.runtime.sendMessage({ greeting: "status_aco_kickz" }, function(response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "status_login_kickz" }, function(response) {
    status_login = response.farewell
});

chrome.runtime.sendMessage({ greeting: "size_kickz" }, function(response) {
    if (response.farewell != "off" && hasNumber(response.farewell))
        size_range = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        textBox()
        chrome.runtime.sendMessage({ greeting: "status_aco_kickz" }, function(response) {
            if (response.farewell == 'on') {
                main();
            }
        });
        chrome.runtime.sendMessage({ greeting: "status_login_kickz" }, function(response) {
            if (response.farewell == 'on') {
                checkLogin();
            }
        });
    }
});