//debugger

const site = "Here"

let link = document.location.href

let csrf_token = ""

let size_range = "random"

let status_aco = ""
let status_login = ""

let email_login = ""
let pw_login = ""

let payment_mode = ""
let checkout_mode = ""
let mode = ""
let multicart = ""
let carted = 0

let profile = []

let pid = ""
let sizepid = ""
let sizepid_instock = []

let link_product = link
let name_product = '';
let size_product = '';
let price_product = "";
let img_product = ""

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
function textBox() {
    let color_aco = "";
    let color_login = ""
    if (status_aco == "off") { color_aco = "red" } else { color_aco = "green" }
    if (status_login == "off") { color_login = "red" } else { color_login = "green" }
    try {
        var btn1 = document.getElementsByClassName("b-header js-cmp-inited js-cmp-headerFlyoutMenu")[0]
        btn1.insertAdjacentHTML("beforebegin", '<style>.btn_cava {box-shadow: rgb(247 197 192) 0px 1px 0px 0px inset;background: linear-gradient(rgb(252, 141, 131) 5%, rgb(228, 104, 93) 100%) rgb(252, 141, 131);border-radius: 6px;border: 1px solid rgb(216, 53, 38);display: inline-block;cursor: pointer;color: rgb(255, 255, 255);font-family: Arial;font-size: 14px;font-weight: bold;text-decoration: none;text-shadow: rgb(178 62 53) 0px 1px 0px;outline: none;width: 100%;}' +
            '.btn_cava:hover {background:linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);background-color:#e4685d;}' +
            '.btn_cava:active {position:relative;top:1px;} p{font-weight:bold}' +
            '#CavaScripts {position: fixed;right: 0;top: 350px; z-index:1000;width:300px;background-image: url(https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fbackground.png?alt=media&token=90d4ab30-1b59-434f-8729-b2a43a84d445);background-size: cover;padding: 10px 10px;color: black; border-radius: 10px;font-family: Arial;text-align: left;}' +
            '#CavaScriptsheader {padding: 10px;cursor: move;z-index: 10;background-color: #2196F3;color: #fff;border-radius: 10px;text-align: center;}' +
            '.box {width: 100%;background: #ffffff;color: #000;text-align: center;display: inline-block;box-shadow: #A3A3A3 3px 3px 6px -1px;border-radius: 10px;padding: 5px;}</style>' +
            '<div id="CavaScripts"><div id="CavaScriptsheader"><input type="image" id="btn_left" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fleft.png?alt=media&token=ae01ab54-0f26-47ac-9fdf-8774188499bd" style="width: 10px; margin-right: 40px;margin-bottom: -3px;">Click here to move<input type="image" id="btn_right" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fright.png?alt=media&token=887cb8d7-4399-43ff-a197-96afe8626dc6" style="width: 10px;margin-left: 40px;margin-bottom: -3px;"></div>' +
            ' <br> <p id="statushere">Status here</p> ' +
            "<p style='margin: 20px 0px 0px 0px;text-align: center;font-size: 15px;'>ACO: <span style='margin-right: 15px;font-size: 20px; text-transform: uppercase; color:" + color_aco + ";'>" + status_aco + "</span>LOGIN: <span style='margin-right: 15px;font-size: 20px; text-transform: uppercase; color:" + color_login + ";'>" + status_login + "</span></p></div>");

        dragElement(document.getElementById("CavaScripts"));

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
    } catch (error) { }
}
async function sendText(text, color) {
    try { document.getElementById("statushere").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) { }
}


async function main() {

    if ((link.includes("/checkout") || link.includes("/billing") || link.includes("/fatturazione")) && checkout_mode == "Full Checkout") {
        mainCheckoutPayment()
    } else if ((link.includes("/spedizione") || link.includes("/shipping")) && checkout_mode == "Full Checkout") {
        mainCheckoutShipping()
    } else if (link.includes("/riepilogoordine") || link.includes("/orderssummary")) {
        mainSuccess()
    } else {

        await getMainPid()

        if (pid != "")
            checkStock()

        if (status_login == "on" && document.getElementsByClassName("b-utility-menu__link b-utility-menu__link_logged")[0] == undefined && checkout_mode == "Full Checkout") {
            await getCsrfTokenLogin()
            mainLogin()
        }
    }
}


async function getCsrfTokenLogin() {
    await fetch("https://www.here-store.com/it/login?original=%2Fit%2Faccount", {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
            "cache-control": "max-age=0",
            "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    })
        .then(response => { checkResgetCsrfTokenLogin(response) })
        .catch((error) => { errorWebhook(error, "getCsrfTokenLogin") });;
}
async function checkResgetCsrfTokenLogin(response) {
    try {

        let status = response.status
        let res = await response.text()
        let html = document.createElement('html')

        if (status == 200 || status == 201) {
            html.innerHTML = res
            csrf_token = html.querySelectorAll("[name='csrf_token']")[0].value
        } else {
            errorWebhook(res, "checkResgetCsrfTokenLogin_1")
        }

    } catch (error) { errorWebhook(error, "checkResgetCsrfTokenLogin_2") }
}

async function getMainPid() {
    try { pid = document.getElementsByClassName("b-pdp b-size-selector__active js-cmp-inited js-cmp-productMain")[0].getAttribute("data-product-id") } catch (error) {
        if (error != "TypeError: Cannot read property 'getAttribute' of undefined")
            errorWebhook(error, "getMainPid")
        try {
            y = link.replace(/[^a-zA-Z0-9_]/g, '-');
            y = y.split('-')
            y.forEach(element => {
                if (element.startsWith("AW")) {
                    pid = element
                }
            });
        } catch (error) { errorWebhook(error, "getMainPid2") }
    }
}

async function mainLogin() {

    while (csrf_token == "") {
        await sleep(250)
    }
    loginR()
}
async function loginR() {

    sendText("Logging in...", "blue")
    await fetch("https://www.here-store.com/on/demandware.store/Sites-here-it-Site/it_IT/Login-LoginForm?scope=", {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
            "cache-control": "max-age=0",
            "content-type": "application/x-www-form-urlencoded",
            "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        },
        "referrer": "https://www.here-store.com/it/login?original=%2Fit%2Faccount",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "dwfrm_login_username_d0arpbjlyncs=" + email_login + "&dwfrm_login_password_d0krvgmajryh=" + pw_login + "&dwfrm_login_login=Accedi&csrf_token=" + csrf_token,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    })
        .then(response => { checkResLoginR(response) })
        .catch((error) => {
            if (error != "TypeError: Failed to fetch")
                errorWebhook(error, "checkStock")
            sendText("Error logging in", "orange")
        });;
}
async function checkResLoginR(response) {
    try {

        let status = response.status
        if (status >= 200 && status <= 399) {
            sendText("Logged in", "green")
        } else {
            sendText("Error logging in", "red")
        }

    } catch (error) {
        sendText("Error logging in", "red")
        errorWebhook(error, "checkResLoginR")
    }
}


async function checkStock() {

    sendText("Getting size...", "blue")
    await fetch("https://www.here-store.com/on/demandware.store/Sites-here-it-Site/it_IT/Product-GetAvailability?format=ajax&pid=" + pid, {
        "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/json",
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
        .then(response => { checkResCheckStock(response) })
        .catch((error) => {
            if (error != "TypeError: Failed to fetch")
                errorWebhook(error, "checkStock")
            sendText("Error getting size", "orange")
        });;
}
async function checkResCheckStock(response) {
    try {

        let status = response.status
        let res = await response.text()
        let x = res
        res = JSON.parse(res)
        if (status == 200 || status == 201) {
            getSizepidInstock(res)
        } else {
            sendText("Error Getting size", "red")
            errorWebhook(x, "checkResCheckStock")
        }

    } catch (error) {
        sendText("Error Getting size", "red")
        errorWebhook(error, "checkResCheckStock_2")
    }
}
async function getSizepidInstock(pids) {
    try {

        for (var key in pids) {
            if (pids.hasOwnProperty(key)) {
                if (pids[key]["status"] != "Sold out" && key.startsWith(pid))
                    sizepid_instock.push(key)
            }
        }

        if (sizepid_instock.length != 0) {
            mainAtc()
        } else {
            sendText("Item out of stock...", "red")
        }

    } catch (error) {
        sendText("Error, Item out of stock...", "red")
        errorWebhook(error, "getSizepidInstock")
    }
}
async function mainAtc() {
    try {

        if (multicart == "on") {
            sizepid_instock.forEach(element => {
                sizepid = element
                atcR()
            });
        } else {
            if (size_range == "random") {
                let n = getRandomIntInclusive(0, sizepid_instock.length - 1)
                sizepid = sizepid_instock[n]
            }

            if (sizepid != "")
                atcR()
        }

    } catch (error) { errorWebhook(error, "mainAtc") }
}
async function atcR() {

    sendText("Trying atc...", "blue")
    await fetch("https://www.here-store.com/on/demandware.store/Sites-here-it-Site/it_IT/Cart-AddProduct?format=ajax", {
        "headers": {
            "accept": "text/html, */*; q=0.01",
            "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": link,
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "Quantity=1&sizeTable=&cartAction=add&pid=" + sizepid + "&productSetID=" + sizepid + "&redirect=true",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    })
        .then(response => { checkResAtc(response) })
        .catch((error) => {
            if (error != "TypeError: Failed to fetch")
                errorWebhook(error, "atcR")
            sendText("Error adding to cart", "orange")
        });;
}
async function checkResAtc(response) {
    carted += 1
    try {

        let status = response.status

        if (status == 200 || status == 201) {
            sendText("Carted", "green")
            if (multicart == "on") {
                if (carted == sizepid_instock.length) {
                    setDataProduct()
                    mainCheckout()
                }
            } else {
                setDataProduct()
                mainCheckout()
            }
        } else { sendText("Error carting", "red") }

    } catch (error) { errorWebhook(error, "checkResAtc") }
}

function setDataProduct() {
    try {
        name_product = pid
        size_product = sizepid
        price_product = document.getElementsByClassName("b-price__sale")[0].textContent
        img_product = document.getElementsByClassName("main-image-class")[0].src
    } catch (error) { errorWebhook(error, "setDataProduct") }
}

async function mainCheckout() {
    try {
        sendWebhooks()
        if (checkout_mode == "Full Checkout") {
            document.location = "https://www.here-store.com/it/fatturazione"
        } else
            document.location = "https://www.here-store.com/it/checkout"

    } catch (error) { errorWebhook(error, "mainCheckout_2") }
}

async function mainCheckoutShipping() {
    try {

        await sleep(500)

        if (profile != "") {
            try {

                if (document.getElementById("dwfrm_billing_billingAddress_email_emailAddress").value == "")
                    document.getElementById("dwfrm_billing_billingAddress_email_emailAddress").value = profile["Email"]

                if (document.getElementById("dwfrm_singleshipping_shippingAddress_addressFields_phonewithoutcode").value == "")
                    document.getElementById("dwfrm_singleshipping_shippingAddress_addressFields_phonewithoutcode").value = profile["Telephone"]

                // document.getElementById("dwfrm_singleshipping_shippingAddress_addressFields_phonecountrycode_codes").value = profile["Telephone"]

                if (document.getElementById("dwfrm_singleshipping_shippingAddress_addressFields_firstName").value == "")
                    document.getElementById("dwfrm_singleshipping_shippingAddress_addressFields_firstName").value = profile["FirstName"]

                if (document.getElementById("dwfrm_singleshipping_shippingAddress_addressFields_lastName").value == "")
                    document.getElementById("dwfrm_singleshipping_shippingAddress_addressFields_lastName").value = profile["LastName"]

                if (document.getElementById("dwfrm_singleshipping_shippingAddress_addressFields_title_Mr").checked == false)
                    document.getElementById("dwfrm_singleshipping_shippingAddress_addressFields_title_Mr").click()

                if (document.getElementById("dwfrm_singleshipping_shippingAddress_addressFields_birthday").value == "")
                    document.getElementById("dwfrm_singleshipping_shippingAddress_addressFields_birthday").value = "2000-12-11"

                if (document.getElementById("dwfrm_singleshipping_shippingAddress_addressFields_address1").value == "")
                    document.getElementById("dwfrm_singleshipping_shippingAddress_addressFields_address1").value = profile["AddressOne"]

                if (document.getElementById("dwfrm_singleshipping_shippingAddress_addressFields_postal").value == "")
                    document.getElementById("dwfrm_singleshipping_shippingAddress_addressFields_postal").value = profile["Zip"]

                if (document.getElementById("dwfrm_singleshipping_shippingAddress_addressFields_city").value == "")
                    document.getElementById("dwfrm_singleshipping_shippingAddress_addressFields_city").value = profile["City"]

                if (document.getElementById("dwfrm_singleshipping_shippingAddress_addressFields_states_state").value == "")
                    document.getElementById("dwfrm_singleshipping_shippingAddress_addressFields_states_state").value = profile["State"] //FC

                await sleep(500)

            } catch (error) { }
        }

        document.getElementsByClassName("b-btn_fourth b-checkout__proceed js-cmp-inited js-cmp-button")[0].click()

    } catch (error) { errorWebhook(error, "mainCheckoutShipping") }
}

async function mainCheckoutPayment() {
    try {

        if (payment_mode == "PayPal") {
            document.querySelector('[for="PayPal"]').click()
        } else if (payment_mode == "Credit Card") {

            if (profile != "") {

                await sleep(500)
                document.getElementById("cardOwner").getElementsByClassName("js-input_field b-text-input")[0].value = profile["CardOwnerName"]
                document.getElementById("cardNumber").getElementsByClassName("js-input_field b-text-input")[0].value = profile["CardNumber"]
                document.getElementById("cardExpireMonth").getElementsByClassName("js-input_field input-select b-selectbox__input required input-required")[0].value = profile["MMYY"].split('/')[0]

                if (profile["MMYY"].split('/')[1].length == 2)
                    document.getElementById("cardExpireYear").getElementsByClassName("js-input_field b-selectbox__input required input-required")[0].value = "20" + profile["MMYY"].split('/')[1]
                else
                    document.getElementById("cardExpireYear").getElementsByClassName("js-input_field b-selectbox__input required input-required")[0].value = profile["MMYY"].split('/')[1]

                document.getElementById("cardCvn").getElementsByClassName("js-input_field b-text-input required input-required")[0].value = profile["CVV"]
            }
        }

        if (document.getElementById("dwfrm_billing_billingAddress_personalData").checked == false)
            document.getElementById("dwfrm_billing_billingAddress_personalData").click()
        if (document.getElementById("dwfrm_billing_billingAddress_tersmsOfSale").checked == false)
            document.getElementById("dwfrm_billing_billingAddress_tersmsOfSale").click()

        document.querySelector('[for="dwfrm_billing_billingAddress_tersmsOfSale"]').scrollIntoView()

    } catch (error) { errorWebhook(error, "mainCheckoutPayment") }
}

async function mainSuccess() {
    try {

        name_product = document.getElementsByClassName("b-product-list__name")[0].textContent.replaceAll("\n", "")
        link_product = document.getElementsByClassName("b-product-list__name")[0].querySelector("a").href
        img_product = document.getElementsByClassName("b-product-list__cell b-product-list__img")[0].querySelector("img").src

        size_product = ""
        sizes_ck = document.querySelectorAll('[data-attribute="size"]')
        for (let index = 0; index < sizes_ck.length; index++) {
            if (index + 1 == sizes_ck.length)
                size_product += sizes_ck[index].textContent.replace(/[^\d,.-]/g, '')
            else
                size_product += sizes_ck[index].textContent.replace(/[^\d,.-]/g, '') + "-"
        }

        // size_product = document.querySelector('[data-attribute="size"]').textContent.replace(/[^\d,.-]/g, '')

        if (document.getElementsByClassName("b-order-summary__subtotal-value")[0].textContent.replaceAll("\n", "") != "")
            price_product = document.getElementsByClassName("b-order-summary__subtotal-value")[0].textContent.replaceAll("\n", "")
        else
            price_product = document.getElementsByClassName("price-total")[0].textContent.replaceAll("\n", "")

        order_email = document.getElementsByClassName("b-checkout-confirmation__mail-text")[0].textContent
        order_number = document.getElementsByClassName("b-checkout-confirmation__order-number")[0].textContent.replace(/[^\d,.-]/g, '')

        sendWebhooks()

    } catch (error) { errorWebhook(error, "mainSuccess") }
}

async function sendWebhooks() {
    chrome.runtime.sendMessage({ greeting: "checkout_webhook&-&" + name_product + "&-&" + link_product + "&-&" + img_product + "&-&" + site + "&-&" + size_product + "&-&" + price_product + "&-&" + order_email + "&-&" + order_number })
}

async function errorWebhook(error, position) {
    chrome.runtime.sendMessage({ greeting: "error_webhook&-&" + site + "&-&" + error + "&-&" + position })
}

chrome.runtime.sendMessage({ greeting: "status_aco_here" }, function (response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "status_login_here" }, function (response) {
    status_login = response.farewell
});

chrome.runtime.sendMessage({ greeting: "email_pw_here" }, function (response) {
    try {
        var x = response.farewell
        email_login = x.split(':')[0]
        pw_login = x.split(':')[1]
    } catch (error) { }
});

chrome.runtime.sendMessage({ greeting: "multicart_here" }, function (response) {
    multicart = response.farewell
});

chrome.runtime.sendMessage({ greeting: "payment_mode_here" }, function (response) {
    payment_mode = "Credit Card"
});

chrome.runtime.sendMessage({ greeting: "checkout_mode_here" }, function (response) {
    checkout_mode = response.farewell
});

chrome.runtime.sendMessage({ greeting: "profile_here" }, function (response) {
    chrome.runtime.sendMessage({ greeting: response.farewell }, function (response) {
        try {
            profile = JSON.parse(response.farewell)
        } catch (error) { }
    });
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function (response) {
    if (response.farewell == 'on') {
        textBox()
        chrome.runtime.sendMessage({ greeting: "status_aco_here" }, function (response) {
            if (response.farewell == 'on') {
                main()
            }
        });
    }
});