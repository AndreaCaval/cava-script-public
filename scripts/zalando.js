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
let ckmode = "Browser"
let cart_mode = "Fast"

let delay = "0"

let body = "["
let size_btn = ""
let selected_sizes = []
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
let price_product = "";
let link_product = "";
let linkpp = "";

let id_address = ""

let cart_size_unavailable = []
let cart_size_oos = []
let cart_size_instock = []
let cart_id = ""

let payment_session = ""
let coupon_code = ""
let sizepid = ""
let session = 0

try { frsx = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5) } catch (error) {}

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
    try { document.getElementById("nCount").innerHTML = "COUPON COUNT : " + i } catch (error) {}
}
async function sendText(text, color) {
    try { document.getElementById("statusZalando").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) {}
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
            '<input class="btn_cava" style="margin-top:5px;" id="btn_gen_coupon" type="submit" value="GEN COUPON">  <br></div><br><br>' +
            '<div class="box"><label>Coupon: </label> <br> <input style="color:black; type=text; width:100%;" id="input_coupon"> <br>' +
            '<label>Dummy Pid: </label> <br> <input style="color:black; type=text; width:100%;" id="input_sizepid" placeholder="es: NI115N001-A130060000"> <br>' +
            '<input class="btn_cava" style="margin-top:5px;" id="btn_gen_session" type="submit" value="GEN SESSION"> <br> </div>' +
            "<p style='margin: 20px 0px 0px 0px;text-align: center;font-size: 15px;'>ACO: <span style='margin-right: 15px;font-size: 20px; text-transform: uppercase; color:" + color_aco + ";'>" + status_aco + "</span></p></div>");


        htmlCavaScripts()

        let btn_gen_coupon = document.getElementById('btn_gen_coupon')
        btn_gen_coupon.addEventListener("click", function() {
            try { window.open("https://" + country + "/zalando-newsletter/") } catch (error) {
                errorWebhook(error, "btn_gen_coupon")
            }
        });

        let btn_atc_fast = document.getElementById('btn_atc_fast')
        btn_atc_fast.addEventListener("click", function() {
            try {
                // atcFast()
                btn_monitoring("AllSize")
            } catch (error) {
                errorWebhook(error, "btn_atc_fast")
            }
        });



    } catch (error) {}
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
            '<div class="box"><label>Coupon: </label> <br> <input style="color:black; type=text; width:100%;" id="input_coupon"> <br>' +
            '<label>Dummy Pid: </label> <br> <input style="color:black; type=text; width:100%;" id="input_sizepid" placeholder="es: NI115N001-A130060000"> <br>' +
            '<input class="btn_cava" style="margin-top:5px;" id="btn_gen_session" type="submit" value="GEN SESSION"> <br> </div>' +
            "<p style='margin: 20px 0px 0px 0px;text-align: center;font-size: 15px;'>ACO: <span style='margin-right: 15px;font-size: 20px; text-transform: uppercase; color:" + color_aco + ";'>" + status_aco + "</span></p></div>");

        htmlCavaScripts()

    } catch (error) {}
}

function htmlCavaScripts() {
    try {

        dragElement(document.getElementById("CavaScripts"));
        window.onresize = checkPosition;
        if (localStorage.getItem("box") != null)
            document.getElementById('CavaScripts').style = localStorage.getItem("box")

        let btn_left = document.getElementById('btn_left')
        btn_left.addEventListener("click", function() {
            document.getElementById('CavaScripts').style = "left:0;top: 350px;"
            localStorage.setItem("box", document.getElementById("CavaScripts").getAttribute("style"))
        });

        let btn_right = document.getElementById('btn_right')
        btn_right.addEventListener("click", function() {
            document.getElementById('CavaScripts').style = "right:0;top: 350px;"
            localStorage.setItem("box", document.getElementById("CavaScripts").getAttribute("style"))
        });

        let btn_clear_cart = document.getElementById('btn_clear_cart')
        btn_clear_cart.addEventListener("click", function() {
            try { mainClearCart() } catch (error) {
                errorWebhook(error, "btn_clear_cart")
            }
        });

        let btn_gen_session = document.getElementById('btn_gen_session')
        btn_gen_session.addEventListener("click", function() {
            try {

                coupon_code = document.getElementById("input_coupon").value
                sizepid = document.getElementById("input_sizepid").value
                session = 1
                localStorage.setItem("session", "1")
                genSession()

            } catch (error) {}
        });

        document.getElementById("input_coupon").addEventListener('input', updateValueCoupon);
        if (localStorage.getItem("zalando_coupon") != null)
            document.getElementById("input_coupon").value = localStorage.getItem("zalando_coupon")

        document.getElementById("input_sizepid").addEventListener('input', updateValueDummy);
        if (localStorage.getItem("zalando_dummy") != null)
            document.getElementById("input_sizepid").value = localStorage.getItem("zalando_dummy")

    } catch (error) {}
}
async function checkPosition() {
    let positon_top = 0
    try {
        positon_top = window.innerHeight - document.getElementById("CavaScripts").clientHeight
        if (positon_top < document.getElementById("CavaScripts").getAttribute("style").replace(/[^\d,.-]/g, '') && positon_top >= 0) {
            document.getElementById('CavaScripts').style = "top:" + positon_top + "px;"
            localStorage.setItem("box", document.getElementById("CavaScripts").getAttribute("style"))
        }
    } catch (error) {}
}

function updateValueDummy(e) {
    localStorage.setItem("zalando_dummy", e.target.value)
}

function updateValueCoupon(e) {
    localStorage.setItem("zalando_coupon", e.target.value)
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
        btnGenerateCoupon.addEventListener("click", function() {
            try { genCoupon() } catch (error) {}
        });

        document.getElementById("catchall").addEventListener('input', updateValueCatchall);
        if (localStorage.getItem("zalando_catchall") != null) {
            document.getElementById("catchall").value = localStorage.getItem("zalando_catchall")
        }

    } catch (error) {}
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
    } else if (link.startsWith("https://checkout.payment.zalando.com/")) {
        mainPaymentBrowser()
    } else if (link.startsWith("https://" + country + "/checkout/success")) {
        // mainSuccess()
    } else {
        await searchSize()
        textBoxMain()
        if (link != "https://" + country + "/wardrobe/?" && (size_btn != "" || document.getElementsByClassName("uqkIZw ka2E9k uMhVZi FxZV-M z-oVg8 pVrzNP")[0] != undefined || document.getElementsByClassName("uqkIZw ka2E9k uMhVZi dgII7d z-oVg8 _88STHx cMfkVL")[0] != undefined)) {
            AtcSizeButton()
        }
    }
    setDelay()
}

async function AtcSizeButton() {
    try {
        let total_stock = 0

        document.getElementsByClassName("okmnKS")[0].insertAdjacentHTML("beforeend", '<style>' +
            `.btn_size_atc {
            text-align: center;
            width: 75px;
            border-radius: 15px;
            }      

            ul {
                padding: 0;
                margin: 0;
                clear: both;
            }
            
            li{
                list-style-type: none;
                list-style-position: outside;
                padding: 10px;
                float: left;
            }
            
            input[type="checkbox"]:not(:checked), 
            input[type="checkbox"]:checked {
                position: absolute;
                left: -9999%;
            }
            
            input[type="checkbox"] + label {
                display: inline-block;
                padding: 10px;
                cursor: pointer;
                border: 3px solid black;
                color: black;
                background-color: white;
                margin-bottom: 10px;
            }
            
            input[type="checkbox"]:checked + label {
                border: 3px solid black;
                color: white;
                background-color: darkgray;
            }` +
            '</style><div style="text-align: center;" ><ul class="size_ul"></ul><br style="clear:both;">' +

            '<label style="margin-right:10px">Timer:</label> <input style="width:100px; color:black; type=text; margin-right:10px" id="timer" placeholder="es: 09:15:00">' +
            // '<input type="radio" id="OneSize" checked="checked" name="atc_mode" value="OneSize">' +
            // '<label for="OneSize">OneSize</label>' +
            // '<input style="margin-left:10px" type="radio" id="AllSize" name="atc_mode" value="AllSize">' +
            // '<label for="AllSize">AllSize</label><br><br>' +
            '<input id="btn_start_monitoring" type="submit" value="START MONITORING"></div>')

        for (let i = 0; i < size_btn.length; i++) {
            try {
                total_stock += size_btn[i].stock
                document.getElementsByClassName("size_ul")[0].insertAdjacentHTML("beforeend",
                    '<li><input class="ckbox_size" type="checkbox" id="' + size_btn[i].id + '" name="check_' + i.toString() + '" value="check_' + i.toString() + '">' +
                    '<label class="btn_size_atc" title= "Stock = ' + size_btn[i].stock.toString() + '" id="' + size_btn[i].id + '" for="check_' + i.toString() + '">' + size_btn[i]["size"]["local"] + '</label></li>');
            } catch (error) {
                document.getElementsByClassName("size_ul")[0].insertAdjacentHTML("beforeend",
                    '<li><input class="ckbox_size" type="checkbox" id="' + size_btn[i].sku + '" name="check_' + i.toString() + '" value="check_' + i.toString() + '">' +
                    '<label class="btn_size_atc" title= "Stock = ' + size_btn[i].offer.stock.quantity + '" id="' + size_btn[i].sku + '" for="check_' + i.toString() + '">' + size_btn[i].size + '</label></li>');

            }
        }

        let btns = document.getElementsByClassName("btn_size_atc")
        btns = Array.prototype.slice.call(btns)
        btns.forEach(element => {
            if (hasNumber(element.title)) {
                let s = parseInt(element.title.replace("Stock = ", ''))
                if (s > 10)
                    element.style.border = "3px solid #4CAF50"
                    // element.style.color = "3px solid #4CAF50"
                else if (s > 0)
                    element.style.border = "3px solid #ffd400"
                    // element.style.color = "3px solid #ffd400"
                else
                    element.style.border = "3px solid #f44336"
                    // element.style.color = "#f44336"
            } else {
                let s = element.title.replace("Stock = ", '')
                if (s == "MANY")
                    element.style.border = "3px solid #4CAF50"
                else if (s == "OUT_OF_STOCK")
                    element.style.border = "3px solid #f44336"
                else
                    element.style.border = "3px solid #ffd400"
            }


            element.addEventListener("dblclick", function() {
                frsx = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5)
                atcR(element.id)
            });
            element.addEventListener("click", function() {
                if (document.getElementById(element.id).checked == true)
                    document.getElementById(element.id).checked = false
                else
                    document.getElementById(element.id).checked = true
            });
        });

        let btn_start_monitoring = document.getElementById("btn_start_monitoring")
        btn_start_monitoring.addEventListener("click", function() {
            btn_monitoring("OneSize")
        });

        var x = document.createElement("SPAN");
        var t = document.createTextNode("Total Stock = " + total_stock.toString());
        x.style.float = "right"
        x.style.fontSize = "25px"
        if (total_stock > 0)
            x.style.color = "green"
        else
            x.style.color = "red"
        x.appendChild(t);
        document.getElementsByClassName("_1z5_Qg")[0].appendChild(x);

    } catch (error) {
        errorWebhook(error, "AtcSizeButton")
    }
}

async function btn_monitoring(atc_mode) {
    selected_sizes = []
    let s = document.getElementsByClassName("ckbox_size")
    s = Array.prototype.slice.call(s)
    s.forEach(element => {
        if (element.checked == true)
            selected_sizes.push(element.id)
    });
    // atc_mode = document.querySelector('input[name="atc_mode"]:checked').value;

    if (atc_mode == "AllSize") {
        if (selected_sizes.length == 0)
            selected_sizes = size
    } else {
        if (selected_sizes.length == 0) {
            size = arreyMixer(size)
            selected_sizes.push(size[0])
        } else if (selected_sizes.length != 1) {
            selected_sizes = arreyMixer(selected_sizes)
            x = selected_sizes[0]
            selected_sizes = []
            selected_sizes.push(x)
        }
    }

    selected_sizes.forEach(element => {
        body += "{\"id\":\"e7f9dfd05f6b992d05ec8d79803ce6a6bcfb0a10972d4d9731c6b94f6ec75033\",\"variables\":{\"addToCartInput\":{\"productId\":\"" + element + "\",\"clientMutationId\":\"addToCartMutation\"}}},"
    });
    body = body.substring(0, body.length - 1)
    body += "]"

    if (document.getElementById("timer").value != "") {
        let t = document.getElementById("timer").value.split(':')
        let d2 = new Date();
        d2.setHours(t[0], t[1], t[2], 0)
        let d1 = new Date();
        let wait = d2.getTime() - d1.getTime()
        sendText("Waiting...", "blue")

        await sleep(wait)
    }

    while (carted == 0) {

        await atcRall()
        await sleep(parseInt(delay))

    }

}

async function atcRall() {

    sendText("Carting items...", "blue")
    try { frsx = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5) } catch (error) {}
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
            "body": body,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResAtcAll(response) })
        .catch((error) => {
            sendText("ATC Error, rate limited", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhook(error, "atcR_fetch")
        });;
}
async function checkResAtcAll(response) {

    try {

        let status = response.status
        let res = await response.text()
        let x = res
        res = JSON.parse(res)
        let message = res[0]["data"]["addToCart"]
        let errors = ""

        if (status == 200 || status == 201) {
            if (message != null) {
                sendText("Carted", "yellow")
                carted++
                sendText("Getting checkout", "blue")

                checkStockGetCheckout()

                while (true) {
                    await getCheckout()
                    await sleep(parseInt(delay))
                }

            } else { sendText("Error carting...", "red") }
        } else {
            sendText("Error carting...", "red")
        }

    } catch (error) {
        if (error != "SyntaxError: Unexpected token < in JSON at position 0")
            errorWebhook(error, "checkAtcRes_2")
    }
}


async function genSession() {
    try {

        await atcR(sizepid)
        let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=1000,height=500,left=-1000,top=-1000`;
        zalandosession = window.open("https://" + country + "/checkout/confirm", 'zalandosession', params)

        await sleep(500)

        while (zalandosession.document.location.href.includes("address")) {
            await sleep(500)
            try { zalandosession.document.querySelector("#delivery-destination-tab-0").click() } catch (error) {}
            await sleep(500)
            try { zalandosession.document.querySelector('[data-id="z-coast-fjord_proceedToPayment"]').click() } catch (error) {}
            sendText("address", "yellow")
        }

        await sleep(1000)
        if (payment_mode != "Default")
            try { zalandosession.document.location = "https://checkout.payment.zalando.com/selection?show=true" } catch (error) { errorWebhook(error, "genSession5") }


        let errore = true
        while (errore == true) {
            try {
                while (!zalandosession.document.location.href.includes("confirm")) {
                    if (zalandosession.document.location.href.includes("address")) {
                        await sleep(500)
                        try { zalandosession.document.querySelector("#delivery-destination-tab-0").click() } catch (error) {}
                        await sleep(500)
                        try { zalandosession.document.querySelector('[data-id="z-coast-fjord_proceedToPayment"]').click() } catch (error) {}
                    }
                    await sleep(100)
                }
                errore = false
            } catch (error) {}
            await sleep(500)
        }

        try {

            if (zalandosession.document.location.href.includes("confirm")) {

                try {
                    if (coupon_code != "") {
                        zalandosession.document.querySelector('[name="z-coast-fjord-confirmation_voucherField"]').focus()
                        zalandosession.document.execCommand('insertText', false, coupon_code)
                        zalandosession.document.querySelector(".z-button__content").click()
                        sendText("coupon", "yellow")
                    }
                } catch (error) { errorWebhook(error, "genSession3") }

                await sleep(500)
                await mainClearCart()

                await sleep(500)
                sendText("Session ready", "green")
                localStorage.setItem("session", "0")
                zalandosession.close()
            }

        } catch (error) { errorWebhook(error, "genSession2") }

    } catch (error) {
        sendText("Error generating session", "red")
        errorWebhook(error, "genSession1")
        await mainClearCart()
    }
}



async function mainClearCart() {
    await getProductCart()
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
        .catch((error) => { errorWebhook(error, "getProductCart") });;
}
async function checkResStock(response) {
    try {

        let status = response.status
        let res = await response.text()
        res = JSON.parse(res)
        if (status == 200 || status == 201 || status == 204) {
            cart_id = res["id"]
            try { cart_size_instock = res["groups"][0]["articles"] } catch (error) {}
            try { cart_size_oos = res["out_of_stock_articles"] } catch (error) {}
            try { cart_size_unavailable = res["unavailable_articles"] } catch (error) {}
            if (cart_size_oos.length == 0 && cart_size_instock.length == 0 && cart_size_unavailable == 0) {
                sendText("Cart empty", "green")
            } else {
                await checkStock()
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
    cart_size_unavailable.forEach(element => {
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



async function searchSize() {
    try {
        if (country.split('.')[1] == 'zalando') {
            try {
                let s = document.getElementById('z-vegas-pdp-props').textContent
                s = s.slice(8, -2)
                let obj = JSON.parse(s)
                let sizes = obj[0].model.articleInfo.units
                size_btn = sizes
                for (let i = 0; i < sizes.length; i++) {
                    size.push(sizes[i].id)
                    size_eu.push(sizes[i]["size"]["local"])
                }
            } catch (error) {
                try {
                    await getProduct()
                    await res.then(function(result) {
                        let html = document.createElement('html')
                        html.innerHTML = result
                        let x = ""
                        let k = ""
                        let s = html.querySelectorAll("script")
                        s.forEach(element => {
                            if (element.textContent.includes('enrichedEntity') && element.className == "re-1-12") {
                                x = JSON.parse(element.textContent)
                            }
                        });
                        for (const [key, value] of Object.entries(x.graphqlCache)) {
                            let yy = JSON.stringify(value)
                            if (yy.includes("quantity") && yy.includes("stock") && yy.includes("size") && yy.includes("sku") && yy.includes("offer") && (yy.includes("ONE") || yy.includes("OUT_OF_STOCK") || yy.includes("MANY"))) {
                                k = key
                                break
                            }
                        }
                        let sizes = x.graphqlCache[k].data.product.simples
                        size_btn = sizes
                        for (let i = 0; i < sizes.length; i++) {
                            size.push(sizes[i].sku)
                            size_eu.push(sizes[i].size)
                        }
                    })
                } catch (error) {}
            }
        }
    } catch (error) {
        if (error != "TypeError: Cannot convert undefined or null to object")
            errorWebhook(error, "searchSize_2")
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
        .catch((error) => {
            sendText("Error getting product, rate limited", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhook(error, "getProduct_fetch")
        });;
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
            sendText("ATC Error, rate limited", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhook(error, "atcR_fetch")
        });;
}
async function checkAtcRes(response) {

    try {

        let status = response.status
        let res = await response.text()
        res = JSON.parse(res)
        let message = res[0]["data"]["addToCart"]

        if (status == 200 || status == 201) {
            if (message != null) {
                count_cart += 1
                sendText("Carted", "yellow")
                setCount(count_cart)
            } else {
                sendText("Error carting...", "red")
            }
        } else {
            sendText("Error carting...", "red")
        }

    } catch (error) {
        if (error != "SyntaxError: Unexpected token < in JSON at position 0")
            errorWebhook(res, "checkAtcRes_2")
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
            sendText("ATC Error, rate limited", "orange")
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
                sendText("Error carting", "red")
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
            await sleep(parseInt(delay))
            await getCheckout()

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
        }

    } catch (error) {
        errorWebhook(error, "checkStockGetCheckout")
    }
}
async function getCheckout() {

    await fetch("https://" + country + "/checkout/confirm", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7,de;q=0.6",
                "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
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
        .then(response => { checkResGetCheckout(response) })
        .catch((error) => {
            sendText("Error getting checkout, rate limited", "orange")
            if (error != "TypeError: Failed to fetch") errorWebhook(error, "getCheckout_fetch")
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

                price_product = x.model.totalPrice
                email = x.model.customerData.email
                link_product = "https://" + country + "/" + site_region[country]["ct"] + "/?q=" + x.model.groups[0].articles[0].configSku
                name_product = x.model.groups[0].articles[0].name
                img_product = x.model.groups[0].articles[0].imageUrl
                size_product = x.model.groups[0].articles[0].size
                await checkoutBuyNow(etag, checkoutId)
            } else if (url.startsWith("/welcomenoaccount/true?target") || url.startsWith("https://" + country + "/welcomenoaccount/true?target")) {
                document.location = "https://" + country + "/login?target=/myaccount/"
            } else if (url.startsWith("https://checkout.payment.zalando.com/payment-method-selection-session/")) {
                await sleep(5000)
                document.location = url
            } else if (url.includes("cart?error")) {
                sendText("rate limited", "red")
                await sleep(20000)
                    // location.reload()
            }
        }

    } catch (error) {
        sendText("rate limited", "red")
        errorWebhook(error, "checkResGetCheckout")
            // await sleep(2500)
    }
}


async function mainPaymentBrowser() {

    try {
        if (payment_mode == "Default") {
            document.querySelector("#payz-selection-bottom-submit").click()
        } else {
            var button = document.querySelectorAll('[value="' + payment_mode + '"]')
            if (button.length != 0) {
                button[0].click()
            }
        }
        await sleep(500)

        try {
            document.querySelector("#payz-selection-bottom-submit").click()
        } catch (error) {}

    } catch (error) { errorWebhook(error, "mainPaymentBrowser") }
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
        .catch((error) => {
            sendText("Error Submitting address, rate limited", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhook(error, "defaultAddress")
        });;
}
async function checkResdefaultAddress(response) {
    try {
        let status = response.status

        if (status == 200 || status == 201) {
            sendText("Submitting ship", "lightgreen")
            getCheckout()
        } else {
            sendText("Error Submitting ship", "red")
            errorWebhook(x, "checkResdefaultAddress_1")
        }

    } catch (error) {
        sendText("Error Submitting ship", "red")
        errorWebhook(error, "checkResdefaultAddress_2")
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

        let checkoutid = '';
        let etag = '';

        let page = document.querySelectorAll('[data-props]')[0].getAttribute('data-props')
        page = page.substring(0, page.length)

        let x = JSON.parse(page)

        etag = x.model.eTag
        etag = etag.replace('"', '')
        etag = etag.replace('"', '')
        etag = '"' + '\\' + '"' + etag + '\\' + '"' + '"'

        checkoutid = x.model.checkoutId

        email = x.model.customerData.email
        price_product = x.model.totalPrice
        link_product = "https://" + country + "/" + site_region[country]["ct"] + "/?q=" + x.model.groups[0].articles[0].configSku
        name_product = x.model.groups[0].articles[0].name
        img_product = x.model.groups[0].articles[0].imageUrl
        size_product = x.model.groups[0].articles[0].size

        await checkoutBuyNow(etag, checkoutid)

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
        .catch((error) => {
            sendText("Error Submitting order, rate limited", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhook(error, "checkoutBuyNow_fetch")
        });;
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
                sendWebhooks()
                document.location = 'https://' + country + '/checkout/success'
                await sleep(2500)
            } else if (url == "/cart?error=zalando.checkout.confirmation.quantity.error" || url == "/checkout/confirm?error=zalando.checkout.confirmation.quantity.error") {
                sendText("Error Submitting order, out of stock", "red")
                await sleep(2500)
                location.reload()
            } else if (url.startsWith("https://checkout.payment.zalando.com/")) {
                document.location = url
                resInfoWebook("checkout.payment.zalando.com", "checkRescheckoutBuyNow")
            } else if (url.startsWith("https://bankieren.ideal.ing.nl/") || url.startsWith("https://www.paypal.com/")) {
                linkpp = url
                sendWebhooks()
                document.location = url
                await sleep(2500)
            } else {
                sendText("Error Submitting order", "red")
                await sleep(2500)
            }
        } else {
            if (x.includes("Purchase Quantity Restriction"))
                sendText("Purchase Quantity Restriction", "red")
            else
                sendText("Error Submitting order, rate limited", "red")
                // errorWebhook(x, "checkRescheckoutBuyNow_2")
            if (x.includes("wait"))
                await sleep(60000)
            else
                await sleep(2500)
        }

    } catch (error) {
        if (error.include("TypeError: Failed to fetch"))
            sendText("Error Submitting order, rate limited", "red")
        else
            sendText("Error Submitting order, out of stock", "red")

        errorWebhook(error, "checkRescheckoutBuyNow_3")
        await sleep(2500)
    }
}

async function sendWebhooks() {
    chrome.runtime.sendMessage({ greeting: "checkout_webhook&-&" + name_product + "&-&" + link_product + "&-&" + img_product + "&-&" + site + site_region[country]["ID"] + "&-&" + size_product + "&-&" + price_product + "&-&" + email + "&-&" + linkpp })
}
async function errorWebhook(error, position) {
    chrome.runtime.sendMessage({ greeting: "error_webhook&-&" + site + "&-&" + error + "&-&" + position })
}
async function resInfoWebook(message, position) {
    chrome.runtime.sendMessage({ greeting: "info_webhook&-&" + site + "&-&" + message + "&-&" + position })
}

chrome.runtime.sendMessage({ greeting: "status_aco_zalando" }, function(response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "delay_zalando" }, function(response) {
    delay = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "status_aco_zalando" }, function(response) {
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