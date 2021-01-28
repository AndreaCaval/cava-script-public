debugger

var xsrf;
var res = '';
var version = "";
let ckmode = "";
let discord_name = ""
let link = document.location.href
let country = link.split('/')[2]
var url_error = "https://discordapp.com/api/webhooks/797771572240187392/LjgL9QhCvmByjlPbAtHF2fxEVFTS6J8sv4LG2Nw0zpI2qzgyyKL03wJqhVeobyFeDzLA"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function errorWebhook(res, position) {
    var request = new XMLHttpRequest();
    request.open("POST", url_error);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: "Zalando CK Error",
        color: ("16744192"),
        fields: [{
                name: 'Message',
                value: "```" + res + "```",
                inline: true
            },
            {
                name: 'Positiom',
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

async function main() {
    if (ckmode == "Fast") {
        checkoutConfirm()
    } else if (ckmode == "Browser") {
        checkoutClick()
    } else if (ckmode == "Manual") {

    }
}

async function checkoutClick() {

    try {
        let btn = document.getElementsByClassName("z-1-button__content")
        if (btn.length != 0) {
            for (let i = 0; i < 5; i++) {
                btn[0].click()
            }
            await sleep(2500)
            if (link == "https://" + country + "/checkout/confirm") {
                location.reload()
            }
        } else {
            await sleep(500)
            location.reload()
        }

    } catch (error) { errorWebhook(error, "checkoutClick") }
}

async function checkoutConfirm() {

    try {

        var checkoutid = '';
        var etag = '';

        var page = document.querySelectorAll('[data-props]')[0].getAttribute('data-props')
        page = page.substring(0, page.length)

        var x = JSON.parse(page)

        etag = x.model.eTag
        etag = etag.replace('"', '')
        etag = etag.replace('"', '')
        etag = '"' + '\\' + '"' + etag + '\\' + '"' + '"'

        checkoutid = x.model.checkoutId

        checkoutBuyNow(etag, checkoutid)

    } catch (error) {
        errorWebhook(error, "checkoutConfirm")
        location.reload()
    }
}

async function checkoutBuyNow(etag, checkoutid) {

    xsrf = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5)

    await fetch("https://" + country + "/api/checkout/buy-now", {
            "headers": {
                "accept": "application/json",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/json",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-xsrf-token": xsrf,
                "x-zalando-checkout-app": "web",
                "x-zalando-footer-mode": "desktop",
                "x-zalando-header-mode": "desktop"
            },
            "referrer": "https://" + country + "/checkout/confirm",
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": '{\"checkoutId\":  \"' + checkoutid + '\",\"eTag\":' + etag + '}',
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkRescheckoutBuyNow(response) })
        .catch((error) => { errorWebhook(error, "checkoutBuyNow_fetch") });;
}

async function checkRescheckoutBuyNow(response) {

    try {

        let status = response.status
        let res = await response.text()
        let x = res
        res = JSON.parse(res)
        let url = ""

        if (status == 200 || status == 201) {

            url = res["url"]

            if (url == "/checkout/success") {
                document.location = 'https://' + country + '/checkout/success'
            } else if (url == "/cart?error=zalando.checkout.confirmation.quantity.error") {
                location.reload()
            } else if (url == "/checkout/confirm?error=zalando.checkout.confirmation.quantity.error") {
                location.reload()
            } else if (url.startsWith("https://checkout.payment.zalando.com/3ds")) {
                document.location = url
            } else if (url.startsWith("https://www.paypal.com/checkoutnow?")) {
                document.location = url
            } else {
                errorWebhook(x, "checkRescheckoutBuyNow_1")
                location.reload()
            }
        } else {
            errorWebhook(x, "checkRescheckoutBuyNow_2")
            await sleep(500)
            location.reload()
        }

    } catch (error) {
        errorWebhook(error, "checkRescheckoutBuyNow_3")
        await sleep(500)
        location.reload()
    }
}

chrome.runtime.sendMessage({ greeting: "discord_name" }, function(response) {
    discord_name = response.farewell;
});

chrome.runtime.sendMessage({ greeting: "checkoutmodezalando" }, function(response) {
    ckmode = response.farewell
});

chrome.runtime.sendMessage({ greeting: "version" }, function(response) {
    version = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "zalando" }, function(response) {
            if (response.farewell == 'on') {
                main()
            }
        });
    }
});