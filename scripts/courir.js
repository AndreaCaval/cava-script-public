debugger

const site = "Courir"

let link = document.location.href
let country1 = link.split('/')[2].split('.')[2]
let country = link.split('/')[3]

const FETCH_LINK = {
    "com": {
        "Login-Show": "https://www.courir.com/on/demandware.store/Sites-Courir-FR-Site/fr_FR/Login-Show",
        "LoginForm": "https://www.courir.com/on/demandware.store/Sites-Courir-FR-Site/fr_FR/COCustomer-LoginForm?",
        "AddProduct": "https://www.courir.com/on/demandware.store/Sites-Courir-FR-Site/fr_FR/Cart-AddProduct?format=ajax",
    },
    "fr": {
        "Login-Show": "https://www.courir.com/on/demandware.store/Sites-Courir-FR-Site/fr_FR/Login-Show",
        "LoginForm": "https://www.courir.com/on/demandware.store/Sites-Courir-FR-Site/fr_FR/COCustomer-LoginForm?",
        "AddProduct": "https://www.courir.com/on/demandware.store/Sites-Courir-FR-Site/fr_FR/Cart-AddProduct?format=ajax",
    },
    "en": {
        "Login-Show": "https://www.courir.com/on/demandware.store/Sites-Courir-FR-Site/en_FR/Login-Show",
        "LoginForm": "https://www.courir.com/on/demandware.store/Sites-Courir-FR-Site/en_FR/COCustomer-LoginForm?",
        "AddProduct": "https://www.courir.com/on/demandware.store/Sites-Courir-FR-Site/en_FR/Cart-AddProduct?format=ajax",
    },
    "es": {
        "Login-Show": "https://www.courir.es/on/demandware.store/Sites-Courir-ES-Site/es_ES/Login-Show",
        "LoginForm": "https://www.courir.es/on/demandware.store/Sites-Courir-ES-Site/es_ES/COCustomer-LoginForm?",
        "AddProduct": "https://www.courir.es/on/demandware.store/Sites-Courir-ES-Site/es_ES/Cart-AddProduct?format=ajax",
    },
    "be": {
        "Login-Show": "https://www.courir.be/on/demandware.store/Sites-Courir-BE-Site/fr_BE/Login-Show",
        "LoginForm": "https://www.courir.be/on/demandware.store/Sites-Courir-BE-Site/fr_BE/COCustomer-LoginForm?",
        "AddProduct": "https://www.courir.be/on/demandware.store/Sites-Courir-BE-Site/fr_BE/Cart-AddProduct?format=ajax",
    },
    "fr_BE": {
        "Login-Show": "https://www.courir.be/on/demandware.store/Sites-Courir-BE-Site/fr_BE/Login-Show",
        "LoginForm": "https://www.courir.be/on/demandware.store/Sites-Courir-BE-Site/fr_BE/COCustomer-LoginForm?",
        "AddProduct": "https://www.courir.be/on/demandware.store/Sites-Courir-BE-Site/fr_BE/Cart-AddProduct?format=ajax",
    },
    "nl_BE": {
        "Login-Show": "https://www.courir.be/on/demandware.store/Sites-Courir-BE-Site/nl_BE/Login-Show",
        "LoginForm": "https://www.courir.be/on/demandware.store/Sites-Courir-BE-Site/nl_BE/COCustomer-LoginForm?",
        "AddProduct": "https://www.courir.be/on/demandware.store/Sites-Courir-BE-Site/nl_BE/Cart-AddProduct?format=ajax",
    }
}

let size_range = "random"

let status_aco = ""

let checkout_mode = ""

let variant_pid = ""
let size_browser = ""

let link_product = link
let name_product = '';
let size_product = '';
let price_product = "";
let img_product = ""
let order_number = ""


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

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

function hasNumber(myString) {
    return /\d/.test(myString);
}

function textBox() {
    let color_aco = "";
    if (status_aco == "off") { color_aco = "red" } else { color_aco = "green" }
    try {
        var btn1 = document.getElementsByClassName("top-banner")[0]
        btn1.insertAdjacentHTML("beforebegin", '<style>.btn_cava {box-shadow: rgb(247 197 192) 0px 1px 0px 0px inset;background: linear-gradient(rgb(252, 141, 131) 5%, rgb(228, 104, 93) 100%) rgb(252, 141, 131);border-radius: 6px;border: 1px solid rgb(216, 53, 38);display: inline-block;cursor: pointer;color: rgb(255, 255, 255);font-family: Arial;font-size: 14px;font-weight: bold;text-decoration: none;text-shadow: rgb(178 62 53) 0px 1px 0px;outline: none;width: 100%;}' +
            '.btn_cava:hover {background:linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);background-color:#e4685d;}' +
            '.btn_cava:active {position:relative;top:1px;} p{font-weight:bold}' +
            '#CavaScripts {position: fixed;right: 0;top: 350px; z-index:1000;width:300px;background-image: url(https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fbackground.png?alt=media&token=90d4ab30-1b59-434f-8729-b2a43a84d445);background-size: cover;padding: 10px 10px;color: black; border-radius: 10px;font-family: Arial;text-align: left;}' +
            '#CavaScriptsheader {padding: 10px;cursor: move;z-index: 10;background-color: #2196F3;color: #fff;border-radius: 10px;text-align: center;}' +
            '.box {width: 100%;background: #ffffff;color: #000;text-align: center;display: inline-block;box-shadow: #A3A3A3 3px 3px 6px -1px;border-radius: 10px;padding: 5px;margin-left:-5px}</style>' +
            '<div id="CavaScripts"><div id="CavaScriptsheader"><input type="image" id="btn_left" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fleft.png?alt=media&token=ae01ab54-0f26-47ac-9fdf-8774188499bd" style="width: 10px; margin-right: 40px;margin-bottom: -3px;">Click here to move<input type="image" id="btn_right" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fright.png?alt=media&token=887cb8d7-4399-43ff-a197-96afe8626dc6" style="width: 10px;margin-left: 40px;margin-bottom: -3px;"></div>' +
            ' <br> <p id="statusCourir">Status courir </p> ' +
            '<div class="box"><label>Sizepid  or  Load Link: </label> <br> <input style="color:black; type=text; width:95%; min-width:250px;" id="input_sizepid" placeholder="es: 14903080103"> <br>' +
            '<input class="btn_cava" style="margin-top:5px;" id="btn_start_task" type="submit" value="START TASK"></div> <br><br>' +
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

        let btn_start_task = document.getElementById('btn_start_task')
        btn_start_task.addEventListener("click", function() {
            try {

                let input = document.getElementById("input_sizepid").value
                if (!isNumeric(input)) {
                    input = input.replace(/\D/g, '-');
                    input = input.split('-')
                    input.forEach(element => {
                        if (element.length == 11)
                            input = element
                    });
                }
                if (isNumeric(input)) {
                    variant_pid = input
                    atcR()
                } else
                    sendText("Input error", "red")

            } catch (error) { errorWebhooks(error, "btn_start_task") }
        });

        window.onresize = checkPosition;

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
    try { document.getElementById("statusCourir").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) {}
}

async function main() {
    if (link.includes("/p/")) {
        mainAtc()
    } else if (link.includes("shipping") && checkout_mode == "Full Checkout") {
        mainShipBrowser()
    } else if (link.includes("COPayment-Start") && checkout_mode == "Full Checkout") {
        mainPaymentBrowser()
    } else if (link.includes("PageConfirmation?")) {
        mainSuccess()
    }
}
async function mainAtc() {
    try {

        let href = ""
        let sizes = document.getElementsByClassName("selectable")
        sizes = Array.prototype.slice.call(sizes)
        sizes = arreyMixer(sizes)

        if (sizes.length != 0) {
            if (size_range == "random") {
                n = getRandomIntInclusive(0, sizes.length - 1)
                size_product = sizes[n].textContent.replaceAll("\n", "")
                href = sizes[n].querySelector('a').href
                size_browser = sizes[n]
            } else {
                if (size_range.includes('-')) {
                    size_1 = parseFloat(size_range.split('-')[0])
                    size_2 = parseFloat(size_range.split('-')[1])
                    for (let index = 0; index < sizes.length; index++) {
                        if (sizes[index].textContent >= size_1 && sizes[index].textContent <= size_2) {
                            size_product = sizes[index].textContent.replaceAll("\n", "")
                            href = sizes[index].querySelector('a').href
                            size_browser = sizes[index]
                            break
                        }
                    }
                } else {
                    for (let index = 0; index < sizes.length; index++) {
                        if (sizes[index].textContent == size_range) {
                            size_product = sizes[index].textContent.replaceAll("\n", "")
                            href = sizes[index].querySelector('a').href
                            size_browser = sizes[index]
                            break
                        }
                    }
                }
            }
            if (href != "")
                await getSizePid(href)
            else
                sendText("Selected sizes not available", "purple")

        }
    } catch (error) {
        if (error == "TypeError: Cannot read property 'click' of undefined" || error == "TypeError: Cannot read property 'getAttribute' of undefined" || error == "SyntaxError: Unexpected end of JSON input") {
            sendText("Item out of stock", "red")
        } else {
            errorWebhooks(error, "atc")
            sendText("Error selecting size", "red")
        }
    }
}
async function getSizePid(req) {

    await fetch(req, {
            "headers": {
                "accept": "text/html, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
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
        .then(response => { checkResgetSizePid(response) })
        .catch((error) => {
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "getSizePid")
            sendText("Error getting size", "orange")
        });;
}
async function checkResgetSizePid(response) {
    try {

        let status = response.status
        let res = await response.text()

        if (status == 200 || status == 201) {
            x = document.createElement("html")
            x.innerHTML = res
            variant_pid = x.querySelector('[name="pid"]').value
            atcR()
        } else {
            errorWebhooks(res, "checkResgetSizePid1")
            sendText("Error getting product", "red")
        }

    } catch (error) {
        errorWebhooks(error, "checkResgetSizePid2")
        sendText("Error getting pid", "red")
        mainAtcBrowser()
    }
}
async function atcR() {

    sendText("Carting...", "blue")
    await fetch(FETCH_LINK[country]["AddProduct"], {
            "headers": {
                "accept": "*/*",
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
            "body": "cartAction=add&pid=" + variant_pid,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResAtc(response) })
        .catch((error) => {
            sendText("Error adding to cart", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "atcRfast fetch")
        });;
}
async function checkResAtc(response) {
    try {

        let status = response.status
        let res = await response.text()

        if (status == 200 || status == 201) {
            sendText("Carted", "green")
            webhook()
            document.location = "https://www.courir." + country1 + "/" + country + "/shipping"
        } else {
            errorWebhooks(res, "checkResgetSizePid")
            sendText("Error carting", "red")
        }

    } catch (error) {
        if (error != "SyntaxError: Unexpected end of JSON input")
            errorWebhooks(error, "trycheckResAtc")

        sendText("Error carting", "red")
    }
}

async function mainAtcBrowser() {
    try {

        document.getElementById("select-size").click()
        size_browser.querySelector("a").click()

        variant_pid = document.getElementById("pid").value
        atcR()

    } catch (error) {
        errorWebhooks(error, "mainAtcBrowser")
        sendText("Error getting pid", "red")
    }
}

async function webhook() {
    link_product = "https://www.courir." + country1 + "/" + country + "/p/cava-" + variant_pid + ".html"
    try {
        name_product = document.getElementsByClassName("product-brand")[0].textContent.replaceAll("\n", "") + " " + document.getElementsByClassName("product-name")[0].textContent
        price_product = document.querySelector('[itemprop="price"]').textContent
        img_product = document.querySelector('[itemprop="image"]').src
        sendWebhooks()
    } catch (error) {}
}

async function mainShipBrowser() {

    sendText("mainShipBrowser", "blue")
    await sleep(1000)

    if (document.getElementById("shipping-method-Livraison_Domicile") != null) {
        document.getElementById("shipping-method-Livraison_Domicile").click()
    }
    if (document.getElementById("shipping-method-DPD_ES") != null) {
        document.getElementById("shipping-method-DPD_ES").click()
    }
    if (document.getElementById("shipping-method-DPD_BE") != null) {
        document.getElementById("shipping-method-DPD_BE").click()
    }



    if (document.getElementsByClassName("btn btn-validate btn-validate__shipping")[0] != null) {
        document.getElementsByClassName("btn btn-validate btn-validate__shipping")[0].click()
    }
}
async function mainPaymentBrowser() {

    return
    sendText("mainPaymentBrowser", "blue")
    await sleep(3000)

    if (profile != null) {
        sendText("CC Autofill...", "blue")
        try { document.getElementById("encryptedCardNumber").value = profile.CardNumber } catch (error) { console.log(error, "mainPaymentBrowser1") }
        try { document.getElementById("encryptedExpiryDate").value = profile.MMYY } catch (error) { console.log(error, "mainPaymentBrowser2") }
        try { document.getElementById("encryptedSecurityCode").value = profile.CVV } catch (error) { console.log(error, "mainPaymentBrowser3") }
        try { document.getElementsByClassName("adyen-checkout__input adyen-checkout__input--text adyen-checkout__card__holderName__input _3JmldYKADXTctIE9oP8lcu adyen-checkout__input--valid adyen-checkout__input--large")[0].value = profile.CardOwnerName } catch (error) {}
    }
}

async function mainSuccess() {
    try {

        order_number = document.getElementsByClassName("confirmation-message")[0].querySelectorAll("span")[1].textContent
        sendWebhooks()

    } catch (error) { errorWebhooks(error, "mainSuccess") }
}

async function sendWebhooks() {
    chrome.runtime.sendMessage({ greeting: "checkout_webhook&-&" + name_product + "&-&" + link_product + "&-&" + img_product + "&-&" + site + " " + country1.toUpperCase() + "&-&" + size_product + "&-&" + price_product + "&-&" + order_number })
}
async function errorWebhooks(error, position) {
    chrome.runtime.sendMessage({ greeting: "error_webhook&-&" + site + "&-&" + error + "&-&" + position })
}
async function resInfoWebook(message, position) {
    chrome.runtime.sendMessage({ greeting: "info_webhook&-&" + site + "&-&" + message + "&-&" + position })
}

chrome.runtime.sendMessage({ greeting: "size_courir" }, function(response) {
    if (response.farewell != "off" && hasNumber(response.farewell))
        size_range = response.farewell
});
chrome.runtime.sendMessage({ greeting: "status_aco_courir" }, function(response) {
    status_aco = response.farewell
});
chrome.runtime.sendMessage({ greeting: "checkout_mode_courir" }, function(response) {
    checkout_mode = response.farewell
});
chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        textBox()
        chrome.runtime.sendMessage({ greeting: "status_aco_courir" }, function(response) {
            if (response.farewell == 'on') {
                main()
            }
        });
    }
});