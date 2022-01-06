debugger

let linkk = document.location.href

let status_shopify = ""
let status_office = ""
let status_offspring = ""
let status_kith = ""
let status_awlab = ""
let status_here = ""
let status_courir = ""

let profileShopify = []
let profileOffspring = []
let profileOffice = []
let profileKith = []
let profileCourir = []
let profileHere = []
let profileAwlabIT = []
let profileAwlabEN = []
let profileAwlabES = []


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function mainAutofill() {

    console.log("ciao")

    if (linkk.includes("payments.worldpay.com")) {
        if (status_office == "on")
            if (document.querySelector("#sessionInfo").getAttribute("data-iframe-helper-url").includes("office"))
                mainPaymentCardOffice()
        if (status_offspring == "on")
            if (document.querySelector("#sessionInfo").getAttribute("data-iframe-helper-url").includes("offspring"))
                mainPaymentCardOffspring()

    } else if (linkk.includes("secure-fs.global-e.com") || linkk.includes("fs708.global-e.com")) {
        if (status_kith == "on") {
            if (document.body.textContent.includes("eu.kith.com"))
                mainShippingInfoKith()

            mainPaymentCardKith()
        }

    } else if (linkk.includes("checkoutshopper-live.adyen.com")) {

        if (status_courir == "on")
            if (document.body.textContent.includes("courir.com"))
                mainPaymentCardCourir()

        if (status_awlab == "on")
            if (document.body.textContent.includes("aw-lab.com"))
                mainPaymentCardAwLab()

        if (status_awlab == "on")
            if (document.body.textContent.includes("https://www.here-store.com"))
                mainPaymentCardHere()

    } else if (linkk.includes("checkout.shopifycs.com")) {
        if (status_shopify == "on")
            mainPaymentCardShopify()

    } else {
        try {
            if (document.body.textContent.includes("shopify.com")) {
                if (status_shopify == "on")
                    mainShippingInfoShopify()
            }
        } catch (error) {}

    }
}


async function mainShippingInfoShopify() {

    await sleep(500)

    try {
        if (document.getElementById("checkout_shipping_address_first_name") != null && document.getElementById("checkout_shipping_address_first_name").value == "") {
            document.getElementById("checkout_shipping_address_first_name").value = profileShopify.FirstName
        }
    } catch (error) {}

    try {
        if (document.getElementById("checkout_shipping_address_last_name") != null && document.getElementById("checkout_shipping_address_last_name").value == "") {
            document.getElementById("checkout_shipping_address_last_name").value = profileShopify.LastName
        }
    } catch (error) {}
    try {
        if (document.getElementById("checkout_email") != null && document.getElementById("checkout_email").value == "") {
            document.getElementById("checkout_email").value = profileShopify.Email
        }
    } catch (error) {}
    try {
        if (document.getElementById("checkout_shipping_address_country") != null) {
            document.getElementById("checkout_shipping_address_country").value = profileShopify.Country
        }
    } catch (error) {}
    try {
        if (document.getElementById("checkout_shipping_address_address1") != null && document.getElementById("checkout_shipping_address_address1").value == "") {
            document.getElementById("checkout_shipping_address_address1").value = profileShopify.AddressOne
        }
    } catch (error) {}
    try {
        if (document.getElementById("checkout_shipping_address_address2") != null && document.getElementById("checkout_shipping_address_address2").value == "") {
            document.getElementById("checkout_shipping_address_address2").value = profileShopify.AddressTwo
        }
    } catch (error) {}
    try {
        if (document.getElementById("checkout_shipping_address_province") != null && document.getElementById("checkout_shipping_address_province").value == "") {
            document.getElementById("checkout_shipping_address_province").value = profileShopify.State
        }
    } catch (error) {}
    try {
        if (document.getElementById("checkout_shipping_address_city") != null && document.getElementById("checkout_shipping_address_city").value == "") {
            document.getElementById("checkout_shipping_address_city").value = profileShopify.City
        }
    } catch (error) {}
    try {
        if (document.getElementById("checkout_shipping_address_zip") != null && document.getElementById("checkout_shipping_address_zip").value == "") {
            document.getElementById("checkout_shipping_address_zip").value = profileShopify.Zip
        }
    } catch (error) {}
    try {
        if (document.getElementById("checkout_shipping_address_phone") != null && document.getElementById("checkout_shipping_address_phone").value == "") {
            document.getElementById("checkout_shipping_address_phone").value = profileShopify.Telephone
        }
    } catch (error) {}

}
async function mainPaymentCardShopify() {

    await sleep(500)

    try {
        if (document.getElementById("name") != null && document.getElementById("name").value == "") {
            document.getElementById("name").focus()
            document.execCommand('insertText', false, profileShopify.CardOwnerName)
        }
    } catch (error) {}
    await sleep(100)
    try {
        if (document.getElementById("number") != null && document.getElementById("number").value == "") {
            document.getElementById("number").focus()
            document.execCommand('insertText', false, profileShopify.CardNumber)
        }
    } catch (error) {}
    await sleep(100)
    try {
        if (document.getElementById("expiry") != null && document.getElementById("expiry").value == "") {
            document.getElementById("expiry").focus()
            document.execCommand('insertText', false, profileShopify.MMYY)
        }
    } catch (error) {}
    await sleep(100)
    try {
        if (document.getElementById("verification_value") != null && document.getElementById("verification_value").value == "") {
            document.getElementById("verification_value").focus()
            document.execCommand('insertText', false, profileShopify.CVV)
        }
    } catch (error) {}

}

async function mainPaymentCardOffice() {

    await sleep(1000)

    try {
        if (document.getElementById("cardholderName") != null && document.getElementById("cardholderName").value == "") {
            document.getElementById("cardholderName").focus()
            document.execCommand('insertText', false, profileOffice.CardOwnerName)
        }
    } catch (error) {}

    try {
        if (document.getElementById("cardNumber") != null && document.getElementById("cardNumber").value == "") {
            document.getElementById("cardNumber").focus()
            document.execCommand('insertText', false, profileOffice.CardNumber)
        }
    } catch (error) {}

    try {
        if (document.getElementById("expiryMonth") != null && document.getElementById("expiryMonth").value == "") {
            if (profileOffice.MMYY.split('/')[0].length == 2) document.getElementById("expiryMonth").value = profileOffice.MMYY.split('/')[0]
            else document.getElementById("expiryMonth").value = "0" + profileOffice.MMYY.split('/')[0]

        }
        if (document.getElementById("expiryYear") != null && document.getElementById("expiryYear").value == "") {
            if (profileOffice.MMYY.split('/')[1].length == 2) document.getElementById("expiryYear").value = profileOffice.MMYY.split('/')[1]
            else document.getElementById("expiryYear").value = profileOffice.MMYY.split('/')[1].substring(2, 4)
        }
    } catch (error) {}

    try {
        if (document.getElementById("securityCode") != null && document.getElementById("securityCode").value == "") {
            document.getElementById("securityCode").focus()
            document.execCommand('insertText', false, profileOffice.CVV)
        }
    } catch (error) {}

}
async function mainPaymentCardOffspring() {

    await sleep(1000)

    try {
        if (document.getElementById("cardholderName") != null && document.getElementById("cardholderName").value == "") {
            document.getElementById("cardholderName").focus()
            document.execCommand('insertText', false, profileOffspring.CardOwnerName)
        }
    } catch (error) {}

    try {
        if (document.getElementById("cardNumber") != null && document.getElementById("cardNumber").value == "") {
            document.getElementById("cardNumber").focus()
            document.execCommand('insertText', false, profileOffspring.CardNumber)
        }
    } catch (error) {}

    try {
        if (document.getElementById("expiryMonth") != null && document.getElementById("expiryMonth").value == "") {
            if (profileOffspring.MMYY.split('/')[0].length == 2) document.getElementById("expiryMonth").value = profileOffspring.MMYY.split('/')[0]
            else document.getElementById("expiryMonth").value = "0" + profileOffspring.MMYY.split('/')[0]
        }
        if (document.getElementById("expiryYear") != null && document.getElementById("expiryYear").value == "") {
            if (profileOffspring.MMYY.split('/')[1].length == 2) document.getElementById("expiryYear").value = profileOffspring.MMYY.split('/')[1]
            else document.getElementById("expiryYear").value = profileOffspring.MMYY.split('/')[1].substring(2, 4)
        }
    } catch (error) {}

    try {
        if (document.getElementById("securityCode") != null && document.getElementById("securityCode").value == "") {
            document.getElementById("securityCode").focus()
            document.execCommand('insertText', false, profileOffspring.CVV)
        }
    } catch (error) {}

}


async function mainShippingInfoKith() {

    await sleep(1000)

    try {
        if (document.getElementById("CheckoutData_BillingFirstName") != null && document.getElementById("CheckoutData_BillingFirstName").value == "") {
            document.getElementById("CheckoutData_BillingFirstName").focus()
            document.execCommand('insertText', false, profileKith.FirstName)
        }
    } catch (error) {}

    try {
        if (document.getElementById("CheckoutData_BillingLastName") != null && document.getElementById("CheckoutData_BillingLastName").value == "") {
            document.getElementById("CheckoutData_BillingLastName").focus()
            document.execCommand('insertText', false, profileKith.LastName)
        }
    } catch (error) {}
    try {
        if (document.getElementById("CheckoutData_Email") != null && document.getElementById("CheckoutData_Email").value == "") {
            document.getElementById("CheckoutData_Email").focus()
            document.execCommand('insertText', false, profileKith.Email)
        }
    } catch (error) {}
    try {
        if (document.getElementById("BillingCountryID") != null) {
            document.getElementById("BillingCountryID").focus()
            document.execCommand('insertText', false, profileKith.Country)
        }
    } catch (error) {}
    try {
        if (document.getElementById("CheckoutData_BillingAddress1") != null && document.getElementById("CheckoutData_BillingAddress1").value == "") {
            document.getElementById("CheckoutData_BillingAddress1").focus()
            document.execCommand('insertText', false, profileKith.AddressOne)
        }
    } catch (error) {}
    try {
        if (document.getElementById("CheckoutData_BillingAddress2") != null && document.getElementById("CheckoutData_BillingAddress2").value == "") {
            document.getElementById("CheckoutData_BillingAddress2").focus()
            document.execCommand('insertText', false, profileKith.AddressTwo)
        }
    } catch (error) {}
    try {
        if (document.getElementById("BillingCity") != null && document.getElementById("BillingCity").value == "") {
            document.getElementById("BillingCity").focus()
            document.execCommand('insertText', false, profileKith.City)
        }
    } catch (error) {}
    try {
        if (document.getElementById("BillingZIP") != null && document.getElementById("BillingZIP").value == "") {
            document.getElementById("BillingZIP").focus()
            document.execCommand('insertText', false, profileKith.Zip)
        }
    } catch (error) {}
    try {
        if (document.getElementById("CheckoutData_BillingPhone") != null && document.getElementById("CheckoutData_BillingPhone").value == "") {
            document.getElementById("CheckoutData_BillingPhone").focus()
            document.execCommand('insertText', false, profileKith.Telephone)
        }
    } catch (error) {}

    try { document.querySelector('.pay-button-wrapper').scrollIntoView() } catch (error) {}
}
async function mainPaymentCardKith() {

    await sleep(1000)

    try {
        if (document.getElementById("cardNum") != null && document.getElementById("cardNum").value == "") {
            document.getElementById("cardNum").focus()
            document.execCommand('insertText', false, profileKith.CardNumber)
        }
    } catch (error) {}

    try {
        if (document.getElementById("cardExpiryMonth") != null && document.getElementById("cardExpiryMonth").value == "") {
            if (profileKith.MMYY.split('/')[0].length == 2) document.getElementById("cardExpiryMonth").value = profileKith.MMYY.split('/')[0]
            else document.getElementById("cardExpiryMonth").value = "0" + profileKith.MMYY.split('/')[0]
        }
        if (document.getElementById("cardExpiryYear") != null && document.getElementById("cardExpiryYear").value == "") {
            if (profileKith.MMYY.split('/')[1].length == 2) document.getElementById("cardExpiryYear").value = "20" + profileKith.MMYY.split('/')[1]
            else document.getElementById("cardExpiryYear").value = profileKith.MMYY.split('/')[1]
        }
    } catch (error) {}

    try {
        if (document.getElementById("cvdNumber") != null && document.getElementById("cvdNumber").value == "") {
            document.getElementById("cvdNumber").focus()
            document.execCommand('insertText', false, profileKith.CVV)
        }
    } catch (error) {}

    try { document.querySelector('.pay-button-wrapper').scrollIntoView() } catch (error) {}
}



async function mainPaymentCardCourir() {

    while (document.getElementById("encryptedCardNumber") == null && document.getElementById("encryptedExpiryDate") == null && document.getElementById("encryptedSecurityCode") == null)
        await sleep(50)

    try {
        if (document.getElementById("encryptedCardNumber") != null && document.getElementById("encryptedCardNumber").value == "") {
            document.getElementById("encryptedCardNumber").focus()
            document.execCommand('insertText', false, profileCourir.CardNumber)
        }
    } catch (error) {}

    try {
        if (document.getElementById("encryptedExpiryDate") != null && document.getElementById("encryptedExpiryDate").value == "") {
            document.getElementById("encryptedExpiryDate").focus()
            if (profileCourir.MMYY.split('/')[1].length == 2) document.execCommand('insertText', false, profileCourir.MMYY)
            else document.execCommand('insertText', false, profileCourir.MMYY.split('/')[0] + profileCourir.MMYY.split('/')[1].substring(2, 4))
        }
    } catch (error) {}

    try {
        if (document.getElementById("encryptedSecurityCode") != null && document.getElementById("encryptedSecurityCode").value == "") {
            document.getElementById("encryptedSecurityCode").focus()
            document.execCommand('insertText', false, profileCourir.CVV)
        }
    } catch (error) {}

}
async function mainPaymentCardAwLab() {

    while (document.getElementById("encryptedCardNumber") == null && document.getElementById("encryptedExpiryDate") == null && document.getElementById("encryptedSecurityCode") == null)
        await sleep(50)

    let profileAW = []
    if (document.body.textContent.includes("www.aw-lab.com"))
        profileAW = profileAwlabIT
    else if (document.body.textContent.includes("en.aw-lab.com"))
        profileAW = profileAwlabEN
    else if (document.body.textContent.includes("es.aw-lab.com"))
        profileAW = profileAwlabES


    try {
        if (document.getElementById("encryptedCardNumber") != null && document.getElementById("encryptedCardNumber").value == "") {
            document.getElementById("encryptedCardNumber").focus()
            document.execCommand('insertText', false, profileAW.CardNumber)
        }
    } catch (error) {}

    try {
        if (document.getElementById("encryptedExpiryDate") != null && document.getElementById("encryptedExpiryDate").value == "") {
            document.getElementById("encryptedExpiryDate").focus()
            if (profileAW.MMYY.split('/')[1].length == 2) document.execCommand('insertText', false, profileAW.MMYY)
            else document.execCommand('insertText', false, profile.MMYY.split('/')[0] + profileAW.MMYY.split('/')[1].substring(2, 4))
        }
    } catch (error) {}

    try {
        if (document.getElementById("encryptedSecurityCode") != null && document.getElementById("encryptedSecurityCode").value == "") {
            document.getElementById("encryptedSecurityCode").focus()
            document.execCommand('insertText', false, profileAW.CVV)
        }
    } catch (error) {}
}
async function mainPaymentCardHere() {

    while (document.getElementById("encryptedCardNumber") == null && document.getElementById("encryptedExpiryDate") == null && document.getElementById("encryptedSecurityCode") == null)
        await sleep(50)

    try {
        if (document.getElementById("encryptedCardNumber") != null && document.getElementById("encryptedCardNumber").value == "") {
            document.getElementById("encryptedCardNumber").focus()
            document.execCommand('insertText', false, profileHere.CardNumber)
        }
    } catch (error) {}

    try {
        if (document.getElementById("encryptedExpiryDate") != null && document.getElementById("encryptedExpiryDate").value == "") {
            document.getElementById("encryptedExpiryDate").focus()
            if (profileHere.MMYY.split('/')[1].length == 2) document.execCommand('insertText', false, profileHere.MMYY)
            else document.execCommand('insertText', false, profile.MMYY.split('/')[0] + profileHere.MMYY.split('/')[1].substring(2, 4))
        }
    } catch (error) {}

    try {
        if (document.getElementById("encryptedSecurityCode") != null && document.getElementById("encryptedSecurityCode").value == "") {
            document.getElementById("encryptedSecurityCode").focus()
            document.execCommand('insertText', false, profileHere.CVV)
        }
    } catch (error) {}

}


chrome.runtime.sendMessage({ greeting: "profile_shopify" }, function(response) {
    chrome.runtime.sendMessage({ greeting: response.farewell }, function(response) {
        try {
            profileShopify = JSON.parse(response.farewell)
        } catch (error) {}
    });
});

chrome.runtime.sendMessage({ greeting: "profile_offspring" }, function(response) {
    chrome.runtime.sendMessage({ greeting: response.farewell }, function(response) {
        try {
            profileOffspring = JSON.parse(response.farewell)
        } catch (error) {}
    });
});

chrome.runtime.sendMessage({ greeting: "profile_office" }, function(response) {
    chrome.runtime.sendMessage({ greeting: response.farewell }, function(response) {
        try {
            profileOffice = JSON.parse(response.farewell)
        } catch (error) {}
    });
});

chrome.runtime.sendMessage({ greeting: "profile_kith" }, function(response) {
    chrome.runtime.sendMessage({ greeting: response.farewell }, function(response) {
        try {
            profileKith = JSON.parse(response.farewell)
        } catch (error) {}
    });
});

chrome.runtime.sendMessage({ greeting: "profile_here" }, function(response) {
    chrome.runtime.sendMessage({ greeting: response.farewell }, function(response) {
        try {
            profileHere = JSON.parse(response.farewell)
        } catch (error) {}
    });
});

chrome.runtime.sendMessage({ greeting: "profile_courir" }, function(response) {
    chrome.runtime.sendMessage({ greeting: response.farewell }, function(response) {
        try {
            profileCourir = JSON.parse(response.farewell)
        } catch (error) {}
    });
});

chrome.runtime.sendMessage({ greeting: "profile_awlab_es" }, function(response) {
    chrome.runtime.sendMessage({ greeting: response.farewell }, function(response) {
        try {
            profileAwlabES = JSON.parse(response.farewell)
        } catch (error) {}
    });
});

chrome.runtime.sendMessage({ greeting: "profile_awlab_en" }, function(response) {
    chrome.runtime.sendMessage({ greeting: response.farewell }, function(response) {
        try {
            profileAwlabEN = JSON.parse(response.farewell)
        } catch (error) {}
    });
});

chrome.runtime.sendMessage({ greeting: "profile_awlab" }, function(response) {
    chrome.runtime.sendMessage({ greeting: response.farewell }, function(response) {
        try {
            profileAwlabIT = JSON.parse(response.farewell)
        } catch (error) {}
    });
});


chrome.runtime.sendMessage({ greeting: "status_aco_shopify" }, function(response) {
    status_shopify = response.farewell
});

chrome.runtime.sendMessage({ greeting: "status_aco_offspring" }, function(response) {
    status_offspring = response.farewell
});

chrome.runtime.sendMessage({ greeting: "status_aco_office" }, function(response) {
    status_office = response.farewell
});

chrome.runtime.sendMessage({ greeting: "status_aco_kith" }, function(response) {
    status_kith = response.farewell
});

chrome.runtime.sendMessage({ greeting: "status_aco_awlab" }, function(response) {
    status_awlab = response.farewell
});

chrome.runtime.sendMessage({ greeting: "status_aco_here" }, function(response) {
    status_here = response.farewell
});

chrome.runtime.sendMessage({ greeting: "status_aco_courir" }, function(response) {
    status_courir = response.farewell
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        mainAutofill()
    }
});