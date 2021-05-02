debugger

const site = "Footdistrict"

let link = document.location.href
let country = link.split('/')[2]

if (country == "footdistrict.com")
    country = "footdistrict.com/en"

let size_range = "random"
let profile = ""

let status_aco = ""
let status_login = ""

let is_login = false

let email_login = ""
let pw_login = ""

let payment_mode = ""
let checkout_mode = ""
let mode = ""

let product_id = ""
let simple_id = ""
let form_key = ""
let uenc = ""
let super_attribute = "" //option-id
let v3_captcha_response = ""
let url_post_atc = ""

let sizes = ""
let sizepid = ""
let sizepid_instock = []

let link_product = link
let name_product = '';
let size_product = '';
let price_product = "";
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
    if (status_aco == "off") { color_aco = "red" } else { color_aco = "green" }
    try {
        var btn1 = document.getElementsByClassName("header content")[0]
        btn1.insertAdjacentHTML("beforebegin", '<style>.btn_cava {box-shadow: rgb(247 197 192) 0px 1px 0px 0px inset;background: linear-gradient(rgb(252, 141, 131) 5%, rgb(228, 104, 93) 100%) rgb(252, 141, 131);border-radius: 6px;border: 1px solid rgb(216, 53, 38);display: inline-block;cursor: pointer;color: rgb(255, 255, 255);font-family: Arial;font-size: 14px;font-weight: bold;text-decoration: none;text-shadow: rgb(178 62 53) 0px 1px 0px;outline: none;width: 100%;}' +
            '.btn_cava:hover {background:linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);background-color:#e4685d;}' +
            '.btn_cava:active {position:relative;top:1px;} p{font-weight:bold}' +
            '#CavaScripts {position: fixed;right: 0;top: 350px; z-index:1000;width:300px;background-image: url(https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fbackground.png?alt=media&token=90d4ab30-1b59-434f-8729-b2a43a84d445);background-size: cover;padding: 10px 10px;color: black; border-radius: 10px;font-family: Arial;text-align: left;}' +
            '#CavaScriptsheader {padding: 10px;cursor: move;z-index: 10;background-color: #2196F3;color: #fff;border-radius: 10px;text-align: center;}' +
            '.box {width: 100%;background: #ffffff;color: #000;text-align: center;display: inline-block;box-shadow: #A3A3A3 3px 3px 6px -1px;border-radius: 10px;padding: 5px;}</style>' +
            '<div id="CavaScripts"><div id="CavaScriptsheader"><input type="image" id="btn_left" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fleft.png?alt=media&token=ae01ab54-0f26-47ac-9fdf-8774188499bd" style="width: 10px; margin-right: 40px;margin-bottom: -3px;">Click here to move<input type="image" id="btn_right" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fright.png?alt=media&token=887cb8d7-4399-43ff-a197-96afe8626dc6" style="width: 10px;margin-left: 40px;margin-bottom: -3px;"></div>' +
            ' <br> <p id="statusFootdistrict">Status footdistrict</p> ' +
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
    try { document.getElementById("statusFootdistrict").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) {}
}

async function main() {

    await sleep(500)
    await getData()

    if (status_login == "on")
        checkLogin()

    if (status_aco == "on") {
        if (product_id != "") {

            while (document.getElementsByClassName("swatch-option text")[0] == undefined) {
                await sleep(250)
            }

            sizes = document.getElementsByClassName("swatch-option text")
            sizes = Array.prototype.slice.call(sizes)
            sizes = arreyMixer(sizes)

            if (mode == "Browser" || document.getElementsByClassName("action primary tocart premium")[0] != undefined) {
                mainAtcBrowser()
            } else {
                mainAtcFast()
            }

        }
    }
}

async function checkLogin() {
    try {
        let j = JSON.parse(localStorage.getItem("mage-cache-storage"))
        if (j.customer == undefined)
            loginR()
        else if (j.customer.firstname == undefined)
            loginR()
        else
            is_login = true
    } catch (error) {
        errorWebhook(error, "checkLogin")
    }
}

async function loginR() {
    fetch("https://" + country + "/customer/ajax/login/", {
            "headers": {
                "accept": "*/*",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": link,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"form_key\":\"" + form_key + "\",\"username\":\"" + email_login + "\",\"password\":\"" + pw_login + "\",\"v3-recaptcha-response\":\"" + v3_captcha_response + "\"}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResLogin(response) })
        .catch((error) => {
            if (error != "TypeError: Failed to fetch")
                errorWebhook(error, "loginR")
            sendText("Error logging in", "orange")
        });;
}

async function checkResLogin(response) {
    try {

        let status = response.status
        if (status == 200 || status == 201) {
            sendText("Logged in", "green")
            is_login = true
        } else { sendText("Error logging in", "red") }

    } catch (error) { errorWebhook(error, "checkResLogin") }
}

async function getData() {
    try {
        form_key = document.getElementsByName("form_key")[0].value
        v3_captcha_response = document.getElementsByName("v3-recaptcha-response")[0].value
        product_id = document.getElementsByName("product")[0].value

        let j = JSON.parse(localStorage.getItem("product_data_storage"))
        Object.keys(j).forEach(function(key) {
            uenc = JSON.parse(j[key].add_to_compare_button.url).data.uenc
        });

    } catch (error) {
        if (error != "TypeError: Cannot read property 'textContent' of undefined" && error != "TypeError: Cannot read property 'value' of undefined" && error != "TypeError: Cannot read property 'action' of null")
            errorWebhook(error, "getData")
    }
}

async function mainAtcBrowser() {
    try {

        let c = 0

        if (size_range == "random") {
            let n = getRandomIntInclusive(0, sizes.length - 1)
            c = n
            size_product = sizes[n].textContent
        } else {
            if (size_range.includes('-')) {
                for (let index = 0; index < sizes.length; index++) {
                    if (parseFloat(sizes[index].textContent) >= parseFloat(size_range.split('-')[0]) && parseFloat(sizes[index].textContent) <= parseFloat(size_range.split('-')[1])) {
                        size_product = sizes[index].textContent
                        c = index
                        cart = 1
                        break
                    }
                }
            } else {
                for (let index = 0; index < sizes.length; index++) {
                    if (parseFloat(sizes[index].textContent) == parseFloat(size_range)) {
                        size_product = sizes[index].textContent
                        c = index
                        cart = 1
                        break
                    }
                }
            }
        }

        if (size_product != "") {
            sizes[c].click()
            document.getElementById("product-addtocart-button").click()

            if (document.location == link_product) {
                mainCheckoutPremium()
            }
        }

    } catch (error) { errorWebhook(error, "mainAtc") }
}

async function mainAtcFast() {
    try {

        if (size_range == "random") {
            let n = getRandomIntInclusive(0, sizes.length - 1)
            size_product = sizes[n].textContent
            super_attribute = sizes[n].getAttribute("option-id")
            simple_id = sizes[n].getAttribute("simple-id")
        } else {
            if (size_range.includes('-')) {
                for (let index = 0; index < sizes.length; index++) {
                    if (parseFloat(sizes[index].textContent) >= parseFloat(size_range.split('-')[0]) && parseFloat(sizes[index].textContent) <= parseFloat(size_range.split('-')[1])) {
                        super_attribute = sizes[index].getAttribute("option-id")
                        simple_id = sizes[index].getAttribute("simple-id")
                        size_product = sizes[index].textContent
                        cart = 1
                        break
                    }
                }
            } else {
                for (let index = 0; index < sizes.length; index++) {
                    if (parseFloat(sizes[index].textContent) == parseFloat(size_range)) {
                        super_attribute = sizes[index].getAttribute("option-id")
                        simple_id = sizes[index].getAttribute("simple-id")
                        size_product = sizes[index].textContent
                        cart = 1
                        break
                    }
                }
            }
        }

        if (super_attribute != "") {
            atcR()
        }

    } catch (error) { errorWebhook(error, "mainAtc") }
}

async function atcR() {

    sendText("Trying atc...", "blue")
    await fetch("https://" + country + "/checkout/cart/add/uenc/" + uenc + "%2C%2C/product/" + product_id + "/", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": link,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "product=" + product_id + "&selected_configurable_option=&related_product=&item=" + product_id + "&form_key=" + form_key + "&super_attribute%5B134%5D=" + super_attribute + "&v3-recaptcha-response=" + v3_captcha_response,
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
    try {

        let status = response.status

        if (status == 200 || status == 201) {
            sendText("Carted", "green")
            await setDataProduct()
            mainCheckout()
        } else { sendText("Error carting", "red") }

    } catch (error) { errorWebhook(error, "checkResAtc") }
}

async function atcRPremiumFast() {
    try {

        let x = JSON.parse(localStorage.getItem("mage-cache-storage"))
        _address = x.customer.address
        _country = x.customer.country
        _customer = x.customer.id
        _hash = x.customer.hash
        _ip = x.customer.ip
        _phone = x.customer.phone
        _country_code = x.customer.country_code.replace("+", "%2B")

        sendText("Trying atc...", "blue")
        await fetch("https://" + country + "/premium/popup/add/", {
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
                "body": "product=" + product_id + "&selected_configurable_option=&related_product=&item=" + product_id + "&product_size=" + size_product + "&simple_id=" + simple_id + "&release=1&customer=" + _customer + "&country_code=" + _country_code + "&phone=" + _phone + "&address=" + _address + "&country=" + _country + "&ip=" + _ip + "&hash=" + _hash + "&form_key=" + form_key + "&super_attribute%5B134%5D=" + super_attribute + "&v3-recaptcha-response=" + v3_captcha_response + "&additional_data%5Bjava_enabled%5D=false&additional_data%5Bscreen_color_depth%5D=24&additional_data%5Bscreen_width%5D=1920&additional_data%5Bscreen_height%5D=1080&additional_data%5Btimezone_offset%5D=-120&additional_data%5Blanguage%5D=it-IT",
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            })
            .then(response => { checkResAtcPremium(response) })
            .catch((error) => {
                if (error != "TypeError: Failed to fetch")
                    errorWebhook(error, "atcRPremium")
                sendText("Error adding to cart", "orange")
            });;

    } catch (error) {
        errorWebhook(error, "atcRPremiumFast")
    }
}

async function checkResAtcPremium(response) {
    try {

        let status = response.status
        let res = await response.json()

        if (status == 200 || status == 201) {
            sendText("Carted", "green")
            await setDataProduct()
            mainCheckout()
        } else { sendText("Error carting", "red") }

    } catch (error) { errorWebhook(error, "checkResAtc") }
}

function setDataProduct() {
    try {
        name_product = document.querySelector('[itemprop="name"]').textContent
        price_product = document.getElementsByClassName("product-info-price")[0].textContent.replaceAll("\n", "")
    } catch (error) { errorWebhook(error, "setDataProduct") }
}

async function mainCheckout() {
    try {
        sendWebhooks()
        document.location = "https://" + country + "/onestepcheckout/"
    } catch (error) { errorWebhook(error, "mainCheckout_2") }
}

async function mainCheckoutPremium() {
    try {

        sendWebhooks()
            // if (document.getElementsByClassName("admin__fieldset payment-method")[0] == null)
            //     document.location = "https://" + country + "/onestepcheckout/"
            // else {
        if (profile != "") {
            document.getElementById("adyen_cc_cc_owner").value = profile.CardOwnerName
            document.getElementById("encryptedCardNumber").value = profile.CardNumber
            document.getElementById("encryptedExpiryDate").value = profile.MMYY
            document.getElementById("encryptedSecurityCode").value = profile.CVV
            document.getElementById("validar-auth-premium").click()
        }
        // }

    } catch (error) { errorWebhook(error, "mainCheckout_2") }
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

chrome.runtime.sendMessage({ greeting: "status_aco_footdistrict" }, function(response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "size_footdistrict" }, function(response) {
    if (response.farewell != "off" && hasNumber(response.farewell))
        size_range = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        textBox()
        chrome.runtime.sendMessage({ greeting: "status_aco_footdistrict" }, function(response) {
            if (response.farewell == 'on') {
                main()
            }
        });
        chrome.runtime.sendMessage({ greeting: "status_login_footdistrict" }, function(response) {
            if (response.farewell == 'on') {
                main()
            }
        });
    }
});