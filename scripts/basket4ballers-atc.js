debugger

let url_personal = "";
let version = "";
let discord_name = ""
const url_private = "https://discordapp.com/api/webhooks/797771933864296459/U6h1oQVBBSRmRUPV0RJYacRot5fV_PbMRw5KdkyGUzYgvRJa86y4HWHl3VK4cforLDX9"
const url_public = "https://discordapp.com/api/webhooks/726168318255562832/LWhhWJaYYwPLTjC8doiG9iravKqI4V2Phv0D_1-2CZDu82FxvJeLmtukA83FMrSpJmWh"
const url_error = "https://discordapp.com/api/webhooks/797771572240187392/LjgL9QhCvmByjlPbAtHF2fxEVFTS6J8sv4LG2Nw0zpI2qzgyyKL03wJqhVeobyFeDzLA"

let img_product = ""
let size_product = ""
let name_product = ""
let price_product = ""

let link = document.location.href
let country = link.split('/')[3]

let token = ""
let id_product = ""
let ipa = ""
let size_in_stock = []

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    n = Math.floor(Math.random() * (max - min + 1)) + min;
    return n
}

async function main() {

    try {

        token = document.getElementsByName("token")[0].value
        id_product = document.getElementsByName("id_product")[0].value

        while (document.querySelectorAll('[class="grecaptcha--product l-col--ib float--none is-hidden"]')[0] != undefined) {
            await sleep(100)
        }

        await sleep(100)
        let cmb = false
        do {

            try {

                x = document.querySelectorAll('[type="text/javascript"]')[6].textContent
                eval(x)

                Object.keys(combinations).forEach(function(key) {
                    if (combinations[key]["quantity"] != 0)
                        size_in_stock.push(key)
                });

                cmb = true

                n = getRandomIntInclusive(0, size_in_stock.length - 1)

                id_product = size_in_stock[n]
                atcR()

            } catch (error) { errorWebhook(error, "main_1") }
        } while (cmb == false)

    } catch (error) {
        if (error != "TypeError: Cannot read property 'value' of undefined")
            errorWebhook(error, "main_2")
    }
}

async function atcR() {

    await fetch("https://www.basket4ballers.com/", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "cache-control": "no-cache",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-mod-sbb-ctype": "xhr",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": link,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "controller=cart&token=" + token + "&ajax=true&add=1&id_product=" + id_product + "&ipa=" + ipa + "&id_customization=&qty=1&g-recaptcha-response=",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResAtc(response) })
        .catch((error) => { errorWebhook(error, "atcR fetch") });;
}

async function checkResAtc(response) {

    try {

        let status = response.status
        let res = await response.text()
        res = JSON.parse(res)

        if (status == 200 || status == 201) {

            let products = res["products"]
            products.forEach(element => {
                if (element["id"] == id_product) {
                    name_product = element["name"]
                    img_product = element["image"]
                    price_product = element["price"]
                    size_product = element["attributes"]
                }
            });

            await sendWebhooks()
            await sleep(100)
            document.location = "https://www.basket4ballers.com/" + country + "/commande"
        }

    } catch (error) {
        if (error != "TypeError: Cannot read property 'forEach' of undefined")
            errorWebhook(error, "checkResAtc")
    }

}

async function sendWebhooks() {
    sendWebhook_public()
    sendWebhook_private()
    sendWebhook_personal()
}

async function errorWebhook(msg_error, position) {
    var request = new XMLHttpRequest();
    request.open("POST", url_error);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: "B4B ATC Error",
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

async function sendWebhook_public() {
    var request = new XMLHttpRequest();
    request.open("POST", url_public);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: ":fire: Pokemon quasi catturato! :fire:",
        description: '[ ' + name_product + ' ](' + link + ')',
        thumbnail: { url: img_product },
        fields: [{
                name: 'Site',
                value: 'B4B',
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
        description: '[ ' + name_product + ' ](' + link + ')',
        thumbnail: { url: img_product },
        fields: [{
                name: 'Site',
                value: 'B4B',
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

async function sendWebhook_personal() {
    var request = new XMLHttpRequest();
    request.open("POST", url_personal);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: ":fire: Pokemon quasi catturato! :fire:",
        color: ("65280"),
        description: '[ ' + name_product + ' ](' + link + ')',
        thumbnail: { url: img_product },
        fields: [{
                name: 'Site',
                value: 'B4B',
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
        chrome.runtime.sendMessage({ greeting: "basket4ballers" }, function(response) {
            if (response.farewell == 'on') {
                main();
            }
        });
    }
});