debugger

const url_error = "https://discordapp.com/api/webhooks/797771572240187392/LjgL9QhCvmByjlPbAtHF2fxEVFTS6J8sv4LG2Nw0zpI2qzgyyKL03wJqhVeobyFeDzLA"
let discord_name = ""; let version = ""
let country = location.href.split('/')[2]

var delay = "0"; var display = ""; var id = ""; var list_sku = ""; var list_sku_input = ""; var cart_mode = ""
let frsx = ""
let time_login = 0; let time_login_2 = 0

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function errorWebhook(msg_error, position) {
    var request = new XMLHttpRequest();
    request.open("POST", url_error);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: "Zalando Cart Error",
        color: ("16744192"),
        fields: [
            {
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

async function infoWebook(msg, position) {
    var request = new XMLHttpRequest();
    request.open("POST", url_error);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: "Zalando Cart Info",
        color: ("0"),
        fields: [
            {
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

async function setCount(i) {
    try { document.getElementById('rCount').innerHTML = "Request count: " + i }
    catch (error) { }
}

async function setDelay() {
    try { document.getElementById('rDelay').innerHTML = "Delay: " + delay + "ms" }
    catch (error) { }
}

async function sendText(text, color) {
    try { document.getElementById("statusZalando").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" }
    catch (error) { }
}

async function setDisplayInfo() {

    try {

        let cava_script_info = document.getElementsByClassName("z-navicat-header_navContent")[0]
        cava_script_info.insertAdjacentHTML("beforebegin", '<div id="CavaScripts" style="font-family: Verdana, Geneva, sans-serif; position: fixed; right:0; top: 400px; z-index: 1000; min-width: 300px; background-color: rgb(105, 105, 105); padding: 5px 10px; color: white; border-radius: 10px;">'
            + '<p>Cava Scripts Info</p> <p id="rCount">Request count: 0</p> <p id="rDelay">Delay: 0ms</p>'
            + '<p id="statusZalando">Status Zalando</p> </div>');


    } catch (error) { errorWebhook(error, "setDisplayInfo_main") }
}

function main() {
    if (cart_mode == "Fast") {
        checkStockGetCheckout()
    } else if (cart_mode == "Browser") {
        checkStockRefresh()
    }

    checklogin()
}

async function checklogin() {
    while (true) {
        await sleep(300000)
        try {
            var a = document.createElement("a");
            a.href = "https://" + country + "/myaccount/";
            var evt = document.createEvent("MouseEvents");
            evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
                true, false, false, false, 0, null);
            a.dispatchEvent(evt);
        }
        catch (error) {
            windows.open("https://" + country + "/myaccount/")
        }
    }
}

async function checkStockRefresh() {
    await sleep(parseInt(delay))
    document.location = "https://" + country + "/checkout/confirm"
}

async function checkStockGetCheckout() {

    try {

        let x = 0
        for (var i = 0; x < 2; i++) {

            setCount(i)
            sendText("Out of stock, monitoring...", "blue")
            await sleep(parseInt(delay))
            await getCheckout()
        }

    } catch (error) {
        errorWebhook(error, "checkStockGetCheckout")
        location.reload()
    }
}

async function getCheckout() {

    await fetch("https://" + country + "/checkout/confirm", {
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
        "credentials": "same-origin"
    })
        .then(response => { checkResGetCheckout(response) })
        .catch((error) => { errorWebhook(error, "getCheckout_fetch") });
    ;
}

async function checkResGetCheckout(response) {

    try {

        let status = response.status
        let result = await response.text()
        let url = response.url
        let x = ""; let etag = ""; let checkoutId = ""
        if (status == 200 || status == 201) {
            if (url == "/checkout/address" || url == "https://" + country + "/checkout/address") {
                document.location = "https://" + country + "/checkout/address"
            }
            else if (url == "/checkout/confirm" || url == "https://" + country + "/checkout/confirm") {
                sendText("getting checkout...", "blue")
                let html = document.createElement("html")
                html.innerHTML = result
                var page = html.querySelectorAll('[data-props]')[0].getAttribute('data-props')
                page = page.substring(0, page.length)
                x = JSON.parse(page)
                etag = x.model.eTag
                etag = etag.replace('"', '')
                etag = etag.replace('"', '')
                etag = '"' + '\\' + '"' + etag + '\\' + '"' + '"'
                checkoutId = x.model.checkoutId

                checkoutBuyNow(etag, checkoutId)
            }
            else if (url.includes("/welcomenoaccount/true")) {
                document.location = "https://" + country + "/login?target=/myaccount/"
            }
            else if (url != "/cart" && url != '' && url != "https://" + country + "/cart") {
                infoWebook(url, "checkResGetCheckout_2")
                document.location = "https://" + country + "/cart"
            }
        } else {
            document.location = "https://" + country + "/checkout/confirm"
        }

    } catch (error) { errorWebhook(error, "checkResGetCheckout") }
}

async function checkoutBuyNow(etag, checkoutid) {

    sendText("Checking out...", "yellow")
    let xsrf = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5)

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
        .catch((error) => { errorWebhook(error, "checkoutBuyNow_fetch") });
    ;
}

async function checkRescheckoutBuyNow(response) {

    try {

        let status = response.status
        let res = await response.text()
        let x = res
        res = JSON.parse(res)
        let url = ""
        console.log(url)
        if (status == 200 || status == 201) {

            url = res["url"]

            if (url == "/checkout/success") {
                sendText("Checked out", "green")
                document.location = 'https://' + country + '/checkout/success'
            }
            else if (url == "/cart?error=zalando.checkout.confirmation.quantity.error") {
            }
            else if (url == "/checkout/confirm?error=zalando.checkout.confirmation.quantity.error") {
            }
            else if (url.startsWith("https://checkout.payment.zalando.com/3ds")) {
                document.location = url
            }
            else if (url.startsWith("https://www.paypal.com/checkoutnow?")) {
                document.location = url
            }
            else {
                sendText("Out of stock during checkout", "red")
                errorWebhook(x, "checkRescheckoutBuyNow_1")
            }
        }
        else {
            sendText("Out of stock during checkout", "red")
            errorWebhook(x, "checkRescheckoutBuyNow_2")
            await sleep(500)
        }

    } catch (error) {
        if (error != "SyntaxError: Unexpected token < in JSON at position 0")
            errorWebhook(error, "checkRescheckoutBuyNow_3")
        await sleep(500)
    }
}

chrome.runtime.sendMessage({ greeting: "zalandodelaycart" }, function (response) {
    delay = response.farewell;
    if (delay == "0") {
        chrome.runtime.sendMessage({ greeting: "delay" }, function (response) {
            delay = response.farewell;
        });
    }
});

chrome.runtime.sendMessage({ greeting: "version" }, function (response) {
    version = response.farewell
});

chrome.runtime.sendMessage({ greeting: "discord_name" }, function (response) {
    discord_name = response.farewell
});

chrome.runtime.sendMessage({ greeting: "cartmodezalando" }, function (response) {
    cart_mode = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function (response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "zalando" }, function (response) {
            if (response.farewell == 'on') {
                main()
                setDisplayInfo()
                setDelay()
            }
        });
    }

});


