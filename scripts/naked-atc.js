debugger

let name_product = ''; let size_product = ''; let price_product = "";
const img_product = "https://pbs.twimg.com/profile_images/582179018419482624/RppHUjBa_400x400.jpg"

let url_personal = ''; let version = ''; let delay = "0"; let discord_name = ""
const url_public = "https://discordapp.com/api/webhooks/726168318255562832/LWhhWJaYYwPLTjC8doiG9iravKqI4V2Phv0D_1-2CZDu82FxvJeLmtukA83FMrSpJmWh"
var url_private = "https://discordapp.com/api/webhooks/797771933864296459/U6h1oQVBBSRmRUPV0RJYacRot5fV_PbMRw5KdkyGUzYgvRJa86y4HWHl3VK4cforLDX9"
const url_error = "https://discordapp.com/api/webhooks/797771572240187392/LjgL9QhCvmByjlPbAtHF2fxEVFTS6J8sv4LG2Nw0zpI2qzgyyKL03wJqhVeobyFeDzLA"
const link = document.location.href
const country = link.split('/')[3]

let variant_id = ""; let _AntiCsrfToken = ""
let n = 0; let sizes = ""
let html = document.createElement('html')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    n = Math.floor(Math.random() * (max - min + 1)) + min;
    return n//Il max è incluso e il min è incluso 
}

async function errorRefresh() {
    await sleep(parseInt(delay))
    location.reload()
}

async function atc() {

    try {
        _AntiCsrfToken = document.querySelectorAll('[name="_AntiCsrfToken"]')[0].value
        sizes = document.querySelectorAll('[data-target="#product-form-select"]');

        if (sizes.length != 0) {
            do {
                n = getRandomIntInclusive(0, sizes.length - 1)
            } while (sizes[n].getAttribute("class") == "dropdown-item disabled")
            variant_id = sizes[n].getAttribute('data-value')
            await atcR()
        }
        else {
            errorRefresh()
        }
    }
    catch (error) {
        errorWebhook(error)
        errorRefresh()
    }
}

async function atcR() {

    await fetch("https://www.nakedcph.com/" + country + "/cart/add", {
        "headers": {
            "accept": "*/*",
            "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-anticsrftoken": "2c6dba8398f04cbdb669e2b2b97f7d87",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": link,
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "_AntiCsrfToken=" + _AntiCsrfToken + "&id=" + variant_id + "&partial=ajax-cart",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    })
        .then(response => { checkRes(response) })
        .catch((error) => { console.log(error) });
    ;
}

async function checkRes(response) {

    let status = response.status
    let res = await response.text()

    if (status == 200 || status == 201) {
        html.innerHTML = res
        name_product = html.getElementsByClassName('cart-item__brand')[0].textContent.replaceAll("\n", '') + ' | ' + html.getElementsByClassName('cart-item__name')[0].textContent.replaceAll("\n", '')
        size_product = html.getElementsByClassName('cart-item__size')[0].textContent.replaceAll("\n", "")
        price_product = html.getElementsByClassName('cart-item__price')[0].textContent.replaceAll("\n", "")
        sendWebhooks()
    }
    else {

        sizes[n].click()
        document.getElementsByClassName("btn btn-primary product-form-submit")[0].click()

        await sleep(5000)
        if (document.getElementsByClassName("mc-item-brand")[0] != undefined) {
            try {
                name_product = document.getElementsByClassName("mc-item-brand")[0].textContent.replaceAll("\n", "") + " | " + document.getElementsByClassName("mc-item-name")[0].textContent.replaceAll("\n", "")
                size_product = document.getElementsByClassName("mc-item-size")[0].textContent.replaceAll("\n", "")
                price_product = document.getElementsByClassName("price-container")[0].textContent.replaceAll("\n", "")
                sendWebhooks()
            }
            catch (error) {
                errorWebhook(error)
                errorRefresh
            }
        }
        else {
            errorRefresh()
        }
    }
}

async function sendWebhooks() {
    sendWebhook_private()
    sendWebhook_personal()
    sendWebhook_public()
}

async function errorWebhook(msg_error) {
    var request = new XMLHttpRequest();
    request.open("POST", url_error);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: "Naked Error",
        color: ("16744192"),
        fields: [
            {
                name: 'Message',
                value: '```' + msg_error + '```',
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
        description: name_product,
        color: ("65280"),
        thumbnail: { url: img_product },
        fields: [
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
                name: 'Site',
                value: 'Naked',
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
        description: name_product,
        color: ("65280"),
        thumbnail: { url: img_product },
        fields: [
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
                name: 'Site',
                value: 'Naked',
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
        description: name_product,
        color: ("65280"),
        thumbnail: { url: img_product },
        fields: [
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
                name: 'Site',
                value: 'Naked',
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

chrome.runtime.sendMessage({ greeting: "delay" }, function (response) {
    delay = response.farewell
});

chrome.runtime.sendMessage({ greeting: "version" }, function (response) {
    version = response.farewell
});

chrome.runtime.sendMessage({ greeting: "webhook" }, function (response) {
    url_personal = response.farewell
});

chrome.runtime.sendMessage({ greeting: "discord_name" }, function (response) {
    discord_name = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function (response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "naked" }, function (response) {
            if (response.farewell == 'on') {
                atc();
            }
        });
    }
});

