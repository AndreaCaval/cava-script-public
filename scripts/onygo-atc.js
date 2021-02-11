debugger

let url_personal = "";
let version = "";
let discord_name = ""
let url_private = "https://discordapp.com/api/webhooks/797771933864296459/U6h1oQVBBSRmRUPV0RJYacRot5fV_PbMRw5KdkyGUzYgvRJa86y4HWHl3VK4cforLDX9"
let url_public = "https://discordapp.com/api/webhooks/726168318255562832/LWhhWJaYYwPLTjC8doiG9iravKqI4V2Phv0D_1-2CZDu82FxvJeLmtukA83FMrSpJmWh"
let url_error = "https://discordapp.com/api/webhooks/797771572240187392/LjgL9QhCvmByjlPbAtHF2fxEVFTS6J8sv4LG2Nw0zpI2qzgyyKL03wJqhVeobyFeDzLA"

let ck_time = 0;
let ck_start = 0;
let img_product = "";
let price_product = "";
let name_product = "";
let size_product = ""

let count_checkResAtc = 0;
let count_checkResValidateShip = 0;
let count_checkResSubmitShipping = 0;
let count_checkResSubmitPayment = 0

let linkk = document.location.href
let pidsize = "";
let pid = "";
let size = "";
let html = document.createElement('html');
let cart = false
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
var emaill = "";
let phone = "";
let shippingMethodID = ""
let csrf_token = "";

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
    try { document.getElementById("statusOnygo").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) {}
}

async function addButton() {
    try {

        if (document.getElementById('btn_solver') == null) {

            let btn1 = document.getElementById("CavaScripts")
            btn1.insertAdjacentHTML("beforeend", '<br><input style="color:black; width:100%" id="btn_solver" type="submit" value="Open Solver"> ');

            let btn_solver = document.getElementById('btn_solver')
            btn_solver.addEventListener("click", function() {
                let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=500,height=500,left=-1000,top=-1000`;
                window.open('https://www.onygo.com/cart', 'test', params)
            });
        }
    } catch (error) {}
}

async function main() {
    try {
        ck_start = performance.now()
        csrf_token = document.getElementsByName('csrf_token')[0].value
        pidd = linkk.split('-')
        pidd = pidd[pidd.length - 1].substring(0, 22)
        if (pidd.includes("html")) {
            pid = pidd.substring(0, 14)
            atc()
        } else {
            pidsize = pidd.substring(0, 22)
            atcRfast()
        }
    } catch (error) {
        if (error != "TypeError: Cannot read property 'value' of undefined")
            errorWebhook(error, "main")
    }
}

async function atc() {

    try {
        let btn_1 = document.getElementsByClassName('f-pdp-button f-pdp-button--active js-btn-add-to-cart')[0]
        if (btn_1 != undefined && btn_1.getAttribute('data-pid').length > 14) {
            pidsize = btn_1.getAttribute('data-pid')
            atcRfast()
        } else {
            var sizes = document.getElementsByClassName('js-pdp-attribute-tile b-size-value js-size-value b-swatch-circle b-swatch-value b-swatch-value--selectable b-swatch-value--orderable')
            var n = getRandomIntInclusive(0, sizes.length - 1)
            sizes[n].click()
            await sleep(1500)
            let btn_2 = document.getElementsByClassName('f-pdp-button f-pdp-button--active js-btn-add-to-cart')[0]
            pid = btn_2.getAttribute('data-pid')
            size = btn_2.getAttribute('data-variables')
            size = size.substring(1, size.length - 1)
            j = JSON.parse(size)
            size = j['selectedValueId']
            atcR()
        }
    } catch (error) {
        if (error == "SyntaxError: Unexpected end of JSON input" || error == "TypeError: Cannot read property 'click' of undefined" || error == "TypeError: Cannot read property 'getAttribute' of undefined" || error == "TypeError: Cannot read property 'value' of undefined") {
            console.log(error)
            sendText("Item out of stock", "red")
        } else {
            errorWebhook(error, "atc")
        }
    }
}

async function atcR() {

    sendText("Trying atc...", "blue")
    await fetch("https://www.onygo.com/add-product?format=ajax", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": linkk,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "pid=" + pid + "&options=%5B%7B%22optionId%22%3A%22212%22%2C%22selectedValueId%22%3A%22" + size + "%22%7D%5D&quantity=1",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResAtc(response, 'atcR') })
        .catch((error) => { console.log(error) });;
}

async function atcRfast() {

    sendText("Trying atc fast...", "blue")
    await fetch("https://www.onygo.com/add-product?format=ajax", {
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
        .then(response => { checkResAtc(response, 'atcRfast') })
        .catch((error) => { console.log(error) });;
}

async function checkResAtc(response, atc) {

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
                main2()
            } else {
                console.log(res)
                if (message == "The selected item is not available any more." || message == "Der gewünschte Artikel ist leider nicht mehr verfügbar.") {
                    sendText("Item out of stock", "red")
                } else {
                    resInfoWebook(x, "checkResAtc")
                    sendText("Error carting, open solver", "red")
                    addButton()
                    await sleep(7000)
                    if (count_checkResAtc == 0) {
                        count_checkResAtc++
                        if (atc == 'atcR') {
                            atcR()
                        } else {
                            atcRfast()
                        }

                    } else {
                        location.reload()
                    }
                }
            }
        } else {
            resInfoWebook(x, "checkResAtc")
            if (errorMessage == "Too many requests") {
                sendText("Too many requests", "red")
            } else if (errorMessage != "undefined" && errorMessage != undefined) {
                sendText(errorMessage, "red")
                errorWebhook(errorMessage, "checkRes")
            } else { sendText("Error carting", "red") }
        }

    } catch (error) {
        if (error != "SyntaxError: Unexpected end of JSON input")
            errorWebhook(error, "trycheckRes")

        sendText("Error carting", "red")
    }
}

async function main2() {
    try {
        await getCheckout()
        await ress.then(function(result) {
            html.innerHTML = result
        })
        if (cart == false) {
            gettingShipping()
        } else { sendText("Item out of stock/ Item not available", "red") }
    } catch (error) { errorWebhook(error, "main2 all") }
}

async function getCheckout() {

    await fetch("https://www.onygo.com/checkout", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
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
        .then(response => {
            ress = response.text()
            if (response.url == "https://www.onygo.com/cart")
                cart = true
        })
        .catch((error) => { errorWebhook(error, "getCheckout fetch") });;
}

async function gettingShipping() {

    sendText("Getting shipping info...", "blue")
    try {
        var rdbtn = html.querySelectorAll("[class='js-shipment f-native-radio-input']")[0]
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

        try { emaill = html.querySelector('[aria-label="Email"]').getAttribute('value') } catch (error) { emaill = html.querySelector('[inputmode="email"]').getAttribute('value') }
        try { phone = html.querySelector('[aria-label="Phone"').getAttribute('value') } catch (error) {}

        csrf_token = html.querySelector('[data-csrf-name="csrf_token"]').getAttribute('data-csrf-token')

        sendText("Getting shipping info", "green")
        try {
            img_product = html.getElementsByClassName("b-item-image-wrapper")[0].querySelectorAll("img")[0].getAttribute('data-src')
            price_product = html.querySelectorAll("[class='b-checkout-price-row-total']")[0].querySelectorAll('[class="t-checkout-price-value"]')[0].textContent.replaceAll("\n", "")
            name_product = html.querySelectorAll("[class='t-product-main-name']")[0].textContent.replaceAll("\n", "")
            size_product = html.querySelectorAll("[class='t-checkout-attr-value']")[0].textContent
        } catch (error) {
            sendText("Error getting product info", "red")
            errorWebhook(error, "getting product")
        }

        SubmitShipping()

    } catch (error) {
        if (error != "TypeError: Cannot read property 'getAttribute' of undefined")
            errorWebhook(error, "getting shipping")

        sendText("Error getting shipping info", "red")
    }

}

async function ValidateShipping() {

    sendText("Validating address...", "blue")
    await fetch("https://www.onygo.com/on/demandware.store/Sites-ong-DE-Site/de_DE/CheckoutAddressServices-Validate?format=ajax", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://www.onygo.com/checkout?stage=shipping",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "street=" + street + "&houseNo=" + suite + "&postalCode=" + postal_code + "&city=" + city + "&country=" + country_code + "&csrf_token=" + csrf_token,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResValidateShipping(response) })
        .catch((error) => { errorWebhook(error, "ValidateShipping fetch") });;
}

async function checkResValidateShipping(response) {

    try {

        let status = response.status
        let res = await response.text()
        let x = res
        res = JSON.parse(res)

        if (status == 200 || status == 201) {
            sendText("Validating address", "green")
            SubmitShipping()
        } else {
            resInfoWebook(x, "checkResValidateShipping")
            sendText("Error validating address, open solver", "red")
            addButton()
            await sleep(7000)
            if (count_checkResValidateShipping == 0) {
                count_checkResValidateShipping++
                ValidateShipping()
            } else {
                main2()
            }
        }

    } catch (error) {
        if (error != "SyntaxError: Unexpected end of JSON input")
            errorWebhook(error, "trycheckResValidateShipping")

        sendText("Error validating address", "red")
        main2()
    }
}

async function SubmitShipping() {

    sendText("Submitting ship...", "blue")
    await fetch("https://www.onygo.com/on/demandware.store/Sites-ong-DE-Site/de_DE/CheckoutShippingServices-SubmitShipping?format=ajax", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://www.onygo.com/checkout?stage=shipping",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "originalShipmentUUID=" + originalShipmentUUID + "&shipmentUUID=" + shipmentUUID + "&dwfrm_shipping_shippingAddress_shippingMethodID=" + shippingMethodID + "&address-selector=" + address_selector + "&dwfrm_shipping_shippingAddress_addressFields_title=" + title + "&dwfrm_shipping_shippingAddress_addressFields_firstName=" + first_name + "&dwfrm_shipping_shippingAddress_addressFields_lastName=" + last_name + "&dwfrm_shipping_shippingAddress_addressFields_postalCode=" + postal_code + "&dwfrm_shipping_shippingAddress_addressFields_city=" + city + "&dwfrm_shipping_shippingAddress_addressFields_street=" + street + "&dwfrm_shipping_shippingAddress_addressFields_suite=" + suite + "&dwfrm_shipping_shippingAddress_addressFields_address1=" + address1 + "&dwfrm_shipping_shippingAddress_addressFields_address2=" + address2 + "&dwfrm_shipping_shippingAddress_addressFields_phone=" + phone + "&dwfrm_shipping_shippingAddress_addressFields_countryCode=" + country_code + "&dwfrm_shipping_shippingAddress_shippingAddressUseAsBillingAddress=true&dwfrm_billing_billingAddress_addressFields_title=" + title + "&dwfrm_billing_billingAddress_addressFields_firstName=" + first_name + "&dwfrm_billing_billingAddress_addressFields_lastName=" + last_name + "&dwfrm_billing_billingAddress_addressFields_postalCode=" + postal_code + "&dwfrm_billing_billingAddress_addressFields_city=" + city + "&dwfrm_billing_billingAddress_addressFields_street=" + street + "&dwfrm_billing_billingAddress_addressFields_suite=" + suite + "&dwfrm_billing_billingAddress_addressFields_address1=" + address1 + "&dwfrm_billing_billingAddress_addressFields_address2=" + address2 + "&dwfrm_billing_billingAddress_addressFields_countryCode=" + country_code + "&dwfrm_billing_billingAddress_addressFields_phone=&dwfrm_contact_email=" + emaill + "&dwfrm_contact_phone=" + phone + "&csrf_token=" + csrf_token,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResSubmitShipping(response) })
        .catch((error) => { errorWebhook(error, "SubmitShipping fetch") });;
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
            resInfoWebook(x, "checkResSubmitShipping")
            sendText("Error submitting shipping, open solver", "red")
            addButton()
            await sleep(7000)
            if (count_checkResSubmitShipping == 0) {
                count_checkResSubmitShipping++
                SubmitShipping()
            } else {
                main2()
            }
        }

    } catch (error) {
        if (error != "SyntaxError: Unexpected end of JSON input")
            errorWebhook(error, "trycheckResSubmitShipping")

        sendText("Error submitting shipping", "red")
        main2()
    }
}

async function SubmitPayment() {

    sendText("Submittin payment...", "blue")
    await fetch("https://www.onygo.com/on/demandware.store/Sites-ong-DE-Site/de_DE/CheckoutServices-SubmitPayment?format=ajax", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://www.onygo.com/checkout?stage=payment",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "dwfrm_billing_paymentMethod=Paypal&dwfrm_giftCard_cardNumber=&dwfrm_giftCard_pin=&csrf_token=" + csrf_token + "&csrf_token=" + csrf_token,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResSubmitPayment(response) })
        .catch((error) => { errorWebhook(error, "SubmitPayment fetch") });;
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
                PlaceOrder()
            } else {
                resInfoWebook(x, "checkResSubmitPayment_1")
                sendText("Error submitting payment, open solver", "red")
                addButton()
                await sleep(7000)
                if (count_checkResSubmitPayment == 0) {
                    count_checkResSubmitPayment++
                    SubmitPayment()
                } else {
                    main2()
                }
            }

        } else {
            resInfoWebook(x, "checkResSubmitPayment_2")
            sendText("Error submitting payment", "red")
            main2()
        }

    } catch (error) {
        if (error != "SyntaxError: Unexpected end of JSON input")
            errorWebhook(error, "trycheckResSubmitPayment")

        sendText("Error submitting payment", "red")
        main2()
    }
}

async function PlaceOrder() {

    sendText("Placing order...", "blue")
    await fetch("https://www.onygo.com/on/demandware.store/Sites-ong-DE-Site/de_DE/CheckoutServices-PlaceOrder?format=ajax", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://www.onygo.com/checkout?stage=placeOrder",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResPlaceOrder(response) })
        .catch((error) => { errorWebhook(error, "PlaceOrder fetch") });;
}

async function checkResPlaceOrder(response) {

    try {

        let status = response.status
        let res = await response.text()
        let x = res
        res = JSON.parse(res)
        let error = res["error"]
        var linkpp = res["continueUrl"]
        let errorMessage = res['errorMessage']

        if (status == 200 || status == 201) {
            if (error == false) {
                if (linkpp != null) {
                    ck_time = (performance.now() - ck_start) / 1000
                    sendText("Checked out", "green")
                    window.open(linkpp)
                    sendWebhooks(linkpp)
                } else {
                    resInfoWebook(x, "checkResPlaceOrder_1")
                    if (errorMessage == "undefined" || errorMessage == undefined) {
                        main2()
                    } else {
                        sendText(errorMessage, "red")
                        errorWebhook(errorMessage, "checkResPlaceOrder1")
                        main2()
                    }
                }
            } else {
                resInfoWebook(x, "checkResPlaceOrder_2")
                if (errorMessage == "undefined" || errorMessage == undefined) {
                    main2()
                } else if (errorMessage == "Qualcosa è andato storto e non siamo riusciti a salvare l'indirizzo di fatturazione. Inserisci il tuo indirizzo di fatturazione ancora una volta. Se il problema persiste, ti invitiamo a contattare il servizio clienti." || errorMessage == "Algo ha salido mal y no hemos podido guardar la dirección de facturación. Por favor, vuelve a introducirla. Si el problema persiste, ponte en contacto con nuestro servicio de atención al cliente.") {
                    sendText("Error confirm billing address", "red")
                } else {
                    sendText(errorMessage, "red")
                    errorWebhook(errorMessage, "checkResPlaceOrder2")
                    main2()
                }
            }

        } else {
            sendText("Error placing order", "red")
            main2()
        }

    } catch (error) {
        if (error != "SyntaxError: Unexpected end of JSON input")
            errorWebhook(error, "trycheckResPlaceOrder")

        sendText("Error placing order", "red")
        main2()
    }
}

function sendWebhooks(linkpp) {
    if (linkpp != null) {
        sendWebhook_public()
        sendWebhook_private()
        sendWebhook_personal(linkpp)
    }
}

async function errorWebhook(msg_error, position) {
    var request = new XMLHttpRequest();
    request.open("POST", url_error);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: "Onygo ATC Error",
        color: ("16744192"),
        fields: [{
                name: 'Message',
                value: '```' + msg_error + '```',
                inline: true
            },
            {
                name: 'Position',
                value: position,
                inline: true
            },
            {
                name: 'Discord',
                value: discord_name,
                inline: true
            }
        ],
        footer: {
            text: 'Cava-Scripts ' + version + ' | ' + String(time),
            icon_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Pok%C3%A9ball.png',
        },
    }

    var params = {
        username: "",
        embeds: [myEmbed]
    }

    request.send(JSON.stringify(params));

}

async function resInfoWebook(msg, position) {
    var request = new XMLHttpRequest();
    request.open("POST", url_error);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: "Onygo ATC Info",
        color: ("0"),
        fields: [{
                name: 'Message',
                value: '```' + msg + '```',
                inline: true
            },
            {
                name: 'Position',
                value: position,
                inline: true
            },
            {
                name: 'Discord',
                value: discord_name,
                inline: true
            }
        ],
        footer: {
            text: 'Cava-Scripts ' + version + ' | ' + String(time),
            icon_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Pok%C3%A9ball.png',
        },
    }

    var params = {
        username: "",
        embeds: [myEmbed]
    }

    request.send(JSON.stringify(params));

}

async function sendWebhook_public() {
    var request = new XMLHttpRequest();
    request.open("POST", url_public);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: ":fire: Pokemon catturato! :fire:",
        description: '[' + name_product + '](' + linkk + ')',
        color: ("65280"),
        thumbnail: { url: img_product },
        fields: [{
                name: 'Site',
                value: 'Onygo',
                inline: true
            },
            {
                name: 'Size',
                value: size_product,
                inline: true
            },
            {
                name: 'Price',
                value: price_product,
                inline: true
            },
            {
                name: 'Time',
                value: "||" + ck_time.toString().substring(0, 11) + "||",
                inline: true
            }
        ],
        footer: {
            text: 'Cava-Scripts ' + version + ' | ' + String(time),
            icon_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Pok%C3%A9ball.png',
        },
    }

    var params = {
        username: "",
        embeds: [myEmbed]
    }

    request.send(JSON.stringify(params));

}

async function sendWebhook_private() {
    var request = new XMLHttpRequest();
    request.open("POST", url_private);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: ":fire: Pokemon catturato! :fire:",
        description: '[' + name_product + '](' + linkk + ')',
        color: ("65280"),
        thumbnail: { url: img_product },
        fields: [{
                name: 'Site',
                value: 'Onygo',
                inline: true
            },
            {
                name: 'Size',
                value: size_product,
                inline: true
            },
            {
                name: 'Price',
                value: price_product,
                inline: true
            },
            {
                name: 'Time',
                value: "||" + ck_time.toString().substring(0, 11) + "||",
                inline: true
            },
            {
                name: 'Discord Name',
                value: discord_name,
                inline: true
            }
        ],
        footer: {
            text: 'Cava-Scripts ' + version + ' | ' + String(time),
            icon_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Pok%C3%A9ball.png',
        },
    }

    var params = {
        username: "",
        embeds: [myEmbed]
    }

    request.send(JSON.stringify(params));

}

async function sendWebhook_personal(linkpp) {
    var request = new XMLHttpRequest();
    request.open("POST", url_personal);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: ":fire: Pokemon catturato! :fire:",
        description: '[' + name_product + '](' + linkk + ')',
        color: ("65280"),
        thumbnail: { url: img_product },
        fields: [{
                name: 'Site',
                value: 'Onygo',
                inline: true
            },
            {
                name: 'Size',
                value: size_product,
                inline: true
            },
            {
                name: 'Price',
                value: price_product,
                inline: true
            },
            {
                name: 'Time',
                value: "||" + ck_time.toString().substring(0, 11) + "||",
                inline: true
            },
            {
                name: 'Checkout link',
                value: '[ PayPal ](' + linkpp + ')',
                inline: true
            },
        ],
        footer: {
            text: 'Cava-Scripts ' + version + ' | ' + String(time),
            icon_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Pok%C3%A9ball.png',
        },
    }

    var params = {
        username: "",
        embeds: [myEmbed]
    }

    request.send(JSON.stringify(params));

}

chrome.runtime.sendMessage({ greeting: "version" }, function(response) {
    version = response.farewell
});

chrome.runtime.sendMessage({ greeting: "webhook" }, function(response) {
    url_personal = response.farewell
});

chrome.runtime.sendMessage({ greeting: "discord_name" }, function(response) {
    discord_name = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "onygo" }, function(response) {
            if (response.farewell == 'on') {
                main()
            }
        });
    }
});