debugger

const site = "Naked"

let link = document.location.href
let country = link.split('/')[3]

let size_range = "random"
let mode = ""

let status_aco = "";
let delay = "0";

let name_product = '';
let size_product = '';
let price_product = "";
let link_product = link
let img_product = ""
try { img_product = "http://img.yeet.mx/proxy/?url=" + document.getElementsByClassName("carousel__image embed-responsive-item ")[0].src } catch (error) { img_product = "https://pbs.twimg.com/profile_images/582179018419482624/RppHUjBa_400x400.jpg" }

let captcha_token = ""
let variant_id = "";
let _AntiCsrfToken = "";
let n = 0;
let sizes = "";
let size = "";
let html = document.createElement('html');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    n = Math.floor(Math.random() * (max - min + 1)) + min;
    return n
}

function hasNumber(myString) {
    return /\d/.test(myString);
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
        var btn1 = document.getElementsByClassName("site-header")[0]
        btn1.insertAdjacentHTML("beforebegin", '<style>.btn_cava {box-shadow: rgb(247 197 192) 0px 1px 0px 0px inset;background: linear-gradient(rgb(252, 141, 131) 5%, rgb(228, 104, 93) 100%) rgb(252, 141, 131);border-radius: 6px;border: 1px solid rgb(216, 53, 38);display: inline-block;cursor: pointer;color: rgb(255, 255, 255);font-family: Arial;font-size: 14px;font-weight: bold;text-decoration: none;text-shadow: rgb(178 62 53) 0px 1px 0px;outline: none;width: 100%;}' +
            '.btn_cava:hover {background:linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);background-color:#e4685d;}' +
            '.btn_cava:active {position:relative;top:1px;} p{font-weight:bold}' +
            '#CavaScripts {position: fixed;right: 0;top: 350px; z-index:1000;width:300px;background-image: url(https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fbackground.png?alt=media&token=90d4ab30-1b59-434f-8729-b2a43a84d445);background-size: cover;padding: 10px 10px;color: black; border-radius: 10px;font-family: Arial;text-align: left;}' +
            '#CavaScriptsheader {padding: 10px;cursor: move;z-index: 10;background-color: #2196F3;color: #fff;border-radius: 10px;text-align: center;}' +
            '.box {width: 100%;background: #ffffff;color: #000;text-align: center;display: inline-block;box-shadow: #A3A3A3 3px 3px 6px -1px;border-radius: 10px;padding: 5px;}</style>' +
            '<div id="CavaScripts"><div id="CavaScriptsheader"><input type="image" id="btn_left" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fleft.png?alt=media&token=ae01ab54-0f26-47ac-9fdf-8774188499bd" style="width: 10px; margin-right: 40px;margin-bottom: -3px;">Click here to move<input type="image" id="btn_right" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fright.png?alt=media&token=887cb8d7-4399-43ff-a197-96afe8626dc6" style="width: 10px;margin-left: 40px;margin-bottom: -3px;"></div>' +
            ' <br> <p id="statusNaked">Status naked</p> ' +
            "<p style='margin: 20px 0px 0px 0px;text-align: center;font-size: 15px;'>ACO: <span style='margin-right: 15px;font-size: 20px; text-transform: uppercase; color:" + color_aco + ";'>" + status_aco + "</span></p></div>");

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
    try { document.getElementById("statusNaked").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) {}
}
async function errorRefresh() {
    if (delay != "0") {
        sendText("Sleep " + delay + "ms...", "blue")
        await sleep(parseInt(delay))
        location.reload()
    }
}

async function main() {

    while (document.querySelectorAll('[data-translate="checking_browser"]')[0] != undefined) {
        await sleep(250)
    }

    try {

        sizes = document.querySelectorAll('[data-target="#product-form-select"]');
        sizes = Array.prototype.slice.call(sizes)
        sizes = arreyMixer(sizes)

        if (mode == "Fast") {
            _AntiCsrfToken = document.getElementsByName('_AntiCsrfToken')[0].value

            list_input = document.querySelectorAll('input')
            list_input.forEach(element => {
                if (element.id == "recaptcha-token") {
                    captcha_token = element.value
                }
            });

            mainAtcFast()

        } else {
            mainAtcBrowser()
        }

    } catch (error) {
        errorWebhooks(error, "main")
        sendText("Error getting size", "red")
    }
}
async function mainAtcBrowser() {
    try {
        let cart = 0
        if (sizes.length != 0) {
            if (size_range == "random") {
                do {
                    n = getRandomIntInclusive(0, sizes.length - 1)
                } while (sizes[n].getAttribute("class") == "dropdown-item disabled")
                size_product = sizes[n].textContent.replaceAll("\n", "")
                sizes[n].click()
            } else {
                if (size_range.includes('-')) {
                    for (let index = 0; index < sizes.length; index++) {
                        if (sizes[index].getAttribute("class") != "dropdown-item disabled" && parseFloat(sizes[index].textContent.replaceAll('\n', '')) >= parseFloat(size_range.split('-')[0]) && parseFloat(sizes[index].textContent.replaceAll('\n', '')) <= parseFloat(size_range.split('-')[1])) {
                            sizes[index].click()
                            size_product = sizes[index].textContent.replaceAll("\n", "")
                            cart = 1
                            break
                        }
                    }
                } else {
                    for (let index = 0; index < sizes.length; index++) {
                        console.log(sizes[index].textContent.replaceAll('\n', ''))
                        if (sizes[index].getAttribute("class") != "dropdown-item disabled" && parseFloat(sizes[index].textContent.replaceAll('\n', '')) == parseFloat(size_range)) {
                            sizes[index].click()
                            size_product = sizes[index].textContent.replaceAll("\n", "")
                            cart = 1
                            break
                        }
                    }
                }
            }

            if (cart == 0 && size_range != "random")
                sendText("Selected sizes not available", "purple")
            else {
                document.getElementsByClassName("btn btn-primary product-form-submit")[0].click()
            }


            for (let index = 0; index < 10; index++) {
                await sleep(200)
                if (document.getElementsByClassName("modal modal-sidebar modal-sidebar-right show")[0] != undefined) {
                    // name_product = document.getElementsByClassName('mc-item-brand')[0].textContent.replaceAll("\n", '') + ' | ' + document.getElementsByClassName('mc-item-name')[0].textContent.replaceAll("\n", '')
                    // size_product = document.getElementsByClassName('mc-item-size')[0].textContent.replaceAll("\n", "")
                    // price_product = document.getElementsByClassName('sub-total')[0].textContent.replaceAll("\n", "")
                    name_product = document.getElementsByClassName("product-property")[0].textContent.replaceAll("\n", "") + " | " + document.getElementsByClassName("product-property product-name")[0].textContent.replaceAll("\n", "")
                    price_product = document.getElementsByClassName("price__sales")[0].textContent.replaceAll("\n", "")
                    sendWebhooks()
                    document.location = "https://www.nakedcph.com/" + country + "/cart/view"
                    break
                }
            }

            sendText("Item out of stock", "purple")
            errorRefresh()

        } else {
            sendText("Item out of stock", "purple")
            errorRefresh()
        }

    } catch (error) {
        errorWebhooks(error, "mainAtcBrowser")
        errorRefresh()
    }
}
async function mainAtcFast() {
    try {

        if (sizes.length != 0) {

            if (size_range == "random") {
                do {
                    n = getRandomIntInclusive(0, sizes.length - 1)
                } while (sizes[n].getAttribute("class") == "dropdown-item disabled")
                size_product = sizes[n].textContent.replaceAll("\n", "")
                variant_id = sizes[n].getAttribute('data-value')
            } else {
                if (size_range.includes('-')) {
                    for (let index = 0; index < sizes.length; index++) {
                        if (sizes[index].getAttribute("class") != "dropdown-item disabled" && parseFloat(sizes[index].textContent.replaceAll('\n', '')) >= parseFloat(size_range.split('-')[0]) && parseFloat(sizes[index].textContent.replaceAll('\n', '')) <= parseFloat(size_range.split('-')[1])) {
                            variant_id = sizes[index].getAttribute('data-value')
                            size_product = sizes[index].textContent.replaceAll("\n", "")
                            break
                        }
                    }
                } else {
                    for (let index = 0; index < sizes.length; index++) {
                        console.log(sizes[index].textContent.replaceAll('\n', ''))
                        if (sizes[index].getAttribute("class") != "dropdown-item disabled" && parseFloat(sizes[index].textContent.replaceAll('\n', '')) == parseFloat(size_range)) {
                            variant_id = sizes[index].getAttribute('data-value')
                            size_product = sizes[index].textContent.replaceAll("\n", "")
                            break
                        }
                    }
                }
            }

            if (variant_id != "")
                await atcR()
            else {
                if (size_range == "random")
                    sendText("Item out of stock", "purple")
                else
                    sendText("Selected sizes not available", "purple")
            }


        } else {
            sendText("Item out of stock", "purple")
            errorRefresh()
        }
    } catch (error) {
        sendText("Item out of stock", "purple")
        errorWebhooks(error)
        errorRefresh()
    }
}
async function atcR() {

    sendText("Trying atc fast...", "blue")
    await fetch("https://www.nakedcph.com/" + country + "/cart/add", {
            "headers": {
                "accept": "*/*",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-anticsrftoken": "2c6dba8398f04cbdb669e2b2b97f7d87",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": link,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "_AntiCsrfToken=" + _AntiCsrfToken + "&g-recaptcha-response=" + captcha_token + "&id=" + variant_id + "&partial=ajax-cart",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkRes(response) })
        .catch((error) => { console.log(error) });;
}
async function checkRes(response) {
    try {

        let status = response.status
        let res = await response.text()

        if (status == 200 || status == 201) {
            html.innerHTML = res
                // name_product = html.getElementsByClassName('cart-item__brand')[0].textContent.replaceAll("\n", '') + ' | ' + html.getElementsByClassName('cart-item__name')[0].textContent.replaceAll("\n", '')
                // size_product = html.getElementsByClassName('cart-item__size')[0].textContent.replaceAll("\n", "")
                // price_product = html.getElementsByClassName('cart-item__price')[0].textContent.replaceAll("\n", "")
            name_product = document.getElementsByClassName("product-property")[0].textContent.replaceAll("\n", "") + " | " + document.getElementsByClassName("product-property product-name")[0].textContent.replaceAll("\n", "")
            price_product = document.getElementsByClassName("price__sales")[0].textContent.replaceAll("\n", "")
            sendWebhooks()
            document.location = "https://www.nakedcph.com/" + country + "/cart/view"
        } else {

            sizes[n].click()
            document.getElementsByClassName("btn btn-primary product-form-submit")[0].click()

            await sleep(5000)
            if (document.getElementsByClassName("mc-item-brand")[0] != undefined) {
                try {
                    // name_product = document.getElementsByClassName("mc-item-brand")[0].textContent.replaceAll("\n", "") + " | " + document.getElementsByClassName("mc-item-name")[0].textContent.replaceAll("\n", "")
                    // size_product = document.getElementsByClassName("mc-item-size")[0].textContent.replaceAll("\n", "")
                    // price_product = document.getElementsByClassName("price-container")[0].textContent.replaceAll("\n", "")
                    name_product = document.getElementsByClassName("product-property")[0].textContent.replaceAll("\n", "") + " | " + document.getElementsByClassName("product-property product-name")[0].textContent.replaceAll("\n", "")
                    price_product = document.getElementsByClassName("price__sales")[0].textContent.replaceAll("\n", "")
                    sendWebhooks()
                    document.location = "https://www.nakedcph.com/" + country + "/cart/view"
                } catch (error) {
                    if (error != "TypeError: Cannot read property 'value' of undefined")
                        errorWebhooks(error, "checkRes1")
                    errorRefresh()
                }
            } else {
                errorRefresh()
            }
        }
    } catch (error) { errorWebhooks(error, "checkRes2") }
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

chrome.runtime.sendMessage({ greeting: "delay_naked" }, function(response) {
    delay = response.farewell
});

chrome.runtime.sendMessage({ greeting: "status_aco_naked" }, function(response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "size_naked" }, function(response) {
    if (response.farewell != "off" && hasNumber(response.farewell))
        size_range = response.farewell
});

chrome.runtime.sendMessage({ greeting: "mode_naked" }, function(response) {
    mode = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "status_aco_naked" }, function(response) {
            if (response.farewell == 'on') {
                main();
            }
        });
        textBox()
    }
});