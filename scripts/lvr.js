debugger

const site = "Lvr"

let link = document.location.href
let country = link.split('/')[3]

let size_range = "random"

let status_aco = "";
let delay = "0";

let mode = "Browser"

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
        btn1.insertAdjacentHTML("beforebegin", '<div id="CavaScripts" style="font-size:15px; font-family: Verdana, Geneva, word-wrap: break-word; sans-serif; position: fixed; right:0; top: 500px; z-index: 1000; min-width: 10px; max-width: 500px; background-color: lightgrey; padding: 5px 10px; color: black; border-radius: 10px;">' +
            ' <p id="statusLvr">Status Lvr</p> ' +
            " <p>ACO: <span style='font-size:20px; color:" + color_aco + ";'>" + status_aco + "</span></p></div>");
    } catch (error) {
        if (error != "TypeError: Cannot read property 'parentNode' of undefined" && error != "TypeError: Cannot read property 'insertAdjacentHTML' of undefined" && error != "TypeError: Cannot read property 'insertAdjacentHTML' of null")
            errorWebhooks(error, "textBox")
    }
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
    } else if (link == "https://www.luisaviaroma.com/myarea/thanksBuy.aspx?") {
        // mainSuccess()
    }
}

async function mainAtc() {
    if (mode == "Browser") {
        mainBrowserAtc()
    } else if (mode == "Fast") {
        mainFast()
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
                //x = JSON.parse(x)

            ItemId = x["ItemParameters"]["ItemId"]
            SeasonId = x["ItemParameters"]["SeasonId"]
            CollectionId = x["ItemParameters"]["CollectionId"]
            VendorColorId = x["ItemParameters"]["VendorColorId"]

            console.log(x)

            sizes = x["Availability"]
            let selectSize = document.querySelector("[data-id = 'ItemPage-SelectSize']")
            if (selectSize.getElementsByClassName("_1607_GmTdI zq1tU3hfyW")[0] == undefined) {
                document.getElementsByClassName("_1607_GmTdI")[1].click()
                y = document.getElementsByClassName("_3kJMeU2j7k _3Im5jx7ea-")
                y = Array.prototype.slice.call(y)
                y.forEach(element => {
                    size_instock.push(element.getElementsByClassName("_2zrkbeeIRB _1ekN_Aa-0x")[0].textContent + " (NIKE USA)")
                });
                document.getElementsByClassName("_1607_GmTdI")[1].click()
            } else {
                size_instock.push(document.querySelector("[data-id = 'ItemPage-SelectSize']").getElementsByClassName("_1607_GmTdI")[0].textContent + " (NIKE USA)")
            }
            console.log(size_instock)
            if (size_range == "random") {
                do {
                    n = getRandomIntInclusive(0, sizes.length - 1)
                    console.log(sizes[n]["SelectedDescription"])
                } while (!size_instock.includes(sizes[n]["SelectedDescription"]))
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
                    // getCheckout()
                document.location = "https://www.luisaviaroma.com/myarea/myCart.aspx?season=&gender=&__s=#checkout"
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

    await fetch("https://www.luisaviaroma.com/myarea/myCart.aspx?season=&gender=&__s=#checkout", {
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
        email = html.querySelector('[data-attribute="email-input"]').getElementsByClassName("input-disabled-span")[0].textContent
        let x = ""
        let scripts = html.querySelectorAll("script")
        scripts.forEach(element => {
            if (element.textContent.includes("__BAG_MODEL__ "))
                x = element.textContent.replace("window.__BAG_MODEL__ = ", "")
        });

        len = x.length;
        x = x.substr(0, len - 1);
        x = JSON.parse(x)


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
        .catch((error) => { console.log(error) });;
}

async function checkResCk(response) {
    let status = response.status
    if (status == 200 || staus == 201) {
        sendText("Checked out...", "green")
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