debugger

const site = "Supreme"

let link = document.location.href
let country = link.split('/')[2]

let csrf_token = ""

let size_range = "random"

let status_aco = ""
let status_login = ""

let email_login = ""
let pw_login = ""

let payment_mode = ""
let checkout_mode = ""

let profile = []

let sizes = ""
let style = ""

let link_product = ""
let name_product = '';
let size_product = '';
let price_product = "";
let img_product = "https://assets.supremenewyork.com/"

let order_number = ""
let order_email = ""

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
        var btn1 = document.getElementById("top_notice")
        btn1.insertAdjacentHTML("beforebegin", '<style>.btn_cava {box-shadow: rgb(247 197 192) 0px 1px 0px 0px inset;background: linear-gradient(rgb(252, 141, 131) 5%, rgb(228, 104, 93) 100%) rgb(252, 141, 131);border-radius: 6px;border: 1px solid rgb(216, 53, 38);display: inline-block;cursor: pointer;color: rgb(255, 255, 255);font-family: Arial;font-size: 14px;font-weight: bold;text-decoration: none;text-shadow: rgb(178 62 53) 0px 1px 0px;outline: none;width: 100%;}' +
            '.btn_cava:hover {background:linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);background-color:#e4685d;}' +
            '.btn_cava:active {position:relative;top:1px;} p{font-weight:bold}' +
            '#CavaScripts {position: fixed;right: 0;top: 350px; z-index:1000;width:300px;background-image: url(https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fbackground.png?alt=media&token=90d4ab30-1b59-434f-8729-b2a43a84d445);background-size: cover;padding: 10px 10px;color: black; border-radius: 10px;font-family: Arial;text-align: left;}' +
            '#CavaScriptsheader {padding: 10px;cursor: move;z-index: 10;background-color: #2196F3;color: #fff;border-radius: 10px;text-align: center;}' +
            '.box {width: 100%;background: #ffffff;color: #000;text-align: center;display: inline-block;box-shadow: #A3A3A3 3px 3px 6px -1px;border-radius: 10px;padding: 5px;}</style>' +
            '<div id="CavaScripts"><div id="CavaScriptsheader"><input type="image" id="btn_left" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fleft.png?alt=media&token=ae01ab54-0f26-47ac-9fdf-8774188499bd" style="width: 10px; margin-right: 40px;margin-bottom: -3px;">Click here to move<input type="image" id="btn_right" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fright.png?alt=media&token=887cb8d7-4399-43ff-a197-96afe8626dc6" style="width: 10px;margin-left: 40px;margin-bottom: -3px;"></div>' +
            ' <br> <p id="statusSupreme">Status Supreme</p> ' +
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
    try { document.getElementById("statusSupreme").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) {}
}

async function main() {
    if (link.startsWith("https://www.supremenewyork.com/checkout") && checkout_mode != "ATC Only" && document.getElementsByClassName("tab tab-payment selected")[0] != undefined)
        mainCheckout()
    else if (link.includes("shop") && checkout_mode != "CK Only" && document.getElementById("style") != null)
        mainAtc()
    else if (link.startsWith("https://www.supremenewyork.com/checkout") && document.getElementsByClassName("tab tab-confirmation selected")[0] != undefined)
        mainSuccess()

}

async function mainAtc() {
    try {

        try {
            style = document.getElementById("style").value

            sizes = document.getElementById("size").querySelectorAll("option")
            sizes = Array.prototype.slice.call(sizes)
            sizes = arreyMixer(sizes)

            if (size_range == "random") {
                document.getElementById("size").value = sizes[0].getAttribute("value")
            } else {
                sizes.forEach(element => {
                    if (element.textContent == size_range) {
                        document.getElementById("size").value = element.getAttribute("value")
                            // size = element.getAttribute("value")
                    }
                });
            }
        } catch (error) {
            if (error != "TypeError: Cannot read property 'getAttribute' of undefined")
                errorWebhook(error, "mainAtc1")
        }

        sendText("trying atc...", "blue")
        document.querySelector('[value="add to basket"]').click()

        for (let index = 0; index < 5; index++) {
            await sleep(200)
            if (document.getElementById("cart").getAttribute("class") != "hidden") {
                sendText("Carted", "green")
                document.location = "https://www.supremenewyork.com/checkout"
            }
        }

    } catch (error) { errorWebhook(error, "mainAtc2") }
}

async function atcR() {}

async function mainCheckout() {
    try {

        if (profile != "") {
            sendText("trying fill data...", "blue")
                // if (document.getElementById("order_billing_name").value == "")
            document.getElementById("order_billing_name").value = profile["FirstName"] + " " + profile["LastName"]
            document.getElementById("order_email").value = profile["Email"]
            document.getElementById("order_tel").value = profile["Telephone"]
            document.getElementById("bo").value = profile["AddressOne"]
            document.getElementById("oba3").value = profile["AddressTwo"]
            document.getElementById("order_billing_city").value = profile["City"]
            document.getElementById("order_billing_zip").value = profile["Zip"]
            document.getElementById("order_billing_country").value = profile["Country"]

            if (payment_mode == "PayPal") {
                document.getElementById("credit_card_type").value = "paypal"
                document.getElementById("paypal_message").style = "display: block;"
                document.getElementById("card_details").style = "display: none;"

                sendText("Data filled", "green")
            } else {
                document.getElementById("credit_card_type").value = "credit card"
                document.getElementById("paypal_message").style = "display: none;"
                document.getElementById("card_details").style = "display: block;"

                document.getElementById("cnb").value = profile["CardNumber"]
                if (profile["MMYY"].split('/')[0].length == 1) document.getElementById("credit_card_month").value = "0" + profile["MMYY"].split('/')[0]
                else document.getElementById("credit_card_month").value = profile["MMYY"].split('/')[0]
                if (profile["MMYY"].split('/')[1].length == 2) document.getElementById("credit_card_year").value = "20" + profile["MMYY"].split('/')[1]
                else document.getElementById("credit_card_year").value = profile["MMYY"].split('/')[1]
                document.getElementById("vval").value = profile["CVV"]

                sendText("Data filled", "green")
            }
            // document.getElementById("order_terms").checked = true
        } else {
            sendText("Error profile", "red")
        }

    } catch (error) { errorWebhook(error, "mainCheckout") }
}

async function mainSuccess() {
    try {

        price_product = document.getElementById("total").textContent
        link_product = document.getElementsByClassName("cart-image")[0].querySelector("a").href
        img_product = document.getElementsByClassName("cart-image")[0].querySelector("img").src
        let mixpanel = false

        let scripts1 = document.querySelectorAll("script")
        scripts1.forEach(element => {
            if (element.textContent.includes("Purchase Success")) {
                eval(element.textContent)
            }
        });

        let scripts2 = document.querySelectorAll("script")
        scripts2.forEach(element => {
            if (element.textContent.includes("ecommerce:addItem")) {
                eval(element.textContent.substring(31, element.textContent.length - 16))
            }
        });

        order_email = profile["Email"]

        sendWebhooks()

    } catch (error) { errorWebhook(error, "mainSuccess") }
}

function ga_tracka(a, b, order) {
    name_product = order["Products"][0]["Name"] + order["Products"][0]["Color"]
    size_product = order["Products"][0]["Size"]
}

function ga_track(a, orderid, sku, pname, colorsize, price1, quantity) {
    if (a == "ecommerce:addItem") {
        // name_product = pname
        // size_product = colorsize
        order_number = orderid
    }
}

async function sendWebhooks() {
    chrome.runtime.sendMessage({ greeting: "checkout_webhook&-&" + name_product + "&-&" + link_product + "&-&" + img_product + "&-&" + site + "&-&" + size_product + "&-&" + price_product + "&-&" + order_email + "&-&" + order_number })
}

async function errorWebhook(error, position) {
    chrome.runtime.sendMessage({ greeting: "error_webhook&-&" + site + "&-&" + error + "&-&" + position })
}

async function resInfoWebook(message, position) {
    chrome.runtime.sendMessage({ greeting: "info_webhook&-&" + site + "&-&" + message + "&-&" + position })
}

chrome.runtime.sendMessage({ greeting: "size_supreme" }, function(response) {
    if (response.farewell != "off")
        switch (response.farewell.toLowerCase()) {
            case "s":
                size_range = "Small"
                break
            case "m":
                size_range = "Medium"
                break
            case "l":
                size_range = "Large"
                break
            case "xl":
                size_range = "XLarge"
                break
            case "xxl":
                size_range = "XXLarge"
                break
            default:
                size_range = response.farewell
                break
        }

});

chrome.runtime.sendMessage({ greeting: "status_aco_supreme" }, function(response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "payment_mode_supreme" }, function(response) {
    payment_mode = response.farewell
});

chrome.runtime.sendMessage({ greeting: "checkout_mode_supreme" }, function(response) {
    checkout_mode = response.farewell
});

chrome.runtime.sendMessage({ greeting: "profile_supreme" }, function(response) {
    chrome.runtime.sendMessage({ greeting: response.farewell }, function(response) {
        try {
            profile = JSON.parse(response.farewell)
        } catch (error) {}
    });
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        textBox()
        chrome.runtime.sendMessage({ greeting: "status_aco_supreme" }, function(response) {
            if (response.farewell == 'on') {
                main()
            }
        });
    }
});