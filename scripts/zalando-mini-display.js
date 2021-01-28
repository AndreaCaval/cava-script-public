debugger

let url_errors = "https://discordapp.com/api/webhooks/797771572240187392/LjgL9QhCvmByjlPbAtHF2fxEVFTS6J8sv4LG2Nw0zpI2qzgyyKL03wJqhVeobyFeDzLA"
let versions = "";
let discord_name = "";

var size = [];
var countryy = document.location.href.split('/')[2]
let frsx = ""


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    n = Math.floor(Math.random() * (max - min + 1)) + min;
    return n
}

async function setCount(i) {
    try { document.getElementById('rCount').innerHTML = "Request count: " + i } catch (error) { console.log(error) }
}

async function errorWebhook(msg, position) {
    var request = new XMLHttpRequest();
    request.open("POST", url_errors);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: "Zalando Mini Display Error",
        color: ("16744192"),
        fields: [{
                name: 'Message',
                value: "```" + msg + "```",
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
            text: 'Cava-Scripts ' + versions + ' | ' + String(time),
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
    try {

        await sleep(250)
        await searchSize()
        await sleep(250)
        await miniDisplays()

    } catch (error) { errorWebhook(error, "main") }
}

async function searchSize() {

    try {

        if (countryy.split('.')[1] == 'zalando') {

            try {

                var s = document.getElementById('z-vegas-pdp-props').textContent
                s = s.slice(8, -2)
                var obj = JSON.parse(s)
                var sizes = obj[0].model.articleInfo.units
                for (var i = 0; i < sizes.length; i++) {
                    size.push(sizes[i].id)
                    if (drop_mode == "on") {
                        if (sizes[i]["available"] == true) {
                            console.log("size available")
                            size_in_stock.push(sizes[i].id)
                        }
                    }
                }

            } catch (error) {
                if (error != "TypeError: Cannot read property 'textContent' of null")
                    errorWebhook(error, "searchSize_1")
            }
        }

    } catch (error) { errorWebhook(error, "searchSize_2") }


}

async function miniDisplays() {
    try {
        var btn1 = document.getElementsByClassName("z-navicat-header_navContent")[0]
        btn1.insertAdjacentHTML("beforebegin", '<div id="CavaScripts" style="font-family: Verdana, Geneva, sans-serif; position: fixed; right:0; top: 500px; z-index: 1000; min-width: 300px; background-color: rgb(105, 105, 105); padding: 5px 10px; color: white; border-radius: 10px;">' +
            '<p>Cava Scripts Info</p> <p id="rCount">Request count: 0</p>' +
            '<input style="text-align: center; background-color:black; width:120px; float:right; margin:5px;" id="btn_gen_coupon" type="submit" value="GEN COUPON"> ' +
            '<input style="text-align: center; background-color:black; width:120px; float:left; margin:5px;" id="btn_atc_fast" type="submit" value="ATC FAST"></div>');


        var btn_atc_fast = document.getElementById('btn_atc_fast')
        btn_atc_fast.addEventListener("click", function() {
            try { atcFast() } catch (error) {
                errorWebhook(error, "btn_atc_fast")
            }
        });

        let btn_gen_coupon = document.getElementById('btn_gen_coupon')
        btn_gen_coupon.addEventListener("click", function() {
            try { window.open("https://" + countryy + "/zalando-newsletter/") } catch (error) {
                errorWebhook(error, "btn_gen_coupon")
            }
        });

    } catch (error) {
        if (error != "TypeError: Cannot read property 'insertAdjacentHTML' of undefined")
            errorWebhook(error, "miniDisplay")
    }
}

async function atcFast() {

    try { await atc() } catch (error) { errorWebhook(error, "atcFast") }

    window.open("https://" + countryy + "/checkout/confirm")
}

async function atc() {

    try {

        if (size != "") {
            frsx = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5)

            for (var i = 0; i < size.length; i++) {
                await sleep(200)
                atcR(size[i], i)
            }
        }

    } catch (error) { errorWebhook(error, "atcSavedSku") }
}

async function atcR(id_prodotto, i) {

    console.log("ATC")
    await fetch("https://" + countryy + "/api/graphql/", {
            "headers": {
                "accept": "*//*",
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
        .then(response => { checkAtcRes(response, i) })
        .catch((error) => {
            if (error != "TypeError: Failed to fetch")
                errorWebhook(error, "atcR_fetch")
        });;
}

async function checkAtcRes(response, i) {

    try {

        let status = response.status
        let res = await response.text()
        let x = res
        res = JSON.parse(res)
        let message = res[0]["data"]["addToCart"]
        let errors = res[0]["errors"][0]

        if (status == 200 || status == 201) {
            if (message != null) {
                setCount(i)
            } else {
                if (errors["message"].includes("Received Status: 429 from Cart:") && errors["message"].includes("TOO_MANY_REQUESTS")) {
                    console.log("Error 429 Cart Too Many Requests")
                } else if (errors["message"] == "Received Status: 429 from Cart: " || errors["message"] == "Received Status: 429 from Cart:") {
                    console.log("Received Status: 429 from Cart:")
                } else {
                    errorWebhook(errors["message"], "checkAtcRes_1")
                }
            }
        } else {
            console.log("atc error")
        }

    } catch (error) {
        if (error != "SyntaxError: Unexpected token < in JSON at position 0")
            errorWebhook(error, "checkAtcRes_2")
    }
}

chrome.runtime.sendMessage({ greeting: "discord_name" }, function(response) {
    discord_name = response.farewell;
});

chrome.runtime.sendMessage({ greeting: "version" }, function(response) {
    versions = response.farewell;
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