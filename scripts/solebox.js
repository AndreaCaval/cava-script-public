debugger

const site = "Solebox"

let link = document.location.href
let country = link.split('/')[3]

let size_range = "random"
let checkout_mode = ""
let payment_mode = ""

let email_login = "";
let pw_login = "";

let status_login = "";
let status_aco = "";

let is_cart = false
let is_login = false
let is_captcha_solved = false

let img_product = "";
let price_product = "";
let name_product = "";
let size_product = "";
let link_product = link

let pid = "";
let pidsize = "";
let size = "";

let dummy = 0
let uuid_dummy = ""

let html = document.createElement('html')
let address_id = "";
let address_type = "";
let snipes_store = "";
let post_office_number = "";
let pack_station_number = "";
let post_number = "";
let country_code = "";
let suite = "";
let street = "";
let city = "";
let address1 = "";
let address2 = "";
let last_name = "";
let first_name = "";
let title = "";
let originalShipmentUUID = "";
let shipmentUUID = "";
let address_selector = "";
let email = "";
let phone = "";
let postal_code = "";
let shippingMethodID = ""
let csrf_token = "";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    n = Math.floor(Math.random() * (max - min + 1)) + min;
    return n
}

function textBox() {
    let color_aco = "";
    let color_login = ""
    if (status_aco == "off") { color_aco = "red" } else { color_aco = "green" }
    if (status_login == "off") { color_login = "red" } else { color_login = "green" }
    try {
        let btn1 = document.getElementsByClassName("b-header-wrapper js-sticky-element")[0]
        btn1.insertAdjacentHTML("beforebegin", '<style>.btn_cava {padding: 5px 25px;font-size: 14px;text-align: center;cursor: pointer;outline: none;color: #fff;background-color: #4CAF50;border: none;border-radius: 10px;box-shadow: 0 5px #999;}' +
            '.btn_cava:hover {background-color: #3e8e41}.btn_cava:active {background-color: #3e8e41;box-shadow: 0 5px #666;transform: translateY(4px);}</style>' +
            '<div id="CavaScripts" style="font-family: Verdana, Geneva, sans-serif; break-word; position: fixed; right:0; top: 350px; z-index: 1000; min-width: 10px; max-width: 500px; background-color: lightgrey; padding: 5px 10px; color: black; border-radius: 10px;">' +
            ' <p id="statusSolebox">Status solebox</p>' +
            // '<label>Sizepid Dummy: </label> <br> <input style="color:black; width:100%; min-width:250px;" type="text" id="input_sizepid_dummy" placeholder="es: 0190061200000002"> <br>' +
            // '<input style="text-align: center; color:white; background-color:black; width:100%; margin-right:10px;" id="btn_dummy" type="submit" value="START DUMMY"> <br><br>' +
            '<label>Sizepid  or  Load Link: </label> <br> <input style="color:black; type=text; width:100%; min-width:250px;" id="input_sizepid" placeholder="es: 0190061200000002"> <br>' +
            '<input class="btn_cava" style="text-align: center; color:white; background-color:black; width:100%; margin-top:5px;" id="btn_start_task" type="submit" value="START TASK"> <br><br>' +
            '<input class="btn_cava" style="text-align: center; color:white; background-color:black; width:100%; margin-right:10px;" id="btn_start_checkout" type="submit" value="START CHECKOUT"> <br>' +
            " <p>ACO: <span style='font-size:20px; color:" + color_aco + ";'>" + status_aco + "</span> LOGIN: <span style='font-size:20px; color:" + color_login + ";' >" + status_login + "</span></p></div>");

        let btn_start_task = document.getElementById('btn_start_task')
        btn_start_task.addEventListener("click", function() {
            try {
                let input = document.getElementById("input_sizepid").value
                if (!isNumeric(input)) {
                    input = input.replace(/\D/g, '-');
                    input = input.split('-')
                    input.forEach(element => {
                        if (element.length == 16)
                            input = element
                    });
                }
                if (isNumeric(input)) {
                    pidsize = input
                    link_product = "https://www.solebox.com/" + country + "/p/cava-" + pidsize + ".html?"
                    atcRfast()
                } else
                    sendText("Input error", "red")

            } catch (error) { errorWebhooks(error, "btn_start_task") }
        });

        let btn_start_checkout = document.getElementById('btn_start_checkout')
        btn_start_checkout.addEventListener("click", function() {
            getCheckout()
        });

        let btn_dummy = document.getElementById('btn_dummy')
        btn_dummy.addEventListener("click", function() {
            try {
                let input = document.getElementById("input_sizepid_dummy").value
                if (isNumeric(input)) {
                    pidsize = input
                    dummy = 1
                    atcRfast()
                } else
                    sendText("Input error", "red")
            } catch (error) { errorWebhooks(error, "btn_dummy") }
        });

    } catch (error) {
        if (error != "TypeError: Cannot read property 'parentNode' of undefined" && error != "TypeError: Cannot read property 'insertAdjacentHTML' of undefined" && error != "TypeError: Cannot read property 'addEventListener' of null")
            errorWebhooks(error, "textBox")
    }
}

async function addButton() {
    try {
        if (document.getElementById('btn_solver') == null) {

            let btn1 = document.getElementById("CavaScripts")
            btn1.insertAdjacentHTML("beforeend", '<br><input style="color:black; width:100%" id="btn_solver" type="submit" value="Open Solver"> ' +
                '<br><br><input style="color:black; width:100%" id="btn_solved" type="submit" value="Solved"> ');

            let btn_solver = document.getElementById('btn_solver')
            btn_solver.addEventListener("click", function() {
                let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=500,height=500,left=-1000,top=-1000`;
                window.open('https://www.solebox.com/' + country + '/view-account', 'test', params)
            });

            let btn_solved = document.getElementById('btn_solved')
            btn_solved.addEventListener("click", function() {
                sendText("Captcha solved...", "blue")
                is_captcha_solved = true
            });
        }
    } catch (error) {}
}

async function sendText(text, color) {
    try { document.getElementById("statusSolebox").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) {}
}


async function main() {
    if (link.startsWith("https://www.solebox.com/" + country + "/p")) {
        mainAtc()
    } else if (link.startsWith("https://www.solebox.com/" + country + "/cart")) {
        mainCart()
    } else if (link == "https://www.solebox.com/" + country + "/add-product?format=ajax") {
        try {
            resAtc = document.querySelector("body").textContent
            resAtc = JSON.parse(resAtc)
            if (resAtc["error"] == false) {
                document.location = "https://www.solebox.com/" + country + "/cart"
            } else {
                console.log("oos")
            }
        } catch (error) {}
    }
}


async function checkLogin() {

    try {

        let script = ""
        let scripts = document.getElementsByTagName('script')
        for (let i = 0; i < scripts.length; i++) {
            if (scripts[i].textContent.includes('userLoginStatus')) {
                script = scripts[i].textContent
            }
        }
        eval(script)
        if (dataLayer[0]["userLoginStatus"] == false) {
            sendText("Logging in...", "blue")
            if (email_login != "" && email_login != null && email_login != "off" && email_login != undefined || pw_login != "" && pw_login != null && pw_login != "off" && pw_login != undefined) {
                login()
            } else {
                sendText("Login data error", "red")
            }
        } else {
            is_login = true
        }

    } catch (error) {
        if (error != "ReferenceError: dataLayer is not defined") {
            errorWebhooks(error, "checkLogin")
            sendText("Error checking login", "red")
        }
    }
}

async function checkLoginOff() {

    try {

        let script = ""
        let scripts = document.getElementsByTagName('script')
        for (let i = 0; i < scripts.length; i++) {
            if (scripts[i].textContent.includes('userLoginStatus')) {
                script = scripts[i].textContent
            }
        }
        eval(script)
        if (dataLayer[0]["userLoginStatus"] == true)
            is_login = true
        else
            sendText("You aren't logged in...", "red")

    } catch (error) {
        if (error != "ReferenceError: dataLayer is not defined") {
            errorWebhooks(error, "checkLogin")
            sendText("Error checking login", "red")
        }
    }
}

async function login() {

    try {
        let html_login = document.createElement('html')
        if (link != "https://www.solebox.com/" + country + "/login") {

            await getLogin()
            await res.then(function(result) {
                html_login.innerHTML = result
            })

            csrf_token = html_login.querySelectorAll("[name='csrf_token']")[0].value
            span = html_login.querySelectorAll('span')
            for (let i = 0; i < span.length; i++) {
                if (span[i].getAttribute('data-id') != null) {
                    span = span[i]
                }
            }
            data_id = span.getAttribute('data-id')
            data_value = span.getAttribute('data-value')
        } else {

            csrf_token = document.getElementsByName("csrf_token")[0].value
            span = document.getElementsByTagName('span')
            for (let i = 0; i < span.length; i++) {
                if (span[i].getAttribute('data-id') != null) {
                    span = span[i]
                }
            }
            data_id = span.getAttribute('data-id')
            data_value = span.getAttribute('data-value')
        }

        loginR(data_id, data_value, csrf_token)

    } catch (error) {
        if (error != "TypeError: span.getAttribute is not a function" && error != "TypeError: Cannot read property 'value' of undefined")
            errorWebhooks(error, "login")
    }

}

async function loginR(data_id, data_value, csrf_token) {

    try {

        await fetch("https://www.solebox.com/" + country + "/authentication?rurl=1&format=ajax", {
                "headers": {
                    "accept": "application/json, text/javascript, */*; q=0.01",
                    "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "x-requested-with": "XMLHttpRequest"
                },
                "referrer": "https://www.solebox.com/" + country + "/login?rurl=1",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": data_id + "=" + data_value + "&dwfrm_profile_customer_email=" + email_login + "&dwfrm_profile_login_password=" + pw_login + "&csrf_token=" + csrf_token,
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            })
            .then(response => { checkResLogin(response) })
            .catch((error) => {
                sendText("Error logging in", "orange")
                if (error != "TypeError: Failed to fetch")
                    errorWebhooks(error, "authentication")
            });;

    } catch (error) { errorWebhooks(error, "loginR") }
}

async function checkResLogin(response) {

    let status = response.status
    let res = await response.text()
    if (status == 200 || status == 201) {
        sendText("Logged in", "green")
        is_login = true
    } else {
        if (res.includes("\"appId\"")) {
            sendText("Error logging in, resolve captcha", "red")
            addButton()
            while (is_captcha_solved == false) {
                await sleep(250)
            }
            is_captcha_solved = false
            login()
        } else {
            errorWebhooks(res, "checkResLogin")
            sendText("Error logging in", "red")
        }
    }
}

async function getLogin() {

    await fetch("https://www.solebox.com/" + country + "/login", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            "referrer": "https://www.solebox.com/" + country,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { res = checkResgetLogin(response) })
        .catch((error) => {
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "getLogin")
            sendText("Error getting login", "orange")
        });;
}

async function checkResgetLogin(response) {

    let status = response.status
    let res = await response.text()
    if (status == 200 || status == 201) {
        return res
    } else {
        if (res.includes("\"appId\"") || res.includes("_pxAppId")) {
            sendText("Error logging in, resolve captcha", "red")
            addButton()
            while (is_captcha_solved == false) {
                await sleep(250)
            }
            is_captcha_solved = false
            login()
        } else {
            errorWebhooks(res, "checkResgetLogin")
            sendText("Error logging in", "red")
        }
    }
}


async function mainAtc() {

    try {
        csrf_token = document.getElementsByName('csrf_token')[0].value
        let input = link
        if (!isNumeric(input)) {
            input = input.replace(/\D/g, '-');
            input = input.split('-')
            input.forEach(element => {
                if (element.length == 16)
                    input = element

                if (element.length == 8)
                    input = element
            });
        }

        if (input.length == 8) {
            pid = input
            atc()
        } else if (input.length == 16) {
            pidsize = input
            atcRfast()
        }

    } catch (error) {
        if (error != "TypeError: Cannot read property 'value' of undefined")
            errorWebhooks(error, "main")
        sendText("Error loading page", "red")
    }
}

async function atc() {

    try {

        if (size_range == "random") {
            let btn_1 = document.getElementsByClassName('f-pdp-button f-pdp-button--active js-btn-add-to-cart')[0]
            if (btn_1 != undefined && btn_1.getAttribute('data-pid').length > 8) {
                pidsize = btn_1.getAttribute('data-pid')
                atcRfast()
            } else {
                let sizes = document.getElementsByClassName('js-pdp-attribute-tile b-size-value js-size-value b-swatch-circle b-swatch-value b-swatch-value--selectable b-swatch-value--orderable')
                let n = getRandomIntInclusive(0, sizes.length - 1)
                getSizePid(sizes[n].getAttribute("data-attr-value"))
            }
        } else {
            if (!size_range.includes('-')) {
                getSizePid(size_range)
            } else {
                // let size_box = size_range.split('-')
                // let n = getRandomIntInclusive(0, size_box.length - 1)
                // getSizePid(size_box[n])

                let size_1 = parseFloat(size_range.split('-')[0])
                let size_2 = parseFloat(size_range.split('-')[1])
                let size_random = ""
                let sizes = document.getElementsByClassName('js-pdp-attribute-tile b-size-value js-size-value b-swatch-circle b-swatch-value b-swatch-value--selectable b-swatch-value--orderable')
                sizes = Array.prototype.slice.call(sizes)
                sizes = arreyMixer(sizes)
                for (let index = 0; index < sizes.length; index++) {
                    if (parseFloat(sizes[index].getAttribute("data-attr-value")) >= size_1 && parseFloat(sizes[index].getAttribute("data-attr-value")) <= size_2) {
                        size_random = sizes[index].getAttribute("data-attr-value")
                        break
                    }
                }
                if (size_random != "")
                    getSizePid(size_random)
            }
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

async function getSizePid(size_r) {

    let type = "212"
    if (!hasNumber(size_r))
        type = "5903"

    await fetch("https://www.solebox.com/" + country + "/p/" + pid + ".html?chosen=size&dwvar_" + pid + "_" + type + "=" + size_r + "&format=ajax", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/json",
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
        let x = res
        res = JSON.parse(res)
        if (status == 200 || status == 201) {
            pidsize = res["product"]["id"]
            atcRfast()
        } else {
            if (x.includes("\"appId\"") || x.includes("_pxAppId")) {
                sendText("Error getting product, resolve captcha", "red")
                addButton()
                while (is_captcha_solved == false) {
                    await sleep(250)
                }
                is_captcha_solved = false
                atc()
            } else {
                errorWebhooks(x, "checkResgetSizePid")
                sendText("Error getting product", "red")
            }
        }
    } catch (error) {}
}

async function atcRfast() {

    sendText("Trying atc fast...", "blue")
    await fetch("https://www.solebox.com/" + country + "/add-product?format=ajax", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": link,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "pid=" + pidsize + "&options=&quantity=1",
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

        sendText("Carting...", "blue")
        let status = response.status
        let res = await response.text()
        let x = res
        res = JSON.parse(res)
        let error = res["error"]
        let message = res["message"]
        let errorMessage = res["errorMessage"]

        if (status == 200 || status == 201) {
            if (error == false) {
                sendText("Carted", "green")
                if (dummy == 2) {
                    name_product = res["gtm"]["name"]
                    size_product = res["gtm"]["variant"]
                    price_product = res["gtm"]["price"] + '€'
                    PlaceOrder()
                } else {
                    if (dummy == 1)
                        uuid_dummy = res["pliUUID"]
                    mainCart()
                }
            } else {
                if (message == "The selected item is not available any more." || message == "Der gewünschte Artikel ist leider nicht mehr verfügbar.") {
                    sendText("Item out of stock", "red")
                } else {
                    resInfoWebook(x, "checkResAtc_1")
                    sendText("Error carting", "red")
                }
            }
        } else {
            if (x.includes("\"appId\"")) {
                sendText("Error carting, resolve captcha", "red")
                addButton()
                while (is_captcha_solved == false) {
                    await sleep(250)
                }
                is_captcha_solved = false
                atcRfast()
            } else if (errorMessage == "Too many requests") {
                sendText("Too many requests", "red")
            } else if (errorMessage != "undefined" && errorMessage != undefined) {
                errorWebhooks(errorMessage, "checkResAtc_2")
                sendText(errorMessage, "red")
            } else {
                resInfoWebook(x, "checkResAtc_3")
                sendText("Error carting", "red")
            }
        }

    } catch (error) {
        if (error == "SyntaxError: Unexpected token < in JSON at position 1" || error == "SyntaxError: Unexpected token < in JSON at position 0") {
            sendText("Error carting, resolve captcha", "red")
            addButton()
            while (is_captcha_solved == false) {
                await sleep(250)
            }
            is_captcha_solved = false
            atcRfast()

        } else if (error != "SyntaxError: Unexpected end of JSON input")
            errorWebhooks(error + " | " + x, "trycheckResAtc")

        sendText("Error carting", "red")
    }
}


async function mainCart() {

    if (checkout_mode != "ATC Only") {
        while (is_login == false) {
            await sleep(250)
        }

        if (link.startsWith("https://www.solebox.com/" + country + "/cart")) {
            try {
                if (document.getElementsByClassName('t-error')[0] == undefined && document.getElementsByClassName("t-cart-price-value")[0].textContent.replaceAll("\n", '').replaceAll(" ", '') != "" && document.getElementsByClassName("t-cart-price-value")[0].textContent.replaceAll("\n", '').replaceAll(" ", '') != "0,00€") {
                    await getCheckout()
                } else if (document.getElementsByClassName('t-error')[0] != undefined) {
                    sendText("Item not available", "red")
                } else if (document.getElementsByClassName("t-cart-price-value")[0].textContent.replaceAll("\n", '').replaceAll(" ", '') == "0,00€" || document.getElementsByClassName("t-cart-price-value")[0].textContent.replaceAll("\n", '').replaceAll(" ", '') == "") {
                    sendText("Item not found", "red")
                } else { sendText("Item out of stock", "red") }

            } catch (error) {
                if (error == "TypeError: Cannot read property 'textContent' of undefined")
                    errorWebhooks(error, "mainCart_1")
            }
        } else {
            try {
                getCheckout()
            } catch (error) { errorWebhooks(error, "mainCart_2") }
        }
    } else {
        document.location = "https://www.solebox.com/" + country + "/checkout"
    }
}

async function getCheckout() {

    sendText("Starting checkout...", "blue")
    await fetch("https://www.solebox.com/" + country + "/checkout", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            "referrer": "https://www.solebox.com/" + country + "/cart",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResgetCheckout(response) })
        .catch((error) => {
            sendText("Error getting checkout", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "getCheckout fetch")

        });;
}

async function checkResgetCheckout(response) {

    let status = response.status
    let res = await response.text()
    if (response.url == "https://www.solebox.com/" + country + "/cart") {
        is_cart = true
        sendText("Item out of stock/ Item not available", "red")
    } else if (status == 200 || status == 201) {
        html.innerHTML = res
        gettingShipping()
    } else {
        if (res.includes("\"appId\"")) {
            sendText("Error getting checkout, resolve captcha", "red")
            addButton()
            while (is_captcha_solved == false) {
                await sleep(250)
            }
            is_captcha_solved = false
            mainCart()
        } else {
            errorWebhooks(res, "checkResgetCheckout")
            sendText("Error getting checkout", "red")
        }
    }
}

async function gettingShipping() {

    sendText("Getting shipping info...", "blue")
    try {
        let rdbtn = html.querySelectorAll("[class='js-shipment f-native-radio-input']")[0]
        address_id = rdbtn.getAttribute("data-id")
        address_type = rdbtn.getAttribute('data-address-type').replaceAll(" ", "+")
        snipes_store = rdbtn.getAttribute('data-snipes-store').replaceAll(" ", "+")
        post_office_number = rdbtn.getAttribute('data-post-office-number').replaceAll(" ", "+")
        pack_station_number = rdbtn.getAttribute('data-packstation-number').replaceAll(" ", "+")
        post_number = rdbtn.getAttribute('data-post-number').replaceAll(" ", "+")
        postal_code = rdbtn.getAttribute('data-postal-code').replaceAll(" ", "+")
        country_code = rdbtn.getAttribute('data-country-code').replaceAll(" ", "+")
        suite = rdbtn.getAttribute('data-suite').replaceAll(" ", "+")
        street = rdbtn.getAttribute('data-street').replaceAll(" ", "+")
        city = rdbtn.getAttribute('data-city').replaceAll(" ", "+")
        address1 = street + "," + suite
        address2 = rdbtn.getAttribute('data-address2').replaceAll(" ", "+")
        last_name = rdbtn.getAttribute('data-last-name').replaceAll(" ", "+")
        first_name = rdbtn.getAttribute('data-first-name').replaceAll(" ", "+")
        title = rdbtn.getAttribute('data-title').replaceAll(" ", "+")

        originalShipmentUUID = html.querySelector('[class="b-shipping-header"]').getAttribute('data-shipment-uuid')
        shipmentUUID = originalShipmentUUID
        shippingMethodID = html.querySelector('[class="b-shipping-form b-address-from"]').getAttribute('data-selected-method')
        address_selector = rdbtn.getAttribute("value")

        try { email = html.querySelector('[name="dwfrm_contact_email"]').getAttribute('value') } catch (error) { email = html.querySelector('[name="dwfrm_contact-de_email"]').getAttribute('value') }

        try { phone = html.querySelector('[name="dwfrm_contact_phone"]').getAttribute('value') } catch (error) { phone = html.querySelector('[name="dwfrm_contact-de_phone"]').getAttribute('value') }

        csrf_token = html.querySelector('[data-csrf-name="csrf_token"]').getAttribute('data-csrf-token')
        sendText("Getting shipping info", "green")

        try {
            img_product = html.getElementsByClassName("b-item-image-wrapper")[0].querySelectorAll("img")[0].getAttribute('data-src')
            price_product = html.querySelectorAll("[class='b-checkout-price-row-total']")[0].querySelectorAll('[class="t-checkout-price-value"]')[0].textContent.replaceAll("\n", "")
            name_product = html.querySelectorAll("[class='t-product-main-name']")[0].textContent.replaceAll("\n", "")
            size_product = html.querySelectorAll("[class='b-item-attribute b-item-attribute--size Size-']")[0].querySelectorAll('[class="t-checkout-attr-value"]')[0].textContent
            if (link.startsWith("https://www.solebox.com/" + country + "/cart"))
                try { link_product = document.querySelectorAll("[class=js-product-link]")[0].href } catch (error) {}
            else if (pidsize != "")
                link_product = "https://www.solebox.com/" + country + "/p/cava-" + pidsize + ".html"
            else {
                try {
                    x = html.querySelectorAll("script")
                    x.forEach(element => {
                        if (element.textContent.includes("analyticsData")) {
                            eval(element.textContent)
                        }
                    });
                    x = window.analyticsData.emarsysAnalytics
                    link_product = "https://www.solebox.com/" + country + "/p/cava-" + x["currentBasket"][0]["item"] + ".html"

                } catch (error) { errorWebhooks(error, "getting product link") }
            }

        } catch (error) {
            errorWebhooks(error, "getting product")
            sendText("Error getting product info", "red")
        }

        ShippingRates()

    } catch (error) {
        if (error != "TypeError: Cannot read property 'getAttribute' of undefined")
            errorWebhooks(error, "getting shipping")

        sendText("Error getting shipping info", "red")
    }

}

async function ShippingRates() {

    sendText("Getting shipping rates...", "blue")
    await fetch("https://www.solebox.com/on/demandware.store/Sites-solebox-Site/" + country + "/CheckoutShippingServices-ShippingRates?format=ajax", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://www.solebox.com/" + country + "/checkout?stage=shipping",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "selected=true&id=" + address_id + "&addressType=" + address_type + "&snipesStore=" + snipes_store + "&postOfficeNumber=" + post_office_number + "&packstationNumber=" + pack_station_number + "&postNumber=" + post_number + "&postalCode=" + postal_code + "&countryCode=" + country_code + "&suite=" + suite + "&street=" + street + "&city=" + city + "&address2=" + address2 + "&lastName=" + last_name + "&firstName=" + first_name + "&title=" + title + "&csrf_token=" + csrf_token,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResShippingRates(response) })
        .catch((error) => {
            sendText("Error getting shipping rates", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "ShippingRates fetch")
        });;
}

async function checkResShippingRates(response) {

    try {

        let status = response.status
        let res = await response.text()
        let x = res
        res = JSON.parse(res)

        if (status == 200 || status == 201) {
            sendText("Shipping rates", "green")
            SubmitShipping()
        } else {
            if (x.includes("\"appId\"")) {
                sendText("Error getting shipping rates, resolve captcha", "red")
                addButton()
                while (is_captcha_solved == false) {
                    await sleep(250)
                }
                is_captcha_solved = false
                ShippingRates()
            } else if (x == '{"errorMessage":"Too many requests"}') {
                sendText("Too many requests", "red")
            } else {
                resInfoWebook(x, "checkResShippingRates")
                sendText("Error getting shipping rates", "red")
                await sleep(1000)
                mainCart()
            }
        }

    } catch (error) {
        if (error != "SyntaxError: Unexpected end of JSON input")
            errorWebhooks(error + " | " + x, "trycheckResValidateShipping")

        sendText("Error validating address", "red")
        await sleep(1000)
        mainCart()
    }
}

async function SubmitShipping() {

    sendText("Submitting ship...", "blue")
    await fetch("https://www.solebox.com/on/demandware.store/Sites-solebox-Site/" + country + "/CheckoutShippingServices-SubmitShipping?region=europe&country=undefined&addressId=" + address_id + "&format=ajax", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://www.solebox.com/" + country + "/checkout?stage=shipping",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "originalShipmentUUID=" + originalShipmentUUID + "&shipmentUUID=" + shipmentUUID + "&dwfrm_shipping_shippingAddress_shippingMethodID=" + shippingMethodID + "&address-selector=" + address_selector + "&dwfrm_shipping_shippingAddress_addressFields_title=&dwfrm_shipping_shippingAddress_addressFields_firstName=&dwfrm_shipping_shippingAddress_addressFields_lastName=&dwfrm_shipping_shippingAddress_addressFields_postalCode=&dwfrm_shipping_shippingAddress_addressFields_city=&dwfrm_shipping_shippingAddress_addressFields_street=&dwfrm_shipping_shippingAddress_addressFields_suite=&dwfrm_shipping_shippingAddress_addressFields_address1=&dwfrm_shipping_shippingAddress_addressFields_address2=&dwfrm_shipping_shippingAddress_addressFields_phone=&dwfrm_shipping_shippingAddress_addressFields_countryCode=DE&serviceShippingMethod=ups-standard&dwfrm_shipping_shippingAddress_shippingAddressUseAsBillingAddress=true&dwfrm_billing_billingAddress_addressFields_title=" + title + "&dwfrm_billing_billingAddress_addressFields_firstName=" + first_name + "&dwfrm_billing_billingAddress_addressFields_lastName=" + last_name + "&dwfrm_billing_billingAddress_addressFields_postalCode=" + postal_code + "&dwfrm_billing_billingAddress_addressFields_city=" + city + "&dwfrm_billing_billingAddress_addressFields_street=" + street + "&dwfrm_billing_billingAddress_addressFields_suite=" + suite + "&dwfrm_billing_billingAddress_addressFields_address1=" + address1 + "%2C+137&dwfrm_billing_billingAddress_addressFields_address2=" + address2 + "&dwfrm_billing_billingAddress_addressFields_countryCode=" + country_code + "&dwfrm_billing_billingAddress_addressFields_phone=" + phone + "&dwfrm_contact_email=" + email + "&dwfrm_contact_phone=" + phone + "&csrf_token=" + csrf_token,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResSubmitShipping(response) })
        .catch((error) => {
            sendText("Error submitting shipping", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "SubmitShipping fetch")
        });;
}

async function checkResSubmitShipping(response) {

    try {

        let status = response.status
        let res = await response.text()
        let x = res
        res = JSON.parse(res)

        if (status == 200 || status == 201) {
            sendText("Submit shipping", "green")
            SubmitPayment()
        } else {
            if (x.includes("\"appId\"")) {
                sendText("Error submitting shipping, resolve captcha", "red")
                addButton()
                while (is_captcha_solved == false) {
                    await sleep(250)
                }
                is_captcha_solved = false
                SubmitShipping()
            } else if (x == '{"errorMessage":"Too many requests"}') {
                sendText("Too many requests", "red")
            } else {
                resInfoWebook(x, "checkResSubmitShipping")
                sendText("Error submitting shipping", "red")
                await sleep(1000)
                mainCart()
            }
        }

    } catch (error) {
        if (error != "SyntaxError: Unexpected end of JSON input")
            errorWebhooks(error + " | " + x, "trycheckResSubmitShipping")

        sendText("Error submitting shipping", "red")
        await sleep(1000)
        mainCart()
    }
}

async function SubmitPayment() {

    sendText("submittimg payment...", "blue")
    await fetch("https://www.solebox.com/on/demandware.store/Sites-solebox-Site/" + country + "/CheckoutServices-SubmitPayment?format=ajax", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://www.solebox.com/" + country + "/checkout?stage=payment",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "dwfrm_billing_paymentMethod=" + payment_mode + "&csrf_token=" + csrf_token,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResSubmitPayment(response) })
        .catch((error) => {
            sendText("Error submitting payment", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "SubmitPayment fetch")
        });;
}

async function checkResSubmitPayment(response) {

    try {

        let status = response.status
        let res = await response.text()
        let x = res
        res = JSON.parse(res)
        let error = res["error"]

        if (status == 200 || status == 201) {
            if (error == false) {
                sendText("Submit payment", "green")
                if (dummy == 1) {
                    await removeDummy()
                    dummy = 2
                } else {
                    PlaceOrder()
                }
            } else {
                if (x.includes("\"appId\"")) {
                    sendText("Error submitting payment, resolve captcha", "red")
                    addButton()
                    while (is_captcha_solved == false) {
                        await sleep(250)
                    }
                    is_captcha_solved = false
                    SubmitPayment()
                } else if (x == '{"errorMessage":"Too many requests"}') {
                    sendText("Too many requests", "red")
                } else if (res["redirectUrl"] == "/" + country + "/cart") {
                    sendText("Item out of stock", "red")
                } else {
                    resInfoWebook(x, "checkResSubmitPayment_1")
                    sendText("Error submitting payment", "red")
                    await sleep(1000)
                    mainCart()
                }
            }

        } else {
            if (x.includes("\"appId\"")) {
                sendText("Error submitting payment, resolve captcha", "red")
                addButton()
                while (is_captcha_solved == false) {
                    await sleep(250)
                }
                is_captcha_solved = false
                SubmitPayment()
            } else {
                resInfoWebook(x, "checkResSubmitPayment_2")
                sendText("Error submitting payment", "red")
                await sleep(1000)
                mainCart()
            }
        }

    } catch (error) {
        if (error != "SyntaxError: Unexpected end of JSON input")
            errorWebhooks(error + " | " + x, "trycheckResSubmitPayment")

        sendText("Error submitting payment", "red")
        await sleep(1000)
        mainCart()
    }
}

async function PlaceOrder() {

    sendText("placing order...", "blue")
    await fetch("https://www.solebox.com/on/demandware.store/Sites-solebox-Site/" + country + "/CheckoutServices-PlaceOrder?format=ajax", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\"Google Chrome\";v=\"87\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"87\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://www.solebox.com/" + country + "/checkout?stage=placeOrder",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResPlaceOrder(response) })
        .catch((error) => {
            sendText("Error placing order", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "PlaceOrder fetch")
        });;
}

async function checkResPlaceOrder(response) {

    try {

        let status = response.status
        let res = await response.text()
        let x = res
        res = JSON.parse(res)
        let error = res["error"]
        let linkpp = ""
        let errorMessage = ""

        if (status == 200 || status == 201) {
            if (error == false) {
                linkpp = res["continueUrl"]
                if (linkpp != null) {
                    sendText("Checked out", "green")
                    window.open(linkpp)
                    sendWebhooks(linkpp)
                } else {
                    errorMessage = res['errorMessage']
                    resInfoWebook(x, "checkResPlaceOrder_1")
                    if (errorMessage == "undefined" || errorMessage == undefined) {
                        await sleep(1000)
                        mainCart()
                    } else {
                        sendText(errorMessage, "red")
                        errorWebhooks(errorMessage, "checkResPlaceOrder_1")
                        await sleep(1000)
                        mainCart()
                    }
                }
            } else {
                errorMessage = res['errorMessage']
                resInfoWebook(x, "checkResPlaceOrder_2")
                if (res["redirectUrl"] == "/" + country + "/cart") {
                    sendText("Item out of stock", "red")
                } else
                if (errorMessage == "undefined" || errorMessage == undefined) {
                    await sleep(1000)
                    mainCart()
                } else {
                    sendText(errorMessage, "red")
                    errorWebhooks(errorMessage, "checkResPlaceOrder_2")
                    await sleep(1000)
                    mainCart()
                }
            }

        } else {
            if (x.includes("\"appId\"")) {
                sendText("Error placing order, resolve captcha", "red")
                addButton()
                while (is_captcha_solved == false) {
                    await sleep(250)
                }
                is_captcha_solved = false
                PlaceOrder()
            } else {
                resInfoWebook(x, "checkResPlaceOrder_3")
                sendText("Error placing order", "red")
                await sleep(1000)
                mainCart()
            }
        }

    } catch (error) {
        if (error != "SyntaxError: Unexpected end of JSON input")
            errorWebhooks(error + " | " + x, "trycheckResPlaceOrder")

        sendText("Error placing order", "red")
        await sleep(1000)
        mainCart()
    }
}

async function removeDummy() {
    fetch("https://www.solebox.com/on/demandware.store/Sites-solebox-Site/" + country + "/Cart-RemoveProductLineItem?format=ajax&pid=" + pidsize + "&uuid=" + uuid_dummy, {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://www.solebox.com/" + country + "/cart",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResRemoveDummy(response) })
        .catch((error) => {
            sendText("Error removing dummy", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "checkResRemoveDummy fetch")
        });;
}

async function checkResRemoveDummy(response) {

    try {

        let status = response.status
        let res = await response.text()
        let x = res
        res = JSON.parse(res)

        if (status == 200 || status == 201) {
            sendText("Dummy removed", "green")
            await sleep(500)
            sendText("Session ready", "green")
        } else {
            if (x.includes("\"appId\"")) {
                sendText("Error removing dummy..., resolve captcha", "red")
                addButton()
                while (is_captcha_solved == false) {
                    await sleep(250)
                }
                is_captcha_solved = false
                removeDummy()
            } else {
                resInfoWebook(x, "checkResRemoveDummy")
                sendText("Error removing dummy...", "red")
            }
        }

    } catch (error) {
        if (error != "SyntaxError: Unexpected end of JSON input")
            errorWebhooks(error + " | " + x, "trycheckResRemoveDummy")

        sendText("Error removing dummy...", "red")
    }
}

async function sendWebhooks(linkpp) {
    chrome.runtime.sendMessage({ greeting: "checkout_webhook&-&" + name_product + "&-&" + link_product + "&-&" + img_product + "&-&" + site + "&-&" + size_product + "&-&" + price_product + "&-&" + email + "&-&" + linkpp })
}

async function errorWebhooks(error, position) {
    chrome.runtime.sendMessage({ greeting: "error_webhook&-&" + site + "&-&" + error + "&-&" + position })
}

async function resInfoWebook(message, position) {
    chrome.runtime.sendMessage({ greeting: "info_webhook&-&" + site + "&-&" + message + "&-&" + position })
}

chrome.runtime.sendMessage({ greeting: "email_pw_solebox" }, function(response) {
    var x = response.farewell
    email_login = x.split(':')[0]
    pw_login = x.split(':')[1]
});

chrome.runtime.sendMessage({ greeting: "solebox" }, function(response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "solebox_login" }, function(response) {
    status_login = response.farewell
});

chrome.runtime.sendMessage({ greeting: "solebox_size" }, function(response) {
    if (response.farewell != "off")
        size_range = response.farewell
});

chrome.runtime.sendMessage({ greeting: "solebox_payment_mode" }, function(response) {
    if (response.farewell == "Credit Card")
        payment_mode = "CREDIT_CARD"
    else
        payment_mode = "Paypal"
});

chrome.runtime.sendMessage({ greeting: "solebox_checkout_mode" }, function(response) {
    checkout_mode = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        textBox()
        chrome.runtime.sendMessage({ greeting: "solebox" }, function(response) {
            if (response.farewell == 'on') {
                main();
            }
        });
        chrome.runtime.sendMessage({ greeting: "solebox_login" }, function(response) {
            if (response.farewell == 'on') {
                checkLogin();
            } else
                checkLoginOff()
        });
    }
});