debugger

const site = "Sns"

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
try { img_product = "http://img.yeet.mx/proxy/?url=" + document.getElementsByClassName("image-gallery__link")[0].href } catch (error) { img_product = "https://pbs.twimg.com/profile_images/1182285202191720448/tKRS_qIF_400x400.png" }

let variant_id = "";
let sizes = "";
let size = "";
let n = 0;
let product_id = link.split('/')[5];
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
        var btn1 = document.getElementsByClassName("header")[0]
        btn1.insertAdjacentHTML("beforebegin", '<style>.btn_cava {box-shadow: rgb(247 197 192) 0px 1px 0px 0px inset;background: linear-gradient(rgb(252, 141, 131) 5%, rgb(228, 104, 93) 100%) rgb(252, 141, 131);border-radius: 6px;border: 1px solid rgb(216, 53, 38);display: inline-block;cursor: pointer;color: rgb(255, 255, 255);font-family: Arial;font-size: 14px;font-weight: bold;text-decoration: none;text-shadow: rgb(178 62 53) 0px 1px 0px;outline: none;width: 100%;}' +
            '.btn_cava:hover {background:linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);background-color:#e4685d;}' +
            '.btn_cava:active {position:relative;top:1px;} p{font-weight:bold}' +
            '#CavaScripts {position: fixed;right: 0;top: 350px; z-index:1000;width:300px;background-image: url(https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fbackground.png?alt=media&token=90d4ab30-1b59-434f-8729-b2a43a84d445);background-size: cover;padding: 10px 10px;color: black; border-radius: 10px;font-family: Arial;text-align: left;}' +
            '#CavaScriptsheader {padding: 10px;cursor: move;z-index: 10;background-color: #2196F3;color: #fff;border-radius: 10px;text-align: center;}' +
            '.box {width: 100%;background: #ffffff;color: #000;text-align: center;display: inline-block;box-shadow: #A3A3A3 3px 3px 6px -1px;border-radius: 10px;padding: 5px;}</style>' +
            '<div id="CavaScripts"><div id="CavaScriptsheader"><input type="image" id="btn_left" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fleft.png?alt=media&token=ae01ab54-0f26-47ac-9fdf-8774188499bd" style="width: 10px; margin-right: 40px;margin-bottom: -3px;">Click here to move<input type="image" id="btn_right" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fright.png?alt=media&token=887cb8d7-4399-43ff-a197-96afe8626dc6" style="width: 10px;margin-left: 40px;margin-bottom: -3px;"></div>' +
            ' <br> <p id="statusSns">Status sns</p> ' +
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

        window.onresize = checkPosition;
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
    try { document.getElementById("statusSns").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) {}
}

async function errorRefresh() {
    if (delay != "0") {
        await sleep(parseInt(delay))
        location.reload()
    }
}


async function main() {

    while (document.title == 'Sneakersnstuff - Man or machine' || document.title == 'Sneakersnstuff - Checking your browser' || document.title == "Sneakersnstuff - Temporary web site maintenance") {
        await sleep(250)
    }

    sizes = document.getElementsByClassName("product-sizes__label");
    sizes = Array.prototype.slice.call(sizes)
    sizes = arreyMixer(sizes)

    if (mode == "Fast") {
        mainAtcFast()
    } else {
        mainAtcBrowser()
    }
}

async function mainAtcBrowser() {
    try {
        let cart = 0
        if (sizes.length != 0) {
            if (size_range == "random") {
                n = getRandomIntInclusive(0, sizes.length - 1)
                sizes[n].click()
                cart = 1
            } else {
                if (size_range.includes('-')) {
                    size_1 = parseFloat(size_range.split('-')[0])
                    size_2 = parseFloat(size_range.split('-')[1])
                    for (let index = 0; index < sizes.length; index++) {
                        size = sizes[index].getAttribute("data-size-types")
                        size = JSON.parse(size)
                        size = parseFloat(size["converted-size-size-eu"])
                        if (size >= size_1 && size <= size_2) {
                            sizes[index].click()
                            cart = 1
                            break
                        }
                    }
                } else {
                    for (let index = 0; index < sizes.length; index++) {
                        size = sizes[index].getAttribute("data-size-types")
                        size = JSON.parse(size)
                        if (size["converted-size-size-eu"] == size_range) {
                            sizes[index].click()
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
                if (document.getElementsByClassName("modal slide-right show in")[0] != undefined) {
                    let x = document.getElementsByClassName("cart-items")[0].querySelectorAll('[class="cart-item"]')[0].getAttribute("data-gtm-list-product")
                    let jj = JSON.parse(x)
                    let y = document.getElementsByClassName("cart-items")[0].getElementsByClassName('cart-item__size')[0].querySelectorAll('span')[0].getAttribute("data-size-types")
                    let jjj = JSON.parse(y)
                    name_product = jj["brand"] + " | " + jj["name"] + " | " + jj["id"]
                    size_product = jjj["converted-size-size-eu"]
                    price_product = jj["price"]
                    sendWebhooks()
                    document.location = "https://www.sneakersnstuff.com/" + country + "/cart/view"
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
        if (sizes.length != 0) {
            if (size_range == "random") {
                n = getRandomIntInclusive(0, sizes.length - 1)
                variant_id = sizes[n].getAttribute("for").split('-')[1]
            } else {
                if (size_range.includes('-')) {
                    size_1 = parseFloat(size_range.split('-')[0])
                    size_2 = parseFloat(size_range.split('-')[1])
                    for (let index = 0; index < sizes.length; index++) {
                        size = sizes[index].getAttribute("data-size-types")
                        size = JSON.parse(size)
                        size = parseFloat(size["converted-size-size-eu"])
                        if (size >= size_1 && size <= size_2) {
                            variant_id = sizes[index].getAttribute("for").split('-')[1]
                            break
                        }
                    }
                } else {
                    for (let index = 0; index < sizes.length; index++) {
                        size = sizes[index].getAttribute("data-size-types")
                        size = JSON.parse(size)
                        if (size["converted-size-size-eu"] == size_range) {
                            variant_id = sizes[index].getAttribute("for").split('-')[1]
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
    await fetch("https://www.sneakersnstuff.com/" + country + "/cart/add", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": link,
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": "did=" + product_id + "&id=" + variant_id + "&partial=mini-cart",
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
            let cart_size = html.getElementsByClassName('cart-item__size')[0].querySelectorAll('span')[0].getAttribute("data-size-types")
            let j = JSON.parse(cart_size)
            let cart_1 = html.getElementsByClassName('cart-item')[0].getAttribute('data-gtm-list-product')
            let j_1 = JSON.parse(cart_1)
            name_product = j_1["brand"] + ' | ' + j_1["name"] + ' | ' + j_1["id"]
            price_product = j_1["price"]
            size_product = j["converted-size-size-eu"]
            sendWebhooks()
            document.location = "https://www.sneakersnstuff.com/" + country + "/cart/view"
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

chrome.runtime.sendMessage({ greeting: "delay_sns" }, function(response) {
    delay = response.farewell
});

chrome.runtime.sendMessage({ greeting: "status_aco_sns" }, function(response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "size_sns" }, function(response) {
    if (response.farewell != "off" && hasNumber(response.farewell))
        size_range = response.farewell
});

chrome.runtime.sendMessage({ greeting: "mode_sns" }, function(response) {
    mode = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "status_aco_sns" }, function(response) {
            if (response.farewell == 'on') {
                main();
            }
        });
        textBox()
    }
});