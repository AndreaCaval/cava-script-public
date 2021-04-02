//debugger

const site = "Woodwood"

let link = document.location.href
let country = link.split('/')[3]

let size_range = "random"
let mode = ""

let status_aco = "";
let delay = "0";

let name_product = '';
let size_product = '';
let price_product = "";
let link_product = link
const img_product = "https://d353r0i7qv3gvw.cloudfront.net/89/37889/stage-mobile/6295998.jpg"

let variant_id = "";
let size_in_stock = []
let sizes = "";
let size = "";
let n = 0;
let product_id = link.split('/')[5];
let html = document.createElement('html');

let id_captcha = ""

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

function hasNumber(myString) {
    return /\d/.test(myString);
}

function textBox() {
    let color_aco = "";
    if (status_aco == "off") { color_aco = "red" } else { color_aco = "green" }
    try {
        let btn1 = document.getElementsByClassName("header")[0]
        btn1.insertAdjacentHTML("beforebegin", '<div id="CavaScripts" style="font-family: Verdana, Geneva, word-wrap: break-word; sans-serif; position: fixed; right:0; top: 500px; z-index: 1000; min-width: 10px; max-width: 500px; background-color: lightgrey; padding: 5px 10px; color: black; border-radius: 10px;">' +
            ' <br> <p id="statusWoodwood">Status Woodwood</p> ' +
            " <p>ACO: <span style='font-size:20px; color:" + color_aco + ";'>" + status_aco + "</span></p></div>");
    } catch (error) {
        if (error != "TypeError: Cannot read property 'parentNode' of undefined" && error != "TypeError: Cannot read property 'insertAdjacentHTML' of undefined")
            errorWebhooks(error, "textBox")
    }
}

async function sendText(text, color) {
    try { document.getElementById("statusWoodwood").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) {}
}

async function errorRefresh() {
    await sleep(parseInt(delay))
    location.reload()
}


async function main() {

    while (document.title == 'Sneakersnstuff - Man or machine' || document.title == 'Sneakersnstuff - Checking your browser') {
        await sleep(1000)
    }

    sizes = document.getElementsByClassName("product-sizes__input")
    sizes = Array.prototype.slice.call(sizes)
    sizes.forEach(element => {
        if (element.disabled == false)
            size_in_stock.push(element)
    });
    size_in_stock = Array.prototype.slice.call(size_in_stock)
    size_in_stock = arreyMixer(size_in_stock)

    if (mode == "Fast") {
        mainAtcFast()
    } else {
        mainAtcBrowser()
    }
}

async function mainAtcBrowser() {
    try {
        let cart = 0
        if (size_in_stock.length != 0) {
            if (size_range == "random") {
                n = getRandomIntInclusive(0, size_in_stock.length - 1)
                size_in_stock[n].click()
                cart = 1
            } else {
                if (size_range.includes('-')) {
                    size_1 = parseFloat(size_range.split('-')[0])
                    size_2 = parseFloat(size_range.split('-')[1])
                    for (let index = 0; index < size_in_stock.length; index++) {
                        size = size_in_stock[index].textContent.replace(/\D/g, '')
                        size = parseFloat(size)
                        if (size >= size_1 && size <= size_2) {
                            size_in_stock[index].click()
                            cart = 1
                            break
                        }
                    }
                } else {
                    for (let index = 0; index < size_in_stock.length; index++) {
                        size = size_in_stock[index].textContent.replace(/\D/g, '')
                        size = parseFloat(size)
                        if (size == size_range) {
                            size_in_stock[index].click()
                            cart = 1
                            break
                        }
                    }
                }
            }

            if (cart == 0 && size_range != "random")
                sendText("Selected sizes not available", "purple")
            else {
                document.getElementsByClassName("product-form__btn btn")[0].click()
            }


            for (let index = 0; index < 10; index++) {
                await sleep(200)
                if (document.getElementsByClassName("modal slide-right is-active in")[0] != undefined) {
                    size_product = document.getElementsByClassName('cart-item__size')[0].querySelectorAll('span')[1].textContent.replace(/\D/g, '')
                    price_product = document.getElementsByClassName('price__current')[0].textContent
                    name_product = document.getElementsByClassName('cart-item__name')[0].textContent
                    sendWebhooks()
                    document.location = "https://www.woodwood.com/en/cart/view"
                    break
                }
            }

            try { sendText(document.getElementsByClassName("product-view__error")[0].textContent, "purple") } catch (error) { sendText("Item out of stock", "purple") }
            errorRefresh()

        } else {
            sendText("Item out of stock", "purple")
            errorRefresh()
        }

    } catch (error) {
        errorWebhooks(error, "mainAtcBrowser")
        errorRefresh()
    }
}

async function mainAtcFast() {

    try {
        if (size_in_stock.length != 0) {
            if (size_range == "random") {
                n = getRandomIntInclusive(0, size_in_stock.length - 1)
                variant_id = size_in_stock[n].value
            } else {
                if (size_range.includes('-')) {
                    size_1 = parseFloat(size_range.split('-')[0])
                    size_2 = parseFloat(size_range.split('-')[1])
                    for (let index = 0; index < size_in_stock.length; index++) {
                        size = document.querySelectorAll('[for="' + size_in_stock[index].id + '"]')[0].textContent.replace(/\D/g, '')
                        size = parseFloat(size)
                        if (size >= size_1 && size <= size_2) {
                            variant_id = size_in_stock[index].value
                            break
                        }
                    }
                } else {
                    for (let index = 0; index < size_in_stock.length; index++) {
                        size = document.querySelectorAll('[for="' + size_in_stock[index].id + '"]')[0].textContent.replace(/\D/g, '')
                        size = parseFloat(size)
                        if (size == size_range) {
                            variant_id = size_in_stock[index].value
                            break
                        }
                    }
                }
            }
            if (variant_id != "")
                await atcR()
            else
                sendText("Selected sizes not available", "purple")

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
    await fetch("https://www.woodwood.com/en/cart/add", {
            "headers": {
                "accept": "*/*",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryqBMj65e8AAKRyTfx",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": link,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "------WebKitFormBoundaryqBMj65e8AAKRyTfx\r\nContent-Disposition: form-data; name=\"id\"\r\n\r\n" + variant_id + "\r\n------WebKitFormBoundaryqBMj65e8AAKRyTfx\r\nContent-Disposition: form-data; name=\"partial\"\r\n\r\nmini-cart\r\n------WebKitFormBoundaryqBMj65e8AAKRyTfx--\r\n",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkRes(response) })
        .catch((error) => {
            sendText("Error adding to cart", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "atcR")
        });;
}

async function checkRes(response) {

    try {
        let status = response.status
        let res = await response.text()

        if (status == 200 || status == 201) {
            html.innerHTML = res
            size_product = html.getElementsByClassName('cart-item__size')[0].querySelectorAll('span')[1].textContent.replace(/\D/g, '')
            price_product = html.getElementsByClassName('price__current')[0].textContent
            name_product = html.getElementsByClassName('cart-item__name')[0].textContent
            sendWebhooks()
            document.location = "https://www.woodwood.com/en/cart/view"
        } else {
            sendText("Error carting / Item reserved", "red")
            errorRefresh()
        }
    } catch (error) {
        sendText("Error carting", "red")
        errorWebhooks(error, "checkRes")
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

chrome.runtime.sendMessage({ greeting: "woodwood" }, function(response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "woodwood_size" }, function(response) {
    if (response.farewell != "off" && hasNumber(response.farewell))
        size_range = response.farewell
});

chrome.runtime.sendMessage({ greeting: "woodwood_mode" }, function(response) {
    mode = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "woodwood" }, function(response) {
            if (response.farewell == 'on') {
                main();
            }
        });
        textBox()
    }
});