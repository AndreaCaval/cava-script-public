debugger

const site = "Zalando"

const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let link = document.location.href
let country = link.split('/')[2]

let email = ""
let pw = ""
let size_range = "random"

let payment_mode = "Default"
let ckmode = ""
let cart_mode = ""
let drop_mode = ""

let delay = "0"

let size = []
let size_eu = []
let size_in_stock = []
let count_cart = 0
let carted = 0
let cart_limit = "";
let id = "";

let frsx = ""

let img_product = '';
let name_product = '';
let size_product = '';
let quantity_product = '';
let link_product = "https://www.zalando.it/"


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function hasNumber(myString) {
    return /\d/.test(myString);
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

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    n = Math.floor(Math.random() * (max - min + 1)) + min;
    return n
}

async function setCount(i) {
    try { document.getElementById('rCount').innerHTML = "Request count: " + i } catch (error) {}
}

async function setDelay() {
    try { document.getElementById('rDelay').innerHTML = "Delay: " + delay + "ms" } catch (error) {}
}

async function setCoupon(i) {
    try { document.getElementById("nCount").innerHTML = "Coupon count: " + i } catch (error) {}
}

async function sendText(text, color) {
    try { document.getElementById("statusZalando").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) {}
}

function textBoxMain() {
    try {
        var btn1 = document.getElementsByClassName("z-navicat-header_navContent")[0]
        btn1.insertAdjacentHTML("beforebegin", '<div id="CavaScripts" style="font-family: Verdana, Geneva, sans-serif; position: fixed; right:0; top: 350px; z-index: 1000; min-width: 300px; background-color: rgb(105, 105, 105); padding: 5px 10px; color: white; border-radius: 10px;">' +
            '<p>Cava Scripts Info</p> <p id="rCount">Request count: 0</p>' +
            '<p id="statusZalando">Status Zalando</p>' +
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
            try { window.open("https://" + country + "/zalando-newsletter/") } catch (error) {
                errorWebhook(error, "btn_gen_coupon")
            }
        });

    } catch (error) {
        if (error != "TypeError: Cannot read property 'insertAdjacentHTML' of undefined")
            errorWebhook(error, "miniDisplay")
    }
}

function textBoxCart() {

    try {

        let cava_script_info = document.getElementsByClassName("z-navicat-header_navContent")[0]
        cava_script_info.insertAdjacentHTML("beforebegin", '<div id="CavaScripts" style="font-family: Verdana, Geneva, sans-serif; position: fixed; right:0; top: 350px; z-index: 1000; min-width: 300px; background-color: rgb(105, 105, 105); padding: 5px 10px; color: white; border-radius: 10px;">' +
            '<p>Cava Scripts Info</p> <p id="rCount">Request count: 0</p> <p id="rDelay">Delay: 0ms</p>' +
            '<p id="statusZalando">Status Zalando</p> </div>');

    } catch (error) {
        if (error != "TypeError: Cannot read property 'insertAdjacentHTML' of undefined")
            errorWebhook(error, "setDisplayInfo_main")
    }
}

function textBoxCouponGen() {
    try {
        let btn1 = document.getElementsByClassName("z-navicat-header_navContent")[0]
        btn1.insertAdjacentHTML("beforebegin", '<div id="CavaScripts" style="font-family:Verdana,Geneva,sans-serif; position:fixed; right:0; top: 350px; z-index: 1000; min-width: 300px; background-color: rgb(105, 105, 105); padding:10px; color: white; border-radius: 10px;">' +
            '<p style="text-align:center">Cava Scripts </p><p id="nCount">Coupon count: 0</p>' +
            '<label>Catchall: </label><input style="color:black; float:right" type="text" id="catchall" placeholder="es: cavascripts.com"><br style="clear:both">' +
            '<label>N Coupon: </label><input style="color:black; float:right" id="nCoupon" type="number" value="0"> <br style="clear:both"><br>' +
            '<input style="text-align: center; background-color:black; width:100%; padding:5px;" id="btnSend" type="submit" value="GENERATE COUPON"></div>');

        let btn_atc_clear = document.getElementById('btnSend')
        btn_atc_clear.addEventListener("click", function() {
            try { genCoupon() } catch (error) {}
        });
    } catch (error) {}
}


async function main() {
    if (link.startsWith("https://" + country + "/zalando-newsletter")) {
        textBoxCouponGen()
    } else if (link.startsWith("https://" + country + "/cart")) {
        textBoxCart()
        mainCart()
    } else if (link.startsWith("https://" + country + "/welcomenoaccount/true") || link.startsWith("https://" + country + "/login?target=/myaccount")) {
        mainLogin()
    } else if (link.startsWith("https://" + country + "/myaccount")) {
        mainAccount()
    } else if (link.startsWith("https://" + country + "/checkout/address")) {
        mainAddress()
    } else if (link.startsWith("https://checkout.payment.zalando.com/")) {
        mainPayment()
    } else if (link.startsWith("https://" + country + "/checkout/confirm")) {
        mainCheckout()
    } else if (link.startsWith("https://" + country + "/checkout/success")) {
        mainSuccess()
    } else {
        searchSize()
        textBoxMain()
        if (link != "https://" + country + "/wardrobe/?" && document.getElementsByClassName("uqkIZw ka2E9k uMhVZi FxZV-M z-oVg8 pVrzNP")[0] != undefined)
            if (drop_mode == "on")
                dropMode()
    }
    setDelay()
}


async function mainLogin() {
    loginR()
}

async function loginR() {

    xsrf = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5)

    await fetch("https://" + country + "/api/reef/login", {
            "headers": {
                "accept": "application/json",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/json",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-xsrf-token": xsrf,
                "x-zalando-redirect-target": "http://" + country + "/myaccount/",
                "x-zalando-render-page-uri": "/login?target=/myaccount/",
                "x-zalando-request-uri": "/login?target=/myaccount/"
            },
            "referrer": link,
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": "{\"username\":\"" + email + "\",\"password\":\"" + pw + "\",\"wnaMode\":\"shop\"}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResLogin(response) })
        .catch((error) => { console.log(error) });;
}

async function checkResLogin(response) {
    let status = response.status
    if (status == 200 || status == 201) {
        await sleep(5000)
        window.close()
    } else {
        await sleep(100000)
        location.reload()
    }
}

async function mainAccount() {
    try {
        await sleep(5000)
        window.close()

    } catch (error) { console.log(error) }
}

async function genCoupon() {
    let nc = document.getElementById("nCoupon").value
    let catchall = document.getElementById("catchall").value

    if (catchall != "") {
        let data = new Date()
        let day = data.getDate()
        let month = data.getMonth() + 1
        let mail = ""

        for (let i = 0; i < nc; i++) {
            await sleep(100)
            nrandom = getRandomIntInclusive(1000, 9999)
            na1 = getRandomIntInclusive(0, alfabeto.length - 1)
            na2 = getRandomIntInclusive(0, alfabeto.length - 1)
            na3 = getRandomIntInclusive(0, alfabeto.length - 1)
            na4 = getRandomIntInclusive(0, alfabeto.length - 1)
            na5 = getRandomIntInclusive(0, alfabeto.length - 1)
            na6 = getRandomIntInclusive(0, alfabeto.length - 1)
            mail = alfabeto[na1] + "" + alfabeto[na2] + "" + alfabeto[na3] + "" + alfabeto[na4] + "" + alfabeto[na5] + "" + alfabeto[na6] + "" + nrandom + "" + day + "" + month + "@" + catchall
            await newsletterR(mail, i)
        }

        await sleep(1000)
        setCoupon(0)

    } else {
        document.getElementById("nCount").innerHTML = "Error Catchall"
    }
}

async function newsletterR(mail, i) {

    xsrf = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5)
    await fetch("https://" + country + "/api/newsletter-banner-fragment/subscribe-customer", {
            "headers": {
                "accept": "*/*",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/json",
                "dpr": "1",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "viewport-width": "1247",
                "x-xsrf-token": xsrf,
                "x-zalando-toggle-label": "THE_LABEL_IS_ENABLED"
            },
            "referrer": link,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + mail + "\",\"gender\":\"MALE\",\"preferences\":[{\"key\":\"survey\",\"enabled\":true,\"translation\":{\"locale\":\"it-IT\",\"name\":\"Sondaggi\",\"description\":\"In base ai tuoi acquisti precedenti e alla tue interazioni con i servizi e prodotti Zalando, potremmo chiederti di darci un'opinione cosí da poter apportare numerosi miglioramenti.\"}},{\"key\":\"recommendations\",\"enabled\":true,\"translation\":{\"locale\":\"it-IT\",\"name\":\"Suggerimenti\",\"description\":\"Scopri brand e prodotti che potrebbero interessarti, selezionati in base ai brand che segui e ai tuoi acquisti precedenti. Riceverai questo tipo di avviso al massimo 2 volte a settimana.\"}},{\"key\":\"follow_brand\",\"enabled\":true,\"translation\":{\"locale\":\"it-IT\",\"name\":\"Brand che segui\",\"description\":\"Ricevi un avviso quando un brand che segui lancia una nuova collezione.\"}},{\"key\":\"fashion_fix\",\"enabled\":true,\"translation\":{\"locale\":\"it-IT\",\"name\":\"Novità e tendenze\",\"description\":\"Ricevi info fino a 3 volte a settimana su ultime tendenze, collezioni esclusive e must have di stagione, solo se rilevanti.\"}},{\"key\":\"offers_sales\",\"enabled\":true,\"translation\":{\"locale\":\"it-IT\",\"name\":\"Offerte e promozioni\",\"description\":\"Aggiornamenti su offerte e sconti e codici sconto direttamente nella tua casella di posta elettronica. Riceverai questo tipo di avviso al massimo 3 volte a settimana.\"}},{\"key\":\"item_alerts\",\"enabled\":true,\"translation\":{\"locale\":\"it-IT\",\"name\":\"Notifiche sugli articoli\",\"description\":\"Ricevi un avviso ogni volta che un prodotto della tua wish list o nel tuo carrello viene scontato. Ti manderemo al massimo un reminder al giorno riguardo prodotti dimenticati nel carrello.\"}},{\"key\":\"subscription_confirmations\",\"enabled\":true,\"translation\":{\"locale\":\"it-IT\",\"name\":\"Notifiche sulla disponibilità di taglie\",\"description\":\"Ricevi un'email di notifica quando la tua taglia diventa di nuovo disponibile.\"}}]}",
            "method": "PUT",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => {
            if (response.status == 200 || response.status == 201) {
                setCoupon(i + 1)
            }
        })
        .catch((error) => { console.log(error) });;
}


function searchSize() {
    try {
        if (country.split('.')[1] == 'zalando') {
            try {
                let s = document.getElementById('z-vegas-pdp-props').textContent
                s = s.slice(8, -2)
                let obj = JSON.parse(s)
                let sizes = obj[0].model.articleInfo.units
                for (let i = 0; i < sizes.length; i++) {
                    size.push(sizes[i].id)
                    size_eu.push(sizes[i]["size"]["local"])
                }
            } catch (error) {
                if (error != "TypeError: Cannot read property 'textContent' of null")
                    errorWebhook(error, "searchSize_1")
            }
        }
    } catch (error) { errorWebhook(error, "searchSize_2") }
}


async function dropMode() {
    let c = 0
    let xyz = 0
    try {
        while (true) {
            c++
            setCount(c)
            size_in_stock = []
            let html = document.createElement('html')
            await sleep(parseInt(delay))
            if (xyz == 0) {
                sendText("Monitoring.", "yellow")
                xyz = 1
            } else if (xyz == 1) {
                sendText("Monitoring..", "yellow")
                xyz = 2
            } else if (xyz == 2) {
                sendText("Monitoring...", "yellow")
                xyz = 0
            }
            await getProduct()
            await res.then(function(result) {
                html.innerHTML = result
                try {
                    let s = html.querySelector('[id="z-vegas-pdp-props"]').textContent
                    s = s.slice(8, -2)
                    let obj = JSON.parse(s)
                    let sizes = obj[0].model.articleInfo.units
                    for (let i = 0; i < sizes.length; i++) {
                        if (sizes[i]["available"] == true) {
                            if (size_range == "random")
                                size_in_stock.push(sizes[i].id)
                            else {
                                s = parseFloat(sizes[i]["size"]["local"])
                                if (size_range.includes('-')) {
                                    size_1 = parseFloat(size_range.split('-')[0])
                                    size_2 = parseFloat(size_range.split('-')[1])
                                    if (s >= size_1 && s <= size_2) {
                                        size_in_stock.push(sizes[i].id)
                                    }
                                } else {
                                    if (parseFloat(size_range) == s) {
                                        size_in_stock.push(sizes[i].id)
                                    }
                                }
                            }
                        }
                    }
                } catch (error) {
                    if (error != "TypeError: Cannot read property 'textContent' of null")
                        errorWebhook(error, "dropMode")
                }
            })

            if (size_in_stock.length != 0) {
                sendText("Product in stock, trying atc...", "yellow")
                if (size_in_stock.length == 1) {
                    await atcRDrop(size_in_stock[0])
                } else {
                    for (let i = 0; count_cart < cart_limit; i++) {
                        if (xyz == 0) {
                            sendText("Trying atc.", "yellow")
                            xyz = 1
                        } else if (xyz == 1) {
                            sendText("Trying atc..", "yellow")
                            xyz = 2
                        } else if (xyz == 2) {
                            sendText("Trying atc...", "yellow")
                            xyz = 0
                        }
                        n = getRandomIntInclusive(0, size_in_stock.length - 1)
                        await atcRDrop(size_in_stock[n])
                    }
                }
                break
            }
        }

    } catch (error) {
        if (error != "TypeError: Cannot read property 'textContent' of null")
            errorWebhook(error, "searchSize_1")
    }

}

async function getProduct() {

    await fetch(link, {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "cache-control": "max-age=0",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { res = response.text() })
        .catch((error) => { errorWebhook(error, "getProduct_fetch") });;
}


async function atcFast() {

    sendText("Trying atc...", "blue")
    try { await atc() } catch (error) { errorWebhook(error, "atcFast") }

    if (count_cart != 0)
        window.open("https://" + country + "/cart")
    else
        sendText("Error carting item", "red")
}

async function atc() {


    try {
        if (size != "") {

            frsx = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5)


            for (var i = 0; i < size.length; i++) {

                if (size_range == "random") {
                    if (cart_limit > count_cart) {
                        setCount(i)
                        await atcR(size[i], i)
                    }
                } else if (size_range.includes('-')) {
                    let size_1 = parseFloat(size_range.split('-')[0])
                    let size_2 = parseFloat(size_range.split('-')[1])
                    s = parseFloat(size_eu[i])
                    if (s >= size_1 && s <= size_2 && cart_limit > count_cart) {
                        setCount(i)
                        await atcR(size[i], i)
                    }

                } else {
                    let size_1 = parseFloat(size_range)
                    s = parseFloat(size_eu[i])
                    if (s == size_1 && cart_limit > count_cart) {
                        setCount(i)
                        await atcR(size[i], i)
                    }
                }
            }
        }
    } catch (error) { errorWebhook(error, "atcSavedSku") }
}

async function atcR(id_prodotto) {

    await fetch("https://" + country + "/api/graphql/", {
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
        .then(response => { checkAtcRes(response) })
        .catch((error) => {
            if (error != "TypeError: Failed to fetch")
                errorWebhook(error, "atcR_fetch")
        });;
}

async function checkAtcRes(response) {

    try {

        let status = response.status
        let res = await response.text()
        let x = res
        res = JSON.parse(res)
        let message = res[0]["data"]["addToCart"]
        let errors = ""

        if (status == 200 || status == 201) {
            if (message != null) {
                count_cart++
                sendText("Carted", "yellow")
                setCount(count_cart)
            } else {

                sendText("Error carting...", "red")

                errors = res[0]["errors"][0]
                if (errors["message"].includes("Received Status: 429 from Cart:") && errors["message"].includes("TOO_MANY_REQUESTS")) {
                    console.log("Error 429 Cart Too Many Requests")
                } else if (errors["message"] == "Received Status: 429 from Cart: " || errors["message"] == "Received Status: 429 from Cart:") {
                    console.log("Received Status: 429 from Cart:")
                } else {
                    errorWebhook(errors["message"], "checkAtcRes_1")
                }
            }
        } else {
            sendText("Error carting...", "red")
        }

    } catch (error) {
        if (error != "SyntaxError: Unexpected token < in JSON at position 0")
            errorWebhook(error, "checkAtcRes_2")
    }
}

async function atcRDrop(id_prodotto) {

    sendText("Carting...", "yellow")
    await fetch("https://" + country + "/api/graphql/", {
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
        .then(response => { checkResAtcDrop(response) })
        .catch((error) => {
            if (error != "TypeError: Failed to fetch")
                errorWebhook(error, "atcR_fetch")
        });;
}

async function checkResAtcDrop(response) {

    try {

        let status = response.status
        let res = await response.text()
        let x = res
        res = JSON.parse(res)
        let message = ""
        let errors = ""

        if (status == 200 || status == 201) {
            message = res[0]["data"]["addToCart"]
            if (message != null) {
                sendText("Carted", "green")
                count_cart++
                if (count_cart == cart_limit) {
                    sendText("Getting checkout", "blue")
                    await getCheckout()
                }
            } else {
                errors = res[0]["errors"][0]
                if (errors["message"].includes("Received Status: 429 from Cart:") && errors["message"].includes("TOO_MANY_REQUESTS")) {
                    sendText("Error carting", "red")
                    console.log("Error 429 Cart Too Many Requests")
                } else if (errors["message"] == "Received Status: 429 from Cart: " || errors["message"] == "Received Status: 429 from Cart:") {
                    sendText("Error carting", "red")
                    console.log("Received Status: 429 from Cart:")
                } else {
                    sendText("Error carting", "red")
                    errorWebhook(errors["message"], "checkAtcRes_1")
                }
            }
        } else {
            sendText("Error carting", "red")
        }

    } catch (error) {
        if (error != "SyntaxError: Unexpected token < in JSON at position 0")
            errorWebhook(error, "checkAtcRes_2")
    }
}


async function mainCart() {
    if (cart_mode == "Fast") {
        checkStockGetCheckout()
    } else if (cart_mode == "Browser") {
        checkStockRefresh()
    }

    checklogin()
}

async function checklogin() {
    while (true) {
        await sleep(300000)
        window.open("https://" + country + "/myaccount/")
        await sleep(5000)
    }
}

async function checkStockRefresh() {
    await sleep(parseInt(delay))
    document.location = "https://" + country + "/checkout/confirm"
}

async function checkStockGetCheckout() {

    try {

        let xyz = 0
        for (var i = 0; xyz < 10; i++) {

            setCount(i)

            if (xyz == 0) {
                sendText("Out of stock, monitoring.", "blue")
                xyz = 1
            } else if (xyz == 1) {
                sendText("Out of stock, monitoring..", "blue")
                xyz = 2
            } else if (xyz == 2) {
                sendText("Out of stock, monitoring...", "blue")
                xyz = 0
            }

            await sleep(parseInt(delay))
            await getCheckout()
        }

    } catch (error) {
        errorWebhook(error, "checkStockGetCheckout")
    }
}

async function getCheckout() {

    await fetch("https://" + country + "/checkout/confirm", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "none",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "same-origin"
        })
        .then(response => { checkResGetCheckout(response) })
        .catch((error) => { errorWebhook(error, "getCheckout_fetch") });;
}

async function checkResGetCheckout(response) {

    try {

        let status = response.status
        let result = await response.text()
        let url = response.url
        let x = "";
        let etag = "";
        let checkoutId = ""
        result = await result
        if (status == 200 || status == 201) {
            if (url == "/checkout/address" || url == "https://" + country + "/checkout/address") {
                document.location = "https://" + country + "/checkout/address"
            }
            if (url == "/checkout/confirm" || url == "https://" + country + "/checkout/confirm") {
                sendText("Checking out...", "yellow")
                let html = document.createElement("html")
                html.innerHTML = result
                var page = html.querySelectorAll('[data-props]')[0].getAttribute('data-props')
                page = page.substring(0, page.length)
                x = JSON.parse(page)
                etag = x.model.eTag
                etag = etag.replace('"', '')
                etag = etag.replace('"', '')
                etag = '"' + '\\' + '"' + etag + '\\' + '"' + '"'
                checkoutId = x.model.checkoutId

                checkoutBuyNow(etag, checkoutId)
            }
            if (url.startsWith("/welcomenoaccount/true?target") || url.startsWith("https://" + country + "/welcomenoaccount/true?target")) {
                document.location = "https://" + country + "/login?target=/myaccount/"
            }
            if (url != "/cart" && url != '' && url != "https://" + country + "/cart") {}
        }

    } catch (error) { errorWebhook(error, "checkResGetCheckout") }
}


async function mainAddress() {
    await sleep(250)
    var button = document.getElementsByClassName('z-coast-fjord_deliveryDestinationTabIcon')
    if (button.length != 0) {
        button[1].click()
    }

    await sleep(250)
    var button = document.getElementsByClassName('z-1-button z-coast-base-primary-accessible undefined z-1-button--primary z-1-button--button')
    if (button.length != 0) {
        button[0].click()
    }

    document.location = 'https://' + country + '/checkout/confirm'
}

async function mainPayment() {

    if (payment_mode == "Default") {
        var button = document.getElementsByClassName('payz-footer__submit payz-btn payz-btn--primary')
        if (button.length != 0) {
            button[0].click()
        }
    }
    if (payment_mode == "Cad") {
        var button = document.querySelectorAll('[value="CASH_ON_DELIVERY"]')
        if (button.length != 0) {
            button[0].click()
        }
    } else if (payment_mode == "Card") {
        var button = document.querySelectorAll('[value="CREDIT_CARD"]')
        if (button.length != 0) {
            button[0].click()
        }
    } else if (payment_mode == "Paypal") {
        var button = document.querySelectorAll('[value="PAYPAL"]')
        if (button.length != 0) {
            button[0].click()
        }
    }

    document.location = 'https://' + country + '/checkout/confirm'
}



async function mainCheckout() {
    if (ckmode == "Fast") {
        checkoutConfirm()
    } else if (ckmode == "Browser") {
        checkoutClick()
    } else if (ckmode == "Manual") {

    }
}

async function checkoutClick() {

    try {

        await sleep(parseInt(delay))
        let btn = document.getElementsByClassName("z-1-button__content")
        if (btn.length != 0) {
            for (let i = 0; i < 5; i++) {
                btn[0].click()
            }
            await sleep(2500)
            if (link == "https://" + country + "/checkout/confirm") {
                location.reload()
            }
        } else {
            await sleep(500)
            location.reload()
        }

    } catch (error) { errorWebhook(error, "checkoutClick") }
}

async function checkoutConfirm() {

    try {

        var checkoutid = '';
        var etag = '';

        var page = document.querySelectorAll('[data-props]')[0].getAttribute('data-props')
        page = page.substring(0, page.length)

        var x = JSON.parse(page)

        etag = x.model.eTag
        etag = etag.replace('"', '')
        etag = etag.replace('"', '')
        etag = '"' + '\\' + '"' + etag + '\\' + '"' + '"'

        checkoutid = x.model.checkoutId

        checkoutBuyNow(etag, checkoutid)

    } catch (error) {
        errorWebhook(error, "checkoutConfirm")
        location.reload()
    }
}

async function checkoutBuyNow(etag, checkoutid) {

    xsrf = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5)

    sendText("Placing order...", "yellow")
    await fetch("https://" + country + "/api/checkout/buy-now", {
            "headers": {
                "accept": "application/json",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/json",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-xsrf-token": xsrf,
                "x-zalando-checkout-app": "web",
                "x-zalando-footer-mode": "desktop",
                "x-zalando-header-mode": "desktop"
            },
            "referrer": "https://" + country + "/checkout/confirm",
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": '{\"checkoutId\":  \"' + checkoutid + '\",\"eTag\":' + etag + '}',
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkRescheckoutBuyNow(response) })
        .catch((error) => { errorWebhook(error, "checkoutBuyNow_fetch") });;
}

async function checkRescheckoutBuyNow(response) {

    try {

        let status = response.status
        let res = await response.text()
        let x = res
        res = JSON.parse(res)
        let url = ""

        if (status == 200 || status == 201) {

            url = res["url"]

            if (url == "/checkout/success") {
                main()
                open('https://' + country + '/checkout/success')
            } else if (url == "/cart?error=zalando.checkout.confirmation.quantity.error" || url == "/checkout/confirm?error=zalando.checkout.confirmation.quantity.error") {
                location.reload()
            } else if (url.startsWith("https://checkout.payment.zalando.com/") || url.startsWith("https://bankieren.ideal.ing.nl/") || url.startsWith("https://www.paypal.com/checkoutnow?")) {
                document.location = url
            } else {
                errorWebhook(x, "checkRescheckoutBuyNow_1")
                location.reload()
            }
        } else {
            errorWebhook(x, "checkRescheckoutBuyNow_2")
            await sleep(500)
            location.reload()
        }

    } catch (error) {
        errorWebhook(error, "checkRescheckoutBuyNow_3")
        await sleep(500)
        location.reload()
    }
}

async function mainSuccess() {
    foundData()
}

async function foundData() {
    try {
        let x = 0
        link_product = "https://" + country + "/catalogo/?q=" + document.getElementsByClassName("z-coast-fjord_article")[0].getAttribute("data-id").replace("z-coast-fjord_article-", "").slice(0, 13)
        img_product = document.getElementsByClassName('z-2-product-image_image')[0].src;
        quantity_product = document.getElementsByClassName('z-2-product-image_image').length;
        nomep = document.getElementsByClassName('z-text z-coast-fjord-body-bold z-text-body z-text-black')[0].textContent;
        nomep2 = document.getElementsByClassName('z-coast-fjord_text-ellipsis')[0].textContent;
        name_product = nomep + " " + nomep2
        if (parseInt(quantity_product) != 1) {
            for (let i = 0; i < quantity; i++) {
                size_product += document.getElementsByClassName('z-text z-text-block z-text-body z-text-black')[6 + x].textContent + " - ";
                x += 2
            }
        } else {
            size_product = document.getElementsByClassName('z-text z-text-block z-text-body z-text-black')[6].textContent;
            try { size_product = size_product.split(':')[1] } catch (error) {}
        }

        if (hasNumber(size_product))
            size_product = size_product.replace(/[^\d,.-]/g, '')

        email = document.querySelectorAll('[aria-live="polite"]')[0].textContent;
        n = email.split(" ").splice(-1)
        email = n[n.length - 1]

        sendWebhooks()

    } catch (error) { errorWebhook(error, "foundData") }
}

async function sendWebhooks() {
    chrome.runtime.sendMessage({ greeting: "checkout_webhook&-&" + name_product + "&-&" + link_product + "&-&" + img_product + "&-&" + site + "&-&" + size_product + "&-&" + quantity_product + "&-&" + email })
}

async function errorWebhook(error, position) {
    chrome.runtime.sendMessage({ greeting: "error_webhook&-&" + site + "&-&" + error + "&-&" + position })
}

async function resInfoWebook(message, position) {
    chrome.runtime.sendMessage({ greeting: "info_webhook&-&" + site + "&-&" + message + "&-&" + position })
}

chrome.runtime.sendMessage({ greeting: "zalando_size" }, function(response) {
    if (response.farewell != "off" && hasNumber(response.farewell))
        size_range = response.farewell
});

chrome.runtime.sendMessage({ greeting: "cartlimitzalando" }, function(response) {
    cart_limit = response.farewell;
});

chrome.runtime.sendMessage({ greeting: "dropmodezalando" }, function(response) {
    drop_mode = response.farewell;
});

chrome.runtime.sendMessage({ greeting: "cartmodezalando" }, function(response) {
    cart_mode = response.farewell
});

chrome.runtime.sendMessage({ greeting: "delay" }, function(response) {
    delay = response.farewell
});

chrome.runtime.sendMessage({ greeting: "checkoutmodezalando" }, function(response) {
    ckmode = response.farewell
});

chrome.runtime.sendMessage({ greeting: "email_pw_zalando" }, function(response) {
    let x = response.farewell
    email = x.split(':')[0]
    pw = x.split(':')[1]
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "zalando" }, function(response) {
            if (response.farewell == 'on') {
                main();
            } else {
                if (link.startsWith("https://" + country + "/zalando-newsletter"))
                    textBoxCouponGen()
                else {
                    searchSize()
                    textBoxMain()
                }

            }
        });
    }
});