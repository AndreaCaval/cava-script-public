debugger

var coupon = ''; var xsrf = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5); var res = ''; var version = ""
var zalandoUrl = location.href.split('/')[2]
var url_error = "https://discordapp.com/api/webhooks/772900196392239165/AuG4n_g8DB6WC208TjHjpzoMrqDn4vhQ-nnkmG2unIV5ZSjGjlAHMGs2KmZKR1I-z9xM"

async function sendWebhook_public(res) {
    var request = new XMLHttpRequest();
    request.open("POST", url_error);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: "CHEKOUT",
        color: ("65280"),
        fields: [
            {
                name: 'Response',
                value: res,
                inline: true
            }
        ],
        footer: {
            text: 'Cava-Scripts ' + version + ' | ' + String(time),
            icon_url: 'https://dewey.tailorbrands.com/production/brand_version_mockup_image/408/4056202408_8d7b6135-adfd-4d2c-ba99-89726ad67711.png',
        },
    }

    var params = {
        username: "",
        embeds: [myEmbed]
    }

    request.send(JSON.stringify(params));

}

async function checkoutConfirm() {

    try {
        var checkoutid = ''; var flowid = ''; var etag = ''; var coupn;

        var page = document.querySelectorAll('[data-props]')[0].getAttribute('data-props')
        page = page.substring(0, page.length)

        var x = JSON.parse(page)

        etag = x.model.eTag
        etag = etag.replace('"', '')
        etag = etag.replace('"', '')
        etag = '"' + '\\' + '"' + etag + '\\' + '"' + '"'

        checkoutid = x.model.checkoutId
        try {
            coupn = x.model.coupons
        }
        catch (error) { console.log(error) }

        try {
            if (coupn.length == 0 && coupon != 'off') {
                flowid = x.flowId
                await CouponCode(flowid)
            }
        }
        catch (error) { console.log(error) }

        await checkoutBuyNow(etag, checkoutid)

        res.then(function (result) {
            if (result == '{"url":"/checkout/success"}') {
                document.location = 'https://' + zalandoUrl + '/checkout/success'
            } else {
                location.reload()
            }
            sendWebhook_public(result)
        })
    } catch (error) {
        location.reload()
    }

}

async function CouponCode(flowid) {

    await fetch("https://" + zalandoUrl + "/api/checkout/redeem", {
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
        "referrer": "https://" + zalandoUrl + "/checkout/confirm",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"code\":\"" + coupon + "\",\"pageRenderFlowId\":\"" + flowid + "\"}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    })
        .then(response => console.log(response.status))
        .catch((error) => { console.log(error) });
    ;
}

async function checkoutBuyNow(etag, checkoutid) {

    await fetch("https://" + zalandoUrl + "/api/checkout/buy-now", {
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
        "referrer": "https://" + zalandoUrl + "/checkout/confirm",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": '{\"checkoutId\":  \"' + checkoutid + '\",\"eTag\":' + etag + '}',
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    })
        .then(response => { res = response.text() })
        .catch((error) => { console.log(error) });
    ;
}

chrome.runtime.sendMessage({ greeting: "version" }, function (response) {
    version = response.farewell
});

chrome.runtime.sendMessage({ greeting: "couponZ" }, function (response) {
    coupon = response.farewell
    if (coupon != "off") {
        coupon = coupon.split(';')[0]
    }
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function (response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "zalando" }, function (response) {
            if (response.farewell == 'on') {
                checkoutConfirm()
            }
        });
    }
});

