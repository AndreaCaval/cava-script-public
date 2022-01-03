debugger

let linkk = document.location.href

let status_office = ""
let status_offspring = ""
let status_awlab = ""
let status_here = ""
let status_courir = ""

let profileOffspring = []
let profileOffice = []
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

    }
}

async function mainPaymentCardOffice() {

    await sleep(1000)

    try {
        if (document.getElementById("cardholderName") != null) {
            document.getElementById("cardholderName").focus()
            document.execCommand('insertText', false, profileOffice.CardOwnerName)
        }
    } catch (error) {}

    try {
        if (document.getElementById("cardNumber") != null) {
            document.getElementById("cardNumber").focus()
            document.execCommand('insertText', false, profileOffice.CardNumber)
        }
    } catch (error) {}

    try {
        if (document.getElementById("expiryMonth") != null) {
            document.getElementById("expiryMonth").value = profileOffice.MMYY.split('/')[0]
        }
        if (document.getElementById("expiryYear") != null) {
            if (profileOffice.MMYY.split('/')[1].length == 2) document.getElementById("expiryYear").value = profileOffice.MMYY.split('/')[1]
            else document.getElementById("expiryYear").value = profileOffice.MMYY.split('/')[1].substring(2, 4)
        }
    } catch (error) {}

    try {
        if (document.getElementById("securityCode") != null) {
            document.getElementById("securityCode").focus()
            document.execCommand('insertText', false, profileOffice.CVV)
        }
    } catch (error) {}

}
async function mainPaymentCardOffspring() {

    await sleep(1000)

    try {
        if (document.getElementById("cardholderName") != null) {
            document.getElementById("cardholderName").focus()
            document.execCommand('insertText', false, profileOffspring.CardOwnerName)
        }
    } catch (error) {}

    try {
        if (document.getElementById("cardNumber") != null) {
            document.getElementById("cardNumber").focus()
            document.execCommand('insertText', false, profileOffspring.CardNumber)
        }
    } catch (error) {}

    try {
        if (document.getElementById("expiryMonth") != null) {
            document.getElementById("expiryMonth").value = profileOffspring.MMYY.split('/')[0]
        }
        if (document.getElementById("expiryYear") != null) {
            if (profileOffspring.MMYY.split('/')[1].length == 2) document.getElementById("expiryYear").value = profileOffspring.MMYY.split('/')[1]
            else document.getElementById("expiryYear").value = profileOffspring.MMYY.split('/')[1].substring(2, 4)
        }
    } catch (error) {}

    try {
        if (document.getElementById("securityCode") != null) {
            document.getElementById("securityCode").focus()
            document.execCommand('insertText', false, profileOffspring.CVV)
        }
    } catch (error) {}

}
async function mainPaymentCardCourir() {

    while (document.getElementById("encryptedCardNumber") == null && document.getElementById("encryptedExpiryDate") == null && document.getElementById("encryptedSecurityCode") == null)
        await sleep(50)

    try {
        if (document.getElementById("encryptedCardNumber") != null) {
            document.getElementById("encryptedCardNumber").focus()
            document.execCommand('insertText', false, profileCourir.CardNumber)
        }
    } catch (error) {}

    try {
        if (document.getElementById("encryptedExpiryDate") != null) {
            document.getElementById("encryptedExpiryDate").focus()
            if (profileCourir.MMYY.split('/')[1].length == 2) document.execCommand('insertText', false, profileCourir.MMYY)
            else document.execCommand('insertText', false, profileCourir.MMYY.split('/')[0] + profileCourir.MMYY.split('/')[1].substring(2, 4))
        }
    } catch (error) {}

    try {
        if (document.getElementById("encryptedSecurityCode") != null) {
            document.getElementById("encryptedSecurityCode").focus()
            document.execCommand('insertText', false, profileCourir.CVV)
        }
    } catch (error) {}

}
async function mainPaymentCardAwLab() {

    while (document.getElementById("encryptedCardNumber") == null && document.getElementById("encryptedExpiryDate") == null && document.getElementById("encryptedSecurityCode") == null)
        await sleep(50)

    let profile = []
    if (document.body.textContent.includes("www.aw-lab.com"))
        profile = profileAwlabIT
    else if (document.body.textContent.includes("en.aw-lab.com"))
        profile = profileAwlabEN
    else if (document.body.textContent.includes("es.aw-lab.com"))
        profile = profileAwlabES


    try {
        if (document.getElementById("encryptedCardNumber") != null) {
            document.getElementById("encryptedCardNumber").focus()
            document.execCommand('insertText', false, profile.CardNumber)
        }
    } catch (error) {}

    try {
        if (document.getElementById("encryptedExpiryDate") != null) {
            document.getElementById("encryptedExpiryDate").focus()
            if (profile.MMYY.split('/')[1].length == 2) document.execCommand('insertText', false, profile.MMYY)
            else document.execCommand('insertText', false, profile.MMYY.split('/')[0] + profile.MMYY.split('/')[1].substring(2, 4))
        }
    } catch (error) {}

    try {
        if (document.getElementById("encryptedSecurityCode") != null) {
            document.getElementById("encryptedSecurityCode").focus()
            document.execCommand('insertText', false, profile.CVV)
        }
    } catch (error) {}
}
async function mainPaymentCardHere() {

    while (document.getElementById("encryptedCardNumber") == null && document.getElementById("encryptedExpiryDate") == null && document.getElementById("encryptedSecurityCode") == null)
        await sleep(50)

    try {
        if (document.getElementById("encryptedCardNumber") != null) {
            document.getElementById("encryptedCardNumber").focus()
            document.execCommand('insertText', false, profileHere.CardNumber)
        }
    } catch (error) {}

    try {
        if (document.getElementById("encryptedExpiryDate") != null) {
            document.getElementById("encryptedExpiryDate").focus()
            if (profileHere.MMYY.split('/')[1].length == 2) document.execCommand('insertText', false, profileHere.MMYY)
            else document.execCommand('insertText', false, profileHere.MMYY.split('/')[0] + profileHere.MMYY.split('/')[1].substring(2, 4))
        }
    } catch (error) {}

    try {
        if (document.getElementById("encryptedSecurityCode") != null) {
            document.getElementById("encryptedSecurityCode").focus()
            document.execCommand('insertText', false, profileHere.CVV)
        }
    } catch (error) {}

}


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


chrome.runtime.sendMessage({ greeting: "status_aco_offspring" }, function(response) {
    status_offspring = response.farewell
});

chrome.runtime.sendMessage({ greeting: "status_aco_office" }, function(response) {
    status_office = response.farewell
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