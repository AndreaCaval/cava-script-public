debugger

const site = "Office"

let size_range = "random"
let status_aco = ""

let delay = ""

let link = document.location.href
let link_product = link
let name_product = ''
let size_product = ''
let price_product = "£"
let img_product = ""

let main_pid = ""
let id_product = "";
let sizes = ""
let size = ""

let carted = false

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    n = Math.floor(Math.random() * (max - min + 1)) + min;
    return n
}
async function sendText(text, color) {
    try { document.getElementById("statusOffice").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) { }
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

        var btn1 = document.getElementById("slide-nav")
        btn1.insertAdjacentHTML("beforebegin", '<style>.btn_cava {box-shadow: rgb(247 197 192) 0px 1px 0px 0px inset;background: linear-gradient(rgb(252, 141, 131) 5%, rgb(228, 104, 93) 100%) rgb(252, 141, 131);border-radius: 6px;border: 1px solid rgb(216, 53, 38);display: inline-block;cursor: pointer;color: rgb(255, 255, 255);font-family: Arial;font-size: 14px;font-weight: bold;text-decoration: none;text-shadow: rgb(178 62 53) 0px 1px 0px;outline: none;width: 100%;}' +
            '.btn_cava:hover {background:linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);background-color:#e4685d;}' +
            '.btn_cava:active {position:relative;top:1px;} p{font-weight:bold}' +
            '#CavaScripts {position: fixed;right: 0;top: 350px; z-index:1000;width:300px;background-image: url(https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fbackground.png?alt=media&token=90d4ab30-1b59-434f-8729-b2a43a84d445);background-size: cover;padding: 10px 10px;color: black; border-radius: 10px;font-family: Arial;text-align: left;}' +
            '#CavaScriptsheader {padding: 10px;cursor: move;z-index: 10;background-color: #2196F3;color: #fff;border-radius: 10px;text-align: center;}' +
            '.box {width: 100%;background: #ffffff;color: #000;text-align: center;display: inline-block;box-shadow: #A3A3A3 3px 3px 6px -1px;border-radius: 10px;padding: 5px;}</style>' +
            '<div id="CavaScripts"><div id="CavaScriptsheader"><input type="image" id="btn_left" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fleft.png?alt=media&token=ae01ab54-0f26-47ac-9fdf-8774188499bd" style="width: 10px; margin-right: 40px;margin-bottom: -3px;">Click here to move<input type="image" id="btn_right" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fright.png?alt=media&token=887cb8d7-4399-43ff-a197-96afe8626dc6" style="width: 10px;margin-left: 40px;margin-bottom: -3px;"></div>' +
            ' <br> <p id="statusOffice">Status office</p> ' +
            "<p style='margin: 20px 0px 0px 0px;text-align: center;font-size: 15px;'>ACO: <span style='margin-right: 15px;font-size: 20px; text-transform: uppercase; color:" + color_aco + ";'>" + status_aco + "</span></p></div>");

        dragElement(document.getElementById("CavaScripts"));
        window.onresize = checkPosition;
        if (localStorage.getItem("box") != null)
            document.getElementById('CavaScripts').style = localStorage.getItem("box")

        let btn_left = document.getElementById('btn_left')
        btn_left.addEventListener("click", function () {
            document.getElementById('CavaScripts').style = "left:0;top: 350px;"
            localStorage.setItem("box", document.getElementById("CavaScripts").getAttribute("style"))
        });

        let btn_right = document.getElementById('btn_right')
        btn_right.addEventListener("click", function () {
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
    } catch (error) { }
}

async function errorRefresh() {
    if (delay != "0") {
        await sleep(parseInt(delay))
        location.reload()
    }
}

async function main() {

    while (document.title == "Visitor Prioritization Waiting Room page")
        await sleep(250)

    getCsrfToken()
    await getMainPid()

    if (main_pid != "" && main_pid != undefined) {

        mainAtcBrowser()

    }
}


async function getCsrfToken() {
    try { csrftoken = document.getElementsByName('CSRFToken')[0].value } catch (error) { }
}

async function getMainPid() {
    try {
        main_pid = document.getElementById("productCodeId").value
    } catch (error) {
        try {
            let scripts = document.querySelectorAll("script")
            scripts.forEach(element => {
                if (element.textContent.includes("window.dataLayer = [{"))
                    eval(element.textContent)
            });
            main_pid = window.dataLayer[0]["productId"]
        } catch (error) { }
    }
}

async function mainAtcBrowser() {
    try {

        sendText("Trying atc manual...", "blue")
        sizes = document.getElementsByClassName("product__sizes-select js-size-select-list")[0].getElementsByClassName("product__sizes-option");
        if (sizes.length != 0) {
            if (size_range == "random") {
                n = getRandomIntInclusive(0, sizes.length - 1)
                size = parseFloat(sizes[n].getAttribute('data-name'))
                sizes[n].click()
            } else {
                if (size_range.includes('-')) {
                    size_1 = parseFloat(size_range.split('-')[0])
                    size_2 = parseFloat(size_range.split('-')[1])
                    sizes = Array.prototype.slice.call(sizes)
                    sizes = arreyMixer(sizes)
                    for (let index = 0; index < sizes.length; index++) {
                        size = parseFloat(sizes[index].getAttribute('data-name'))
                        if (size >= size_1 && size <= size_2) {
                            sizes[index].click()
                            break
                        }
                    }
                    if (id_product == "") {
                        sendText("Selected sizes not available", "purple")
                    }
                } else {
                    for (let index = 0; index < sizes.length; index++) {
                        size = parseFloat(sizes[index].getAttribute('data-name'))
                        if (parseFloat(size) == parseFloat(size_range)) {
                            sizes[index].click()
                            break
                        }

                    }
                }
            }
            name_product = document.getElementsByClassName("product__name")[0].textContent + " " + document.getElementsByClassName("product__variant")[0].textContent
            price_product = document.getElementsByClassName("price__price js-price")[0].textContent.replace(/\s/g, '').replaceAll('\n', '')
            img_product = document.getElementsByClassName("product-grid__img lazy-load__item")[0].src
            size_product = size
            document.getElementsByClassName("btn btn-fluid product__actions-cart js-add-to-bag-btn")[0].click()            

            for (let index = 0; index < 10; index++) {
                await sleep(200)
                if (document.getElementsByClassName("overlay-backdrop js-overlayBackdrop overlay-backdrop--is-visible")[0] != undefined) {
                    carted = true
                    sendText("Carted", "green")
                    mainCheckout()
                    break
                }
            }

            if (carted != true) {
                errore = document.getElementsByClassName("product-validation__error js-validation-error-restricted product-validation__error--visible")[0].textContent
                sendText(errore, "red")
                errorRefresh()
            }

        }
    } catch (error) {
        sendText("Error adding to cart", "red")
        if (error != "TypeError: Cannot read property 'textContent' of undefined")
            errorWebhook(error, "mainAtc")
        errorRefresh()
    }
}

async function mainCheckout() {
    await sendWebhooks()
    document.location = "https://www.office.co.uk/checkout/singlePageCheckout"
}

async function sendWebhooks() {
    chrome.runtime.sendMessage({ greeting: "checkout_webhook&-&" + name_product + "&-&" + link_product + "&-&" + img_product + "&-&" + site + "&-&" + size_product + "&-&" + price_product })
}

async function errorWebhook(error, position) {
    chrome.runtime.sendMessage({ greeting: "error_webhook&-&" + site + "&-&" + error + "&-&" + position })
}

async function resInfoWebook(message, position) {
    chrome.runtime.sendMessage({ greeting: "info_webhook&-&" + site + "&-&" + message + "&-&" + position })
}

chrome.runtime.sendMessage({ greeting: "delay_office" }, function (response) {
    delay = response.farewell
});

chrome.runtime.sendMessage({ greeting: "status_aco_office" }, function (response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "size_office" }, function (response) {
    if (response.farewell != "off" && hasNumber(response.farewell))
        size_range = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function (response) {
    if (response.farewell == 'on') {
        textBox()
        chrome.runtime.sendMessage({ greeting: "status_aco_office" }, function (response) {
            if (response.farewell == 'on') {
                main();
            }
        });
    }
});