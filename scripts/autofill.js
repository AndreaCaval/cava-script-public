debugger

const countryList = {
    "AF": "Afghanistan",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua and Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia",
    "BQ": "Bonaire, Sint Eustatius and Saba",
    "BA": "Bosnia and Herzegovina",
    "BW": "Botswana",
    "BV": "Bouvet Island",
    "BR": "Brazil",
    "IO": "British Indian Ocean Territory",
    "BN": "Brunei Darussalam",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "CV": "Cabo Verde",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "KY": "Cayman Islands",
    "CF": "Central African Republic",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Christmas Island",
    "CC": "Cocos (Keeling) Islands",
    "CO": "Colombia",
    "KM": "Comoros",
    "CD": "Congo (the Democratic Republic of the)",
    "CG": "Congo",
    "CK": "Cook Islands",
    "CR": "Costa Rica",
    "HR": "Croatia",
    "CU": "Cuba",
    "CW": "Curaçao",
    "CY": "Cyprus",
    "CZ": "Czechia",
    "CI": "Côte d'Ivoire",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "SZ": "Eswatini",
    "ET": "Ethiopia",
    "FK": "Falkland Islands [Malvinas]",
    "FO": "Faroe Islands",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GF": "French Guiana",
    "PF": "French Polynesia",
    "TF": "French Southern Territories",
    "GA": "Gabon",
    "GM": "Gambia",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HM": "Heard Island and McDonald Islands",
    "VA": "Holy See",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IM": "Isle of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KP": "Korea (the Democratic People's Republic of)",
    "KR": "Korea (the Republic of)",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Lao People's Democratic Republic",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "FM": "Micronesia (Federated States of)",
    "MD": "Moldova (the Republic of)",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands",
    "NC": "New Caledonia",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "MP": "Northern Mariana Islands",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestine, State of",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "MK": "Republic of North Macedonia",
    "RO": "Romania",
    "RU": "Russian Federation",
    "RW": "Rwanda",
    "RE": "Réunion",
    "BL": "Saint Barthélemy",
    "SH": "Saint Helena, Ascension and Tristan da Cunha",
    "KN": "Saint Kitts and Nevis",
    "LC": "Saint Lucia",
    "MF": "Saint Martin (French part)",
    "PM": "Saint Pierre and Miquelon",
    "VC": "Saint Vincent and the Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome and Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SX": "Sint Maarten (Dutch part)",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "GS": "South Georgia and the South Sandwich Islands",
    "SS": "South Sudan",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan",
    "SR": "Suriname",
    "SJ": "Svalbard and Jan Mayen",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syrian Arab Republic",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania, United Republic of",
    "TH": "Thailand",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad and Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TC": "Turks and Caicos Islands",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates",
    "GB": "United Kingdom of Great Britain and Northern Ireland",
    "UM": "United States Minor Outlying Islands",
    "US": "United States of America",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela (Bolivarian Republic of)",
    "VN": "Viet Nam",
    "VG": "Virgin Islands (British)",
    "VI": "Virgin Islands (U.S.)",
    "WF": "Wallis and Futuna",
    "EH": "Western Sahara",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe",
    "AX": "Åland Islands"
};

let linkk = document.location.href

let status_office = ""
let status_offspring = ""
let status_kith = ""
let status_awlab = ""
let status_here = ""
let status_courir = ""

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

    }
}

async function mainPaymentCardOffice() {

    await sleep(1000)

    try {
        if (document.getElementById("cardholderName") != null && document.getElementById("cardholderName").value == "") {
            document.getElementById("cardholderName").focus()
            document.execCommand('insertText', false, profileOffice.CardOwnerName)
        }
    } catch (error) {}
    await sleep(100)

    try {
        if (document.getElementById("cardNumber") != null && document.getElementById("cardNumber").value == "") {
            document.getElementById("cardNumber").focus()
            document.execCommand('insertText', false, profileOffice.CardNumber)
        }
    } catch (error) {}
    await sleep(100)

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
    await sleep(100)

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
    await sleep(100)

    try {
        if (document.getElementById("cardNumber") != null && document.getElementById("cardNumber").value == "") {
            document.getElementById("cardNumber").focus()
            document.execCommand('insertText', false, profileOffspring.CardNumber)
        }
    } catch (error) {}
    await sleep(100)

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
    await sleep(100)

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
    await sleep(100)

    try {
        if (document.getElementById("CheckoutData_BillingLastName") != null && document.getElementById("CheckoutData_BillingLastName").value == "") {
            document.getElementById("CheckoutData_BillingLastName").focus()
            document.execCommand('insertText', false, profileKith.LastName)
        }
    } catch (error) {}
    await sleep(100)
    try {
        if (document.getElementById("CheckoutData_Email") != null && document.getElementById("CheckoutData_Email").value == "") {
            document.getElementById("CheckoutData_Email").focus()
            document.execCommand('insertText', false, profileKith.Email)
        }
    } catch (error) {}
    await sleep(100)
    try {
        if (document.getElementById("BillingCountryID") != null) {
            document.getElementById("BillingCountryID").focus()
            document.execCommand('insertText', false, profileKith.Country)
        }
    } catch (error) {}
    await sleep(100)
    try {
        if (document.getElementById("CheckoutData_BillingAddress1") != null && document.getElementById("CheckoutData_BillingAddress1").value == "") {
            document.getElementById("CheckoutData_BillingAddress1").focus()
            document.execCommand('insertText', false, profileKith.AddressOne)
        }
    } catch (error) {}
    await sleep(100)
    try {
        if (document.getElementById("CheckoutData_BillingAddress2") != null && document.getElementById("CheckoutData_BillingAddress2").value == "") {
            document.getElementById("CheckoutData_BillingAddress2").focus()
            document.execCommand('insertText', false, profileKith.AddressTwo)
        }
    } catch (error) {}
    await sleep(100)
    try {
        if (document.getElementById("BillingCity") != null && document.getElementById("BillingCity").value == "") {
            document.getElementById("BillingCity").focus()
            document.execCommand('insertText', false, profileKith.City)
        }
    } catch (error) {}
    await sleep(100)
    try {
        if (document.getElementById("BillingZIP") != null && document.getElementById("BillingZIP").value == "") {
            document.getElementById("BillingZIP").focus()
            document.execCommand('insertText', false, profileKith.Zip)
        }
    } catch (error) {}
    await sleep(100)
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
    await sleep(100)

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
    await sleep(100)

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
    await sleep(100)
    try {
        if (document.getElementById("encryptedExpiryDate") != null && document.getElementById("encryptedExpiryDate").value == "") {
            document.getElementById("encryptedExpiryDate").focus()
            if (profileCourir.MMYY.split('/')[1].length == 2) document.execCommand('insertText', false, profileCourir.MMYY)
            else document.execCommand('insertText', false, profileCourir.MMYY.split('/')[0] + profileCourir.MMYY.split('/')[1].substring(2, 4))
        }
    } catch (error) {}
    await sleep(100)
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
    await sleep(100)

    try {
        if (document.getElementById("encryptedExpiryDate") != null && document.getElementById("encryptedExpiryDate").value == "") {
            document.getElementById("encryptedExpiryDate").focus()
            if (profileAW.MMYY.split('/')[1].length == 2) document.execCommand('insertText', false, profileAW.MMYY)
            else document.execCommand('insertText', false, profileAW.MMYY.split('/')[0] + profileAW.MMYY.split('/')[1].substring(2, 4))
        }
    } catch (error) {}
    await sleep(100)

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
    await sleep(100)

    try {
        if (document.getElementById("encryptedExpiryDate") != null && document.getElementById("encryptedExpiryDate").value == "") {
            document.getElementById("encryptedExpiryDate").focus()
            if (profileHere.MMYY.split('/')[1].length == 2) document.execCommand('insertText', false, profileHere.MMYY)
            else document.execCommand('insertText', false, profile.MMYY.split('/')[0] + profileHere.MMYY.split('/')[1].substring(2, 4))
        }
    } catch (error) {}
    await sleep(100)

    try {
        if (document.getElementById("encryptedSecurityCode") != null && document.getElementById("encryptedSecurityCode").value == "") {
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