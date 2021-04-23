debugger

const site = "Lvr"

let link = document.location.href
let country = link.split('/')[3]

let size_range = "random"

let status_aco = "";
let delay = "0";

let mode = ""

let name_product = "";
let price_product = "";
let size_product = "";
let link_product = link;
let id_product = "";
const img_product = "https://media.discordapp.net/attachments/680064413524426752/692785979316240464/unknown.png";

let variant_id = "";
let sizes = "";
let size = "";
let n = 0;
let product_id = link.split('/')[5];
let html = document.createElement('html');

let email = "";
let FirstName = "";
let LastName = "";
let phone = "";
let address = "";
let country_code = "";
let zipcode = "";
let city = "";
let state = "";
let CollectionId = "";
let VendorColorId = "";
let SizeId = "";
let SizeTypeId = "";
let ItemId = "";
let SeasonId = "";
let ComColorId = "";
let CartId = "";

let profile = ""
let Token = ""
let ItemCode = ""
let EncodedVendorColorId = ""
let SizeTypeID = ""


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
        var btn1 = document.getElementById('root-header')
        btn1.insertAdjacentHTML("beforebegin", '<style>.btn_cava {box-shadow: rgb(247 197 192) 0px 1px 0px 0px inset;background: linear-gradient(rgb(252, 141, 131) 5%, rgb(228, 104, 93) 100%) rgb(252, 141, 131);border-radius: 6px;border: 1px solid rgb(216, 53, 38);display: inline-block;cursor: pointer;color: rgb(255, 255, 255);font-family: Arial;font-size: 14px;font-weight: bold;text-decoration: none;text-shadow: rgb(178 62 53) 0px 1px 0px;outline: none;width: 100%;}' +
            '.btn_cava:hover {background:linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);background-color:#e4685d;}' +
            '.btn_cava:active {position:relative;top:1px;} p{font-weight:bold}' +
            '#CavaScripts {position: fixed;right: 0;top: 350px; z-index:1000;width:300px;background-image: url(https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/estensione%20grafica%2Fsfondo.png?alt=media&token=f403fdf7-32ee-4773-a1a9-4022916f4bea);background-size: cover;padding: 10px 10px;color: black; border-radius: 10px;font-family: Arial;text-align: left;}' +
            '#CavaScriptsheader {padding: 10px;cursor: move;z-index: 10;background-color: #2196F3;color: #fff;border-radius: 10px;text-align: center;}' +
            '.box {width: 100%;background: #ffffff;color: #000;text-align: center;display: inline-block;box-shadow: #A3A3A3 3px 3px 6px -1px;border-radius: 10px;padding: 5px;}</style>' +
            '<div id="CavaScripts"><div id="CavaScriptsheader"><input type="image" id="btn_left" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/estensione%20grafica%2Fleft.png?alt=media&token=4bfb16c9-cb38-4493-b80e-452dc18f35ba" style="width: 10px; margin-right: 40px;margin-bottom: -3px;">Click here to move<input type="image" id="btn_right" src="https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/estensione%20grafica%2Fright.png?alt=media&token=45a8c855-ccf9-4f80-9c55-113ccd8ed863" style="width: 10px;margin-left: 40px;margin-bottom: -3px;"></div>' +
            ' <br> <p id="statusLvr">Status lvr</p> ' +
            "<p style='margin: 20px 0px 0px 0px;text-align: center;font-size: 15px;'>ACO: <span style='margin-right: 15px;font-size: 20px; text-transform: uppercase; color:" + color_aco + ";'>" + status_aco + "</span></p></div>");

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
    } catch (error) {
        if (error != "TypeError: Cannot read property 'parentNode' of undefined" && error != "TypeError: Cannot read property 'insertAdjacentHTML' of undefined" && error != "TypeError: Cannot read property 'insertAdjacentHTML' of null")
            errorWebhooks(error, "textBox")
    }
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

        if (elmnt.offsetTop - pos2 >= 0 && elmnt.offsetTop - pos2 <= window.innerHeight - document.getElementById("CavaScripts").clientHeight) {
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
async function sendText(text, color) {
    try { document.getElementById("statusLvr").innerHTML = "<span style='color: " + color + ";'>" + text + "</span>" } catch (error) {}
}

async function main() {
    if (link.startsWith("https://www.luisaviaroma.com/" + country + "/p")) {
        mainAtc()
    } else if (link.startsWith("https://www.luisaviaroma.com/") && document.body.textContent.includes("__BODY_MODEL__ ")) {
        mainAtc()
    } else if (link.startsWith("https://www.luisaviaroma.com/myarea/myCart.aspx") && link.endsWith("#checkout")) {
        mainCheckout()
    } else if (link.startsWith("https://www.luisaviaroma.com/myarea/sendagift/checkout/")) {
        await sleep(250)
        try { document.querySelector('[for="PABPAB"]').scrollIntoView() } catch (error) {}
    } else if (link == "https://www.luisaviaroma.com/myarea/thanksBuy.aspx?") {
        // mainSuccess()
    }
}

async function mainAtc() {
    if (mode == "Browser") {
        mainBrowserAtc()
    } else if (mode == "Fast") {
        mainFast()
    } else if (mode == "Gift") {
        mainGift()
    }
}

async function mainBrowserAtc() {
    try {
        sendText("Trying atc manual...", "blue")
        let selectSize = document.querySelector("[data-id = 'ItemPage-SelectSize']")
        if (selectSize.getElementsByClassName("_1607_GmTdI zq1tU3hfyW")[0] == undefined) {
            document.getElementsByClassName("_1607_GmTdI")[1].click()
            sizes = document.getElementsByClassName("_3kJMeU2j7k _3Im5jx7ea-")
            sizes = Array.prototype.slice.call(sizes)
            sizes = arreyMixer(sizes)
            if (size_range == "random") {
                n = getRandomIntInclusive(0, sizes.length - 1)
                sizes[n].click()
            } else {
                if (size_range.includes('-')) {
                    size_1 = parseFloat(size_range.split('-')[0])
                    size_2 = parseFloat(size_range.split('-')[1])
                    for (let index = 0; index < sizes.length; index++) {
                        size = sizes[index].getAttribute('data-value')
                        size = JSON.parse(size)
                        size = parseFloat(size["SizeValue"])
                        if (size >= size_1 && size <= size_2) {
                            sizes[index].click()
                            break
                        }
                    }
                } else {
                    for (let index = 0; index < sizes.length; index++) {
                        size = sizes[index].getAttribute('data-value')
                        size = JSON.parse(size)
                        size = size["SizeValue"]
                        if (parseFloat(size) == parseFloat(size_range)) {
                            sizes[index].click()
                            break
                        }
                    }
                }
            }
        }

        document.querySelector("[data-id='ItemPage-AddToCartButton']").click()
        for (let index = 0; index < 10; index++) {
            if (document.getElementsByClassName("_1XdwbIRSc2")[0] != undefined) {
                sendText("Carted...", "green")
                let html = document.getElementsByClassName("_1XdwbIRSc2")[0]
                name_product = html.getElementsByClassName("_2iKu7YEjG3")[1].textContent
                price_product = html.getElementsByClassName("_2iKu7YEjG3")[2].textContent
                size_product = html.getElementsByClassName("_2iKu7YEjG3")[3].textContent
                link_product = link
                sendWebhooks()
                document.location = "https://www.luisaviaroma.com/myarea/myCart.aspx?season=&gender=&__s=#checkout"
                break
            }
            if (document.getElementsByClassName("_3qt8bw7rMV _2zTjwbIF_A _3gt0ct6Ftg")[0] != undefined) {
                sendText("Item out of stock...", "red")
                break
            }
            await sleep(500)
        }

    } catch (error) {
        if (error != "TypeError: Cannot read property 'getElementsByClassName' of null" && error != "TypeError: Cannot read property 'click' of undefined")
            errorWebhooks(error, "mainBrowser")
        sendText("Item out of stock", "red")

    }
}

async function mainFast() {
    try {
        if (document.querySelector("[data-id='ItemPage-SelectsContainer']") == undefined) {
            sendText("Item out of stock", "red")
        } else {
            sendText("Trying atc fast...", "blue")
            let size_instock = []
            let x = ""
            let y = ""
            let scripts = document.querySelectorAll("script")
            scripts.forEach(element => {
                if (element.textContent.includes("__BODY_MODEL__ "))
                    eval(element.textContent)
            });
            x = window.__BODY_MODEL__

            ItemId = x["ItemParameters"]["ItemId"]
            SeasonId = x["ItemParameters"]["SeasonId"]
            CollectionId = x["ItemParameters"]["CollectionId"]
            VendorColorId = x["ItemParameters"]["VendorColorId"]

            sizes = x["Availability"]
            let selectSize = document.querySelector("[data-id = 'ItemPage-SelectSize']")
            if (selectSize.getElementsByClassName("_1607_GmTdI zq1tU3hfyW")[0] == undefined) {
                document.getElementsByClassName("_1607_GmTdI")[1].click()
                y = document.getElementsByClassName("_3kJMeU2j7k _3Im5jx7ea-")
                y = Array.prototype.slice.call(y)
                y.forEach(element => {
                    size_instock.push(element.getElementsByClassName("_2zrkbeeIRB _1ekN_Aa-0x")[0].textContent)
                });
                document.getElementsByClassName("_1607_GmTdI")[1].click()
            } else {
                size_instock.push(document.querySelector("[data-id = 'ItemPage-SelectSize']").getElementsByClassName("_1607_GmTdI")[0].textContent)
            }
            if (size_range == "random") {
                do {
                    n = getRandomIntInclusive(0, sizes.length - 1)
                } while (!size_instock.includes((parseFloat(sizes[n]["SelectedDescription"]).toString())))
                size = sizes[n]["SelectedDescription"]
                SizeId = sizes[n]["SizeOrd"]
                SizeTypeId = sizes[n]["SizeTypeId"]
            } else {
                if (size_range.includes('-')) {
                    size_1 = parseFloat(size_range.split('-')[0])
                    size_2 = parseFloat(size_range.split('-')[1])
                    sizes = Array.prototype.slice.call(sizes)
                    sizes = arreyMixer(sizes)
                    for (let index = 0; index < sizes.length; index++) {
                        element = sizes[index]
                        size = parseFloat(element["SelectedDescription"])
                        if (size_instock.includes(size)) {
                            if (size >= size_1 && size <= size_2) {
                                SizeId = element["SizeOrd"]
                                SizeTypeId = element["SizeTypeId"]
                                break
                            }
                        }
                    }
                    if (SizeId == "") {
                        sendText("Selected sizes not available", "purple")
                    }
                } else {
                    for (let index = 0; index < sizes.length; index++) {
                        element = sizes[index]
                        size = parseFloat(element["SelectedDescription"])
                        if (size_instock.includes(size)) {
                            if (parseFloat(size) == parseFloat(size_range)) {
                                SizeId = element["SizeOrd"]
                                SizeTypeId = element["SizeTypeId"]
                                break
                            }
                        }
                    }
                    if (SizeId == "") {
                        sendText("Selected sizes not available", "purple")
                    }
                }
            }

            if (SizeId != "") {
                name_product = x["DescriptionText"]
                size_product = size
                price_product = x["Detail"]["FinalPrice"]
                atcRFast()
            }
        }

    } catch (error) {
        errorWebhooks(error, "mainFast")
        sendText("Item out of stock", "red")
    }
}

async function mainGift() {
    try {
        await sleep(1000)
        if (document.querySelector("[data-id='ItemPage-SelectsContainer']") == undefined) {
            sendText("Item out of stock", "red")
        } else {
            sendText("Trying atc fast...", "blue")
            let size_instock = []
            let x = ""
            let y = ""
            let scripts = document.querySelectorAll("script")
            scripts.forEach(element => {
                if (element.textContent.includes("__BODY_MODEL__ "))
                    eval(element.textContent)
            });
            x = window.__BODY_MODEL__
            ItemCode = x["ItemCode"]
            EncodedVendorColorId = x.Availability[0].ColorAvailability[0].EncodedVendorColorId
            sizes = x["Availability"]
            let selectSize = document.querySelector("[data-id = 'ItemPage-SelectSize']")
            if (selectSize.getElementsByClassName("_1607_GmTdI zq1tU3hfyW")[0] == undefined) {
                document.getElementsByClassName("_1607_GmTdI")[1].click()
                y = document.getElementsByClassName("_3kJMeU2j7k _3Im5jx7ea-")
                y = Array.prototype.slice.call(y)
                y.forEach(element => {
                    size_instock.push(element.getElementsByClassName("_2zrkbeeIRB _1ekN_Aa-0x")[0].textContent)
                });
                document.getElementsByClassName("_1607_GmTdI")[1].click()
            } else {
                size_instock.push(document.querySelector("[data-id = 'ItemPage-SelectSize']").getElementsByClassName("_1607_GmTdI")[0].textContent)
            }
            if (size_range == "random") {
                do {
                    n = getRandomIntInclusive(0, sizes.length - 1)
                } while (!size_instock.includes((parseFloat(sizes[n]["SelectedDescription"]).toString())))
                size = sizes[n]["SelectedDescription"]
                SizeId = sizes[n]["SizeOrd"]
                SizeTypeId = sizes[n]["SizeTypeId"]
            } else {
                if (size_range.includes('-')) {
                    size_1 = parseFloat(size_range.split('-')[0])
                    size_2 = parseFloat(size_range.split('-')[1])
                    sizes = Array.prototype.slice.call(sizes)
                    sizes = arreyMixer(sizes)
                    for (let index = 0; index < sizes.length; index++) {
                        element = sizes[index]
                        size = parseFloat(element["SelectedDescription"])
                        if (size_instock.includes(size)) {
                            if (size >= size_1 && size <= size_2) {
                                SizeId = element["SizeOrd"]
                                SizeTypeId = element["SizeTypeId"]
                                break
                            }
                        }
                    }
                    if (SizeId == "") {
                        sendText("Selected sizes not available", "purple")
                    }
                } else {
                    for (let index = 0; index < sizes.length; index++) {
                        element = sizes[index]
                        size = parseFloat(element["SelectedDescription"])
                        if (size_instock.includes(size)) {
                            if (parseFloat(size) == parseFloat(size_range)) {
                                SizeId = element["SizeOrd"]
                                SizeTypeId = element["SizeTypeId"]
                                break
                            }
                        }
                    }
                    if (SizeId == "") {
                        sendText("Selected sizes not available", "purple")
                    }
                }
            }

            if (SizeId != "") {
                name_product = x["DescriptionText"]
                size_product = size
                price_product = x["Detail"]["FinalPrice"]
                giftRichiesta()
            }
        }

    } catch (error) {
        errorWebhooks(error, "mainGift")
        sendText("Item out of stock", "red")
    }
}
async function giftRichiesta() {

    await fetch("https://www.luisaviaroma.com/myarea/api/sendagift/generate", {
            "headers": {
                "accept": "*/*",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "cache-control": "max-age=0",
                "content-type": "application/json",
                "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-lvr-requested-with": "sendagift/generate",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": link,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"IsMobile\":false,\"ItemCode\":\"" + ItemCode + "\",\"EncodedVendorColorId\":\"" + EncodedVendorColorId + "\",\"RecipientName\":\"" + profile.CardOwnerName + "\",\"RecipientEMail\":\"" + profile.Email + "\",\"SenderMessage\":\"bruno è bellissimo\"}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResgiftRichiesta(response) })
        .catch((error) => {
            sendText("Error gift richiesta", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "giftRichiesta")
        });;
}
async function checkResgiftRichiesta(response) {
    try {

        let status = response.status
        let res = await response.json()
        if (status == 200 || status == 201) {
            Token = res["Token"]
            if (Token != "") {
                giftAccetta()
            }
        } else {
            sendText("Error giftRichiesta", "red")
        }

    } catch (error) { errorWebhooks(error, "checkResgiftRichiesta") }
}
async function giftAccetta() {
    await fetch("https://www.luisaviaroma.com/myarea/api/sendagift/accept", {
            "headers": {
                "accept": "*/*",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "cache-control": "max-age=0",
                "content-type": "application/json",
                "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-lvr-requested-with": "sendagift/accept",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": link,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"IsMobile\":false,\"Token\":\"" + Token + "\",\"SizeTypeID\":\"" + SizeTypeId + "\",\"SizeID\":\"" + SizeId + "\",\"EMail\":\"" + profile.Email + "\",\"FirstName\":\"" + profile.FirstName + "\",\"LastName\":\"" + profile.LastName + "\",\"Phone\":\"" + profile.Telephone + "\",\"Address\":\"" + profile.AddressOne + "\",\"ZipCode\":\"" + profile.Zip + "\",\"City\":\"" + profile.City + "\",\"StateId\":\"" + profile.State + "\",\"RecipientMessage\":\"grazie lo so\",\"SubscribeNewsLetter\":false,\"EncodedVendorColorId\":\"" + EncodedVendorColorId + "\"}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        }).then(response => { checkResgiftAccetta(response) })
        .catch((error) => {
            sendText("Error gift accetta", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "giftAccetta")
        });;

}
async function checkResgiftAccetta(response) {
    try {

        let status = response.status
        let res = await response.json()

        if (status == 200 || status == 201) {
            if (res.Error == "None")
                sendText("Success", "green")
            else
                sendText(res.ErrorDescription)
        } else {
            sendText("Error checkResgiftAccetta", "red")
        }
    } catch (error) { errorWebhooks(error, "checkResgiftAccetta") }
}


async function atcRFast() {
    await fetch("https://www.luisaviaroma.com/myarea/bag/add", {
            "headers": {
                "accept": "*/*",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "cache-control": "max-age=0",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-lvr-requested-with": "bag/add",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": link,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"IsMobile\":false,\"SeasonId\":\"" + SeasonId + "\",\"CollectionId\":\"" + CollectionId + "\",\"ItemId\":" + ItemId + ",\"VendorColorId\":\"" + VendorColorId + "\",\"SizeTypeId\":\"" + SizeTypeId + "\",\"SizeId\":\"" + SizeId + "\",\"Quantity\":1}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        }).then(response => { checkRes(response) })
        .catch((error) => {
            sendText("Error adding to cart", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "atcRFast")
        });;
}

async function checkRes(response) {

    try {
        let status = response.status
        let res = await response.text()
        res = JSON.parse(res)
        if (status == 200 || status == 201) {
            if (res["Error"] == "None") {
                sendText("Carted ", "green")
                sendWebhooks()
                getCheckout()
                    // document.location = "https://www.luisaviaroma.com/myarea/myCart.aspx?season=&gender=&__s=#checkout"
            } else {
                sendText(res["Error"], "red")
            }
        } else {
            sendText("Error carting ", "red")
            errorRefresh()
        }
    } catch (error) { errorWebhooks(error, "checkRes") }
}

async function getCheckout() {

    sendText("Getting checkout...", "blue")
    await fetch("https://www.luisaviaroma.com/myarea/myCart.aspx?season=&gender=&__s=", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "cache-control": "max-age=0",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
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
        .then(response => { checkResgetCheckout(response) })
        .catch((error) => {
            sendText("Error getting checkout", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "getCheckout fetch")

        });;
}

async function checkResgetCheckout(response) {

    let status = response.status
    let res = await response.text()
    if (status == 200 || status == 201) {
        sendText("Getting checkout ", "green")
        html.innerHTML = res
        getData()
    } else {
        sendText("Error getting checkout ", "red")
        errorRefresh()
    }
}

async function mainCheckout() {
    html.innerHTML = document.body.innerHTML
    getData()
}

async function getData() {

    try {
        sendText("Getting shipping info...", "blue")
        let x = ""
        let scripts = html.querySelectorAll("script")
        scripts.forEach(element => {
            if (element.textContent.includes("__BAG_MODEL__ "))
                x = element.textContent.replace("window.__BAG_MODEL__ = ", "")
        });

        len = x.length;
        x = x.substr(0, len - 1);
        x = JSON.parse(x)

        email = x["UserInfo"]["Id"]
        FirstName = x["UserInfo"]["ShippingAddresses"][0]["FirstName"]
        LastName = x["UserInfo"]["ShippingAddresses"][0]["LastName"]
        phone = x["UserInfo"]["ShippingAddresses"][0]["Phone"]
        address = x["UserInfo"]["ShippingAddresses"][0]["Address"]
        country_code = x["UserInfo"]["ShippingAddresses"][0]["CountryId"]
        zipcode = x["UserInfo"]["ShippingAddresses"][0]["ZipCode"]
        city = x["UserInfo"]["ShippingAddresses"][0]["City"]
        state = x["UserInfo"]["ShippingAddresses"][0]["StateId"]
        CollectionId = x["OrderInfo"]["Rows"][0]["CollectionId"]
        VendorColorId = x["OrderInfo"]["Rows"][0]["VendorColorId"]
        SizeId = x["OrderInfo"]["Rows"][0]["SizeId"]
        SizeTypeId = x["OrderInfo"]["Rows"][0]["SizeTypeId"]
        ItemId = x["OrderInfo"]["Rows"][0]["ItemId"]
        SeasonId = x["OrderInfo"]["Rows"][0]["SeasonId"]
        ComColorId = x["OrderInfo"]["Rows"][0]["ComColorId"]
        CartId = x["OrderInfo"]["CartId"]

        confirmloggeduserandcreateorder()

    } catch (error) {
        if (error != "TypeError: Cannot read property 'getElementsByClassName' of null")
            errorWebhooks(error, "getData")
    }

}

async function confirmloggeduserandcreateorder() {

    sendText("Checking out...", "blue")
    await fetch("https://www.luisaviaroma.com/myarea/bag/confirmloggeduserandcreateorder", {
            "headers": {
                "accept": "*/*",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "cache-control": "max-age=0",
                "content-type": "application/json",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-lvr-requested-with": "checkout/confirmloggeduserandcreateorder",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": link,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"IsMobile\":false,\"ConfirmUser\":{\"Account\":{\"Email\":\"" + email + "\",\"FirstName\":\"" + FirstName + "\",\"LastName\":\"" + LastName + "\",\"SubscribeNewsLetter\":false,\"SubscribeLoyalty\":false,\"Password\":\"\"},\"ShipAddress\":{\"FirstName\":\"" + FirstName + "\",\"LastName\":\"" + LastName + "\",\"Phone\":\"" + phone + "\",\"CountryId\":\"" + country_code + "\",\"Address\":\"" + address + "\",\"ZipCode\":\"" + zipcode + "\",\"City\":\"" + city + "\",\"StateId\":\"" + state + "\",\"CodFisc\":null,\"PecDestinatario\":null,\"CodDestinatario\":null},\"BillAddress\":{\"FirstName\":\"" + FirstName + "\",\"LastName\":\"" + LastName + "\",\"Phone\":\"" + phone + "\",\"CountryId\":\"" + country_code + "\",\"Address\":\"" + address + "\",\"ZipCode\":\"" + zipcode + "\",\"City\":\"" + city + "\",\"StateId\":\"" + state + "\",\"CodFisc\":null,\"PecDestinatario\":null,\"CodDestinatario\":null},\"PaymentCode\":\"PAB\",\"ShippingTypeService\":\"E\",\"InvoiceRequested\":false},\"CreateOrder\":{\"type\":\"loggeduser\",\"Account\":{\"Email\":\"" + email + "\",\"FirstName\":\"" + FirstName + "\",\"LastName\":\"" + LastName + "\",\"SubscribeNewsLetter\":false,\"SubscribeLoyalty\":false,\"Password\":\"\"},\"ShipAddress\":{\"FirstName\":\"" + FirstName + "\",\"LastName\":\"" + LastName + "\",\"Phone\":\"" + phone + "\",\"CountryId\":\"" + country_code + "\",\"Address\":\"" + address + "\",\"ZipCode\":\"" + zipcode + "\",\"City\":\"" + city + "\",\"StateId\":\"" + state + "\",\"CodFisc\":null,\"PecDestinatario\":null,\"CodDestinatario\":null},\"BillAddress\":{\"FirstName\":\"" + FirstName + "\",\"LastName\":\"" + LastName + "\",\"Phone\":\"" + phone + "\",\"CountryId\":\"" + country_code + "\",\"Address\":\"" + address + "\",\"ZipCode\":\"" + zipcode + "\",\"City\":\"" + city + "\",\"StateId\":\"" + state + "\",\"CodFisc\":null,\"PecDestinatario\":null,\"CodDestinatario\":null},\"ShippingTypeService\":\"E\",\"PaymentCode\":\"PAB\",\"AcceptPayPalBillingAgreement\":true,\"CreditCard\":null,\"PromoPaymentCode\":null,\"Promos\":[{\"Type\":6,\"Code\":\"BEAUTY30\"},{\"Type\":6,\"Code\":\"SALEPRAU10\"},{\"Type\":6,\"Code\":\"SALEPRAU20\"},{\"Type\":6,\"Code\":\"SALEPRAU30\"},{\"Type\":6,\"Code\":\"SALEPRAU40\"},{\"Type\":6,\"Code\":\"SALEPRAU50\"}],\"Rows\":[{\"SeasonId\":\"" + SeasonId + "\",\"CollectionId\":\"" + CollectionId + "\",\"ItemId\":" + ItemId + ",\"SizeTypeId\":\"" + SizeTypeId + "\",\"SizeId\":" + SizeId + ",\"VendorColorId\":\"" + VendorColorId + "\",\"ComColorId\":" + ComColorId + ",\"Quantity\":1,\"CustomizedAttributes\":[]}],\"IsGuest\":false,\"CartId\":" + CartId + ",\"FattCurrencyId\":\"EUR\",\"ViewCurrencyId\":\"EUR\",\"Language\":\"IT\",\"Mobile\":false,\"ShippingCost\":10,\"ShippingAgent\":\"\",\"InvoiceRequested\":false,\"SalesTaxes\":0}}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResCk(response) })
        .catch((error) => {
            sendText("Error checking out", "orange")
            if (error != "TypeError: Failed to fetch")
                errorWebhooks(error, "confirmloggeduserandcreateorder fetch")

        });;
}

async function checkResCk(response) {
    let status = response.status
    if (status == 200 || staus == 201) {
        sendText("Checked out", "green")
        document.location = "https://www.luisaviaroma.com/myarea/thanksBuy.aspx?"
    } else {
        sendText("Error checking out...", "red")
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

chrome.runtime.sendMessage({ greeting: "lvr" }, function(response) {
    status_aco = response.farewell
});

chrome.runtime.sendMessage({ greeting: "lvr_size" }, function(response) {
    if (response.farewell != "off" && hasNumber(response.farewell))
        size_range = response.farewell
});

chrome.runtime.sendMessage({ greeting: "lvr_mode" }, function(response) {
    mode = response.farewell
});

chrome.runtime.sendMessage({ greeting: "profile_lvr" }, function(response) {
    chrome.runtime.sendMessage({ greeting: response.farewell }, function(response) {
        try {
            profile = JSON.parse(response.farewell)
        } catch (error) {}
    });
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "lvr" }, function(response) {
            if (response.farewell == 'on') {
                main();
            }
        });
        textBox()
    }
});