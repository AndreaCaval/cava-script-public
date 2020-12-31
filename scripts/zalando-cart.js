debugger

var delay = ''; var display = ''; var id = ''; var coupon = 'off'; var list_sku = ""; var list_sku_input = ""
var xsrf = document.cookie.split('; ').find(row => row.startsWith('frsx')).split('=')[1];
var zalandoUrl = location.href.split('/')[2]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function buttonAtc() {
    try {
        var btn1 = document.getElementsByClassName("z-navicat-header_navContent")[0].parentNode
        btn1.insertAdjacentHTML("beforebegin", '<div id="CavaScripts" style="font-family: Verdana, Geneva, sans-serif; position: fixed; right:0; top: 40px; z-index: 1000; min-width: 300px; background-color: rgb(105, 105, 105); padding: 5px 10px; color: white; border-radius: 10px;">'
            + '<p>Cava Scripts Info</p> <p id="rCount">Request count: 0</p> <p id="rDelay">Delay: 0ms</p>'
            + '<input style="text-align: center; background-color:black; width:120px; float:left; margin:5px;" id="btnZatc" type="submit" value="ATC">'
            + '<input style="text-align: center; background-color:black; width:120px; float:right; margin:5px;" id="btnZatc_clear" type="submit" value="CLEAR">'
            + '<p style="clear: both;"></p>'
            + '<input style="color:black; float:left; width:150px; margin:5px;" id="skuSizes" type="text" placeholder="Enter sku es 1;2;3"> '
            + '<input style="text-align: center; background-color:black; width:120px; float:right; margin:5px;" id="btnZatc_fast" type="submit" value="ATC FAST"> </div>');

        var btn_atc_clear = document.getElementById('btnZatc')
        btn_atc_clear.addEventListener("click", function () {
            try {
                atc()
            } catch (error) {
                console.log(error)
            }
        });

        var btn_atc_clear = document.getElementById('btnZatc_clear')
        btn_atc_clear.addEventListener("click", function () {
            try {
                atc_clear()
            } catch (error) {
                console.log(error)
            }
        });

        var btn_atc_fast = document.getElementById('btnZatc_fast')
        btn_atc_fast.addEventListener("click", function () {
            try {
                atc_fast()
            } catch (error) {
                console.log(error)
            }
        });
    }
    catch (error) {
        console.log(error)
    }
}

async function atc_clear() {
    try { let frsx = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5) }
    catch (error) { console.log(error) }

    let j = ""; let idCart = ""; let na = ""

    await cartGateway()

    await res.then(function (result) {
        //console.log(result)
        j = JSON.parse(result)
        idCart = j['id']
        na = j['out_of_stock_articles']
    })

    //console.log(idCart)
    //console.log(na)

    for (var i = 0; i < na.length; i++) {
        await sleep(200)
        await fetch("https://www.zalando.it/api/cart-gateway/carts/" + idCart + "/items/" + na[i]['simple_sku'], {
            "headers": {
                "accept": "application/json",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/json",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-xsrf-token": frsx
            },
            "referrer": "https://www.zalando.it/cart/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "DELETE",
            "mode": "cors",
            "credentials": "include"
        })
            .then(response => {
                if (response.status) {
                    console.log('success removed item')
                    setCount(i + 1)
                }
            })
            .catch((error) => {
                console.log(error)
            });
        ;
    }


}

async function atc() {
    try { var frsx = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5) }
    catch (error) { console.log(error) }

    lista_sku = list_sku.split(';')

    for (var i = 0; i < lista_sku.length; i++) {
        await sleep(200)
        var id_prodotto = lista_sku[i]
        await fetch("https://" + zalandoUrl + "/api/graphql/", {
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
            .then(response => {
                if (response.status) {
                    console.log('atc success')
                    setCount(i + 1)
                }
            })
            .catch((error) => {
                console.log(error)
            });
        ;
    }
}

async function atc_fast() {
    try { var frsx = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5) }
    catch (error) { console.log(error) }

    var ls = document.getElementById("skuSizes").value

    lista_sku_input = ls.split(';')

    for (var i = 0; i < lista_sku_input.length; i++) {
        await sleep(100)
        var id_prodotto = lista_sku_input[i]
        if (id_prodotto != "") {
            await fetch("https://" + zalandoUrl + "/api/graphql/", {
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
                .then(response => {
                    if (response.status) {
                        console.log('atc success')
                        setCount(i + 1)
                    }
                })
                .catch((error) => {
                    console.log(error)
                });
            ;
        }
    }
}

async function cartGateway() {
    try { var frsx = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5) }
    catch (error) { console.log(error) }


    await fetch("https://www.zalando.it/api/cart-gateway/carts", {
        "headers": {
            "accept": "*/*",
            "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/json",
            "dpr": "1",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36',
            "x-xsrf-token": frsx
        },
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": "",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    })
        .then(response => { res = response.text() })
        .catch((error) => { console.log(error) });
    ;
}

async function setCount(i) {
    try { document.getElementById('rCount').innerHTML = "Request count: " + i }
    catch (error) { console.log(error) }
}

async function setDelay() {
    try {
        var punto = 0
        var delay = ""
        for (var i = 0; punto < 10; i++) {
            await sleep(1000)
            chrome.runtime.sendMessage({ greeting: "delay" }, function (response) {
                delay = response.farewell;
            });
            document.getElementById('rDelay').innerHTML = "Delay: " + delay + "ms"
        }
    }
    catch (error) { console.log(error) }
}

async function checkStock() {

    try {
        var punto = 0
        for (var i = 0; punto < 10; i++) {

            setCount(i)

            await sleep(parseInt(delay))
            await checkoutConfirm()
        }
    } catch (error) { location.reload() }
}

async function checkoutConfirm() {

    var url_data = ''; //var html = ''; //var status = ''

    await fetch("https://" + zalandoUrl + "/checkout/confirm", {
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
        .then(response => {
            //response.json()
            //try { html = response.text() } catch (error) { console.log("oos") }
            try { url_data = response.url } catch (error) { console.log("oos") }
            //try { console.log(response.) } catch (error) { console.log("oos") }
        })
        //.then(data => { console.log(data.cookie)})
        .catch((error) => { console.log(error) });
    ;

    //html = html.replace('&quot', '')
    //await Promise.resolve(html).then(function (value) {html = value}, function (value) {});


    if (url_data == "/checkout/address" || url_data == "https://" + zalandoUrl + "/checkout/address") {
        console.log('address')
        document.location = "https://" + zalandoUrl + "/checkout/address"
    }
    if (url_data == "/checkout/confirm" || url_data == "https://" + zalandoUrl + "/checkout/confirm") {
        console.log('confirm')
        //await GetConfirm(html)
        document.location = "https://" + zalandoUrl + "/checkout/confirm"
    }
    if (url_data.startsWith("/welcomenoaccount/true?target") || url_data.startsWith("https://" + zalandoUrl + "/welcomenoaccount/true?target")) {
        console.log('login')
        document.location = "https://" + zalandoUrl + "/login?target=/myaccount/"
    }
    if (url_data == "/cart" || url_data == '' || url_data == "https://" + zalandoUrl + "/cart") {
        console.log('oos')
    }
    else {
        console.log(url_data)
        document.location = "https://" + zalandoUrl + "/checkout/confirm"
    }
}

async function GetConfirm(html) {//not in work

    var checkoutid = ''; var flowid = ''; var etag = ''; var coupn;
    display.textContent = 'Getting confirm ...'

    var html2 = document.createElement('html')
    html2.innerHTML = html


    var page = html2.querySelectorAll('[data-props]')[0].getAttribute('data-props')
    page = page.substring(0, page.length)

    var x = JSON.parse(page)

    etag = x.model.eTag
    etag = etag.replace('"', '')
    etag = etag.replace('"', '')
    etag = '"' + '\\' + '"' + etag + '\\' + '"' + '"'

    checkoutid = x.model.checkoutId
    try {
        coupn = x.model.coupons
    }
    catch (error) { console.log(error) }

    try {
        if (coupn.length == 0 && coupon != 'off') {
            flowid = x.flowId
            await CouponCode(flowid)
        }
    }
    catch (error) { console.log(error) }

    await checkoutBuyNow(etag, checkoutid)

    res.then(function (result) {
        if (result == '{"title":"Xsrf Error", "detail": "Failed to validate token"}') {
            console.log('CHECKOUT ERROR ...')
            location.reload()
        } else if (result == '{"url":"/checkout/success"}') {
            document.location = 'https://' + zalandoUrl + '/checkout/success'
        } else {
            console.log('CHECKOUT ERROR ...')
            location.reload()
        }
    })

}

async function CouponCode(flowid) {//not in work

    display.textContent = 'Adding coupon ...'

    await fetch("https://" + zalandoUrl + "/api/checkout/redeem", {
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
        "referrer": "https://" + zalandoUrl + "/checkout/confirm",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"code\":\"" + coupon + "\",\"pageRenderFlowId\":\"" + flowid + "\"}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    })
        .then(response => console.log(response.status))
        .catch((error) => { console.log(error) });
    ;
}

async function checkoutBuyNow(etag, checkoutid) {//not in work

    display.textContent = 'Checking out ...'

    await fetch("https://" + zalandoUrl + "/api/checkout/buy-now", {
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
        "referrer": "https://" + zalandoUrl + "/checkout/confirm",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": '{\"checkoutId\":  \"' + checkoutid + '\",\"eTag\":' + etag + '}',
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    })
        .then(response => { res = response.text() })
        .catch((error) => { console.log(error) });
    ;
}

chrome.runtime.sendMessage({ greeting: "couponZ" }, function (response) {
    coupon = response.farewell
});

chrome.runtime.sendMessage({ greeting: "delay" }, function (response) {
    delay = response.farewell
});

chrome.runtime.sendMessage({ greeting: "skuzalando" }, function (response) {
    list_sku = response.farewell;
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function (response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "zalando" }, function (response) {
            if (response.farewell == 'on') {
                checkStock()
            }
        });
    }
    buttonAtc()
    setDelay()
});


