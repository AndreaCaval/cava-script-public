debugger

const site = "Naked"

let link = document.location.href
let country = link.split('/')[3]

let size_range = "random"

let status_aco = "";
let delay = "0";

let name_product = '';
let size_product = '';
let price_product = "";
let link_product = link
const img_product = "https://pbs.twimg.com/profile_images/582179018419482624/RppHUjBa_400x400.jpg"

let variant_id = "";
let _AntiCsrfToken = "";
let n = 0;
let sizes = "";
let size = "";
let html = document.createElement('html');

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
        var btn1 = document.getElementsByClassName("navbar")[0]
        btn1.insertAdjacentHTML("beforebegin", '<div id="CavaScripts" style="font-family: Verdana, Geneva, word-wrap: break-word; sans-serif; position: fixed; right:0; top: 500px; z-index: 1000; min-width: 10px; max-width: 500px; background-color: lightgrey; padding: 5px 10px; color: black; border-radius: 10px;">' +
            ' <p id="statusNaked">Status Naked</p> ' +
            " <p>ACO: <span style='font-size:20px; color:" + color_aco + ";'>" + status_aco + "</span></p></div>");
    } catch (error) {
        if (error != "TypeError: Cannot read property 'parentNode' of undefined")
            errorWebhooks(error, "textBox")
    }
}

async function sendText(text, color) {
    try { document.getElementById("statusNaked").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) {}
}

async function errorRefresh() {
    sendText("Sleep " + delay + "ms...", "blue")
    await sleep(parseInt(delay))
    location.reload()
}

async function atc() {

    sizes = document.querySelectorAll('[data-target="#product-form-select"]');
    sizes = Array.prototype.slice.call(sizes)
    sizes = arreyMixer(sizes)

    try {
        _AntiCsrfToken = document.querySelectorAll('[name="_AntiCsrfToken"]')[0].value

        if (sizes.length != 0) {

            if (size_range == "random") {
                do {
                    n = getRandomIntInclusive(0, sizes.length - 1)
                } while (sizes[n].getAttribute("class") == "dropdown-item disabled")
                variant_id = sizes[n].getAttribute('data-value')
            } else {
                if (size_range.includes('-')) {
                    for (let index = 0; index < sizes.length; index++) {
                        if (sizes[index].getAttribute("class") != "dropdown-item disabled" && sizes[index].textContent.replaceAll('\n', '') >= size_range.split('-')[0] && sizes[index].textContent.replaceAll('\n', '') <= size_range.split('-')[1]) {
                            variant_id = sizes[index].getAttribute('data-value')
                            break
                        }
                    }
                } else {
                    for (let index = 0; index < sizes.length; index++) {
                        console.log(sizes[index].textContent.replaceAll('\n', ''))
                        if (sizes[index].getAttribute("class") != "dropdown-item disabled" && sizes[index].textContent.replaceAll('\n', '') == size_range) {
                            variant_id = sizes[index].getAttribute('data-value')
                            break
                        }
                    }
                }
            }

            if (variant_id != "")
                await atcR()

        } else {
            errorRefresh()
        }
    } catch (error) {
        if (error != "TypeError: Cannot read property 'value' of undefined")
            errorWebhooks(error)
        errorRefresh()
    }
}

async function atcR() {

    sendText("Trying atc fast...", "blue")
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
        .catch((error) => { console.log(error) });;
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
        document.location = "https://www.nakedcph.com/" + country + "/cart/view"
    } else {

        sizes[n].click()
        document.getElementsByClassName("btn btn-primary product-form-submit")[0].click()

        await sleep(5000)
        if (document.getElementsByClassName("mc-item-brand")[0] != undefined) {
            try {
                name_product = document.getElementsByClassName("mc-item-brand")[0].textContent.replaceAll("\n", "") + " | " + document.getElementsByClassName("mc-item-name")[0].textContent.replaceAll("\n", "")
                size_product = document.getElementsByClassName("mc-item-size")[0].textContent.replaceAll("\n", "")
                price_product = document.getElementsByClassName("price-container")[0].textContent.replaceAll("\n", "")
                sendWebhooks()
                document.location = "https://www.nakedcph.com/" + country + "/cart/view"
            } catch (error) {
                if (error != "TypeError: Cannot read property 'value' of undefined")
                    errorWebhooks(error)
                errorRefresh()
            }
        } else {
            errorRefresh()
        }
    }
}

async function sendWebhooks() {
    chrome.runtime.sendMessage({ greeting: "checkout_webhook&-&" + name_product + "&-&" + link_product + "&-&" + img_product + "&-&" + site + "&-&" + size_product + "&-&" + price_product })
}

async function errorWebhooks(error, position) {
    chrome.runtime.sendMessage({ greeting: "error_webhook&-&" + site + "&-&" + error + "&-&" + position })
}

async function resInfoWebook(message, position) {
    chrome.runtime.sendMessage({ greeting: "info_webhook&-&" + site + "&-&" + message + "&-&" + position })
}

chrome.runtime.sendMessage({ greeting: "delay" }, function(response) {
    delay = response.farewell
});

chrome.runtime.sendMessage({ greeting: "naked" }, function(response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "naked_size" }, function(response) {
    if (response.farewell != "off")
        size_range = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "naked" }, function(response) {
            if (response.farewell == 'on') {
                atc();
            }
        });
        textBox()
    }
});