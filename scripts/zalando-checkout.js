debugger

var coupon = ''; var xsrf = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5); var res = ''; var version = ""; let ckmode = ""
let linkkk = document.location.href
var zalandoUrl = linkkk.split('/')[2]
var url_error = "https://discordapp.com/api/webhooks/797771572240187392/LjgL9QhCvmByjlPbAtHF2fxEVFTS6J8sv4LG2Nw0zpI2qzgyyKL03wJqhVeobyFeDzLA"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function errorWebhook(res) {
    var request = new XMLHttpRequest();
    request.open("POST", url_error);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: "Zalando CK Error",
        color: ("16744192"),
        fields: [
            {
                name: 'Response',
                value: "```" + res + "```",
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
    } 
    else if (ckmode == "Browser") {
        checkoutClick()
    }
}

async function checkoutClick() {

    let btn = document.getElementsByClassName("z-1-button__content")
    if (btn.length != 0) {
        for (let i = 0; i < 5; i++) {

            btn[0].click()

        }
        await sleep(2500)
        if (linkkk == "https://" + zalandoUrl + "/checkout/confirm") {
            location.reload()
        }
    }
    else {
        await sleep(500)
        location.reload()
    }
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
            errorWebhook(result)
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

chrome.runtime.sendMessage({ greeting: "checkoutmodezalando" }, function (response) {
    ckmode = response.farewell
});

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
                main()
            }
        });
    }
});

