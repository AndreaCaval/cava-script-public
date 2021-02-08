debugger

let url_personal = '';
let version = '';
let discord_name = ""
let url_public = "https://discordapp.com/api/webhooks/726168318255562832/LWhhWJaYYwPLTjC8doiG9iravKqI4V2Phv0D_1-2CZDu82FxvJeLmtukA83FMrSpJmWh"
let url_private = "https://discordapp.com/api/webhooks/797771933864296459/U6h1oQVBBSRmRUPV0RJYacRot5fV_PbMRw5KdkyGUzYgvRJa86y4HWHl3VK4cforLDX9"
let url_error = "https://discordapp.com/api/webhooks/797771572240187392/LjgL9QhCvmByjlPbAtHF2fxEVFTS6J8sv4LG2Nw0zpI2qzgyyKL03wJqhVeobyFeDzLA"

let linkk = document.location.href
let countryy = linkk.split('/')[3]
let productVariantIdAjax = ""

let size_product = "";
let sku_product = "";
let price_product = ""

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    n = Math.floor(Math.random() * (max - min + 1)) + min;
    return n //Il max è incluso e il min è incluso 
}

async function sendText(text, color) {
    document.getElementById("statusKickz").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>"
}

async function checkStock() {
    try {
        let x = 0 //0 eu, 1 uk, 2 us; 
        let f = "getSizeInfo"
        let div = document.getElementsByClassName("chooseSizeContainer")[x]
        let sizes = div.getElementsByClassName("chooseSizeLinkContainer active")
        let n = getRandomIntInclusive(0, sizes.length - 1)
        let size = sizes[n].querySelectorAll('a')[0].getAttribute('onclick')
        let y = size.indexOf('(')
        f += size.substring(y)
        eval(f)
    } catch (error) {}

}

async function getSizeInfo(a, size_id_product, price_1, price_2, b, price_saved, size_p, c, d, e, f, g, h, stock_size_product, size_product_type, sku_p, i, l, m, n, o) {
    productVariantIdAjax = size_id_product
    size_product = size_p
    sku_product = sku_p
    price_product = price_1
    img_product = document.querySelectorAll("[class='productDetailPic']")[0].src
    atcR()
}

async function atcR() {
    let ttoken = document.querySelectorAll('[name="ttoken"]')[0].value

    await fetch("https://www.kickz.com/" + countryy + "/cart/ajaxAdd", {
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
            "referrerPolicy": "same-origin",
            "body": "productVariantIdAjax=" + productVariantIdAjax + "&ttoken=" + ttoken,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkRes(response) })
        .catch((error) => { console.log(error) });;
}

async function checkRes(response) {
    try {
        sendText("Carting...", "blue")
        let status = response.status
        let res = await response.text()
        res = JSON.parse(res)
        let isError = ""
        let statusCode = ""

        if (status == 200 || status == 201) {
            isError = res["isError"]
            statusCode = res["statusCode"]
            if (statusCode != "500" && isError != true) {
                sendText("Carted", "green")
                sendWebhooks()

                open("https://www.kickz.com/" + countryy + "/cart", "_self")
            } else {
                sendText("Error carting", "red")
            }
        } else {
            sendText("Error carting", "red")
        }
    } catch (error) {}
}

async function sendWebhooks() {
    sendWebhook_public()
    sendWebhook_private()
    sendWebhook_personal()
}

async function sendWebhook_public() {
    var request = new XMLHttpRequest();
    request.open("POST", url_public);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: ":fire: Pokemon quasi catturato! :fire:",
        description: '[' + sku_product + '](' + linkk + ')',
        color: ("65280"),
        thumbnail: { url: img_product },
        fields: [{
                name: 'Site',
                value: 'Kickz',
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

async function sendWebhook_personal() {
    var request = new XMLHttpRequest();
    request.open("POST", url_personal);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: ":fire: Pokemon quasi catturato! :fire:",
        description: '[' + sku_product + '](' + linkk + ')',
        color: ("65280"),
        thumbnail: { url: img_product },
        fields: [{
                name: 'Site',
                value: 'Kickz',
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
        title: ":fire: Pokemon quasi catturato! :fire:",
        description: '[' + sku_product + '](' + linkk + ')',
        color: ("65280"),
        thumbnail: { url: img_product },
        fields: [{
                name: 'Site',
                value: 'Kickz',
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
        chrome.runtime.sendMessage({ greeting: "kickz" }, function(response) {
            if (response.farewell == 'on') {
                checkStock();
            }
        });
    }
});