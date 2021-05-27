debugger

const site = "Zalando"

const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const site_region = {
    "www.zalando.at": {
        "ct": "katalog",
        "ID": " AT"
    },
    "www.zalando.be": {
        "ct": "catalogus",
        "ID": " BE"
    },
    "www.zalando.ch": {
        "ct": "schuhe",
        "ID": " CH"
    },
    "www.zalando.co.uk": {
        "ct": "catalog",
        "ID": " UK"
    },
    "www.zalando.cz": {
        "ct": "katalog",
        "ID": " CZ"
    },
    "www.zalando.de": {
        "ct": "katalog",
        "ID": " DE"
    },
    "www.zalando.es": {
        "ct": "catalogo",
        "ID": " ES"
    },
    "www.zalando.fr": {
        "ct": "catalogue",
        "ID": " FR"
    },
    "www.zalando.it": {
        "ct": "catalogo",
        "ID": " IT"
    },
    "www.zalando.nl": {
        "ct": "catalogus",
        "ID": " NL"
    },
    "www.zalando.no": {
        "ct": "catalog",
        "ID": " NO"
    },
    "www.zalando.pl": {
        "ct": "katalog",
        "ID": " PL"
    },
}

let link = document.location.href
let country = link.split('/')[2]

let status_aco = "";

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
let id = "";

let frsx = ""

let img_product = '';
let name_product = '';
let size_product = '';
let quantity_product = '';
let link_product = "https://www.zalando.it/"

let id_address

let cart_size_oos = []
let cart_size_instock = []


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
    try { document.getElementById('rCount').innerHTML = "Request count: " + i } catch (error) { }
}

async function setDelay() {
    try { document.getElementById('rDelay').innerHTML = "Delay: " + delay + "ms" } catch (error) { }
}

async function setCoupon(i) {
    try { document.getElementById("nCount").innerHTML = "COUPON COUNT : " + i } catch (error) { }
}

async function sendText(text, color) {
    try { document.getElementById("statusZalando").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) { }
}

function textBoxMain() {
    let color_aco = "";
    if (status_aco == "off") { color_aco = "red" } else { color_aco = "green" }
    try {
        var btn1 = document.getElementsByClassName("z-navicat-header_navContent")[0]
        btn1.insertAdjacentHTML("beforebegin", '<style>.btn_cava {box-shadow: rgb(247 197 192) 0px 1px 0px 0px inset;background: linear-gradient(rgb(252, 141, 131) 5%, rgb(228, 104, 93) 100%) rgb(252, 141, 131);border-radius: 6px;border: 1px solid rgb(216, 53, 38);display: inline-block;cursor: pointer;color: rgb(255, 255, 255);font-family: Arial;font-size: 14px;font-weight: bold;text-decoration: none;text-shadow: rgb(178 62 53) 0px 1px 0px;outline: none;width: 100%;}' +
            '.btn_cava:hover {background:linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);background-color:#e4685d;}' +
            '.btn_cava:active {position:relative;top:1px;}  p{font-weight:bold} label{font-weight:bold}' +
            '#CavaScripts {position: fixed;right: 0;top: 350px; z-index:1000;width:300px;background-image: url(https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fbackground.png?alt=media&token=90d4ab30-1b59-434f-8729-b2a43a84d445);background-size: cover;padding: 10px 10px;color: black; border-radius: 10px;font-family: Arial;text-align: left;}' +
            '#CavaScriptsheader {padding: 10px;cursor: move;z-index: 10;background-color: #2196F3;color: #fff;border-radius: 10px;text-align: center;}' +
            '.box {width: 100%;background: #ffffff;color: #000;text-align: center;display: inline-block;box-shadow: #A3A3A3 3px 3px 6px -1px;border-radius: 10px;padding: 5px;}</style>' +
            '<div id="CavaScripts"><div id="CavaScriptsheader"><input type="image" id="btn_left" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fleft.png?alt=media&token=ae01ab54-0f26-47ac-9fdf-8774188499bd" style="width: 10px; margin-right: 40px;margin-bottom: -3px;">Click here to move<input type="image" id="btn_right" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fright.png?alt=media&token=887cb8d7-4399-43ff-a197-96afe8626dc6" style="width: 10px;margin-left: 40px;margin-bottom: -3px;"></div>' +
            '<center><p id="statusZalando">Status Zalando</p></center>' +
            '<div class="box"><p id="rCount">Request count: 0</p>' +
            '<input class="btn_cava" style="margin-top:5px;" id="btn_atc_fast" type="submit" value="ATC FAST"> <br> ' +
            '<input class="btn_cava" style="margin-top:5px;" id="btn_clear_cart" type="submit" value="CLEAR CART"> <br>' +
            '<input class="btn_cava" style="margin-top:5px;" id="btn_gen_coupon" type="submit" value="GEN COUPON"> <br></div><br><br>' +
            "<p style='margin: 20px 0px 0px 0px;text-align: center;font-size: 15px;'>ACO: <span style='margin-right: 15px;font-size: 20px; text-transform: uppercase; color:" + color_aco + ";'>" + status_aco + "</span></p></div>");


        htmlCavaScripts()

        let btn_gen_coupon = document.getElementById('btn_gen_coupon')
        btn_gen_coupon.addEventListener("click", function () {
            try { window.open("https://" + country + "/zalando-newsletter/") } catch (error) {
                errorWebhook(error, "btn_gen_coupon")
            }
        });

        let btn_atc_fast = document.getElementById('btn_atc_fast')
        btn_atc_fast.addEventListener("click", function () {
            try { atcFast() } catch (error) {
                errorWebhook(error, "btn_atc_fast")
            }
        });

    } catch (error) {
        if (error != "TypeError: Cannot read property 'insertAdjacentHTML' of undefined")
            errorWebhook(error, "miniDisplay")
    }
}

function textBoxCart() {
    try {
        let color_aco = "";
        if (status_aco == "off") { color_aco = "red" } else { color_aco = "green" }
        let cava_script_info = document.getElementsByClassName("z-navicat-header_navContent")[0]
        cava_script_info.insertAdjacentHTML("beforebegin", '<style>.btn_cava {box-shadow: rgb(247 197 192) 0px 1px 0px 0px inset;background: linear-gradient(rgb(252, 141, 131) 5%, rgb(228, 104, 93) 100%) rgb(252, 141, 131);border-radius: 6px;border: 1px solid rgb(216, 53, 38);display: inline-block;cursor: pointer;color: rgb(255, 255, 255);font-family: Arial;font-size: 14px;font-weight: bold;text-decoration: none;text-shadow: rgb(178 62 53) 0px 1px 0px;outline: none;width: 100%;}' +
            '.btn_cava:hover {background:linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);background-color:#e4685d;}' +
            '.btn_cava:active {position:relative;top:1px;} p{font-weight:bold} label{font-weight:bold}' +
            '#CavaScripts {position: fixed;right: 0;top: 350px; z-index:1000;width:300px;background-image: url(https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fbackground.png?alt=media&token=90d4ab30-1b59-434f-8729-b2a43a84d445);background-size: cover;padding: 10px 10px;color: black; border-radius: 10px;font-family: Arial;text-align: left;}' +
            '#CavaScriptsheader {padding: 10px;cursor: move;z-index: 10;background-color: #2196F3;color: #fff;border-radius: 10px;text-align: center;}' +
            '.box {width: 100%;background: #ffffff;color: #000;text-align: center;display: inline-block;box-shadow: #A3A3A3 3px 3px 6px -1px;border-radius: 10px;padding: 5px;}</style>' +
            '<div id="CavaScripts"><div id="CavaScriptsheader"><input type="image" id="btn_left" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fleft.png?alt=media&token=ae01ab54-0f26-47ac-9fdf-8774188499bd" style="width: 10px; margin-right: 40px;margin-bottom: -3px;">Click here to move<input type="image" id="btn_right" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/box%2Fright.png?alt=media&token=887cb8d7-4399-43ff-a197-96afe8626dc6" style="width: 10px;margin-left: 40px;margin-bottom: -3px;"></div>' +
            '<center><p id="statusZalando">Status Zalando</p></center>' +
            '<div class="box"><p id="rCount">Request count: 0</p><p id="rDelay">Delay: 0ms</p>' +
            '<input class="btn_cava" style="text-align: center; background-color:black; width:200px;  margin:5px;" id="btn_clear_cart" type="submit" value="CLEAR CART"></div> <br><br>' +
            "<p style='margin: 20px 0px 0px 0px;text-align: center;font-size: 15px;'>ACO: <span style='margin-right: 15px;font-size: 20px; text-transform: uppercase; color:" + color_aco + ";'>" + status_aco + "</span></p></div>");

        htmlCavaScripts()

    } catch (error) {
        if (error != "TypeError: Cannot read property 'insertAdjacentHTML' of undefined")
            errorWebhook(error, "setDisplayInfo_main")
    }
}

function htmlCavaScripts() {
    try {

        dragElement(document.getElementById("CavaScripts"));
        window.onresize = checkPosition;
        if (localStorage.getItem("box") != null)
            document.getElementById('CavaScripts').style = localStorage.getItem("box")

        let btn_left = document.getElementById('btn_left')
        btn_left.addEventListener("click", function () {
            document.getElementById('CavaScripts').style = "left:0;top: 350px;"
            localStorage.setItem("box", document.getElementById("CavaScripts").getAttribute("style"))
        });

        let btn_right = document.getElementById('btn_right')
        btn_right.addEventListener("click", function () {
            document.getElementById('CavaScripts').style = "right:0;top: 350px;"
            localStorage.setItem("box", document.getElementById("CavaScripts").getAttribute("style"))
        });

        let btn_clear_cart = document.getElementById('btn_clear_cart')
        btn_clear_cart.addEventListener("click", function () {
            try { mainClearCart() } catch (error) {
                errorWebhook(error, "btn_clear_cart")
            }
        });

        let btn_gen_session = document.getElementById('btn_gen_session')
        btn_gen_session.addEventListener("click", function () {
            try {

                coupon_code = document.getElementById("input_coupon").value
                sizepid = document.getElementById("input_sizepid").value
                session = 1
                atcR(sizepid)

            } catch (error) { }
        });

        document.getElementById("input_sizepid").addEventListener('input', updateValueDummy);
        if (localStorage.getItem("zalando_dummy") != null)
            document.getElementById("input_sizepid").value = localStorage.getItem("zalando_dummy")

    } catch (error) { }
}
async function checkPosition() {
    let positon_top = 0
    try {
        positon_top = window.innerHeight - document.getElementById("CavaScripts").clientHeight
        if (positon_top < document.getElementById("CavaScripts").getAttribute("style").replace(/[^\d,.-]/g, '') && positon_top >= 0) {
            document.getElementById('CavaScripts').style = "top:" + positon_top + "px;"
            localStorage.setItem("box", document.getElementById("CavaScripts").getAttribute("style"))
        }
    } catch (error) { }
}

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:

        if (elmnt.offsetTop - pos2 >= 0) {
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            // elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            localStorage.setItem("box", document.getElementById("CavaScripts").getAttribute("style"))
        }
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}


function textBoxCouponGen() {
    try {

        document.getElementsByClassName("reVeb9 DvypSJ aC4gN7 ltJ7fb SYzeqo KVdkfm U4aOaA KoaFhL")[0].innerHTML = '<div>' +
            '<h2 style="text-align:center">CAVA SCRIPT </h2>' +
            '<p id="nCount" style="text-align:right; font-weight: bold;">COUPON COUNT : 0</p>' +
            //catchall
            '<div class="_0xLoFW _78xIQ-">' +
            '<label for="email-input" class="z-oVg8 VnVJx_ ka2E9k uMhVZi FxZV-M Q1UH4S _9YcI4f iSVqgF Saptwy _1IcNq DpImHu VCU58c UU2nsI e5GQII yu0rAc XbvwtD pVrzNP cXrhYr reVeb9">' +
            'Enter Catchall:</label>' +
            '<div class="FyYmoo JT3_zV _0xLoFW reVeb9 xRIrkR">' +
            '<input type="email" class="nMYklG WOeOAB z-oVg8 _7Cm1F9 ka2E9k uMhVZi FxZV-M bsVOrE mo6ZnF dUMFv9 K82if3 LyRfpJ pVrzNP NN8L-8 QGmTh2 Vn-7c-" placeholder="es: cavascript.com" id="catchall"></div>' +
            '</div> <br><br>' +
            //n coupon
            '<div class="_0xLoFW _78xIQ-">' +
            '<label for="email-input" class="z-oVg8 VnVJx_ ka2E9k uMhVZi FxZV-M Q1UH4S _9YcI4f iSVqgF Saptwy _1IcNq DpImHu VCU58c UU2nsI e5GQII yu0rAc XbvwtD pVrzNP cXrhYr reVeb9">' +
            'N Coupon:</label>' +
            '<div class="FyYmoo JT3_zV _0xLoFW reVeb9 xRIrkR">' +
            '<input type="number" class="nMYklG WOeOAB z-oVg8 _7Cm1F9 ka2E9k uMhVZi FxZV-M bsVOrE mo6ZnF dUMFv9 K82if3 LyRfpJ pVrzNP NN8L-8 QGmTh2 Vn-7c-" value="1" id="nCoupon"></div>' +
            '</div>' +
            //button generate
            '<button aria-label="Generate Coupon"' +
            'class="DJxzzA u9KIT8 NB8Ll4 vk5JMf ZkIJC- Vn-7c- FCIprz heWLCX RzUmIb LyRfpJ Md_Vex NN8L-8 GTG2H9 MfX1a0 WCjo-q EKabf7 aX2-iv r9BRio E6Km4r" type="submit" id="btnGenerateCoupon" style="margin-top:25px;width:100%">' +
            '<svg class="zds-icon RC794g _98USAM DlJ4rT nXkCf3 DlJ4rT _9l1hln cMfkVL fzejeK" height="1em" width="1em" focusable="false" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">' +
            '<path d="M21 3H3a3 3 0 00-3 3v12a3 3 0 003 3h18a3 3 0 003-3V6a3 3 0 00-3-3zm0 1.5c.32 0 .6.12.84.3l-8.82 8.22a1.5 1.5 0 01-2.04 0L2.16 4.79c.24-.17.52-.29.84-.29h18zm0 15H3A1.5 1.5 0 011.5 ' +
            '18V6.23l8.45 7.89a2.99 2.99 0 004.1 0l8.45-7.9V18c0 .83-.67 1.5-1.5 1.5z"></path></svg><span class="z-oVg8 heWLCX ZkIJC- r9BRio qXofat _7Cm1F9 ka2E9k uMhVZi dgII7d">Generate Coupon</span></button>'


        let btnGenerateCoupon = document.getElementById('btnGenerateCoupon')
        btnGenerateCoupon.addEventListener("click", function () {
            try { genCoupon() } catch (error) { }
        });

        document.getElementById("catchall").addEventListener('input', updateValueCatchall);
        if (localStorage.getItem("zalando_catchall") != null) {
            document.getElementById("catchall").value = localStorage.getItem("zalando_catchall")
        }

    } catch (error) { console.log(error) }
}

function updateValueCatchall(e) {
    localStorage.setItem("zalando_catchall", e.target.value)
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
        if (link != "https://" + country + "/wardrobe/?" && (document.getElementsByClassName("uqkIZw ka2E9k uMhVZi FxZV-M z-oVg8 pVrzNP")[0] != undefined || document.getElementsByClassName("uqkIZw ka2E9k uMhVZi dgII7d z-oVg8 _88STHx cMfkVL")[0] != undefined))
            if (drop_mode == "on")
                dropMode()
    }
    setDelay()
}



async function mainClearCart() {
    getProductCart()
}

async function getProductCart() {

    xsrf = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5)
    await fetch("https://" + country + "/api/cart-gateway/carts", {
        "headers": {
            "accept": "application/json",
            "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/json",
            "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-xsrf-token": xsrf
        },
        "referrer": link,
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    })
        .then(response => { checkResStock(response) })
        .catch((error) => { console.log(error) });;
}

async function checkResStock(response) {
    try {

        let status = response.status
        let res = await response.text()
        res = JSON.parse(res)
        if (status == 200 || status == 201 || status == 204) {
            cart_id = res["id"]
            try { cart_size_instock = res["groups"][0]["articles"] } catch (error) { }
            try { cart_size_oos = res["out_of_stock_articles"] } catch (error) { }
            if (cart_size_oos.length == 0 && cart_size_instock.length == 0) {
                sendText("Cart empty", "green")
            } else {
                checkStock()
            }

        } else {
            sendText("Error getting cart stock", "red")
        }

    } catch (error) { errorWebhook(error, "checkResStock") }
}

async function checkStock() {

    cart_size_instock.forEach(element => {
        clearCart(element["simple_sku"])
    });
    cart_size_oos.forEach(element => {
        clearCart(element["simple_sku"])
    });
}

async function clearCart(simplesku) {

    xsrf = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5)
    await fetch("https://" + country + "/api/cart-gateway/carts/" + cart_id + "/items/" + simplesku, {
        "headers": {
            "accept": "application/json",
            "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/json",
            "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-xsrf-token": xsrf
        },
        "referrer": link,
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "DELETE",
        "mode": "cors",
        "credentials": "include"
    })
        .then(response => { checkResCrearCart(response) })
        .catch((error) => { console.log(error) });;
}

async function checkResCrearCart(response) {
    try {

        let status = response.status
        if (status == 200 || status == 201 || status == 204) {
            sendText("Item removed", "green")
        } else {
            sendText("Error removing item", "red")
        }

    } catch (error) { errorWebhook(error, "checkResCrearCart") }
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
        document.getElementById("nCount").innerHTML = "ENTER CATCHALL"
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
            await res.then(function (result) {
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
                while (count_cart == 0) {
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
                    await sleep(parseInt(delay))
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
                    setCount(i)
                    await atcR(size[i], i)

                } else if (size_range.includes('-')) {
                    let size_1 = parseFloat(size_range.split('-')[0])
                    let size_2 = parseFloat(size_range.split('-')[1])
                    s = parseFloat(size_eu[i])
                    if (s >= size_1 && s <= size_2) {
                        setCount(i)
                        await atcR(size[i], i)
                    }

                } else {
                    let size_1 = parseFloat(size_range)
                    s = parseFloat(size_eu[i])
                    if (s == size_1) {
                        setCount(i)
                        await atcR(size[i], i)
                        break
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
                count_cart += 1
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
                count_cart = 1
                sendText("Carted", "green")
                sendText("Getting checkout", "blue")
                await getCheckout()
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
        .catch((error) => {
            errorWebhook(error, "getCheckout_fetch")
            nextstep()
        });;
}
async function checkResGetCheckout(response) {
    try {

        let status = response.status
        let result = await response.text()
        let url = response.url
        let x = "";
        let etag = "";
        let checkoutId = ""
        if (status == 200 || status == 201) {
            if (url == "/checkout/address" || url == "https://" + country + "/checkout/address") {
                mainAddress(result)
            } else if (url == "/checkout/confirm" || url == "https://" + country + "/checkout/confirm") {
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
                await checkoutBuyNow(etag, checkoutId)
            } else if (url.startsWith("/welcomenoaccount/true?target") || url.startsWith("https://" + country + "/welcomenoaccount/true?target")) {
                document.location = "https://" + country + "/login?target=/myaccount/"
            } else if (url.startsWith("https://checkout.payment.zalando.com/payment-method-selection-session/")) {
                open(url)
                await sleep(250)
                getCheckout()
            }
        }

    } catch (error) { errorWebhook(error, "checkResGetCheckout") }
}


async function mainAddress(result) {
    try {

        let html = document.createElement("html")
        if (link == "https://" + country + "/checkout/address") {
            html.innerHTML = document.body
        } else if (result != undefined) {
            html.innerHTML = result
        }

        let data = html.querySelectorAll('[data-props]')[0].getAttribute('data-props')
        data = data.substring(0, data.length)
        let x = JSON.parse(data)
        id_address = x['model']['addressDetails']['defaultShippingAddress']['id']

        if (id_address != "")
            defaultAddress()

    } catch (error) { errorWebhook(error, "mainAddress") }
}
async function defaultAddress() {
    xsrf = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5)
    sendText("Submitting ship...", "yellow")
    await fetch("https://" + country + "/api/checkout/address/" + id_address + "/default", {
        "headers": {
            "accept": "application/json",
            "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/json",
            "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-xsrf-token": xsrf,
            "x-zalando-checkout-app": "web",
            "x-zalando-footer-mode": "desktop",
            "x-zalando-header-mode": "desktop"
        },
        "referrer": link,
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"isDefaultShipping\":true}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    })
        .then(response => { checkResdefaultAddress(response) })
        .catch((error) => { errorWebhook(error, "defaultAddress") });;
}
async function checkResdefaultAddress(response) {
    try {
        let status = response.status

        if (status == 200 || status == 201) {
            sendText("Submitting ship", "lightgreen")
            nextstep()
        } else {
            sendText("Error Submitting ship", "red")
            errorWebhook(x, "checkResdefaultAddress_1")
        }

    } catch (error) {
        sendText("Error Submitting ship", "red")
        errorWebhook(error, "checkResdefaultAddress_2")
    }
}

async function nextstep() {
    xsrf = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5)
    await fetch("https://" + country + "/api/checkout/next-step", {
        "headers": {
            "accept": "*/*",
            "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-xsrf-token": xsrf,
            "x-zalando-checkout-app": "web",
            "x-zalando-footer-mode": "desktop",
            "x-zalando-header-mode": "desktop"
        },
        "referrer": link,
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    })
        .then(response => { checkResnextstep(response) })
        .catch((error) => { errorWebhook(error, "selectPayment") });;
}
async function checkResnextstep(response) {
    try {

        let status = response.status
        let res = await response.text()
        let x = res
        res = JSON.parse(res)
        if (status == 200 || status == 201) {
            sendText("nextstep", "lightgreen")
            open(res["url"])
            await sleep(250)
            getCheckout()
        } else {
            sendText("Error nextstep", "red")
            errorWebhook(x, "checkResnextstep_1")
        }

    } catch (error) {
        sendText("Error nextstep", "red")
        errorWebhook(error, "checkResnextstep_2")
    }
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

async function mainPaymentFast(url) {
    sendText("Submitting payment...", "yellow")
    selection1(url)
}


async function selection1(url) {

    await fetch(url, {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
            "sec-ch-ua-mobile": "?0",
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
        "credentials": "include"
    })
        .then(response => { checkResselection1(response) })
        .catch((error) => { errorWebhook(error, "selection1") });;
}
async function checkResselection1(response) {
    try {

        let status = response.status
        if (status > 300 || status < 399) {
            selection2()
        } else if (status == 200 || status == 201) {
            selection2()
        } else {
            sendText("Error payment", "red")
            paymentcomplete()
        }

    } catch (error) {
        sendText("Error payment", "red")
        errorWebhook(error, "checkResselection1")
    }
}
async function selection2() {
    await fetch("https://checkout.payment.zalando.com/selection", {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
            "sec-ch-ua-mobile": "?0",
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
        "credentials": "include"
    })
        .then(response => { checkResselection2(response) })
        .catch((error) => { errorWebhook(error, "selection2") });;
}
async function checkResselection2(response) {
    try {

        let status = response.status
        if (status > 300 || status < 399) {
            paymentcomplete()
        } else if (status == 200 || status == 201) {
            paymentcomplete()
        } else {
            sendText("Error payment", "red")
            paymentcomplete()
        }

    } catch (error) {
        sendText("Error payment", "red")
        errorWebhook(error, "checkResselection2")
    }
}
async function paymentcomplete() {
    await fetch("https://" + country + "/checkout/payment-complete", {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "cross-site",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        },
        "referrer": link,
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    })
        .then(response => { checkRespaymentcomplete(response) })
        .catch((error) => { errorWebhook(error, "paymentcomplete") });;
}
async function checkRespaymentcomplete(response) {
    try {

        let status = response.status
        if (status > 300 || status < 399) {
            if (response.url == "/cart?error=checkout.error.general")
                sendText("Error payment complete", "red")
            else if (response.url == "/checkout/confirm") {
                sendText("payment complete", "lightgreen")
                getCheckout()
            } else
                nextstep()
        } else if (status == 200 || status == 201) {
            sendText("payment complete", "lightgreen")
        } else {
            sendText("Error payment complete", "red")
            errorWebhook(x, "checkRespaymentSelection_1")
        }

    } catch (error) {
        sendText("Error payment complete", "red")
        errorWebhook(error, "checkRespaymentSelection_2")
    }
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
            } else if (url.startsWith("https://checkout.payment.zalando.com/")) {
                mainPaymentFast(url)
            } else if (url.startsWith("https://bankieren.ideal.ing.nl/") || url.startsWith("https://www.paypal.com/checkoutnow?")) {
                open(url)
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
        link_product = "https://" + country + "/" + site_region[country]["ct"] + "/?q=" + document.getElementsByClassName("z-coast-fjord_article")[0].getAttribute("data-id").replace("z-coast-fjord_article-", "").slice(0, 13)
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
            try { size_product = size_product.split(':')[1] } catch (error) { }
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
    chrome.runtime.sendMessage({ greeting: "checkout_webhook&-&" + name_product + "&-&" + link_product + "&-&" + img_product + "&-&" + site + site_region[country]["ID"] + "&-&" + size_product + "&-&" + quantity_product + "&-&" + email })
}
async function errorWebhook(error, position) {
    chrome.runtime.sendMessage({ greeting: "error_webhook&-&" + site + "&-&" + error + "&-&" + position })
}
async function resInfoWebook(message, position) {
    chrome.runtime.sendMessage({ greeting: "info_webhook&-&" + site + "&-&" + message + "&-&" + position })
}

chrome.runtime.sendMessage({ greeting: "status_aco_zalando" }, function (response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "size_zalando" }, function (response) {
    if (response.farewell != "off" && hasNumber(response.farewell))
        size_range = response.farewell
});

chrome.runtime.sendMessage({ greeting: "drop_mode_zalando" }, function (response) {
    drop_mode = response.farewell;
});

chrome.runtime.sendMessage({ greeting: "cart_mode_zalando" }, function (response) {
    cart_mode = response.farewell
});

chrome.runtime.sendMessage({ greeting: "delay_zalando" }, function (response) {
    delay = response.farewell
});

chrome.runtime.sendMessage({ greeting: "checkout_mode_zalando" }, function (response) {
    ckmode = response.farewell
});

chrome.runtime.sendMessage({ greeting: "email_pw_zalando" }, function (response) {
    let x = response.farewell
    email = x.split(':')[0]
    pw = x.split(':')[1]
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function (response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "status_aco_zalando" }, function (response) {
            if (response.farewell == 'on') {
                main();
            } else {
                if (link.startsWith("https://" + country + "/zalando-newsletter"))
                    textBoxCouponGen()
                else if (link.startsWith("https://" + country + "/cart")) {
                    textBoxCart()
                } else {
                    searchSize()
                    textBoxMain()
                }

            }
        });
    }
});