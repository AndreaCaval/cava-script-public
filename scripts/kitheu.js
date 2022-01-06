debugger

const site = "Kith EU"

let link = document.location.href

let size_range = "random"

let status_aco = ""
let delay = "0"

let link_product = link
let name_product = ""
let size_product = ""
let price_product = ""
let img_product = ""

let sizes_instock = []
let variant_id = ""
let us_size = ""
let upsell = ""


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
        var btn1 = document.getElementsByClassName("site-header__banner")[0]
        btn1.insertAdjacentHTML("beforebegin", '<style>.btn_cava {box-shadow: rgb(247 197 192) 0px 1px 0px 0px inset;background: linear-gradient(rgb(252, 141, 131) 5%, rgb(228, 104, 93) 100%) rgb(252, 141, 131);border-radius: 6px;border: 1px solid rgb(216, 53, 38);display: inline-block;cursor: pointer;color: rgb(255, 255, 255);font-family: Arial;font-size: 14px;font-weight: bold;text-decoration: none;text-shadow: rgb(178 62 53) 0px 1px 0px;outline: none;width: 100%;}' +
            '.btn_cava:hover {background:linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);background-color:#e4685d;}' +
            '.btn_cava:active {position:relative;top:1px;} p{font-weight:bold}' +
            '#CavaScripts {position: fixed;right: 0;top: 350px; z-index:1000;width:300px;background-image: url(https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fbackground.png?alt=media&token=90d4ab30-1b59-434f-8729-b2a43a84d445);background-size: cover;padding: 10px 10px;color: black; border-radius: 10px;font-family: Arial;text-align: left;}' +
            '#CavaScriptsheader {padding: 10px;cursor: move;z-index: 10;background-color: #2196F3;color: #fff;border-radius: 10px;text-align: center;}' +
            '.box {width: 100%;background: #ffffff;color: #000;text-align: center;display: inline-block;box-shadow: #A3A3A3 3px 3px 6px -1px;border-radius: 10px;padding: 5px;}</style>' +
            '<div id="CavaScripts"><div id="CavaScriptsheader"><input type="image" id="btn_left" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fleft.png?alt=media&token=ae01ab54-0f26-47ac-9fdf-8774188499bd" style="width: 10px; margin-right: 40px;margin-bottom: -3px;">Click here to move<input type="image" id="btn_right" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fright.png?alt=media&token=887cb8d7-4399-43ff-a197-96afe8626dc6" style="width: 10px;margin-left: 40px;margin-bottom: -3px;"></div>' +
            '<br><p id="statusKith">Status kith</p>' +
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
    try { document.getElementById("statusKith").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) {}
}

async function main() {
    if (link.includes("products"))
        getVariants()
}

async function getVariants() {
    try {

        sendText("Getting product...", "blue")
        upsell = document.getElementsByName("properties[upsell]")[0].value

        sizes = document.querySelector('[name="id"]').querySelectorAll("option")
        sizes.forEach(element => {
            if (element.getAttribute("disabled") == null) {
                sizes_instock.push(element)
            }
        });

        if (sizes_instock.length != 0)
            mainAtc()
        else {
            sendText("Item out of stock", "purple")
        }

    } catch (error) {
        sendText("Error getting product...", "red")
        errorWebhooks(error, "mainAtc")
    }
}

async function mainAtc() {

    sendText("Selecting size..", "blue")
    try {
        if (size_range == "random") {
            n = getRandomIntInclusive(0, sizes_instock.length - 1)
            variant_id = sizes_instock[n].value
            us_size = sizes_instock[n].textContent.replace(/[^\d,.-]/g, '') + " US"
        } else {
            if (size_range.includes('-')) {
                size_1 = parseFloat(size_range.split('-')[0])
                size_2 = parseFloat(size_range.split('-')[1])
                for (let index = 0; index < sizes_instock.length; index++) {
                    size = sizes_instock[index].textContent.replace(/[^\d,.-]/g, '')
                    if (size >= size_1 && size <= size_2) {
                        variant_id = sizes_instock[index].value
                        us_size = size + " US"
                        break
                    }
                }
            } else {
                for (let index = 0; index < sizes_instock.length; index++) {
                    size = sizes_instock[index].textContent.replace(/[^\d,.-]/g, '')
                    if (size == size_range) {
                        variant_id = sizes_instock[index].value
                        us_size = size + " US"
                        break
                    }
                }
            }
        }
        if (variant_id != "")
            await atcR()
        else {
            if (size_range == "random")
                sendText("Item out of stock", "red")
            else
                sendText("Selected sizes not available", "purple")
        }

    } catch (error) {
        sendText("Item out of stock", "red")
        errorWebhooks(error, "mainAtc")
    }
}

async function atcR() {

    sendText("Adding to cart...", "blue")
    await fetch("https://eu.kith.com/cart/add.js", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": link,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "form_type=product&utf8=%E2%9C%93&properties%5Bupsell%5D=" + upsell + "&properties%5BSize%5D=" + us_size + "&id=" + variant_id + "&quantity=1",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResatc(response) })
        .catch((error) => {
            sendText("Error adding to cart", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "atcR")
        });;
}
async function checkResatc(response) {
    try {

        let status = response.status
        let res = await response.json()

        if (status == 200 || status == 201) {
            sendText("Carted", "green")
            name_product = res.title
            size_product = us_size
            price_product = document.getElementsByClassName("product__price")[0].textContent.replace(/[^\d,.-]/g, '')
            img_product = res.image
            sendWebhooks()
            document.location = "https://eu.kith.com/pages/international-checkout"

        } else {
            sendText("Error adding to cart", "red")
        }

    } catch (error) {
        sendText("Error adding to cart", "red")
        errorWebhooks(error, "checkResatc")
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

chrome.runtime.sendMessage({ greeting: "status_aco_kith" }, function(response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "size_kith" }, function(response) {
    if (response.farewell != "off" && hasNumber(response.farewell))
        size_range = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "status_aco_kith" }, function(response) {
            if (response.farewell == 'on') {
                main();
            }
        });
        textBox()
    }
});