debugger

const site = "Sns"

let link = document.location.href
let country = link.split('/')[3]

let size_range = "random"

let status_aco = "";
let delay = "0";

let name_product = '';
let size_product = '';
let price_product = "";
let link_product = link
const img_product = "https://pbs.twimg.com/profile_images/1182285202191720448/tKRS_qIF_400x400.png"

let variant_id = "";
let sizes = "";
let size = "";
let n = 0;
let product_id = link.split('/')[5];
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
        var btn1 = document.getElementsByClassName("header")[0]
        btn1.insertAdjacentHTML("beforebegin", '<div id="CavaScripts" style="font-family: Verdana, Geneva, word-wrap: break-word; sans-serif; position: fixed; right:0; top: 500px; z-index: 1000; min-width: 10px; max-width: 500px; background-color: lightgrey; padding: 5px 10px; color: black; border-radius: 10px;">' +
            ' <p id="statusSns">Status sns</p> ' +
            " <p>ACO: <span style='font-size:20px; color:" + color_aco + ";'>" + status_aco + "</span></p></div>");
    } catch (error) {
        if (error != "TypeError: Cannot read property 'parentNode' of undefined" && error != "TypeError: Cannot read property 'insertAdjacentHTML' of undefined")
            errorWebhooks(error, "textBox")
    }
}

async function sendText(text, color) {
    try { document.getElementById("statusSns").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) {}
}

async function errorRefresh() {
    sendText("Sleep " + delay + "ms...", "blue")
    await sleep(parseInt(delay))
    location.reload()
}

async function atc() {

    while (document.title == 'Sneakersnstuff - Man or machine' || document.title == 'Sneakersnstuff - Checking your browser') {
        await sleep(1000)
    }

    sizes = document.getElementsByClassName("product-sizes__label");
    sizes = Array.prototype.slice.call(sizes)
    sizes = arreyMixer(sizes)

    try {
        if (sizes.length != 0) {
            if (size_range == "random") {
                n = getRandomIntInclusive(0, sizes.length - 1)
                variant_id = sizes[n].getAttribute("for").split('-')[1]
            } else {
                if (size_range.includes('-')) {
                    size_1 = parseFloat(size_range.split('-')[0])
                    size_2 = parseFloat(size_range.split('-')[1])
                    for (let index = 0; index < sizes.length; index++) {
                        size = sizes[index].getAttribute("data-size-types")
                        size = JSON.parse(size)
                        size = parseFloat(size["converted-size-size-eu"])
                        if (size >= size_1 && size <= size_2) {
                            variant_id = sizes[index].getAttribute("for").split('-')[1]
                            break
                        }
                    }
                } else {
                    for (let index = 0; index < sizes.length; index++) {
                        size = sizes[index].getAttribute("data-size-types")
                        size = JSON.parse(size)
                        if (parseFloat(size["converted-size-size-eu"]) == parseFloat(size_range)) {
                            variant_id = sizes[index].getAttribute("for").split('-')[1]
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
        errorWebhooks(error)
        errorRefresh()
    }
}

async function atcR() {

    sendText("Trying atc fast...", "blue")
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
        .catch((error) => { console.log(error) });;
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

            sendText("Error, Trying atc normal...", "blue")
            sizes[n].click()
            document.getElementsByClassName("product-form__btn btn")[0].click()

            //if captcha on while()

            await sleep(5000)

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
                    errorWebhooks(error)
                    errorRefresh()
                }
            } else {
                errorRefresh()
            }
        }
    } catch (error) { errorWebhooks(error, "checkRes") }
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

chrome.runtime.sendMessage({ greeting: "sns" }, function(response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "sns_size" }, function(response) {
    if (response.farewell != "off")
        size_range = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "sns" }, function(response) {
            if (response.farewell == 'on') {
                atc();
            }
        });
        textBox()
    }
});