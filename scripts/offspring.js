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
let checkout_mode = "ATC Only Browser"
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

let carted = false

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

function hasNumber(myString) {
    return /\d/.test(myString);
}

function textBox() {
    let color_aco = "";
    if (status_aco == "off") { color_aco = "red" } else { color_aco = "green" }
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
                " <p>ACO: <span style='font-size:20px; color:" + color_aco + ";'>" + status_aco + "</span> </p></div>");
        } catch (error) {
            if (error != "TypeError: Cannot read property 'parentNode' of undefined" && error != "TypeError: Cannot read property 'insertAdjacentHTML' of undefined" && error != "TypeError: Cannot read property 'insertAdjacentHTML' of null")
                console.log(error)
        }
    }
}

async function main() {

    getCsrfToken()
    await getMainPid()

    if (main_pid != "" && main_pid != undefined) {
        mainAtcBrowser()
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

async function mainAtcBrowser() {
    try {

        sendText("Trying atc manual...", "blue")
        sizes = document.getElementsByClassName("product__sizes-select js-size-select-list")[0].getElementsByClassName("product__sizes-option");
        if (sizes.length != 0) {
            if (size_range == "random") {
                n = getRandomIntInclusive(0, sizes.length - 1)
                size = parseFloat(sizes[n].getAttribute('data-name'))
                sizes[n].click()
            } else {
                if (size_range.includes('-')) {
                    size_1 = parseFloat(size_range.split('-')[0])
                    size_2 = parseFloat(size_range.split('-')[1])
                    sizes = Array.prototype.slice.call(sizes)
                    sizes = arreyMixer(sizes)
                    for (let index = 0; index < sizes.length; index++) {
                        size = parseFloat(sizes[index].getAttribute('data-name'))
                        if (size >= size_1 && size <= size_2) {
                            sizes[index].click()
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
                            sizes[index].click()
                            break
                        }

                    }
                }
            }
            name_product = document.getElementsByClassName("product__name")[0].textContent + " " + document.getElementsByClassName("product__variant")[0].textContent
            price_product = document.getElementsByClassName("price__price js-price")[0].textContent.replace(/\s/g, '').replaceAll('\n', '')
            img_product = document.getElementsByClassName("product-grid__img lazy-load__item")[0].src
            document.getElementsByClassName("btn btn--sm btn--left product__actions-cart product__actions-cart--pdp js-add-to-bag-btn")[0].click()
            size_product = size

            for (let index = 0; index < 5; index++) {
                await sleep(500)
                if (document.getElementsByClassName("overlay-backdrop js-overlayBackdrop overlay-backdrop--is-visible")[0] != undefined) {
                    carted = true
                    mainCheckout()
                    break
                }
            }

            if (carted != true) {
                errore = document.getElementsByClassName("product-validation__error js-validation-error-restricted product-validation__error--visible")[0].textContent
                sendText(errore, "red")
            }

        }
    } catch (error) {
        sendText("Error adding to cart", "red")
        errorWebhook(error, "mainAtc")
    }
}

async function mainCheckout() {
    await sendWebhooks1()
    document.location = "https://www.offspring.co.uk/checkout/singlePageCheckout"
}


async function sendWebhooks() {
    chrome.runtime.sendMessage({ greeting: "checkout_webhook&-&" + name_product + "&-&" + link_product + "&-&" + img_product + "&-&" + site + "&-&" + size_product + "&-&" + price_product + "&-&" + email + "&-&" + linkpp })
}

async function sendWebhooks1() {
    chrome.runtime.sendMessage({ greeting: "checkout_webhook&-&" + name_product + "&-&" + link_product + "&-&" + img_product + "&-&" + site1 + "&-&" + size_product + "&-&" + price_product })
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
    if (response.farewell != "off" && hasNumber(response.farewell))
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