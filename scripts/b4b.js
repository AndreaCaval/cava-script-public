debugger

const site = "B4B"

let link_product = document.location.href
let country = link_product.split('/')[3]

let size_range = "random"

let status_aco = ""
let delay = "0";

let img_product = ""
let size_product = ""
let name_product = ""
let price_product = ""

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

function arreyMixer(array) {

    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function textBox() {
    let color_aco = "";
    if (status_aco == "off") { color_aco = "red" } else { color_aco = "green" }
    try {
        var btn1 = document.getElementsByClassName("main-menu cf")[0]
        btn1.insertAdjacentHTML("beforebegin", '<div id="CavaScripts" style="font-family: Verdana, Geneva, word-wrap: break-word; sans-serif; position: fixed; right:0; top: 500px; z-index: 1000; min-width: 10px; max-width: 500px; background-color: lightgrey; padding: 5px 10px; color: black; border-radius: 10px;">' +
            ' <p id="statusB4b">Status basket4ballers</p> ' +
            " <p>ACO: <span style='font-size:20px; color:" + color_aco + ";'>" + status_aco + "</span></p></div>");
    } catch (error) {
        if (error != "TypeError: Cannot read property 'parentNode' of undefined")
            errorWebhooks(error, "textBox")
    }
}

async function sendText(text, color) {
    try { document.getElementById("statusB4b").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) {}
}

async function errorRefresh() {
    sendText("Sleep " + delay + "ms...", "blue")
    await sleep(parseInt(delay))
    location.reload()
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

                let y = ""
                let x = document.querySelectorAll('[type="text/javascript"]')
                x.forEach(element => {
                    if (element.textContent.includes("FancyboxI18nClose")) {
                        y = element.textContent
                    }
                });
                if (y != "") {
                    eval(y)
                    console.log(combinations)
                    Object.keys(combinations).forEach(function(key) {
                        if (combinations[key]["quantity"] != 0)
                            size_in_stock.push(key + "-" + combinations[key]["attributes_values"][15])
                    });

                    cmb = true

                    size_in_stock = arreyMixer(size_in_stock)

                    if (size_range == "random") {
                        n = getRandomIntInclusive(0, size_in_stock.length - 1)
                        ipa = size_in_stock[n].split('-')[0]
                    } else {
                        if (size_range.includes('-')) {
                            for (let index = 0; index < size_in_stock.length; index++) {
                                if (size_in_stock[index].split('-')[1] >= size_range.split('-')[0] && size_in_stock[index].split('-')[1] <= size_range.split('-')[1]) {
                                    ipa = size_in_stock[index].split('-')[0]
                                    break
                                }
                            }
                        } else {
                            for (let index = 0; index < size_in_stock.length; index++) {
                                if (size_in_stock[index].split('-')[1] == size_range) {
                                    ipa = size_in_stock[index].split('-')[0]
                                    break
                                }
                            }
                        }
                    }
                    if (ipa != "")
                        atcR()
                }

            } catch (error) { errorWebhook(error, "main_1") }
        } while (cmb == false)

    } catch (error) {
        if (error != "TypeError: Cannot read property 'value' of undefined")
            errorWebhook(error, "main_2")
    }
}

async function atcR() {

    sendText("Trying atc fast...", "blue")
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
            "referrer": link_product,
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
        } else {
            sendText("Error Carting...", "blue")
            errorRefresh()
        }

    } catch (error) {
        if (error != "TypeError: Cannot read property 'forEach' of undefined")
            errorWebhook(error, "checkResAtc")
    }

}

async function sendWebhooks() {
    chrome.runtime.sendMessage({ greeting: "checkout_webhook&-&" + name_product + "&-&" + link_product + "&-&" + img_product + "&-&" + site + "&-&" + size_product + "&-&" + price_product })
}

async function errorWebhook(error, position) {
    chrome.runtime.sendMessage({ greeting: "error_webhook&-&" + site + "&-&" + error + "&-&" + position })
}

chrome.runtime.sendMessage({ greeting: "delay" }, function(response) {
    delay = response.farewell
});

chrome.runtime.sendMessage({ greeting: "basket4ballers" }, function(response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "basket4ballers_size" }, function(response) {
    if (response.farewell != "off")
        size_range = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "basket4ballers" }, function(response) {
            if (response.farewell == 'on') {
                main();
            }
        });
        textBox()
    }
});