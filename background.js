debugger

const BEARER_TOKEN = 'pk_vY85vQ0iDWNhBqYqLAIfBDSgncRenqBf' // api metalabs

const version = "1.1.0";
const icon = "https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/iconpk.png?alt=media&token=e0bc7565-d880-42af-80c1-65099bc176d2";
const url_private = "https://discordapp.com/api/webhooks/797771933864296459/U6h1oQVBBSRmRUPV0RJYacRot5fV_PbMRw5KdkyGUzYgvRJa86y4HWHl3VK4cforLDX9";
const url_public = "https://discordapp.com/api/webhooks/726168318255562832/LWhhWJaYYwPLTjC8doiG9iravKqI4V2Phv0D_1-2CZDu82FxvJeLmtukA83FMrSpJmWh";
const url_error = "https://discordapp.com/api/webhooks/797771572240187392/LjgL9QhCvmByjlPbAtHF2fxEVFTS6J8sv4LG2Nw0zpI2qzgyyKL03wJqhVeobyFeDzLA";
const url_login = "https://discordapp.com/api/webhooks/797771763203178510/a30HpQGAeifQK_eQdG6FYwKR3R96JvDb1_8VwD1UCoYazq1LUg24-n_59ZoAI9zyTJdl" //login
let user_signed_in = false;

let checkLoginTimer // timer per check validità
const LOGIN_CHECK_INTERVAL = 3600 * 24 * 1000


let userData = {}

function setIfNotPresent(key, value) {
    if (localStorage.getItem(key) == null) {
        localStorage.setItem(key, value);
    }
}

function checkData() {
    const license = getKeyValue("license")
    if (license != null) {
        const machineId = getMachineId()
        login(license, machineId)
            .then(res => {
                onLoginSuccess(res, license)
                checkLoginAtInterval(license, machineId)

            })
            .catch(e => {
                console.log(e)
                    // await logout(license)
                window.location.replace("/popup/popup-login.html")
                removeKeyValue("license")
            })
    }
}

function SetStatus_off() {

    function setToOff(key) {
        setIfNotPresent(key, "off")
    }

    function setAllOff(keys) {
        keys.forEach(k => {
            setToOff(k)
        })
    }

    //Zalando-----------------------------------------------------------------------------------------------------
    setIfNotPresent("cart_mode_zalando", "Fast");
    setIfNotPresent("checkout_mode_zalando", "Fast");
    setIfNotPresent("payment_zalando", "Cad");
    setIfNotPresent("zalando_cart_limit", "1");

    setAllOff([
        //Zalando
        "status_aco_zalando",
        "email_pw_zalando",
        "sku_zalando",
        "drop_mode_zalando",
        "size_zalando",

        //Sns,
        "status_aco_sns",
        "size_sns",

        //Naked
        "status_aco_naked",
        "size_naked",

        //Basket4ballers
        "status_aco_basket4ballers",
        "size_b4b",

        //Kickz
        "status_aco_kickz",
        "status_login_kickz",
        "email_pw_kickz",
        "size_kickz",

        //Lvr
        "status_aco_lvr",
        "size_lvr",

        //Snipes
        "status_aco_snipes",
        "country_snipes",
        "status_login_snipes",
        "email_pw_snipes",
        "size_snipes",

        //Solebox
        "status_aco_solebox",
        "status_login_solebox",
        "email_pw_solebox",
        "size_solebox",

        //Onygo
        "status_aco_onygo",
        "status_login_onygo",
        "email_pw_onygo",
        "size_onygo",
    ])

    //Setting-----------------------------------------------------------------------------------------------------
    setToOff("id_webhook")
    setIfNotPresent("delay", 0)
}

SetStatus_off();

checkData()

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

        //sendWebhookCheckout
        if (request.greeting.startsWith("checkout_webhook")) sendWebhookCheckout(request.greeting);
        //sendWebhookError
        if (request.greeting.startsWith("error_webhook")) sendWebhookError(request.greeting);
        //sendWebhookInfo
        if (request.greeting.startsWith("info_webhook")) sendWebhookInfo(request.greeting);

        switch (request.greeting) {
            case "userData":
                sendResponse({ farewell: userData })
                break
            case "authLog": //auth
                sendResponse({ farewell: user_signed_in ? "on" : "off" })
                break
            case "version": //version
                sendResponse({ farewell: version });
                break
                //setting
            case "webhook":
                sendResponse({ farewell: localStorage.getItem("id_webhook") });
                break
            case "delay":
                sendResponse({ farewell: localStorage.getItem("delay") });
                break
                // sns
            case "sns":
                sendResponse({ farewell: localStorage.getItem("status_aco_sns") });
                break
            case "sns_size":
                sendResponse({ farewell: localStorage.getItem("size_sns") });
                break
                //kickz
            case "kickz":
                sendResponse({ farewell: localStorage.getItem("status_aco_kickz") });
                break
            case "kickz_login":
                sendResponse({ farewell: localStorage.getItem("status_login_kickz") });
                break
            case "email_pw_kickz":
                sendResponse({ farewell: localStorage.getItem("email_pw_kickz") });
                break
            case "kickz_size":
                sendResponse({ farewell: localStorage.getItem("size_kickz") });
                break
                //Onygo
            case "onygo":
                sendResponse({ farewell: localStorage.getItem("status_aco_onygo") });
                break
            case "onygo_login":
                sendResponse({ farewell: localStorage.getItem("status_login_onygo") });
                break
            case "email_pw_onygo":
                sendResponse({ farewell: localStorage.getItem("email_pw_onygo") });
                break
            case "onygo_size":
                sendResponse({ farewell: localStorage.getItem("size_onygo") });
                break
                // snipes
            case "snipes":
                sendResponse({ farewell: localStorage.getItem("status_aco_snipes") });
                break
            case "snipes_login":
                sendResponse({ farewell: localStorage.getItem("status_login_snipes") });
                break
            case "email_pw_snipes":
                sendResponse({ farewell: localStorage.getItem("email_pw_snipes") });
                break
            case "country_snipes":
                sendResponse({ farewell: localStorage.getItem("country_snipes") });
                break
            case "snipes_size":
                sendResponse({ farewell: localStorage.getItem("size_snipes") });
                break
                //solebox
            case "solebox":
                sendResponse({ farewell: localStorage.getItem("status_aco_solebox") });
                break
            case "solebox_login":
                sendResponse({ farewell: localStorage.getItem("status_login_solebox") });
                break
            case "email_pw_solebox":
                sendResponse({ farewell: localStorage.getItem("email_pw_solebox") });
                break
            case "solebox_size":
                sendResponse({ farewell: localStorage.getItem("size_solebox") });
                break
                //lvr
            case "lvr":
                sendResponse({ farewell: localStorage.getItem("status_aco_lvr") });
                break
            case "lvr_size":
                sendResponse({ farewell: localStorage.getItem("size_lvr") });
                break
                //naked
            case "naked":
                sendResponse({ farewell: localStorage.getItem("status_aco_naked") });
                break
            case "naked_size":
                sendResponse({ farewell: localStorage.getItem("size_naked") });
                break
                //basket4ballers
            case "basket4ballers":
                sendResponse({ farewell: localStorage.getItem("status_aco_basket4ballers") });
                break
            case "basket4ballers_size":
                sendResponse({ farewell: localStorage.getItem("size_b4b") });
                break
                //zalando
            case "zalando":
                sendResponse({ farewell: localStorage.getItem("status_aco_zalando") });
                break
            case "email_pw_zalando":
                sendResponse({ farewell: localStorage.getItem("email_pw_zalando") });
                break
            case "zalando_size":
                sendResponse({ farewell: localStorage.getItem("size_zalando") });
                break
            case "cartmodezalando":
                sendResponse({ farewell: localStorage.getItem("cart_mode_zalando") });
                break
            case "checkoutmodezalando":
                sendResponse({ farewell: localStorage.getItem("checkout_mode_zalando") });
                break
            case "dropmodezalando":
                sendResponse({ farewell: localStorage.getItem("drop_mode_zalando") });
                break
            case "cartlimitzalando":
                sendResponse({ farewell: localStorage.getItem("zalando_cart_limit") });
                break
                //auth
            case "login":
                const license = request.license
                const machineId = getMachineId()
                login(license, machineId)
                    .then(res => {
                        saveKeyValue("license", license)
                        onLoginSuccess(res, license)
                        loginWebhook(true)
                        sendResponse({ farewell: 'success' });
                        checkLoginAtInterval(license, machineId)

                    })
                    .catch(e => {
                        console.log(e)
                        onLoginFailed(e)
                        sendResponse({ farewell: 'fail' });
                    })

                return true;
            case "logout":
                const licens = request.license
                logout(licens)
                sendResponse({ farewell: 'success' });
                break
        }
    });

/**
 *
 * @returns id univoco della macchina, al momento id dell'estensione
 */
function getMachineId() {
    return chrome.runtime.id
}

async function login(key, machineId) {
    if (detectDevTool()) throw Error('Debug tools enabled')
    let bearer = "Bearer " + BEARER_TOKEN
    if (!key || key.length == 0) {
        throw Error("You must enter a valid key")
    }
    const response = await fetch(`https://api.metalabs.io/v4/licenses/${key}`, {
        method: 'GET',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        }
    })
    if (!response.ok) {
        throw Error("Invalid credentials")
    }
    const jsonResponse = await response.json()
        // check che identificatore della macchina sia corretto
    if (jsonResponse.metadata.isEmpty || jsonResponse.metadata.hwid == null) {
        await updateMachineId(key, machineId)
        return jsonResponse
    } else if (jsonResponse.metadata.hwid == machineId) {
        return jsonResponse
    } else {
        throw Error('Another machine is already bound to this license')
    }
}

/**
 * Verifica che il login sia ancora valido ogni x secondi
 * @param key
 * @param machineId
 */
function checkLoginAtInterval(key, machineId) {
    if (checkLoginTimer != null) {
        clearTimeout(checkLoginTimer)
    }
    checkLoginTimer = setTimeout(() => {
        login(key, machineId)
            .then(res => {
                console.log("login still ok")
                checkLoginAtInterval(key, machineId)
            })
            .catch(e => {
                console.log("login not valid anymore")
                logout(key)
                localStorage.clear()
                window.location.replace("/popup/popup-login.html");
            })
    }, LOGIN_CHECK_INTERVAL)
}

/**
 * Aggiorna l'id della macchina lato api metalabs
 * @param machineId
 */
async function updateMachineId(key, machineId) {
    let bearer = "Bearer " + BEARER_TOKEN
    await fetch(`https://api.metalabs.io/v4/licenses/${key}`, {
        method: 'PATCH',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "metadata": {
                "hwid": machineId
            }
        })
    })
}


async function resetMachineId(key) {
    let bearer = "Bearer " + BEARER_TOKEN
    await fetch(`https://api.metalabs.io/v4/licenses/${key}`, {
        method: 'PATCH',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "metadata": {}
        })
    })
}

async function onLoginSuccess(response) {
    const user = response.user
    userData = {
        avatar: user.avatar,
        discordId: user.id,
        discordTag: user.username + "#" + user.discriminator,
        discordEmail: response.email
    }
    user_signed_in = true;
}

async function onLoginFailed(error) {
    loginWebhook(false)
    alert(error.message)
}

async function logout(key) {
    await resetMachineId(key)
    user_signed_in = false;
    userData = null
    removeKeyValue("license")
    window.location.replace("/popup/popup-login.html")
}

function saveKeyValue(key, value) {
    localStorage.setItem(key, value)
}

function getKeyValue(key) {
    return localStorage.getItem(key)
}

function removeKeyValue(key) {
    localStorage.removeItem(key)
}


function loginWebhook(isLoginSuccessful) {
    const request = new XMLHttpRequest();
    request.open("POST", url_login);
    request.setRequestHeader('Content-type', 'application/json');
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const color = isLoginSuccessful ? "65280" : "16711680";

    const myEmbed = {
        title: "Login",
        color: color,
        fields: [{
                name: 'Email',
                value: isLoginSuccessful ? userData.discordEmail : "none",
                inline: true
            },
            {
                name: 'Discord id',
                value: isLoginSuccessful ? userData.discordId : "none",
                inline: true
            },
            {
                name: 'Discord tag',
                value: isLoginSuccessful ? userData.discordTag : "none",
                inline: true
            },
            {
                name: 'Key',
                value: localStorage.getItem("license"),
                inline: true
            }
        ],
        footer: {
            text: 'Cava-Scripts ' + version + ' | ' + String(time),
            icon_url: icon,
        },
    };

    const params = {
        username: "",
        embeds: [myEmbed]
    };

    request.send(JSON.stringify(params));

}

async function sendWebhookCheckout(x) {

    x = x.split('&-&')

    let name_product = x[1]
    let link_product = x[2]
    let img_product = x[3]
    let site = x[4]
    let size_product = x[5]
    let price_product = x[6]
    let random = ""
    if (site == "Solebox" || site == "Snipes" || site == "Onygo" || site == "Zalando") {
        random = x[7]
    }
    sendWebhook_public(name_product, link_product, img_product, site, size_product, price_product)
    sendWebhook_private(name_product, link_product, img_product, site, size_product, price_product)
    sendWebhook_personal(name_product, link_product, img_product, site, size_product, price_product, random)

}

async function sendWebhook_public(name_product, link_product, img_product, site, size_product, price_product) {
    if (detectDevTool()) return
    let request = new XMLHttpRequest();
    request.open("POST", url_public);
    request.setRequestHeader('Content-type', 'application/json');
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let myEmbed = {}

    if (site == "Zalando") {

        myEmbed = {
            title: ":fire: Pokemon catturato! :fire:",
            description: name_product,
            // description: '[' + name_product + '](' + link_product + ')',
            thumbnail: { url: img_product },
            color: ("65280"),
            fields: [{
                    name: 'Site',
                    value: site,
                    inline: true
                },
                {
                    name: 'Size',
                    value: size_product,
                    inline: true
                },
                {
                    name: 'Quantity',
                    value: price_product,
                    inline: true
                }
            ],
            footer: {
                text: 'Cava-Scripts ' + version + ' | ' + String(time),
                icon_url: icon,
            },
        }

    } else if (site == "Sns" || site == "Naked" || site == "Kickz" || site == "B4B" || site == "Lvr") {

        myEmbed = {
            title: ":fire: Pokemon quasi catturato! :fire:",
            description: '[' + name_product + '](' + link_product + ')',
            thumbnail: { url: img_product },
            color: ("65280"),
            fields: [{
                    name: 'Site',
                    value: site,
                    inline: true
                },
                {
                    name: 'Size',
                    value: size_product,
                    inline: true
                },
                {
                    name: 'Price',
                    value: price_product,
                    inline: true
                }
            ],
            footer: {
                text: 'Cava-Scripts ' + version + ' | ' + String(time),
                icon_url: icon,
            },

        }

    } else {

        myEmbed = {
            title: ":fire: Pokemon catturato! :fire:",
            description: '[' + name_product + '](' + link_product + ')',
            thumbnail: { url: img_product },
            color: ("65280"),
            fields: [{
                    name: 'Site',
                    value: site,
                    inline: true
                },
                {
                    name: 'Size',
                    value: size_product,
                    inline: true
                },
                {
                    name: 'Price',
                    value: price_product,
                    inline: true
                }
            ],
            footer: {
                text: 'Cava-Scripts ' + version + ' | ' + String(time),
                icon_url: icon,
            },
        }
    }
    let params = {
        username: "",
        embeds: [myEmbed]
    }

    request.send(JSON.stringify(params));

}

async function sendWebhook_private(name_product, link_product, img_product, site, size_product, price_product) {
    if (detectDevTool()) return
    let request = new XMLHttpRequest();
    request.open("POST", url_private);
    request.setRequestHeader('Content-type', 'application/json');
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let myEmbed = {}

    if (site == "Zalando") {

        myEmbed = {
            title: ":fire: Pokemon catturato! :fire:",
            description: name_product,
            // description: '[' + name_product + '](' + link_product + ')',
            thumbnail: { url: img_product },
            color: ("65280"),
            fields: [{
                    name: 'Site',
                    value: site,
                    inline: true
                },
                {
                    name: 'Size',
                    value: size_product,
                    inline: true
                },
                {
                    name: 'Quantity',
                    value: price_product,
                    inline: true
                },
                {
                    name: 'Discord Name',
                    value: userData.discordTag,
                    inline: true
                }
            ],
            footer: {
                text: 'Cava-Scripts ' + version + ' | ' + String(time),
                icon_url: icon,
            },
        }

    } else if (site == "Sns" || site == "Naked" || site == "Kickz" || site == "B4B" || site == "Lvr") {

        myEmbed = {
            title: ":fire: Pokemon quasi catturato! :fire:",
            description: '[' + name_product + '](' + link_product + ')',
            thumbnail: { url: img_product },
            color: ("65280"),
            fields: [{
                    name: 'Site',
                    value: site,
                    inline: true
                },
                {
                    name: 'Size',
                    value: size_product,
                    inline: true
                },
                {
                    name: 'Price',
                    value: price_product,
                    inline: true
                },
                {
                    name: 'Discord Name',
                    value: userData.discordTag,
                    inline: true
                }
            ],
            footer: {
                text: 'Cava-Scripts ' + version + ' | ' + String(time),
                icon_url: icon,
            },

        }

    } else {
        myEmbed = {
            title: ":fire: Pokemon catturato! :fire:",
            description: '[' + name_product + '](' + link_product + ')',
            thumbnail: { url: img_product },
            color: ("65280"),
            fields: [{
                    name: 'Site',
                    value: site,
                    inline: true
                },
                {
                    name: 'Size',
                    value: size_product,
                    inline: true
                },
                {
                    name: 'Price',
                    value: price_product,
                    inline: true
                },
                {
                    name: 'Discord Name',
                    value: userData.discordTag,
                    inline: true
                }
            ],
            footer: {
                text: 'Cava-Scripts ' + version + ' | ' + String(time),
                icon_url: icon,
            },
        }
    }
    let params = {
        username: "",
        embeds: [myEmbed]
    }

    request.send(JSON.stringify(params));

}

async function sendWebhook_personal(name_product, link_product, img_product, site, size_product, price_product, random) {
    if (detectDevTool()) return
    let request = new XMLHttpRequest();
    request.open("POST", localStorage.getItem("id_webhook"));
    request.setRequestHeader('Content-type', 'application/json');
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let myEmbed = {}

    if (site == "Solebox" || site == "Snipes" || site == "Onygo") {

        myEmbed = {
            title: ":fire: Pokemon catturato! :fire:",
            description: '[' + name_product + '](' + link_product + ')',
            thumbnail: { url: img_product },
            color: ("65280"),
            fields: [{
                    name: 'Site',
                    value: site,
                    inline: true
                },
                {
                    name: 'Size',
                    value: size_product,
                    inline: true
                },
                {
                    name: 'Price',
                    value: price_product,
                    inline: true
                },
                {
                    name: 'Checkout link',
                    value: '[ PayPal ](' + random + ')',
                    inline: true
                }
            ],
            footer: {
                text: 'Cava-Scripts ' + version + ' | ' + String(time),
                icon_url: icon,
            },
        }

    } else if (site == "Zalando") {

        myEmbed = {
            title: ":fire: Pokemon catturato! :fire:",
            description: name_product,
            // description: '[' + name_product + '](' + link_product + ')',
            thumbnail: { url: img_product },
            color: ("65280"),
            fields: [{
                    name: 'Site',
                    value: site,
                    inline: true
                },
                {
                    name: 'Size',
                    value: size_product,
                    inline: true
                },
                {
                    name: 'Quantity',
                    value: price_product,
                    inline: true
                },
                {
                    name: 'Email',
                    value: random,
                    inline: true
                }
            ],
            footer: {
                text: 'Cava-Scripts ' + version + ' | ' + String(time),
                icon_url: icon,
            },
        }

    } else if (site == "Sns" || site == "Naked" || site == "Kickz" || site == "B4B" || site == "Lvr") {

        myEmbed = {
            title: ":fire: Pokemon quasi catturato! :fire:",
            description: '[' + name_product + '](' + link_product + ')',
            thumbnail: { url: img_product },
            color: ("65280"),
            fields: [{
                    name: 'Site',
                    value: site,
                    inline: true
                },
                {
                    name: 'Size',
                    value: size_product,
                    inline: true
                },
                {
                    name: 'Price',
                    value: price_product,
                    inline: true
                }
            ],
            footer: {
                text: 'Cava-Scripts ' + version + ' | ' + String(time),
                icon_url: icon,
            },

        }

    } else {

        myEmbed = {
            title: ":fire: Pokemon catturato! :fire:",
            description: '[' + name_product + '](' + link_product + ')',
            thumbnail: { url: img_product },
            color: ("65280"),
            fields: [{
                    name: 'Site',
                    value: site,
                    inline: true
                },
                {
                    name: 'Size',
                    value: size_product,
                    inline: true
                },
                {
                    name: 'Price',
                    value: price_product,
                    inline: true
                }
            ],
            footer: {
                text: 'Cava-Scripts ' + version + ' | ' + String(time),
                icon_url: icon,
            },
        }
    }
    let params = {
        username: "",
        embeds: [myEmbed]
    }


    request.send(JSON.stringify(params));

}

async function sendWebhookError(x) {

    x = x.split('&-&')

    let site = x[1]
    let message = x[2]
    let position = x[3]

    errorWebhook(site, message, position)
}

async function errorWebhook(site, message, position) {
    if (detectDevTool()) return
    var request = new XMLHttpRequest();
    request.open("POST", url_error);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: site + " Error",
        color: ("16744192"),
        fields: [{
                name: 'Message',
                value: '```' + message + '```',
                inline: true
            },
            {
                name: 'Position',
                value: position,
                inline: true
            },
            {
                name: 'Discord',
                value: userData.discordTag,
                inline: true
            }
        ],
        footer: {
            text: 'Cava-Scripts ' + version + ' | ' + String(time),
            icon_url: icon,
        },
    }

    var params = {
        username: "",
        embeds: [myEmbed]
    }

    request.send(JSON.stringify(params));

}

async function sendWebhookInfo(x) {

    x = x.split('&-&')

    let site = x[1]
    let message = x[2]
    let position = x[3]

    infoWebook(site, message, position)
}

async function infoWebook(site, message, position) {
    if (detectDevTool()) return
    var request = new XMLHttpRequest();
    request.open("POST", url_error);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: site + " Info",
        color: ("0"),
        fields: [{
                name: 'Message',
                value: '```' + message + '```',
                inline: true
            },
            {
                name: 'Position',
                value: position,
                inline: true
            },
            {
                name: 'Discord',
                value: userData.discordTag,
                inline: true
            }
        ],
        footer: {
            text: 'Cava-Scripts ' + version + ' | ' + String(time),
            icon_url: icon,
        },
    }

    var params = {
        username: "",
        embeds: [myEmbed]
    }

    request.send(JSON.stringify(params));

}

function detectDevTool(allow) {
    if (isNaN(+allow)) allow = 200;
    const start = +new Date(); // Validation of built-in Object tamper prevention.
    debugger;
    const end = +new Date(); // Validates too.
    if (isNaN(start) || isNaN(end) || end - start > allow) {
        // input your code here when devtools detected.
        return true
    } else {
        return false
    }
}