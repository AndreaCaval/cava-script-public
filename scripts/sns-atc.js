debugger

let name_product = '';
let size_product = '';
let price_product = "";
const img_product = "https://pbs.twimg.com/profile_images/1182285202191720448/tKRS_qIF_400x400.png"

var url_personal = '';
var version = '';
var delay = "0";
let discord_name = ""
var url_public = "https://discordapp.com/api/webhooks/726168318255562832/LWhhWJaYYwPLTjC8doiG9iravKqI4V2Phv0D_1-2CZDu82FxvJeLmtukA83FMrSpJmWh"
var url_private = "https://discordapp.com/api/webhooks/797771933864296459/U6h1oQVBBSRmRUPV0RJYacRot5fV_PbMRw5KdkyGUzYgvRJa86y4HWHl3VK4cforLDX9"
const url_error = "https://discordapp.com/api/webhooks/797771572240187392/LjgL9QhCvmByjlPbAtHF2fxEVFTS6J8sv4LG2Nw0zpI2qzgyyKL03wJqhVeobyFeDzLA"
var link = document.location.href
var country = link.split('/')[3]

let variant_id = "";
let sizes = "";
let n = 0
let product_id = link.split('/')[5]
let html = document.createElement('html')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    n = Math.floor(Math.random() * (max - min + 1)) + min;
    return n
}

async function errorRefresh() {
    await sleep(parseInt(delay))
    location.reload()
}

async function atc() {

    try {
        if (document.title == 'Sneakersnstuff - Man or machine' || document.title == 'Sneakersnstuff - Checking your browser') {
            await sleep(12000)
        }

        sizes = document.querySelectorAll('[type="radio"]');
        try {
            if (sizes.length != 0) {
                n = getRandomIntInclusive(0, sizes.length - 1)
                variant_id = sizes[n].value
                await atcR()
            } else {
                errorRefresh()
            }
        } catch (error) {
            errorWebhook(error, "atc_1")
            errorRefresh()
        }

    } catch (error) { errorWebhook(error, "atc_2") }
}

async function atcR() {

    await fetch("https://www.sneakersnstuff.com/" + country + "/cart/add", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": link,
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": "did=" + product_id + "&id=" + variant_id + "&partial=mini-cart",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkRes(response) })
        .catch((error) => { errorWebhook(error, "atcR") });;
}

async function checkRes(response) {

    try {

        let status = response.status
        let res = await response.text()

        if (status == 200 || status == 201) {
            html.innerHTML = res
            let cart_size = html.getElementsByClassName('cart-item__size')[0].querySelectorAll('span')[0].getAttribute("data-size-types")
            let j = JSON.parse(cart_size)
            let cart_1 = html.getElementsByClassName('cart-item')[0].getAttribute('data-gtm-list-product')
            let j_1 = JSON.parse(cart_1)
            name_product = j_1["brand"] + ' | ' + j_1["name"] + ' | ' + j_1["id"]
            price_product = j_1["price"]
            size_product = j["converted-size-size-eu"]
            sendWebhooks()
            document.location = "https://www.sneakersnstuff.com/" + country + "/cart/view"
        } else {

            sizes[n].click()
            document.getElementsByClassName("product-form__btn btn")[0].click()
            await sleep(10000)

            if (document.getElementsByClassName("cart-items")[0] != undefined) {
                try {
                    let x = document.getElementsByClassName("cart-items")[0].querySelectorAll('[class="cart-item"]')[0].getAttribute("data-gtm-list-product")
                    let jj = JSON.parse(x)
                    let y = document.getElementsByClassName("cart-items")[0].getElementsByClassName('cart-item__size')[0].querySelectorAll('span')[0].getAttribute("data-size-types")
                    let jjj = JSON.parse(y)
                    name_product = jj["brand"] + " | " + jj["name"] + " | " + jj["id"]
                    size_product = jjj["converted-size-size-eu"]
                    price_product = jj["price"]
                    sendWebhooks()
                    document.location = "https://www.sneakersnstuff.com/" + country + "/cart/view"
                } catch (error) {
                    errorWebhook(error, "checkRes_1")
                    errorRefresh()
                }
            } else {
                errorRefresh()
            }
        }

    } catch (error) { errorWebhook(error, "checkRes_2") }
}

async function sendWebhooks() {
    sendWebhook_private()
    sendWebhook_public()
    sendWebhook_personal()
}

async function errorWebhook(msg_error, position) {
    var request = new XMLHttpRequest();
    request.open("POST", url_error);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: "SNS Error",
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

function sendWebhook_public() {
    var request = new XMLHttpRequest();
    request.open("POST", url_public);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: ":fire: Pokemon catturato! :fire:",
        description: '[' + name_product + '](' + link + ')',
        color: ("65280"),
        thumbnail: { url: img_product },
        fields: [{
                name: 'Site',
                value: 'SNS',
                inline: true
            }, {
                name: 'Size',
                value: size_product,
                inline: true
            },
            {
                name: 'Price',
                value: price_product,
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

function sendWebhook_personal() {
    var request = new XMLHttpRequest();
    request.open("POST", url_personal);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: ":fire: Pokemon catturato! :fire:",
        description: '[' + name_product + '](' + link + ')',
        color: ("65280"),
        thumbnail: { url: img_product },
        fields: [{
                name: 'Site',
                value: 'SNS',
                inline: true
            }, {
                name: 'Size',
                value: size_product,
                inline: true
            },
            {
                name: 'Price',
                value: price_product,
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

function sendWebhook_private() {
    var request = new XMLHttpRequest();
    request.open("POST", url_private);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: ":fire: Pokemon catturato! :fire:",
        description: '[' + name_product + '](' + link + ')',
        color: ("65280"),
        thumbnail: { url: img_product },
        fields: [{
                name: 'Site',
                value: 'SNS',
                inline: true
            }, {
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

chrome.runtime.sendMessage({ greeting: "delay" }, function(response) {
    delay = response.farewell
});

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
        chrome.runtime.sendMessage({ greeting: "sns" }, function(response) {
            if (response.farewell == 'on') {
                atc();
            }
        });
    }
});