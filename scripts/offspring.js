debugger

const site = "Offspring"
const site1 = "Offspring1"

let size_range = "random"
let status_aco = ""
let status_login = ""

let email_login = ""
let pw_login = ""

let coupon = ""
let continue_coupon = ""

let payment_mode = ""
let checkout_mode = "ATC Only"
let mode = ""

let n_profiles = 0
let profiles = ""
let profile = ""

let email = ""
let phone = ""
let firstname = ""
let lastname = ""
let address1 = ""
let address2 = ""
let city = ""
let postalcode = ""
let countryCode = ""
let countryIsoCode = ""

let link = document.location.href

let link_product = link
let name_product = '';
let size_product = '';
let price_product = "£";
let img_product = ""
let linkpp = ""

let csrftoken = ""

let main_pid = ""
let id_product = "";
let sizes = ""
let size = ""


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    n = Math.floor(Math.random() * (max - min + 1)) + min;
    return n
}

async function sendText(text, color) {
    try { document.getElementById("statusOffspring").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) {}
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
    let color_login = ""
    if (status_aco == "off") { color_aco = "red" } else { color_aco = "green" }
    if (status_login == "off") { color_login = "red" } else { color_login = "green" }
    try {
        var btn1 = document.getElementsByClassName("navbar navbar-default navbar-inverse navbar--main navbar--pdp js-mainNav")[0]
        btn1.insertAdjacentHTML("beforebegin", '<div id="CavaScripts" style="font-size:15px; font-family: Verdana, Geneva, word-wrap: break-word; sans-serif; position: fixed; right:0; top: 350px; z-index: 1000; min-width: 10px; max-width: 500px; background-color: lightgrey; padding: 5px 10px; color: black; border-radius: 10px;">' +
            ' <br><p id="statusOffspring">Status Offspring</p> ' +
            " <p>ACO: <span style='font-size:20px; color:" + color_aco + ";'>" + status_aco + "</span></p></div>");
    } catch (error) {
        try {
            var btn1 = document.getElementsByClassName("navbar navbar-default navbar-inverse navbar--main  js-mainNav")[0]
            btn1.insertAdjacentHTML("beforebegin", '<div id="CavaScripts" style="font-size:15px; font-family: Verdana, Geneva, word-wrap: break-word; sans-serif; position: fixed; right:0; top: 350px; z-index: 1000; min-width: 10px; max-width: 500px; background-color: lightgrey; padding: 5px 10px; color: black; border-radius: 10px;">' +
                ' <br><p id="statusOffspring">Status Offspring</p> ' +
                " <p>ACO: <span style='font-size:20px; color:" + color_aco + ";'>" + status_aco + "</span></p></div>");
        } catch (error) {
            if (error != "TypeError: Cannot read property 'parentNode' of undefined" && error != "TypeError: Cannot read property 'insertAdjacentHTML' of undefined" && error != "TypeError: Cannot read property 'insertAdjacentHTML' of null")
                console.log(error)
        }
    }
}

async function main() {

    getCsrfToken()
    await getMainPid()

    // if (link.startsWith("https://www.offspring.co.uk/view/product/offspring_catalog/") || pid != "") {
    if (main_pid != "" && main_pid != undefined)
        mainAtc()

}

async function setProfile() {
    if (n_profiles != 0 && profile != "None") {
        p = profile
        for (let i = 1; i <= n_profiles; i++) {
            x = profiles["profiles" + String(i)]
            if (profile == String(x).split('$&')[0]) {
                profile = profiles["profiles" + String(i)]
                break
            }
        }
    }
    let data = profile.split('$&')
    firstname = data[1]
    lastname = data[2]
    email = data[3]
    phone = data[4]
    address1 = data[5]
    address2 = data[6]
    city = data[7]
    postalcode = data[8]
    try {
        countryCode = data[10].split('|')[0]
        countryIsoCode = data[10].split('|')[1]
    } catch (error) {
        countryCode = data[10]
    }
}

async function getCsrfToken() {
    try { csrftoken = document.getElementsByName('CSRFToken')[0].value } catch (error) {}
}

async function getMainPid() {
    try {
        let scripts = document.querySelectorAll("script")
        scripts.forEach(element => {
            if (element.textContent.includes("window.dataLayer = [{"))
                eval(element.textContent)
        });
        main_pid = window.dataLayer[0]["productId"]
    } catch (error) {}
}

async function mainAtc() {

    try {
        sizes = document.getElementsByClassName("product__sizes-select js-size-select-list")[0].getElementsByClassName("product__sizes-option");

        if (sizes.length != 0) {
            console.log(size_range)
            if (size_range == "random") {
                n = getRandomIntInclusive(0, sizes.length - 1)
                size = parseFloat(sizes[n].getAttribute('data-name'))
                size_product = sizes[n].getAttribute('data-value')
                id_product = main_pid + "" + size_product
            } else {
                if (size_range.includes('-')) {
                    size_1 = parseFloat(size_range.split('-')[0])
                    size_2 = parseFloat(size_range.split('-')[1])
                    sizes = Array.prototype.slice.call(sizes)
                    sizes = arreyMixer(sizes)
                    for (let index = 0; index < sizes.length; index++) {
                        size = parseFloat(sizes[index].getAttribute('data-name'))
                        if (size >= size_1 && size <= size_2) {
                            id_product = main_pid + "" + sizes[index].getAttribute('data-value')
                            break
                        }
                    }
                    if (id_product == "") {
                        sendText("Selected sizes not available", "purple")
                    }
                } else {
                    for (let index = 0; index < sizes.length; index++) {
                        size = parseFloat(sizes[index].getAttribute('data-name'))
                        if (parseFloat(size) == parseFloat(size_range)) {
                            id_product = main_pid + "" + sizes[index].getAttribute('data-value')
                            break
                        }

                    }
                    if (id_product == "") {
                        sendText("Selected size not available", "purple")
                    }
                }
            }

            if (id_product != "")
                await atcR()
        }
    } catch (error) {
        errorWebhook(error, "mainAtc")
    }
}

async function atcR() {

    sendText("Trying atc fast...", "blue")
    await fetch("https://www.offspring.co.uk/view/basket/add", {
            "headers": {
                "accept": "*/*",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
                "csrftoken": csrftoken,
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": link,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "productCode=" + id_product + "&wishlist=false",
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
    let x = res
    res = JSON.parse(res)
    let statusCode = ""

    if (status == 200 || status == 201) {
        statusCode = res["statusCode"]
        if (statusCode == "success") {
            sendText("Carted", "green")
            setDataProduct(res["cartStatus"][0])
            mainCheckout()
        } else if (statusCode == "failedcaptcha") {
            sendText("Error captcha", "red")
        } else {
            resInfoWebook(x, "checkRes_1")
        }
    } else {
        resInfoWebook(x, "checkRes_1")
        sendText("Error carting / Oos", "red")
        errorWebhook(error, "checkRes_2")
    }
}

async function setDataProduct(data) {
    name_product = main_pid
    size_product = size
    price_product = data["itemPrice"] + '£'
    img_product = document.getElementsByClassName("product-grid__img lazy-load__item")[0].src
}


async function mainCheckout() {
    if (checkout_mode == "ATC Only") {
        sendWebhooks1()
        document.location = "https://www.offspring.co.uk/checkout/singlePageCheckout"
    } else {
        if (mode == "Guest") {

        } else {

        }
    }
}


async function sendWebhooks() {
    chrome.runtime.sendMessage({ greeting: "checkout_webhook&-&" + name_product + "&-&" + link_product + "&-&" + img_product + "&-&" + site + "&-&" + size_product + "&-&" + price_product + "&-&" + email + "&-&" + linkpp })
}

async function sendWebhooks1() {
    chrome.runtime.sendMessage({ greeting: "checkout_webhook&-&" + name_product + "&-&" + link_product + "&-&" + img_product + "&-&" + site1 + "&-&" + size_product + "&-&" + price_product + "&-&" + email + "&-&" + linkpp })
}

async function errorWebhook(error, position) {
    chrome.runtime.sendMessage({ greeting: "error_webhook&-&" + site + "&-&" + error + "&-&" + position })
}

async function resInfoWebook(message, position) {
    chrome.runtime.sendMessage({ greeting: "info_webhook&-&" + site + "&-&" + message + "&-&" + position })
}

chrome.runtime.sendMessage({ greeting: "offspring" }, function(response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "offspring_size" }, function(response) {
    if (response.farewell != "off")
        size_range = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        textBox()
        chrome.runtime.sendMessage({ greeting: "offspring" }, function(response) {
            if (response.farewell == 'on') {
                main();
            }
        });
    }
});