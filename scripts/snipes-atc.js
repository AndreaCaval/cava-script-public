debugger

var url_private = ''; var version = '';
var url_public = "https://discordapp.com/api/webhooks/726168318255562832/LWhhWJaYYwPLTjC8doiG9iravKqI4V2Phv0D_1-2CZDu82FxvJeLmtukA83FMrSpJmWh"

const LINK_REQUEST = {
    "www.snipes.it": {
        "add_product": "https://www.snipes.it/on/demandware.store/Sites-snse-SOUTH-Site/it_IT/Cart-AddProduct?format=ajax",
        "select_ship": "https://ww.snipes.it/on/demandware.store/Sites-snse-SOUTH-Site/it_IT/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "validate_ship": "https://www.snipes.it/on/demandware.store/Sites-snse-SOUTH-Site/it_IT/CheckoutAddressServices-Validate?format=ajax",
        "submit_ship": "https://www.snipes.it/on/demandware.store/Sites-snse-SOUTH-Site/it_IT/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "submit_payment": "https://www.snipes.it/on/demandware.store/Sites-snse-SOUTH-Site/it_IT/CheckoutServices-SubmitPayment?format=ajax",
        "submit_order": "https://www.snipes.it/on/demandware.store/Sites-snse-SOUTH-Site/it_IT/CheckoutServices-PlaceOrder?format=ajax"
    },
    "www.snipes.nl": {
        "add_product": "https://www.snipes.nl/on/demandware.store/Sites-snse-NL-BE-Site/nl_NL/Cart-AddProduct?format=ajax",
        "select_ship": "https://ww.snipes.nl/on/demandware.store/Sites-snse-NL-BE-Site/nl_NL/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "validate_ship": "https://www.snipes.nl/on/demandware.store/Sites-snse-NL-BE-Site/nl_NL/CheckoutAddressServices-Validate?format=ajax",
        "submit_ship": "https://www.snipes.nl/on/demandware.store/Sites-snse-NL-BE-Site/nl_NL/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "submit_payment": "https://www.snipes.nl/on/demandware.store/Sites-snse-NL-BE-Site/nl_NL/CheckoutServices-SubmitPayment?format=ajax",
        "submit_order": "https://www.snipes.nl/on/demandware.store/Sites-snse-NL-BE-Site/nl_NL/CheckoutServices-PlaceOrder?format=ajax"
    },
    "www.snipes.fr": {
        "add_product": "https://www.snipes.fr/on/demandware.store/Sites-snse-FR-Site/fr_FR/Cart-AddProduct?format=ajax",
        "select_ship": "https://ww.snipes.fr/on/demandware.store/Sites-snse-FR-Site/fr_FR/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "validate_ship": "https://www.snipes.fr/on/demandware.store/Sites-snse-FR-Site/fr_FR/CheckoutAddressServices-Validate?format=ajax",
        "submit_ship": "https://www.snipes.fr/on/demandware.store/Sites-snse-FR-Site/fr_FR/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "submit_payment": "https://www.snipes.fr/on/demandware.store/Sites-snse-FR-Site/fr_FR/CheckoutServices-SubmitPayment?format=ajax",
        "submit_order": "https://www.snipes.fr/on/demandware.store/Sites-snse-FR-Site/fr_FR/CheckoutServices-PlaceOrder?format=ajax"
    },
    "www.snipes.com": {
        "add_product": "https://www.snipes.com/add-product?format=ajax",
        "select_ship": "https://ww.snipes.com/on/demandware.store/Sites-snse-DE-AT-Site/de_DE/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "validate_ship": "https://www.snipes.com/on/demandware.store/Sites-snse-DE-AT-Site/de_DE/CheckoutAddressServices-Validate?format=ajax",
        "submit_ship": "https://www.snipes.com/on/demandware.store/Sites-snse-DE-AT-Site/de_DE/CheckoutShippingServices-SubmitShipping?format=ajax",
        "submit_payment": "https://www.snipes.com/on/demandware.store/Sites-snse-DE-AT-Site/de_DE/CheckoutServices-SubmitPayment?format=ajax",
        "submit_order": "https://www.snipes.com/on/demandware.store/Sites-snse-DE-AT-Site/de_DE/CheckoutServices-PlaceOrder?format=ajax"
    },
    "www.snipes.ch": {
        "add_product": "https://www.snipes.ch/on/demandware.store/Sites-snse-CH-Site/de_CH/Cart-AddProduct?format=ajax",
        "select_ship": "https://ww.snipes.ch/on/demandware.store/Sites-snse-CH-Site/de_CH/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "validate_ship": "https://www.snipes.ch/on/demandware.store/Sites-snse-CH-Site/de_CH/CheckoutAddressServices-Validate?format=ajax",
        "submit_ship": "https://www.snipes.ch/on/demandware.store/Sites-snse-CH-Site/de_CH/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "submit_payment": "https://www.snipes.ch/on/demandware.store/Sites-snse-CH-Site/de_CH/CheckoutServices-SubmitPayment?format=ajax",
        "submit_order": "https://www.snipes.ch/on/demandware.store/Sites-snse-CH-Site/de_CH/CheckoutServices-PlaceOrder?format=ajax"
    },
    "www.snipes.es": {
        "add_product": "https://www.snipes.es/on/demandware.store/Sites-snse-SOUTH-Site/es_ES/Cart-AddProduct?format=ajax",
        "select_ship": "https://ww.snipes.es/on/demandware.store/Sites-snse-SOUTH-Site/es_ES/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "validate_ship": "https://www.snipes.com/on/demandware.store/Sites-snse-SOUTH-Site/es_ES/CheckoutAddressServices-Validate?format=ajax",
        "submit_ship": "https://www.snipes.es/on/demandware.store/Sites-snse-SOUTH-Site/es_ES/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "submit_payment": "https://www.snipes.com/on/demandware.store/Sites-snse-SOUTH-Site/es_ES/CheckoutServices-SubmitPayment?format=ajax",
        "submit_order": "https://www.snipes.com/on/demandware.store/Sites-snse-SOUTH-Site/es_ES/CheckoutServices-PlaceOrder?format=ajax"
    },
    "www.snipes.be": {
        "add_product": "https://www.snipes.be/on/demandware.store/Sites-snse-NL-BE-Site/nl_BE/Cart-AddProduct?format=ajax",
        "select_ship": "https://ww.snipes.be/on/demandware.store/Sites-snse-NL-BE-Site/nl_BE/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "validate_ship": "https://www.snipes.be/on/demandware.store/Sites-snse-NL-BE-Site/nl_BE/CheckoutAddressServices-Validate?format=ajax",
        "submit_ship": "https://www.snipes.be/on/demandware.store/Sites-snse-NL-BE-Site/nl_BE/CheckoutShippingServices-SelectShippingMethod?format=ajax",
        "submit_payment": "https://www.snipes.be/on/demandware.store/Sites-snse-NL-BE-Site/nl_BE/CheckoutServices-SubmitPayment?format=ajax",
        "submit_order": "https://www.snipes.be/on/demandware.store/Sites-snse-NL-BE-Site/nl_BE/CheckoutServices-PlaceOrder?format=ajax"
    }

}

var link = document.location.href
var country = link.split('/')[2]
var pid_size = ""; var pid = ""; var size = ""
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
    return n//Il max è incluso e il min è incluso 
}

async function sendText(text, color) {
    document.getElementById("statusSnipes").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>"
}

async function main() {
    csrf_token = document.getElementsByName('csrf_token')[0].value

    pidd = link.split('-')
    pidd = pidd[pidd.length - 1].substring(0, 22)
    if (pidd.includes("html")) {
        pid = pidd.substring(0, 14)
        console.log("atc")
        atc()
    } else {
        console.log("atc fast")
        pidsize = pidd.substring(0, 22)
        atcRfast()
    }
}

async function atc() {

    try {
        //instock
        var sizes = document.getElementsByClassName('js-pdp-attribute-tile b-size-value js-size-value b-swatch-circle b-swatch-value b-swatch-value--selectable b-swatch-value--orderable')
        var n = getRandomIntInclusive(0, sizes.length - 1)
        sizes[n].click()
        await sleep(2000)
        var btn = document.getElementsByClassName('f-pdp-button f-pdp-button--active js-btn-add-to-cart')[0]
        pid = btn.getAttribute('data-pid')
        size = btn.getAttribute('data-variables')
        size = size.substring(1, size.length - 1)
        j = JSON.parse(size)
        size = j['selectedValueId']
        atcR(pid, size)
    }
    catch (error) {
        console.log(error)
    }
}

async function atcR(pid, size) {
    fetch(LINK_REQUEST[country]["add_product"], {
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
    fetch(LINK_REQUEST[country]["add_product"], {
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
    status = response.status
    if (status == '201' || status == '200') {
        sendText("Carted", "green")
        main2()
    } else {
        sendText("Error carting", "red")
    }
}

async function main2() {
    await getCheckout()
    await ress.then(function (result) {
        html.innerHTML = result
    })

    if (cart == false) {
        sendText("Getting shipping info", "white")
        try { img = html.querySelectorAll('img')[6].getAttribute('data-src') }
        catch (error) { console.log(error) }
        try { price = html.querySelectorAll("[class='b-checkout-price-row-total']")[0].querySelectorAll('[class="t-checkout-price-value"]')[0].textContent.replaceAll("\n", "") }
        catch (error) { console.log(error) }
        try { item_name = html.querySelectorAll("[class='t-product-main-name']")[0].textContent.replaceAll("\n", "") }
        catch (error) { console.log(error) }
        try { item_size = html.querySelectorAll("[class='t-checkout-attr-value']")[0].textContent }
        catch (error) { console.log(error) }
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
            //phone = html.querySelector('[aria-label="Phone"').getAttribute('value')

            csrf_token = html.querySelector('[data-csrf-name="csrf_token"]').getAttribute('data-csrf-token')
            sendText("Getting shipping info", "green")

        } catch (error) {
            console.log(error)
            sendText("Error getting shipping info", "red")
        }

        await ckRship()

        await ckRpp()

        await ckR()
        res.then(function (result) {
            //console.log(result)
            var j = JSON.parse(result)
            try {
                var linkpp = j["continueUrl"]
                if (linkpp != null) {
                    window.open(linkpp)
                    sendWebhooks(linkpp)
                }
            } catch (error) { console.log(error) }
        })
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
        .then(response => {
            ress = response.text()
            if (response.url == "https://" + country + "/cart")
                cart = true
        })
        .catch((error) => { console.log(error) });
    ;
}

async function ckRship() {

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
        "referrer": "https://" + country + "/checkout",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "methodID=home-delivery_it&shipmentUUID=" + shipmentUUID,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    })
        .then(response => {
            if (response.status) {
                sendText("Selecting shipping method", "green")
            }
            else {
                sendText("Error selecting shipping method", "red")
            }
        })
        .catch((error) => { console.log(error) });
    ;

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
            if (response.status) {
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
            if (response.status) {
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
            if (response.status) {
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
        .then(response => { res = response.text() })
        .catch((error) => { console.log(error) });
    ;
}

function sendWebhooks(linkpp) {
    if (linkpp != null) {
        sendWebhook_public()
        sendWebhook_private(linkpp)
    }
}

async function sendWebhook_public() {
    var request = new XMLHttpRequest();
    request.open("POST", url_public);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: ":fire: Pokemon catturato! :fire:",
        thumbnail: { url: img },
        color: ("65280"),
        fields: [
            {
                name: 'Site',
                value: 'Snipes',
                inline: true
            },
            {
                name: 'Item',
                value: '[ ' + item_name + ' ](' + link + ')',
                inline: true
            },
            {
                name: 'Size',
                value: item_size,
                inline: true
            },
            {
                name: 'Price',
                value: price,
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

async function sendWebhook_private(linkpp) {
    var request = new XMLHttpRequest();
    request.open("POST", url_private);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: ":fire: Pokemon catturato! :fire:",
        //description: '[ PayPal ](' + linkpp + ')',
        color: ("65280"),
        thumbnail: { url: img },
        fields: [
            {
                name: 'Site',
                value: 'Snipes',
                inline: true
            },
            {
                name: 'Item',
                value: '[ ' + item_name + ' ](' + link + ')',
                inline: true
            },
            {
                name: 'Size',
                value: item_size,
                inline: true
            },
            {
                name: 'Price',
                value: price,
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


