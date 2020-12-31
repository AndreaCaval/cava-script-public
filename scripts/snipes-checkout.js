debugger

var url_private = ''; var version = '';
var url_public = "https://discordapp.com/api/webhooks/726168318255562832/LWhhWJaYYwPLTjC8doiG9iravKqI4V2Phv0D_1-2CZDu82FxvJeLmtukA83FMrSpJmWh"

var link = document.location.href
var country = link.split("/")[2]

var html = document.createElement('html')
var address_id = ""; var snipes_store = ""; var post_office_number = ""; var pack_station_number = ""; var post_number = ""; var country_code = "";
var suite = ""; var street = ""; var city = ""; var address1 = ""; var address2 = ""; var last_name = ""; var first_name = ""; var title = ""; var postal_code = ""
var originalShipmentUUID = ""; var shipmentUUID = ""; var address_selector = ""; var email = ""; var phone = ""; var shippingMethodID = ""
var csrf_token = "";

async function sendText(text, color) {
    document.getElementById("statusSnipes").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>"
}

async function main() {
    if (document.getElementsByClassName('t-error')[0] == undefined && document.getElementsByClassName("t-cart-price-value")[0].textContent.replaceAll("\n", '').replaceAll(" ", '') != "0,00€" && document.getElementsByClassName("t-cart-price-value")[0].textContent.replaceAll("\n", '').replaceAll(" ", '') != "") {
        await getCheckout()
        await ress.then(function (result) {
            html.innerHTML = result
        })
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
        .then(response => { ress = response.text() })
        .catch((error) => { console.log(error) });
    ;
}

async function ckRship() {

    await fetch("https://" + country + "/on/demandware.store/Sites-snse-SOUTH-Site/it_IT/CheckoutShippingServices-SelectShippingMethod?format=ajax", {
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

    await fetch("https://" + country + "/on/demandware.store/Sites-snse-SOUTH-Site/it_IT/CheckoutAddressServices-Validate?format=ajax", {
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

    await fetch("https://" + country + "/on/demandware.store/Sites-snse-SOUTH-Site/it_IT/CheckoutShippingServices-SubmitShipping?format=ajax", {
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

    await fetch("https://" + country + "/on/demandware.store/Sites-snse-SOUTH-Site/it_IT/CheckoutServices-SubmitPayment?format=ajax", {
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
    await fetch("https://" + country + "/on/demandware.store/Sites-snse-SOUTH-Site/it_IT/CheckoutServices-PlaceOrder?format=ajax", {
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
                value: item_name,
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
                value: item_name,
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

chrome.runtime.sendMessage({ greeting: "version" }, function (response) {
    version = response.farewell
});

chrome.runtime.sendMessage({ greeting: "webhook" }, function (response) {
    url_private = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function (response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "snipes" }, function (response) {
            if (response.farewell == 'on') {
                main()
            }
        });
    }
});
