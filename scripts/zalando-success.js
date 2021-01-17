debugger

var img = ''; var nomep = ''; var sizep = ''; var email = ''; var version = ''; var sku = ''; var quantity = ''; var url_personal = ""; let discord_name = ""
var url_private = "https://discordapp.com/api/webhooks/797771933864296459/U6h1oQVBBSRmRUPV0RJYacRot5fV_PbMRw5KdkyGUzYgvRJa86y4HWHl3VK4cforLDX9"
var url_public = "https://discordapp.com/api/webhooks/726168318255562832/LWhhWJaYYwPLTjC8doiG9iravKqI4V2Phv0D_1-2CZDu82FxvJeLmtukA83FMrSpJmWh"
var zalandoUrl = location.href.split('/')[2]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function foundData() {
    var x = 0
    img = document.getElementsByClassName('z-2-product-image_image')[0].src;
    quantity = document.getElementsByClassName('z-2-product-image_image').length;
    nomep = document.getElementsByClassName('z-text z-coast-fjord-body-bold z-text-body z-text-black')[0].textContent;
    nomep2 = document.getElementsByClassName('z-coast-fjord_text-ellipsis')[0].textContent;
    nomep = nomep + " " + nomep2
    if (parseInt(quantity) != 1) {
        for (var i = 0; i < quantity; i++) {
            sizep += document.getElementsByClassName('z-text z-text-block z-text-body z-text-black')[6 + x].textContent + ",";
            x += 2
        }
    }
    else {
        sizep = document.getElementsByClassName('z-text z-text-block z-text-body z-text-black')[6].textContent;
    }
    email = document.querySelectorAll('[aria-live="polite"]')[0].textContent;
    n = email.split(" ").splice(-1)
    email = n[n.length - 1]

    await sendWebhook_public()
    await sendWebhook_private()

    if (sku != "")
        atc()

    await sleep(1000)
    document.location = 'https://' + zalandoUrl + '/cart'
}

async function atc() {

    var frsx = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5)
    var size = sku.split(';')

    for (var i = 0; i < size.length; i++) {
        id_prodotto = size[i]
        fetch("https://" + zalandoUrl + "/api/graphql/", {
            "headers": {
                "accept": "*/*",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/json",
                "dpr": "1",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36',
                "x-xsrf-token": frsx,
                "x-zalando-intent-context": "navigationTargetGroup=WOMEN"
            },
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": "[{\"id\":\"e7f9dfd05f6b992d05ec8d79803ce6a6bcfb0a10972d4d9731c6b94f6ec75033\",\"variables\":{\"addToCartInput\":{\"productId\":\"" + id_prodotto + "\",\"clientMutationId\":\"addToCartMutation\"}}}]",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
            .then(response => { if (response.status) { console.log('atc success') } })
            .catch((error) => { console.log(error) });
        ;

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
        title: ":fire: Pokemon catturato! :fire:",
        description: nomep,
        color: ("65280"),
        thumbnail: {
            url: img,
        },
        fields: [
            {
                name: 'Size',
                value: sizep,
                inline: true
            },
            {
                name: 'Quantity',
                value: quantity,
                inline: true
            },
            {
                name: 'Site',
                value: 'Zalando',
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
        title: ":fire: Pokemon catturato! :fire:",
        description: nomep,
        color: ("65280"),
        thumbnail: {
            url: img,
        },
        fields: [
            {
                name: 'Size',
                value: sizep,
                inline: true
            },
            {
                name: 'Quantity',
                value: quantity,
                inline: true
            },
            {
                name: 'Site',
                value: 'Zalando',
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
        title: ":fire: Pokemon catturato! :fire:",
        description: nomep,
        color: ("65280"),
        thumbnail: {
            url: img,
        },
        fields: [
            {
                name: 'Size',
                value: sizep,
                inline: true
            },
            {
                name: 'Quantity',
                value: quantity,
                inline: true
            },
            {
                name: '\u200B',
                value: '\u200B',
                inline: true
            },
            {
                name: 'Profile',
                value: '||' + email + '||',
                inline: true
            },
            {
                name: 'Site',
                value: 'Zalando',
                inline: true
            },
            {
                name: '\u200B',
                value: '\u200B',
                inline: true
            },
        ],
        footer: {
            text: 'Cava-Scripts ' + version + ' | ' + String(time),
            icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Pok%C3%A9ball.png/480px-Pok%C3%A9ball.png',
        },
    }

    var params = {
        username: "",
        embeds: [myEmbed]
    }

    request.send(JSON.stringify(params));

}

chrome.runtime.sendMessage({ greeting: "successZ" });

chrome.runtime.sendMessage({ greeting: "version" }, function (response) {
    version = response.farewell
});

chrome.runtime.sendMessage({ greeting: "webhook" }, function (response) {
    url_private = response.farewell
});

chrome.runtime.sendMessage({ greeting: "discord_name" }, function (response) {
    discord_name = response.farewell
});

chrome.runtime.sendMessage({ greeting: "skuzalando" }, function (response) {
    sku = response.farewell
});

foundData()





