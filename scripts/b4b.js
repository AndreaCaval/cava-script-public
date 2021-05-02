debugger

const site = "B4B"

let link_product = document.location.href
let country = link_product.split('/')[3]

let size_range = "random"

let status_aco = ""
let delay = "0";

let img_product = ""
let size_product = ""
let name_product = ""
let price_product = ""

let token = ""
let id_product = ""
let ipa = ""
let size_in_stock = []

let is_captcha = false
let sizes = ""
let sizes_in_stock = []
let cart = 0

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
        var btn1 = document.getElementsByClassName("main-menu cf")[0]
        btn1.insertAdjacentHTML("beforebegin", '<style>.btn_cava {box-shadow: rgb(247 197 192) 0px 1px 0px 0px inset;background: linear-gradient(rgb(252, 141, 131) 5%, rgb(228, 104, 93) 100%) rgb(252, 141, 131);border-radius: 6px;border: 1px solid rgb(216, 53, 38);display: inline-block;cursor: pointer;color: rgb(255, 255, 255);font-family: Arial;font-size: 14px;font-weight: bold;text-decoration: none;text-shadow: rgb(178 62 53) 0px 1px 0px;outline: none;width: 100%;}' +
            '.btn_cava:hover {background:linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);background-color:#e4685d;}' +
            '.btn_cava:active {position:relative;top:1px;} p{font-weight:bold}' +
            '#CavaScripts {position: fixed;right: 0;top: 350px; z-index:1000;width:300px;background-image: url(https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fbackground.png?alt=media&token=90d4ab30-1b59-434f-8729-b2a43a84d445);background-size: cover;padding: 10px 10px;color: black; border-radius: 10px;font-family: Arial;text-align: left;}' +
            '#CavaScriptsheader {padding: 10px;cursor: move;z-index: 10;background-color: #2196F3;color: #fff;border-radius: 10px;text-align: center;}' +
            '.box {width: 100%;background: #ffffff;color: #000;text-align: center;display: inline-block;box-shadow: #A3A3A3 3px 3px 6px -1px;border-radius: 10px;padding: 5px;}</style>' +
            '<div id="CavaScripts"><div id="CavaScriptsheader"><input type="image" id="btn_left" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fleft.png?alt=media&token=ae01ab54-0f26-47ac-9fdf-8774188499bd" style="width: 10px; margin-right: 40px;margin-bottom: -3px;">Click here to move<input type="image" id="btn_right" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fright.png?alt=media&token=887cb8d7-4399-43ff-a197-96afe8626dc6" style="width: 10px;margin-left: 40px;margin-bottom: -3px;"></div>' +
            '<br><p id="statusB4b">Status b4b</p>' +
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
        if (error != "TypeError: Cannot read property 'parentNode' of undefined")
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
    try { document.getElementById("statusB4b").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) {}
}

async function errorRefresh() {
    sendText("Sleep " + delay + "ms...", "blue")
    await sleep(parseInt(delay))
    location.reload()
}

async function main() {
    try {

        token = document.getElementsByName("token")[0].value
        id_product = document.getElementsByName("id_product")[0].value

        await sleep(100)
        let cmb = false
        do {

            try {

                let y = ""
                let x = document.querySelectorAll('[type="text/javascript"]')
                x.forEach(element => {
                    if (element.textContent.includes("FancyboxI18nClose")) {
                        y = element.textContent
                    }
                });
                if (y != "") {
                    eval(y)
                    Object.keys(combinations).forEach(function(key) {
                        if (combinations[key]["quantity"] != 0)
                            size_in_stock.push(key + "-" + combinations[key]["attributes_values"][15])
                    });

                    cmb = true

                    if (size_in_stock.length == 0) {
                        sendText("Item out of stock...", "red")
                    } else {

                        while (document.getElementsByClassName("product__add-to-cart bfc--table w70 hidden--grecaptcha is-hidden")[0] != undefined) {
                            sendText("Awaiting captcha resolved...", "yellow")
                            await sleep(100)
                            is_captcha = true
                        }

                        if (is_captcha == true)
                            atcBrowser()
                        else {

                            size_in_stock = arreyMixer(size_in_stock)

                            if (size_range == "random") {
                                n = getRandomIntInclusive(0, size_in_stock.length - 1)
                                ipa = size_in_stock[n].split('-')[0]
                            } else {
                                if (size_range.includes('-')) {
                                    for (let index = 0; index < size_in_stock.length; index++) {
                                        if (parseFloat(size_in_stock[index].split('-')[1]) >= parseFloat(size_range.split('-')[0]) && parseFloat(size_in_stock[index].split('-')[1]) <= parseFloat(size_range.split('-')[1])) {
                                            ipa = size_in_stock[index].split('-')[0]
                                            break
                                        }
                                    }
                                } else {
                                    for (let index = 0; index < size_in_stock.length; index++) {
                                        if (parseFloat(size_in_stock[index].split('-')[1]) == parseFloat(size_range)) {
                                            ipa = size_in_stock[index].split('-')[0]
                                            break
                                        }
                                    }
                                }
                            }

                            if (ipa != "")
                                atcR()
                        }
                    }
                }

            } catch (error) { errorWebhook(error, "main_1") }

        } while (cmb == false)

    } catch (error) {
        if (error != "TypeError: Cannot read property 'value' of undefined")
            errorWebhook(error, "main_2")
    }
}

async function atcBrowser() {
    let sizes = ""
    let sizes_in_stock = []

    sizes = document.getElementsByClassName("product__attributes-label")
    sizes = Array.prototype.slice.call(sizes)
    sizes = arreyMixer(sizes)

    sizes.forEach(element => {
        if (element.getAttribute("class") != "product__attributes-label product__attributes-label--disable")
            sizes_in_stock.push(element)
    });

    if (sizes_in_stock.length == 0) {
        sendText("Item out of stock...", "red")
    } else {
        if (size_range == "random") {
            n = getRandomIntInclusive(0, sizes_in_stock.length - 1)
            sizes_in_stock[n].click()
        } else {
            if (size_range.includes('-')) {
                for (let index = 0; index < sizes_in_stock.length; index++) {
                    if (parseFloat(sizes_in_stock[index].split('-')[1]) >= parseFloat(size_range.split('-')[0]) && parseFloat(sizes_in_stock[index].split('-')[1]) <= parseFloat(size_range.split('-')[1])) {
                        sizes_in_stock[index].click()
                        cart = 1
                        break
                    }
                }
            } else {
                for (let index = 0; index < sizes_in_stock.length; index++) {
                    if (parseFloat(sizes_in_stock[index].split('-')[1]) == parseFloat(size_range)) {
                        sizes_in_stock[index].click()
                        cart = 1
                        break
                    }
                }
            }
        }

        if (cart == 0 && size_range != "random")
            sendText("Selected sizes not available", "purple")
        else {
            sendText("Adding to cart", "blue")
            document.getElementById("submitAdToCart").click()
        }

        if (document.getElementsByClassName("fancybox-error")[0] != undefined) {
            sendText(document.getElementsByClassName("fancybox-error")[0].textContent, "red")
        }
    }
}

async function atcR() {

    sendText("Trying atc fast...", "blue")
    await fetch("https://www.basket4ballers.com/", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "cache-control": "no-cache",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-mod-sbb-ctype": "xhr",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": link_product,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "controller=cart&token=" + token + "&ajax=true&add=1&id_product=" + id_product + "&ipa=" + ipa + "&id_customization=&qty=1&g-recaptcha-response=",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResAtc(response) })
        .catch((error) => { errorWebhook(error, "atcR fetch") });;
}

async function checkResAtc(response) {

    try {

        let status = response.status
        let res = await response.text()
        res = JSON.parse(res)

        if (status == 200 || status == 201) {
            sendText("Carted", "green")
            let products = res["products"]
            products.forEach(element => {
                if (element["id"] == id_product) {
                    name_product = element["name"]
                    img_product = element["image"]
                    price_product = element["price"]
                    size_product = element["attributes"]
                }
            });

            await sendWebhooks()
            await sleep(100)
            document.location = "https://www.basket4ballers.com/" + country + "/commande"
        } else {
            sendText("Error Carting...", "red")
            errorRefresh()
        }

    } catch (error) {
        if (error != "TypeError: Cannot read property 'forEach' of undefined")
            errorWebhook(error, "checkResAtc")
        sendText("Error Carting...", "res")
    }

}

async function sendWebhooks() {
    chrome.runtime.sendMessage({ greeting: "checkout_webhook&-&" + name_product + "&-&" + link_product + "&-&" + img_product + "&-&" + site + "&-&" + size_product + "&-&" + price_product })
}

async function errorWebhook(error, position) {
    chrome.runtime.sendMessage({ greeting: "error_webhook&-&" + site + "&-&" + error + "&-&" + position })
}

chrome.runtime.sendMessage({ greeting: "delay_b4b" }, function(response) {
    delay = response.farewell
});

chrome.runtime.sendMessage({ greeting: "status_aco_basket4ballers" }, function(response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "size_b4b" }, function(response) {
    if (response.farewell != "off" && hasNumber(response.farewell))
        size_range = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "status_aco_basket4ballers" }, function(response) {
            if (response.farewell == 'on') {
                main();
            }
        });
        textBox()
    }
});