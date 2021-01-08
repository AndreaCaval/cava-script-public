debugger

var url_private = ''; var version = '';
var url_public = "https://discordapp.com/api/webhooks/726168318255562832/LWhhWJaYYwPLTjC8doiG9iravKqI4V2Phv0D_1-2CZDu82FxvJeLmtukA83FMrSpJmWh"
var url_error = "https://discordapp.com/api/webhooks/772900196392239165/AuG4n_g8DB6WC208TjHjpzoMrqDn4vhQ-nnkmG2unIV5ZSjGjlAHMGs2KmZKR1I-z9xM"

const LINK_REQUEST = {
    "www.snipes.it": {
        "add_product": "https://www.snipes.it/on/demandware.store/Sites-snse-SOUTH-Site/it_IT/Cart-AddProduct?format=ajax",
        "validate_ship": "https://www.snipes.it/on/demandware.store/Sites-snse-SOUTH-Site/it_IT/CheckoutAddressServices-Validate?format=ajax",
        "submit_ship": "https://www.snipes.it/on/demandware.store/Sites-snse-SOUTH-Site/it_IT/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "submit_payment": "https://www.snipes.it/on/demandware.store/Sites-snse-SOUTH-Site/it_IT/CheckoutServices-SubmitPayment?format=ajax",
        "submit_order": "https://www.snipes.it/on/demandware.store/Sites-snse-SOUTH-Site/it_IT/CheckoutServices-PlaceOrder?format=ajax"
    },
    "www.snipes.nl": {
        "add_product": "https://www.snipes.nl/on/demandware.store/Sites-snse-NL-BE-Site/nl_NL/Cart-AddProduct?format=ajax",
        "validate_ship": "https://www.snipes.nl/on/demandware.store/Sites-snse-NL-BE-Site/nl_NL/CheckoutAddressServices-Validate?format=ajax",
        "submit_ship": "https://www.snipes.nl/on/demandware.store/Sites-snse-NL-BE-Site/nl_NL/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "submit_payment": "https://www.snipes.nl/on/demandware.store/Sites-snse-NL-BE-Site/nl_NL/CheckoutServices-SubmitPayment?format=ajax",
        "submit_order": "https://www.snipes.nl/on/demandware.store/Sites-snse-NL-BE-Site/nl_NL/CheckoutServices-PlaceOrder?format=ajax"
    },
    "www.snipes.fr": {
        "add_product": "https://www.snipes.fr/on/demandware.store/Sites-snse-FR-Site/fr_FR/Cart-AddProduct?format=ajax",
        "validate_ship": "https://www.snipes.fr/on/demandware.store/Sites-snse-FR-Site/fr_FR/CheckoutAddressServices-Validate?format=ajax",
        "submit_ship": "https://www.snipes.fr/on/demandware.store/Sites-snse-FR-Site/fr_FR/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "submit_payment": "https://www.snipes.fr/on/demandware.store/Sites-snse-FR-Site/fr_FR/CheckoutServices-SubmitPayment?format=ajax",
        "submit_order": "https://www.snipes.fr/on/demandware.store/Sites-snse-FR-Site/fr_FR/CheckoutServices-PlaceOrder?format=ajax"
    },
    "www.snipes.com": {
        "add_product": "https://www.snipes.com/add-product?format=ajax",
        "validate_ship": "https://www.snipes.com/on/demandware.store/Sites-snse-DE-AT-Site/de_DE/CheckoutAddressServices-Validate?format=ajax",
        "submit_ship": "https://www.snipes.com/on/demandware.store/Sites-snse-DE-AT-Site/de_DE/CheckoutShippingServices-SubmitShipping?format=ajax",
        "submit_payment": "https://www.snipes.com/on/demandware.store/Sites-snse-DE-AT-Site/de_DE/CheckoutServices-SubmitPayment?format=ajax",
        "submit_order": "https://www.snipes.com/on/demandware.store/Sites-snse-DE-AT-Site/de_DE/CheckoutServices-PlaceOrder?format=ajax"
    },
    "www.snipes.ch": {
        "add_product": "https://www.snipes.ch/on/demandware.store/Sites-snse-CH-Site/de_CH/Cart-AddProduct?format=ajax",
        "validate_ship": "https://www.snipes.ch/on/demandware.store/Sites-snse-CH-Site/de_CH/CheckoutAddressServices-Validate?format=ajax",
        "submit_ship": "https://www.snipes.ch/on/demandware.store/Sites-snse-CH-Site/de_CH/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "submit_payment": "https://www.snipes.ch/on/demandware.store/Sites-snse-CH-Site/de_CH/CheckoutServices-SubmitPayment?format=ajax",
        "submit_order": "https://www.snipes.ch/on/demandware.store/Sites-snse-CH-Site/de_CH/CheckoutServices-PlaceOrder?format=ajax"
    },
    "www.snipes.es": {
        "add_product": "https://www.snipes.es/on/demandware.store/Sites-snse-SOUTH-Site/es_ES/Cart-AddProduct?format=ajax",
        "validate_ship": "https://www.snipes.com/on/demandware.store/Sites-snse-SOUTH-Site/es_ES/CheckoutAddressServices-Validate?format=ajax",
        "submit_ship": "https://www.snipes.es/on/demandware.store/Sites-snse-SOUTH-Site/es_ES/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "submit_payment": "https://www.snipes.com/on/demandware.store/Sites-snse-SOUTH-Site/es_ES/CheckoutServices-SubmitPayment?format=ajax",
        "submit_order": "https://www.snipes.com/on/demandware.store/Sites-snse-SOUTH-Site/es_ES/CheckoutServices-PlaceOrder?format=ajax"
    },
    "www.snipes.be": {
        "add_product": "https://www.snipes.be/on/demandware.store/Sites-snse-NL-BE-Site/nl_BE/Cart-AddProduct?format=ajax",
        "validate_ship": "https://www.snipes.be/on/demandware.store/Sites-snse-NL-BE-Site/nl_BE/CheckoutAddressServices-Validate?format=ajax",
        "submit_ship": "https://www.snipes.be/on/demandware.store/Sites-snse-NL-BE-Site/nl_BE/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "submit_payment": "https://www.snipes.be/on/demandware.store/Sites-snse-NL-BE-Site/nl_BE/CheckoutServices-SubmitPayment?format=ajax",
        "submit_order": "https://www.snipes.be/on/demandware.store/Sites-snse-NL-BE-Site/nl_BE/CheckoutServices-PlaceOrder?format=ajax"
    },
    "www.snipes.at": {
        "add_product": "https://www.snipes.at/add-product?format=ajax",
        "validate_ship": "https://www.snipes.com/on/demandware.store/Sites-snse-DE-AT-Site/de_AT/CheckoutAddressServices-Validate?format=ajax",
        "submit_ship": "https://www.snipes.com/on/demandware.store/Sites-snse-DE-AT-Site/de_AT/CheckoutShippingServices-SubmitShipping?format=ajax",
        "submit_payment": "https://www.snipes.com/on/demandware.store/Sites-snse-DE-AT-Site/de_AT/CheckoutServices-SubmitPayment?format=ajax",
        "submit_order": "https://www.snipes.com/on/demandware.store/Sites-snse-DE-AT-Site/de_AT/CheckoutServices-PlaceOrder?format=ajax"
    }

}

let ck_time = 0; let ck_start = 0;
let img_product = ""; let price_product = ""; let name_product = ""; let size_product = ""

var link = document.location.href
var country = link.split('/')[2]
var pidsize = ""; var pid = ""; var size = ""
var html = document.createElement('html'); var cart = false
var address_id = ""; var snipes_store = ""; var post_office_number = ""; var pack_station_number = ""; var post_number = ""; var country_code = "";
var suite = ""; var street = ""; var city = ""; var address1 = ""; var address2 = ""; var last_name = ""; var first_name = ""; var title = ""; var postal_code = ""
var originalShipmentUUID = ""; var shipmentUUID = ""; var address_selector = ""; var email = ""; var phone = ""; var shippingMethodID = ""
var csrf_token = "";

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
    try { document.getElementById("statusSnipes").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" }
    catch (error) { }
}

async function main() {

    try {
        ck_start = performance.now()
        try { csrf_token = document.getElementsByName('csrf_token')[0].value }
        catch (error) { }
        pidd = link.split('-')
        pidd = pidd[pidd.length - 1].substring(0, 22)
        if (pidd.includes("html")) {
            pid = pidd.substring(0, 14)
            atc()
        } else {
            pidsize = pidd.substring(0, 22)
            atcRfast()
        }
    } catch (error) { }
}

async function atc() {

    try {
        let btn_1 = document.getElementsByClassName('f-pdp-button f-pdp-button--active js-btn-add-to-cart')[0]
        if (btn_1 != undefined && btn_1.getAttribute('data-pid').length > 14) {
            pidsize = btn_1.getAttribute('data-pid')
            atcRfast()
        }
        else {
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
    }
    catch (error) { }
}

async function atcR() {

    sendText("Trying atc...", "blue")
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
        "body": "pid=" + pid + "&options=%5B%7B%22optionId%22%3A%22212%22%2C%22selectedValueId%22%3A%22" + size + "%22%7D%5D&quantity=1",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    })
        .then(response => { checkRes(response) })
        .catch((error) => { console.log(error) });
    ;
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
        .then(response => { checkRes(response) })
        .catch((error) => { console.log(error) });
    ;
}

async function checkRes(response) {

    sendText("Carting...", "blue")
    let status = response.status
    let res = await response.text()
    res = JSON.parse(res)
    let error = res["error"]
    let message = res["message"]
    let errorType = res["errorType"]
    let errorMessage = res["errorMessage"]

    if (status == 200 || status == 201) {
        if (error == false) {
            sendText("Carted", "green")
            main2()
        }
        else {
            if (message == "La talla seleccionada ya no está disponible" || message == "Siamo spiacenti, la taglia selezionata non è più disponibile" || message.includes('Die gewünschte Menge') || message == 'De geselecteerde maat is helaas niet meer beschikbaar' || message == "La taille sélectionnée nest malheureusement plus disponible.") {
                sendText("Item out of stock", "red")
            }
            else if (errorType == "productLimitation") {
                sendText("Max quantity for this item", "red")
            }
            else {
                sendText("Error carting", "red")
            }
        }
    } else {
        if (errorMessage != undefined && errorMessage != "undefined") {
            if (errorMessage.includes("non siamo riusciti a salvare l'indirizzo di fatturazione")) {
                sendText("Error getting shipping", "red")
            } else {
                sendText(errorMessage, "red")
                errorWebhook()
            }
        }
        else { sendText("Error carting", "red") }
    }
}

async function main2() {
    try {
        await getCheckout()
        await ress.then(function (result) {
            html.innerHTML = result
        })
        if (cart == false) {
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

                email = html.querySelector('[aria-label="Email"]').getAttribute('value')

                csrf_token = html.querySelector('[data-csrf-name="csrf_token"]').getAttribute('data-csrf-token')
                sendText("Getting shipping info", "green")
                try {
                    img_product = html.getElementsByClassName("b-item-image-wrapper")[0].querySelectorAll("img")[0].getAttribute('data-src')
                    price_product = html.querySelectorAll("[class='b-checkout-price-row-total']")[0].querySelectorAll('[class="t-checkout-price-value"]')[0].textContent.replaceAll("\n", "")
                    name_product = html.querySelectorAll("[class='t-product-main-name']")[0].textContent.replaceAll("\n", "")
                    size_product = html.querySelectorAll("[class='t-checkout-attr-value']")[0].textContent
                }
                catch (error) {
                    sendText("Error getting product info", "red")
                }

            } catch (error) {
                sendText("Error getting shipping info", "red")
            }

            await ckRship()
            await ckRpp()
            await ckR()

            await res.then(function (result) {
                try {
                    var j = JSON.parse(result)
                    var linkpp = j["continueUrl"]
                    if (linkpp != null) {
                        ck_time = (performance.now() - ck_start) / 1000
                        sendText("Checked out", "green")
                        window.open(linkpp)
                        sendWebhooks(linkpp)
                    }
                    else {
                        let errorMessage = j['errorMessage']
                        sendText(errorMessage, "red")
                    }
                } catch (error) { }
            })
        }
        else { sendText("Item out of stock/ Item not available", "red") }
    } catch (error) { }
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
        .then(response => {
            ress = response.text()
            if (response.url == "https://" + country + "/cart")
                cart = true
        })
        .catch((error) => { console.log(error) });
    ;
}

async function ckRship() {

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
        .then(response => {
            if (response.status == 200 || response.status == 201) {
                sendText("Validating address", "green")
            }
            else {
                sendText("Error validating address", "red")
            }
        })
        .catch((error) => { console.log(error) });
    ;

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
        .then(response => {
            if (response.status == 200 || response.status == 201) {
                sendText("Submitting shipping", "green")
            }
            else {
                sendText("Error submitting shipping", "red")
            }
        })
        .catch((error) => { console.log(error) });
    ;
}

async function ckRpp() {

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
        .then(response => {
            if (response.status == 200 || response.status == 201) {
                sendText("Submitting payment", "green")
            }
            else {
                sendText("Error submitting payment", "red")
            }
        })
        .catch((error) => { console.log(error) });
    ;
}

async function ckR() {
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
        .then(response => {
            if (response.status == 200 || response.status == 201) {
                sendText("Placing order", "green")
            }
            else {
                sendText("Error placing order", "red")
            }
            res = response.text()
        })
        .catch((error) => { console.log(error) });
    ;
}

function sendWebhooks(linkpp) {
    if (linkpp != null) {
        sendWebhook_public()
        sendWebhook_private(linkpp)
    }
}

async function errorWebhook(errorMessage) {
    var request = new XMLHttpRequest();
    request.open("POST", url_error);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: "Snipes ATC Error",
        color: ("16744192"),
        fields: [
            {
                name: 'Message',
                value: errorMessage,
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
        thumbnail: { url: img_product },
        color: ("65280"),
        fields: [
            {
                name: 'Site',
                value: 'Snipes',
                inline: true
            },
            {
                name: 'Item',
                value: '[ ' + name_product + ' ](' + link + ')',
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

async function sendWebhook_private(linkpp) {
    var request = new XMLHttpRequest();
    request.open("POST", url_private);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: ":fire: Pokemon catturato! :fire:",
        color: ("65280"),
        thumbnail: { url: img_product },
        fields: [
            {
                name: 'Site',
                value: 'Snipes',
                inline: true
            },
            {
                name: 'Item',
                value: '[ ' + name_product + ' ](' + link + ')',
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

chrome.runtime.sendMessage({ greeting: "authLog" }, function (response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "snipes" }, function (response) {
            if (response.farewell == 'on') {
                main()
            }
        });
    }
});

chrome.runtime.sendMessage({ greeting: "version" }, function (response) {
    version = response.farewell
});

chrome.runtime.sendMessage({ greeting: "webhook" }, function (response) {
    url_private = response.farewell
});


