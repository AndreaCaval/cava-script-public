debugger

const site = "Woodwood"

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
const img_product = "https://d353r0i7qv3gvw.cloudfront.net/89/37889/stage-mobile/6295998.jpg"

let variant_id = "";
let size_in_stock = []
let sizes = "";
let size = "";
let n = 0;
let product_id = link.split('/')[5];
let html = document.createElement('html');

let id_captcha = ""

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
        let btn1 = document.getElementsByClassName("header")[0]
        btn1.insertAdjacentHTML("beforebegin", '<style>.btn_cava {box-shadow: rgb(247 197 192) 0px 1px 0px 0px inset;background: linear-gradient(rgb(252, 141, 131) 5%, rgb(228, 104, 93) 100%) rgb(252, 141, 131);border-radius: 6px;border: 1px solid rgb(216, 53, 38);display: inline-block;cursor: pointer;color: rgb(255, 255, 255);font-family: Arial;font-size: 14px;font-weight: bold;text-decoration: none;text-shadow: rgb(178 62 53) 0px 1px 0px;outline: none;width: 100%;}' +
            '.btn_cava:hover {background:linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);background-color:#e4685d;}' +
            '.btn_cava:active {position:relative;top:1px;} p{font-weight:bold}' +
            '#CavaScripts {position: fixed;right: 0;top: 350px; z-index:1000;width:300px;background-image: url(https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fbackground.png?alt=media&token=90d4ab30-1b59-434f-8729-b2a43a84d445);background-size: cover;padding: 10px 10px;color: black; border-radius: 10px;font-family: Arial;text-align: left;}' +
            '#CavaScriptsheader {padding: 10px;cursor: move;z-index: 10;background-color: #2196F3;color: #fff;border-radius: 10px;text-align: center;}' +
            '.box {width: 100%;background: #ffffff;color: #000;text-align: center;display: inline-block;box-shadow: #A3A3A3 3px 3px 6px -1px;border-radius: 10px;padding: 5px;}</style>' +
            '<div id="CavaScripts"><div id="CavaScriptsheader"><input type="image" id="btn_left" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fleft.png?alt=media&token=ae01ab54-0f26-47ac-9fdf-8774188499bd" style="width: 10px; margin-right: 40px;margin-bottom: -3px;">Click here to move<input type="image" id="btn_right" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fright.png?alt=media&token=887cb8d7-4399-43ff-a197-96afe8626dc6" style="width: 10px;margin-left: 40px;margin-bottom: -3px;"></div>' +
            ' <br> <p id="statusWoodwood">Status Woodwood</p> ' +
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
    try { document.getElementById("statusWoodwood").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) {}
}

async function errorRefresh() {
    if (delay != "0") {
        await sleep(parseInt(delay))
        location.reload()
    }
}


async function main() {

    while (document.title == 'Sneakersnstuff - Man or machine' || document.title == 'Sneakersnstuff - Checking your browser') {
        await sleep(1000)
    }

    sizes = document.getElementsByClassName("product-sizes__input")
    sizes = Array.prototype.slice.call(sizes)
    sizes.forEach(element => {
        if (element.disabled == false)
            size_in_stock.push(element)
    });
    size_in_stock = Array.prototype.slice.call(size_in_stock)
    size_in_stock = arreyMixer(size_in_stock)

    if (mode == "Fast") {
        mainAtcFast()
    } else {
        mainAtcBrowser()
    }
}

async function mainAtcBrowser() {
    try {
        let cart = 0
        if (size_in_stock.length != 0) {
            if (size_range == "random") {
                n = getRandomIntInclusive(0, size_in_stock.length - 1)
                size_in_stock[n].click()
                cart = 1
            } else {
                if (size_range.includes('-')) {
                    size_1 = parseFloat(size_range.split('-')[0])
                    size_2 = parseFloat(size_range.split('-')[1])
                    for (let index = 0; index < size_in_stock.length; index++) {
                        size = size_in_stock[index].textContent.replace(/\D/g, '')
                        size = parseFloat(size)
                        if (size >= size_1 && size <= size_2) {
                            size_in_stock[index].click()
                            cart = 1
                            break
                        }
                    }
                } else {
                    for (let index = 0; index < size_in_stock.length; index++) {
                        size = size_in_stock[index].textContent.replace(/\D/g, '')
                        size = parseFloat(size)
                        if (size == size_range) {
                            size_in_stock[index].click()
                            cart = 1
                            break
                        }
                    }
                }
            }

            if (cart == 0 && size_range != "random")
                sendText("Selected sizes not available", "purple")
            else {
                document.getElementsByClassName("product-form__btn btn")[0].click()
            }


            for (let index = 0; index < 10; index++) {
                await sleep(200)
                if (document.getElementsByClassName("modal slide-right is-active in")[0] != undefined) {
                    size_product = document.getElementsByClassName('cart-item__size')[0].querySelectorAll('span')[1].textContent.replace(/\D/g, '')
                    price_product = document.getElementsByClassName('price__current')[0].textContent
                    name_product = document.getElementsByClassName('cart-item__name')[0].textContent
                    sendWebhooks()
                    document.location = "https://www.woodwood.com/en/cart/view"
                    break
                }
            }

            try { sendText(document.getElementsByClassName("product-view__error")[0].textContent, "purple") } catch (error) { sendText("Item out of stock", "purple") }
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
        if (size_in_stock.length != 0) {
            if (size_range == "random") {
                n = getRandomIntInclusive(0, size_in_stock.length - 1)
                variant_id = size_in_stock[n].value
            } else {
                if (size_range.includes('-')) {
                    size_1 = parseFloat(size_range.split('-')[0])
                    size_2 = parseFloat(size_range.split('-')[1])
                    for (let index = 0; index < size_in_stock.length; index++) {
                        size = document.querySelectorAll('[for="' + size_in_stock[index].id + '"]')[0].textContent.replace(/\D/g, '')
                        size = parseFloat(size)
                        if (size >= size_1 && size <= size_2) {
                            variant_id = size_in_stock[index].value
                            break
                        }
                    }
                } else {
                    for (let index = 0; index < size_in_stock.length; index++) {
                        size = document.querySelectorAll('[for="' + size_in_stock[index].id + '"]')[0].textContent.replace(/\D/g, '')
                        size = parseFloat(size)
                        if (size == size_range) {
                            variant_id = size_in_stock[index].value
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
        errorWebhooks(error)
        errorRefresh()
    }
}

async function atcR() {

    sendText("Trying atc fast...", "blue")
    await fetch("https://www.woodwood.com/en/cart/add", {
            "headers": {
                "accept": "*/*",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryqBMj65e8AAKRyTfx",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": link,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "------WebKitFormBoundaryqBMj65e8AAKRyTfx\r\nContent-Disposition: form-data; name=\"id\"\r\n\r\n" + variant_id + "\r\n------WebKitFormBoundaryqBMj65e8AAKRyTfx\r\nContent-Disposition: form-data; name=\"partial\"\r\n\r\nmini-cart\r\n------WebKitFormBoundaryqBMj65e8AAKRyTfx--\r\n",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkRes(response) })
        .catch((error) => {
            sendText("Error adding to cart", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "atcR")
        });;
}

async function checkRes(response) {

    try {
        let status = response.status
        let res = await response.text()

        if (status == 200 || status == 201) {
            html.innerHTML = res
            size_product = html.getElementsByClassName('cart-item__size')[0].querySelectorAll('span')[1].textContent.replace(/\D/g, '')
            price_product = html.getElementsByClassName('price__current')[0].textContent
            name_product = html.getElementsByClassName('cart-item__name')[0].textContent
            sendWebhooks()
            document.location = "https://www.woodwood.com/en/cart/view"
        } else {
            sendText("Error carting / Item reserved", "red")
            errorRefresh()
        }
    } catch (error) {
        sendText("Error carting", "red")
        errorWebhooks(error, "checkRes")
    }
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

chrome.runtime.sendMessage({ greeting: "delay_woodwood" }, function(response) {
    delay = response.farewell
});

chrome.runtime.sendMessage({ greeting: "status_aco_woodwood" }, function(response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "size_woodwood" }, function(response) {
    if (response.farewell != "off" && hasNumber(response.farewell))
        size_range = response.farewell
});

chrome.runtime.sendMessage({ greeting: "mode_woodwood" }, function(response) {
    mode = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "status_aco_woodwood" }, function(response) {
            if (response.farewell == 'on') {
                main();
            }
        });
        textBox()
    }
});