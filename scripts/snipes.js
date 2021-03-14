const site = "Snipes"

const LINK_REQUEST = {
    "www.snipes.it": {
        "add_product": "https://www.snipes.it/on/demandware.store/Sites-snse-SOUTH-Site/it_IT/Cart-AddProduct?format=ajax",
        "select_ship": "https://www.snipes.it/on/demandware.store/Sites-snse-SOUTH-Site/it_IT/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "validate_ship": "https://www.snipes.it/on/demandware.store/Sites-snse-SOUTH-Site/it_IT/CheckoutAddressServices-Validate?format=ajax",
        "submit_ship": "https://www.snipes.it/on/demandware.store/Sites-snse-SOUTH-Site/it_IT/CheckoutShippingServices-SubmitShipping?format=ajax",
        "submit_payment": "https://www.snipes.it/on/demandware.store/Sites-snse-SOUTH-Site/it_IT/CheckoutServices-SubmitPayment?format=ajax",
        "submit_order": "https://www.snipes.it/on/demandware.store/Sites-snse-SOUTH-Site/it_IT/CheckoutServices-PlaceOrder?format=ajax",
        "remove_dummy": "https://www.snipes.it/on/demandware.store/Sites-snse-SOUTH-Site/it_IT/Cart-RemoveProductLineItem?format=ajax",
        "home_delivery": "_it"
    },
    "www.snipes.nl": {
        "add_product": "https://www.snipes.nl/on/demandware.store/Sites-snse-NL-BE-Site/nl_NL/Cart-AddProduct?format=ajax",
        "select_ship": "https://www.snipes.nl/on/demandware.store/Sites-snse-NL-BE-Site/nl_NL/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "validate_ship": "https://www.snipes.nl/on/demandware.store/Sites-snse-NL-BE-Site/nl_NL/CheckoutAddressServices-Validate?format=ajax",
        "submit_ship": "https://www.snipes.nl/on/demandware.store/Sites-snse-NL-BE-Site/nl_NL/CheckoutShippingServices-SubmitShipping?format=ajax",
        "submit_payment": "https://www.snipes.nl/on/demandware.store/Sites-snse-NL-BE-Site/nl_NL/CheckoutServices-SubmitPayment?format=ajax",
        "submit_order": "https://www.snipes.nl/on/demandware.store/Sites-snse-NL-BE-Site/nl_NL/CheckoutServices-PlaceOrder?format=ajax",
        "remove_dummy": "https://www.snipes.nl/on/demandware.store/Sites-snse-NL-BE-Site/nl_NL/Cart-RemoveProductLineItem?format=ajax",
        "home_delivery": "_nl"
    },
    "www.snipes.fr": {
        "add_product": "https://www.snipes.fr/on/demandware.store/Sites-snse-FR-Site/fr_FR/Cart-AddProduct?format=ajax",
        "select_ship": "https://www.snipes.fr/on/demandware.store/Sites-snse-FR-Site/fr_FR/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "validate_ship": "https://www.snipes.fr/on/demandware.store/Sites-snse-FR-Site/fr_FR/CheckoutAddressServices-Validate?format=ajax",
        "submit_ship": "https://www.snipes.fr/on/demandware.store/Sites-snse-FR-Site/fr_FR/CheckoutShippingServices-SubmitShipping?format=ajax",
        "submit_payment": "https://www.snipes.fr/on/demandware.store/Sites-snse-FR-Site/fr_FR/CheckoutServices-SubmitPayment?format=ajax",
        "submit_order": "https://www.snipes.fr/on/demandware.store/Sites-snse-FR-Site/fr_FR/CheckoutServices-PlaceOrder?format=ajax",
        "remove_dummy": "https://www.snipes.fr/on/demandware.store/Sites-snse-FR-Site/fr_FR/Cart-RemoveProductLineItem?format=ajax",
        "home_delivery": "_fr"
    },
    "www.snipes.com": {
        "add_product": "https://www.snipes.com/add-product?format=ajax",
        "select_ship": "https://www.snipes.com/on/demandware.store/Sites-snse-DE-AT-Site/de_DE/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "validate_ship": "https://www.snipes.com/on/demandware.store/Sites-snse-DE-AT-Site/de_DE/CheckoutAddressServices-Validate?format=ajax",
        "submit_ship": "https://www.snipes.com/on/demandware.store/Sites-snse-DE-AT-Site/de_DE/CheckoutShippingServices-SubmitShipping?format=ajax",
        "submit_payment": "https://www.snipes.com/on/demandware.store/Sites-snse-DE-AT-Site/de_DE/CheckoutServices-SubmitPayment?format=ajax",
        "submit_order": "https://www.snipes.com/on/demandware.store/Sites-snse-DE-AT-Site/de_DE/CheckoutServices-PlaceOrder?format=ajax",
        "remove_dummy": "https://www.snipes.com/on/demandware.store/Sites-snse-DE-AT-Site/de_DE/Cart-RemoveProductLineItem?format=ajax",
        "home_delivery": ""
    },
    "www.snipes.ch": {
        "add_product": "https://www.snipes.ch/on/demandware.store/Sites-snse-CH-Site/de_CH/Cart-AddProduct?format=ajax",
        "select_ship": "https://www.snipes.ch/on/demandware.store/Sites-snse-CH-Site/de_CH/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "validate_ship": "https://www.snipes.ch/on/demandware.store/Sites-snse-CH-Site/de_CH/CheckoutAddressServices-Validate?format=ajax",
        "submit_ship": "https://www.snipes.ch/on/demandware.store/Sites-snse-CH-Site/de_CH/CheckoutShippingServices-SubmitShipping?format=ajax",
        "submit_payment": "https://www.snipes.ch/on/demandware.store/Sites-snse-CH-Site/de_CH/CheckoutServices-SubmitPayment?format=ajax",
        "submit_order": "https://www.snipes.ch/on/demandware.store/Sites-snse-CH-Site/de_CH/CheckoutServices-PlaceOrder?format=ajax",
        "remove_dummy": "https://www.snipes.ch/on/demandware.store/Sites-snse-CH-Site/de_CH/Cart-RemoveProductLineItem?format=ajax",
        "home_delivery": "_ch"
    },
    "www.snipes.es": {
        "add_product": "https://www.snipes.es/on/demandware.store/Sites-snse-SOUTH-Site/es_ES/Cart-AddProduct?format=ajax",
        "select_ship": "https://www.snipes.es/on/demandware.store/Sites-snse-SOUTH-Site/es_ES/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "validate_ship": "https://www.snipes.es/on/demandware.store/Sites-snse-SOUTH-Site/es_ES/CheckoutAddressServices-Validate?format=ajax",
        "submit_ship": "https://www.snipes.es/on/demandware.store/Sites-snse-SOUTH-Site/es_ES/CheckoutShippingServices-SubmitShipping?format=ajax",
        "submit_payment": "https://www.snipes.es/on/demandware.store/Sites-snse-SOUTH-Site/es_ES/CheckoutServices-SubmitPayment?format=ajax",
        "submit_order": "https://www.snipes.es/on/demandware.store/Sites-snse-SOUTH-Site/es_ES/CheckoutServices-PlaceOrder?format=ajax",
        "remove_dummy": "https://www.snipes.es/on/demandware.store/Sites-snse-SOUTH-Site/es_ES/Cart-RemoveProductLineItem?format=ajax&",
        "home_delivery": "_es"
    },
    "www.snipes.be": {
        "add_product": "https://www.snipes.be/on/demandware.store/Sites-snse-NL-BE-Site/nl_BE/Cart-AddProduct?format=ajax",
        "select_ship": "https://www.snipes.be/on/demandware.store/Sites-snse-NL-BE-Site/nl_BE/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "validate_ship": "https://www.snipes.be/on/demandware.store/Sites-snse-NL-BE-Site/nl_BE/CheckoutAddressServices-Validate?format=ajax",
        "submit_ship": "https://www.snipes.be/on/demandware.store/Sites-snse-NL-BE-Site/nl_BE/CheckoutShippingServices-SubmitShipping?format=ajax",
        "submit_payment": "https://www.snipes.be/on/demandware.store/Sites-snse-NL-BE-Site/nl_BE/CheckoutServices-SubmitPayment?format=ajax",
        "submit_order": "https://www.snipes.be/on/demandware.store/Sites-snse-NL-BE-Site/nl_BE/CheckoutServices-PlaceOrder?format=ajax",
        "remove_dummy": "https://www.snipes.be/on/demandware.store/Sites-snse-NL-BE-Site/nl_BE/Cart-RemoveProductLineItem?format=ajax&",
        "home_delivery": "_be"
    },
    "www.snipes.at": {
        "add_product": "https://www.snipes.at/add-product?format=ajax",
        "select_ship": "https://www.snipes.at/on/demandware.store/Sites-snse-DE-AT-Site/de_AT/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "validate_ship": "https://www.snipes.at/on/demandware.store/Sites-snse-DE-AT-Site/de_AT/CheckoutAddressServices-Validate?format=ajax",
        "submit_ship": "https://www.snipes.at/on/demandware.store/Sites-snse-DE-AT-Site/de_AT/CheckoutShippingServices-SubmitShipping?format=ajax",
        "submit_payment": "https://www.snipes.at/on/demandware.store/Sites-snse-DE-AT-Site/de_AT/CheckoutServices-SubmitPayment?format=ajax",
        "submit_order": "https://www.snipes.at/on/demandware.store/Sites-snse-DE-AT-Site/de_AT/CheckoutServices-PlaceOrder?format=ajax",
        "remove_dummy": "https://www.snipes.at/on/demandware.store/Sites-snse-DE-AT-Site/de_AT/Cart-RemoveProductLineItem?format=ajax&",
        "home_delivery": "_at"
    }

}

let size_range = "random"
let checkout_mode = ""

let link = document.location.href
let country = link.split("/")[2]

let email_login = "";
let pw_login = "";

let status_login = "";
let status_aco = "";
let country_snipes = "";

let is_login = false
let is_cart = false
let is_captcha_solved = false

let img_product = "";
let name_product = "";
let price_product = "";
let size_product = ""
let link_product = link;

var pidsize = "";
var pid = "";
var size = "";

let dummy = 0
let uuid_dummy = ""

let html = document.createElement('html')
let address_id = "";
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
let postal_code = ""
let originalShipmentUUID = "";
let shipmentUUID = "";
let address_selector = "";
let email = "";
let phone = "";
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
        let btn1 = document.getElementsByClassName("b-header-sticky js-header-sticky js-header-search")[0]
        btn1.insertAdjacentHTML("beforebegin", '<div id="CavaScripts" style="font-family: Verdana, Geneva, word-wrap: break-word; sans-serif; position: fixed; right:0; top: 350px; z-index: 1000; min-width: 10px; max-width: 500px; background-color: lightgrey; padding: 5px 10px; color: black; border-radius: 10px;">' +
            ' <p id="statusSnipes">Status snipes</p> ' +
            '<label>Sizepid Dummy: </label> <br> <input style="color:black; width:250px" type="text" id="input_sizepid_dummy" placeholder="es: 0001380189826700000008"> <br>' +
            '<input style="text-align: center; color:white; background-color:black; width:100%; margin-right:10px;" id="btn_dummy" type="submit" value="START DUMMY"> <br><br>' +
            '<label>Sizepid  or  Load Link: </label> <br> <input style="color:black; width:250px" type="text" id="input_sizepid" placeholder="es: 0001380189826700000008"> <br>' +
            '<input style="text-align: center; color:white; background-color:black; width:100%; margin-right:10px;" id="btn_start" type="submit" value="START TASK"> <br><br>' +
            '<input style="text-align: center; color:white; background-color:black; width:100%; margin-right:10px;" id="btn_start_checkout" type="submit" value="START CHECKOUT"> <br>' +
            " <p>ACO: <span style='font-size:20px; color:" + color_aco + ";'>" + status_aco + "</span> LOGIN: <span style='font-size:20px; color:" + color_login + ";' >" + status_login + "</span></p></div>");

        let btn_start = document.getElementById('btn_start')
        btn_start.addEventListener("click", function() {
            try {

                let input = document.getElementById("input_sizepid").value
                if (!isNumeric(input)) {
                    input = input.replace(/\D/g, '-');
                    input = input.split('-')
                    input.forEach(element => {
                        if (element.length == 22)
                            input = element
                    });
                }
                if (isNumeric(input)) {
                    pidsize = document.getElementById("input_sizepid").value
                    link_product = "https://" + country + "/p/cava-" + pidsize + ".html?"
                    atcRfast()
                } else
                    sendText("Input error", "red")

            } catch (error) {}
        });

        let btn_start_checkout = document.getElementById('btn_start_checkout')
        btn_start_checkout.addEventListener("click", function() {
            mainCart()
        });

        let btn_dummy = document.getElementById('btn_dummy')
        btn_dummy.addEventListener("click", function() {
            pidsize = document.getElementById("input_sizepid_dummy").value
            dummy = 1
            atcRfast()
        });

    } catch (error) {
        if (error != "TypeError: Cannot read property 'parentNode' of undefined" && error != "TypeError: Cannot read property 'insertAdjacentHTML' of undefined")
            errorWebhooks(error, "textBox")
    }
}

async function addButton() {
    try {

        if (document.getElementById('btn_solver') == null) {

            let btn1 = document.getElementById("CavaScripts")
            btn1.insertAdjacentHTML("beforeend", '<br><input style="color:black; width:100%" id="btn_solver" type="submit" value="Open Solver"> ' +
                '<br><input style="color:black; width:100%" id="btn_solved" type="submit" value="Solved"> ');

            let btn_solver = document.getElementById('btn_solver')
            btn_solver.addEventListener("click", function() {
                let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=500,height=500,left=-1000,top=-1000`;
                window.open('https://' + country + '/view-account', 'test', params)
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
    try { document.getElementById("statusSnipes").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) {}
}


async function main() {
    if (link.startsWith("https://" + country + "/p")) {
        mainAtc()
    } else if (link.startsWith("https://" + country + "/cart")) {
        mainCart()
    } else if (link == LINK_REQUEST[country]["add_product"]) {
        try {
            resAtc = document.querySelector("body").textContent
            resAtc = JSON.parse(resAtc)
            if (resAtc["error"] == false) {
                document.location = "https://" + country + "/cart"
            }
        } catch (error) {}
    }
}


function changeCountry() {
    try {
        let url_product = link.split(country)
        if (country_snipes != 'off' && country.split('.')[2] != country_snipes) {
            location.replace('https://www.snipes.' + country_snipes + "" + url_product[1])
        }
    } catch (error) {
        errorWebhooks(error, "changeCountry")
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
        } else { is_login = true }

    } catch (error) {
        if (error != "ReferenceError: dataLayer is not defined")
            errorWebhooks(error, "checkLogin")
        sendText("Error checking login", "red")
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
        if (error != "ReferenceError: dataLayer is not defined")
            errorWebhooks(error, "checkLogin")

        sendText("Error checking login", "red")
    }
}

async function login() {
    try {
        let html_login = document.createElement('html')
        if (link != "https://" + country + "/login") {

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
        if (error != "TypeError: span.getAttribute is not a function" && error != "ReferenceError: res is not defined")
            errorWebhooks(error, "login")

        sendText("Error logging in", "red")
    }
}

async function loginR(data_id, data_value, csrf_token) {

    await fetch("https://" + country + "/authentication?rurl=1&format=ajax", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://" + country + "/login",
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

    await fetch("https://" + country + "/login", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            "referrer": "https://" + country + "/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { res = checkResgetLogin(response) })
        .catch((error) => {
            sendText("Error getting login", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "getLogin")
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

    if (checkout_mode != "OnlyCheckout") {

        try {
            csrf_token = document.getElementsByName('csrf_token')[0].value
            let input = link
            if (!isNumeric(input)) {
                input = input.replace(/\D/g, '-');
                input = input.split('-')
                input.forEach(element => {
                    if (element.length == 22)
                        input = element

                    if (element.length == 14)
                        input = element
                });
            }

            if (input.length == 14) {
                pid = input
                atc()
            } else if (input.length == 22) {
                pidsize = input
                atcRfast()
            }
        } catch (error) {
            if (error != "TypeError: Cannot read property 'value' of undefined")
                errorWebhooks(error, "main")

            sendText("Error loading page", "red")
        }

    }
}

async function atc() {

    try {
        if (size_range == "random") {
            let btn_1 = document.getElementsByClassName('f-pdp-button f-pdp-button--active js-btn-add-to-cart')[0]
            if (btn_1 != undefined && btn_1.getAttribute('data-pid').length > 14) {
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
        if (error != "SyntaxError: Unexpected end of JSON input" || error != "TypeError: Cannot read property 'click' of undefined" || error != "TypeError: Cannot read property 'getAttribute' of undefined" || error != "TypeError: Cannot read property 'value' of undefined") {
            sendText("Item out of stock", "red")
        } else {
            sendText("Error selecting size", "red")
            errorWebhooks(error, "atc")
        }
    }
}

async function getSizePid(size_r) {

    let type = "212"
    if (!hasNumber(size_r))
        type = "5903"
    if (size_r.includes('-'))
        type = "9360"

    await fetch("https://" + country + "/p/" + pid + ".html?chosen=size&dwvar_" + pid + "_" + type + "=" + size_r + "&format=ajax", {
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
            sendText("Error getting size", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "getSizePid")
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
    await fetch(LINK_REQUEST[country]["add_product"], {
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
        let errorType = res["errorType"]
        let errorMessage = res["errorMessage"]

        if (status == 200 || status == 201) {
            if (error == false) {
                sendText("Carted", "green")
                if (dummy == 2) {
                    name_product = res["gtm"]["name"]
                    size_product = res["gtm"]["variant"]
                    price_product = res["gtm"]["price"] + '€'
                    img_product = ""
                    PlaceOrder()
                } else {
                    if (dummy == 1)
                        uuid_dummy = res["pliUUID"]
                    mainCart()
                }
            } else {
                if (message == "La talla seleccionada ya no está disponible" || message == "Siamo spiacenti, la taglia selezionata non è più disponibile" || message.includes('Die gewünschte Menge') || message == 'De geselecteerde maat is helaas niet meer beschikbaar' || message == "La taille sélectionnée nest malheureusement plus disponible.") {
                    sendText("Item out of stock", "red")
                } else if (errorType == "productLimitation") {
                    sendText("Max quantity for this item", "red")
                } else if (message == "Siamo spiacenti, l'articolo non può essere aggiunto al carrello") {
                    sendText("Item cannot be added to the cart", "red")
                } else if (message == "undefined") {
                    sendText("Error carting, open solver", "red")
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

            } else if (errorMessage != undefined && errorMessage != "undefined") {
                if (errorMessage.includes("non siamo riusciti a salvare l'indirizzo di fatturazione")) {
                    sendText("Error saving billing info", "red")
                } else if (errorMessage == "Too many requests") {
                    sendText("Too many requests", "red")
                } else {
                    sendText(errorMessage, "red")
                    errorWebhooks(errorMessage, "checkRes")
                }

            } else { sendText("Error carting", "red") }
        }

    } catch (error) {
        if (error != "SyntaxError: Unexpected end of JSON input")
            errorWebhooks(error, "trycheckRes")

        sendText("Error carting", "red")
    }
}


async function mainCart() {

    if (checkout_mode != "OnlyAtc") {

        while (is_login == false) {
            await sleep(250)
        }

        if (link.startsWith("https://" + country + "/cart")) {
            try {
                if (document.getElementsByClassName('t-error')[0] == undefined && document.getElementsByClassName("t-cart-price-value")[0].textContent.replaceAll("\n", '').replaceAll(" ", '') != "0,00€" && document.getElementsByClassName("t-cart-price-value")[0].textContent.replaceAll("\n", '').replaceAll(" ", '') != "") {
                    getCheckout()
                } else if (document.getElementsByClassName('t-error')[0] != undefined) {
                    sendText("Item not available", "red")
                } else if (document.getElementsByClassName("t-cart-price-value")[0].textContent.replaceAll("\n", '').replaceAll(" ", '') == "0,00€" || document.getElementsByClassName("t-cart-price-value")[0].textContent.replaceAll("\n", '').replaceAll(" ", '') == "") {
                    sendText("Item not found", "red")
                } else { sendText("Item out of stock", "red") }

            } catch (error) {
                if (error != "TypeError: Cannot read property 'textContent' of undefined")
                    errorWebhooks(error, "mainCart_1")
            }
        } else {
            try {
                getCheckout()
            } catch (error) { errorWebhooks(error, "mainCart_2") }
        }

    } else {
        document.location = "https://" + country + "/checkout"
    }
}

async function getCheckout() {

    await fetch("https://" + country + "/checkout", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            "referrer": link,
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

    if (response.url == "https://" + country + "/cart" || response.url.includes("/cart")) {
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

        try { email = html.querySelector('[aria-label="Email"]').getAttribute('value') } catch (error) { email = html.querySelector('[inputmode="email"]').getAttribute('value') }
        try { phone = html.querySelector('[aria-label="Phone"').getAttribute('value') } catch (error) {}

        csrf_token = html.querySelector('[data-csrf-name="csrf_token"]').getAttribute('data-csrf-token')

        sendText("Getting shipping info", "green")
        try {
            img_product = html.getElementsByClassName("b-item-image-wrapper")[0].querySelectorAll("img")[0].getAttribute('data-src')
            price_product = html.querySelectorAll("[class='b-checkout-price-row-total']")[0].querySelectorAll('[class="t-checkout-price-value"]')[0].textContent.replaceAll("\n", "")
            name_product = html.querySelectorAll("[class='t-product-main-name']")[0].textContent.replaceAll("\n", "")
            size_product = html.querySelectorAll("[class='t-checkout-attr-value']")[0].textContent
            if (!link.startsWith("https://" + country + "/p"))
                try { link_product = document.querySelectorAll("[class=js-product-link]")[0].href } catch (error) {}
            else
                link_product = "https://" + country + "/p/cava-" + pidsize + ".html"
        } catch (error) {
            sendText("Error getting product info", "red")
            errorWebhooks(error, "getting product")
        }


        if (dummy == 1)
            checkout_mode = "Safe"


        switch (checkout_mode) {
            case "Safe":
                SelectShippingMethod()
                break
            case "Normal":
                ValidateShipping()
                break
            case "Fast":
                SubmitShipping()
                break
            case "UltraFast":
                SubmitPayment()
                break
            default:
                ValidateShipping()
                break
        }

    } catch (error) {
        if (error != "TypeError: Cannot read property 'getAttribute' of undefined")
            errorWebhooks(error, "getting shipping")

        sendText("Error getting shipping info", "red")
    }

}

async function SelectShippingMethod() {

    sendText("Selecting shipping method...", "blue")
    await fetch(LINK_REQUEST[country]["select_ship"], {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://" + country + "/checkout?",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "methodID=home-delivery" + LINK_REQUEST[country]["home_delivery"] + "&shipmentUUID=" + shipmentUUID,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResSelectShippingMethod(response) })
        .catch((error) => {
            sendText("Error selecting shipping method", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "SelectShippingMethod fetch")
        });;
}

async function checkResSelectShippingMethod(response) {

    try {

        let status = response.status
        let res = await response.text()
        res = JSON.parse(res)

        if (status == 200 || status == 201) {
            sendText("Selected shipping method", "green")
            ValidateShipping()
        } else {
            if (x.includes("\"appId\"")) {
                sendText("Error selecting shipping method..., resolve captcha", "red")
                addButton()
                while (is_captcha_solved == false) {
                    await sleep(250)
                }
                is_captcha_solved = false
                SelectShippingMethod()
            } else {
                resInfoWebook(x, "checkResValidateShipping")
                sendText("Error selecting shipping method..., restarting...", "red")
                await sleep(1000)
                mainCart()
            }
        }

    } catch (error) {
        if (error != "SyntaxError: Unexpected end of JSON input")
            errorWebhooks(error, "trycheckResValidateShipping")

        sendText("Error selecting shipping method...", "red")
        await sleep(1000)
        mainCart()
    }
}

async function ValidateShipping() {

    sendText("Validating address...", "blue")
    await fetch(LINK_REQUEST[country]["validate_ship"], {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://" + country + "/checkout?stage=shipping",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "street=" + street + "&houseNo=" + suite + "&postalCode=" + postal_code + "&city=" + city + "&country=" + country_code + "&csrf_token=" + csrf_token,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResValidateShipping(response) })
        .catch((error) => {
            sendText("Error validating shipping", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "ValidateShipping fetch")
        });;
}

async function checkResValidateShipping(response) {

    try {

        let status = response.status
        let res = await response.text()
        res = JSON.parse(res)

        if (status == 200 || status == 201) {
            sendText("Validating address", "green")
            SubmitShipping()
        } else {
            if (x.includes("\"appId\"")) {
                sendText("Error validating address, resolve captcha", "red")
                addButton()
                while (is_captcha_solved == false) {
                    await sleep(250)
                }
                is_captcha_solved = false
                ValidateShipping()
            } else {
                resInfoWebook(x, "checkResValidateShipping")
                sendText("Error validating address, restarting...", "red")
                await sleep(1000)
                mainCart()
            }
        }

    } catch (error) {
        if (error != "SyntaxError: Unexpected end of JSON input")
            errorWebhooks(error, "trycheckResValidateShipping")

        sendText("Error validating address", "red")
        await sleep(1000)
        mainCart()
    }
}

async function SubmitShipping() {

    sendText("Submitting ship...", "blue")
    await fetch(LINK_REQUEST[country]["submit_ship"], {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://" + country + "/checkout?stage=shipping",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "originalShipmentUUID=" + originalShipmentUUID + "&shipmentUUID=" + shipmentUUID + "&dwfrm_shipping_shippingAddress_shippingMethodID=" + shippingMethodID + "&address-selector=" + address_selector + "&dwfrm_shipping_shippingAddress_addressFields_title=" + title + "&dwfrm_shipping_shippingAddress_addressFields_firstName=" + first_name + "&dwfrm_shipping_shippingAddress_addressFields_lastName=" + last_name + "&dwfrm_shipping_shippingAddress_addressFields_postalCode=" + postal_code + "&dwfrm_shipping_shippingAddress_addressFields_city=" + city + "&dwfrm_shipping_shippingAddress_addressFields_street=" + street + "&dwfrm_shipping_shippingAddress_addressFields_suite=" + suite + "&dwfrm_shipping_shippingAddress_addressFields_address1=" + address1 + "&dwfrm_shipping_shippingAddress_addressFields_address2=" + address2 + "&dwfrm_shipping_shippingAddress_addressFields_phone=" + phone + "&dwfrm_shipping_shippingAddress_addressFields_countryCode=" + country_code + "&dwfrm_shipping_shippingAddress_shippingAddressUseAsBillingAddress=true&dwfrm_billing_billingAddress_addressFields_title=" + title + "&dwfrm_billing_billingAddress_addressFields_firstName=" + first_name + "&dwfrm_billing_billingAddress_addressFields_lastName=" + last_name + "&dwfrm_billing_billingAddress_addressFields_postalCode=" + postal_code + "&dwfrm_billing_billingAddress_addressFields_city=" + city + "&dwfrm_billing_billingAddress_addressFields_street=" + street + "&dwfrm_billing_billingAddress_addressFields_suite=" + suite + "&dwfrm_billing_billingAddress_addressFields_address1=" + address1 + "&dwfrm_billing_billingAddress_addressFields_address2=" + address2 + "&dwfrm_billing_billingAddress_addressFields_countryCode=" + country_code + "&dwfrm_billing_billingAddress_addressFields_phone=&dwfrm_contact_email=" + email + "&dwfrm_contact_phone=" + phone + "&csrf_token=" + csrf_token,
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
                sendText("Error submitting shipping, open solver", "red")
                addButton()
                while (is_captcha_solved == false) {
                    await sleep(250)
                }
                is_captcha_solved = false
                SubmitShipping()

            } else {
                resInfoWebook(x, "checkResSubmitShipping")
                sendText("Error submitting shipping, restarting...", "red")
                await sleep(1000)
                mainCart()
            }
        }

    } catch (error) {
        if (error != "SyntaxError: Unexpected end of JSON input")
            errorWebhooks(error, "trycheckResSubmitShipping")

        sendText("Error submitting shipping", "red")
        await sleep(1000)
        mainCart()
    }
}

async function SubmitPayment() {

    sendText("Submittin payment...", "blue")
    await fetch(LINK_REQUEST[country]["submit_payment"], {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://" + country + "/checkout?stage=payment",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "dwfrm_billing_paymentMethod=Paypal&dwfrm_giftCard_cardNumber=&dwfrm_giftCard_pin=&csrf_token=" + csrf_token + "&csrf_token=" + csrf_token,
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
            errorWebhooks(error, "trycheckResSubmitPayment")

        sendText("Error submitting payment", "red")
        await sleep(1000)
        mainCart()
    }
}

async function PlaceOrder() {

    sendText("Placing order...", "blue")
    await fetch(LINK_REQUEST[country]["submit_order"], {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://" + country + "/checkout?stage=placeOrder",
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
        let errorMessage = res['errorMessage']

        if (status == 200 || status == 201) {
            if (error == false) {
                linkpp = res["continueUrl"]
                if (linkpp != null) {
                    sendText("Checked out", "green")
                    window.open(linkpp)
                    sendWebhooks(linkpp)
                } else {
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
                if (res["redirectUrl"] == "/cart") {
                    sendText("Item out of stock", "red")
                } else if (errorMessage == "undefined" || errorMessage == undefined) {
                    await sleep(1000)
                    mainCart()
                } else if (errorMessage == "Qualcosa è andato storto e non siamo riusciti a salvare l'indirizzo di fatturazione. Inserisci il tuo indirizzo di fatturazione ancora una volta. Se il problema persiste, ti invitiamo a contattare il servizio clienti." || errorMessage == "Algo ha salido mal y no hemos podido guardar la dirección de facturación. Por favor, vuelve a introducirla. Si el problema persiste, ponte en contacto con nuestro servicio de atención al cliente.") {
                    sendText("Error confirm billing address", "red")
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
            errorWebhooks(error, "trycheckResPlaceOrder")

        sendText("Error placing order", "red")
        await sleep(1000)
        mainCart()
    }
}

async function removeDummy() {
    fetch(LINK_REQUEST[country]["remove_dummy"] + "&pid=" + pidsize + "&uuid=" + uuid_dummy, {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/json",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://" + country + "/cart",
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
            errorWebhooks(error, "trycheckResRemoveDummy")

        sendText("Error removing dummy...", "red")
    }
}

async function sendWebhooks(linkpp) {
    chrome.runtime.sendMessage({ greeting: "checkout_webhook&-&" + name_product + "&-&" + link_product + "&-&" + img_product + "&-&" + site + "&-&" + size_product + "&-&" + price_product + "&-&" + linkpp + "&-&" + email })
}

async function errorWebhooks(error, position) {
    chrome.runtime.sendMessage({ greeting: "error_webhook&-&" + site + "&-&" + error + "&-&" + position })
}

async function resInfoWebook(message, position) {
    chrome.runtime.sendMessage({ greeting: "info_webhook&-&" + site + "&-&" + message + "&-&" + position })
}

chrome.runtime.sendMessage({ greeting: "country_snipes" }, function(response) {
    country_snipes = response.farewell
});

chrome.runtime.sendMessage({ greeting: "email_pw_snipes" }, function(response) {
    var x = response.farewell
    email_login = x.split(':')[0]
    pw_login = x.split(':')[1]
});

chrome.runtime.sendMessage({ greeting: "snipes" }, function(response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "snipes_login" }, function(response) {
    status_login = response.farewell
});

chrome.runtime.sendMessage({ greeting: "snipes_size" }, function(response) {
    if (response.farewell != "off")
        size_range = response.farewell
});

chrome.runtime.sendMessage({ greeting: "snipes_checkout_mode" }, function(response) {
    checkout_mode = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        textBox()
        changeCountry()
        chrome.runtime.sendMessage({ greeting: "snipes" }, function(response) {
            if (response.farewell == 'on') {
                main()
            }
        });
        chrome.runtime.sendMessage({ greeting: "snipes_login" }, function(response) {
            if (response.farewell == 'on') {
                checkLogin()
            } else
                checkLoginOff()
        });
    }
});