debugger

var url_private = ''; var version = '';
var url_public = "https://discordapp.com/api/webhooks/726168318255562832/LWhhWJaYYwPLTjC8doiG9iravKqI4V2Phv0D_1-2CZDu82FxvJeLmtukA83FMrSpJmWh"

let img_product = "https://www.fashionsauce.com/img/stores/solebox.png"; let price_product = ""; let name_product = ""; let size_product = "";
let ck_time = 0; let ck_start = 0;

var link = document.location.href
var country = link.split("/")[3]
var html = document.createElement('html')
var address_id = ""; var address_type = ""; var snipes_store = ""; var post_office_number = ""; var pack_station_number = ""; var post_number = ""; var country_code = "";
var suite = ""; var street = ""; var city = ""; var address1 = ""; var address2 = ""; var last_name = ""; var first_name = ""; var title = "";
var originalShipmentUUID = ""; var shipmentUUID = ""; var address_selector = ""; var email = ""; var phone = ""; var postal_code = ""; let shippingMethodID = ""
var csrf_token = "";

async function sendText(text, color) {
    try { document.getElementById("statusSolebox").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" }
    catch (error) { }
}

async function main() {

    try {
        if (document.getElementsByClassName('t-error')[0] == undefined && document.getElementsByClassName("t-cart-price-value")[0].textContent.replaceAll("\n", '').replaceAll(" ", '') != "" && document.getElementsByClassName("t-cart-price-value")[0].textContent.replaceAll("\n", '').replaceAll(" ", '') != "0,00€") {
            ck_start = performance.now()
            await getCheckout()
            await ress.then(function (result) {
                html.innerHTML = result
            })
            sendText("Getting shipping info...", "blue")
            try {
                var rdbtn = html.querySelectorAll("[class='js-shipment f-native-radio-input']")[0]
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

                email = html.querySelector('[class="js-field f-form-control f-textinput"]').getAttribute('value')
                phone = html.querySelector('[class="js-field f-form-control f-textinput"').getAttribute('value')

                csrf_token = html.querySelector('[data-csrf-name="csrf_token"]').getAttribute('data-csrf-token')

                sendText("Getting shipping info", "green")
                try {
                    img_product = html.getElementsByClassName("b-item-image-wrapper")[0].querySelectorAll("img")[0].getAttribute('data-src')
                    price_product = html.querySelectorAll("[class='b-checkout-price-row-total']")[0].querySelectorAll('[class="t-checkout-price-value"]')[0].textContent.replaceAll("\n", "")
                    name_product = html.querySelectorAll("[class='t-product-main-name']")[0].textContent.replaceAll("\n", "")
                    size_product = html.querySelectorAll("[class='b-item-attribute b-item-attribute--size Size-']")[0].querySelectorAll('[class="t-checkout-attr-value"]')[0].textContent
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
        else if (document.getElementsByClassName('t-error')[0] != undefined) {
            sendText("Item not available", "red")
        }
        else if (document.getElementsByClassName("t-cart-price-value")[0].textContent.replaceAll("\n", '').replaceAll(" ", '') == "0,00€" || document.getElementsByClassName("t-cart-price-value")[0].textContent.replaceAll("\n", '').replaceAll(" ", '') == "") {
            sendText("Item not found", "red")
        }
        else { sendText("Item out of stock", "red") }

    } catch (error) { }
}

async function getCheckout() {
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
        .then(response => { ress = response.text() })
        .catch((error) => { console.log(error) });
    ;
}

async function ckRship() {

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
        .then(response => {
            if (response.status == 200 || response.status == 201) {
                sendText("Getting shipping rates", "green")
            }
            else {
                sendText("Error getting shipping rates", "red")
            }
        })
        .catch((error) => { console.log(error) });
    ;

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
        "referrer": "https://www.solebox.com/de_DE/checkout?stage=payment",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "dwfrm_billing_paymentMethod=Paypal&csrf_token=" + csrf_token,
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

async function sendWebhooks(linkpp) {
    if (linkpp != null) {
        await sendWebhook_public()
        await sendWebhook_private(linkpp)
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
        thumbnail: { url: img_product },
        color: ("65280"),
        fields: [
            {
                name: 'Site',
                value: 'Solebox',
                inline: true
            },
            {
                name: 'Item',
                value: name_product,
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
                value: ck_time.toString().substring(0, 11),
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
                value: 'Solebox',
                inline: true
            },
            {
                name: 'Item',
                value: name_product,
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
                value: ck_time.toString().substring(0, 11),
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
        chrome.runtime.sendMessage({ greeting: "solebox" }, function (response) {
            if (response.farewell == 'on') {
                main();
            }
        });
    }
});


