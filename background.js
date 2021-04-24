debugger

const BEARER_TOKEN = 'pk_vY85vQ0iDWNhBqYqLAIfBDSgncRenqBf' // api metalabs

const version = "1.1.9";
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

function getprofiles() {
    ar = {}
    np = parseInt(localStorage.getItem("n_profile"))
    if (np != 0) {
        for (var i = 1; i <= np; i++) {
            x = localStorage.getItem("profiles" + String(i))
            ar["profiles" + String(i)] = x
        }
    }
    return ar
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

    //B4b-----------------------------------------------------------------------------------------------------
    setIfNotPresent("delay_b4b", 1000)

    //Zalando-----------------------------------------------------------------------------------------------------
    setIfNotPresent("cart_mode_zalando", "Fast");
    setIfNotPresent("checkout_mode_zalando", "Fast");
    setIfNotPresent("payment_zalando", "COD");
    setIfNotPresent("delay_zalando", 1000)

    //Solebox
    setIfNotPresent("checkout_mode_solebox", "Full Checkout");
    setIfNotPresent("payment_mode_solebox", "PayPal");

    //Snipes
    setIfNotPresent("checkout_mode_snipes", "Full Checkout");

    //Lvr
    setIfNotPresent("mode_lvr", "Browser");

    //Awlab
    setIfNotPresent("checkout_mode_awlab", "Full Checkout");
    setIfNotPresent("payment_mode_awlab", "PayPal");
    setIfNotPresent("guest_mode_awlab", "on");
    setIfNotPresent("continue_yes_awlab", "on");

    //Offspring
    setIfNotPresent("checkout_mode_offspring", "Full Checkout");
    setIfNotPresent("payment_mode_offspring", "PayPal");
    setIfNotPresent("guest_mode_offspring", "on");
    setIfNotPresent("delay_offspring", 1000)

    //Sns
    setIfNotPresent("mode_sns", "Fast");
    setIfNotPresent("delay_sns", 1000)

    //Naked
    setIfNotPresent("mode_naked", "Fast");
    setIfNotPresent("delay_naked", 1000)

    //Woodwood
    setIfNotPresent("mode_woodwood", "Fast");
    setIfNotPresent("delay_woodwood", 1000)

    setAllOff([

        //Footdistrict
        "status_aco_footdistrict",
        "status_login_footdistrict",
        "email_pw_footdistrict",
        "size_footdistrict",
        "profile_footdistrict",

        //Offspring
        "status_aco_offspring",
        "status_login_offspring",
        "account_mode_offspring",
        "email_pw_offspring",
        "size_offspring",
        "profile_offspring",

        //Awlab
        "status_aco_awlab",
        "status_login_awlab",
        "email_pw_awlab",
        "coupon_awlab",
        "continue_no_awlab",
        "profile_awlab",

        //Zalando
        "status_aco_zalando",
        "email_pw_zalando",
        "drop_mode_zalando",
        "size_zalando",

        //Sns,
        "status_aco_sns",
        "size_sns",

        //Asos,
        "status_aco_asos",

        //Woodwood,
        "status_aco_woodwood",
        "size_woodwood",

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
        "kickz_size",

        //Lvr
        "status_aco_lvr",
        "size_lvr",
        "profile_lvr",

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

        //Profile
        "array_profiles",

        //Setting
        "id_webhook",
    ])
}

SetStatus_off();

checkData()

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

        //sendWebhookCheckout
        if (request.greeting.startsWith("checkout_webhook")) sendWebhookCheckout(request.greeting);
        //sendWebhookError
        else if (request.greeting.startsWith("error_webhook")) sendWebhookError(request.greeting);
        //sendWebhookInfo
        else if (request.greeting.startsWith("info_webhook")) sendWebhookInfo(request.greeting);

        else {
            switch (request.greeting) {
                case "userData":
                    sendResponse({ farewell: userData })
                    break
                case "authLog": //auth
                    sendResponse({ farewell: user_signed_in ? "on" : "off" })
                    break
                    //setting
                case "webhook":
                    sendResponse({ farewell: localStorage.getItem("id_webhook") });
                    break
                case "delay":
                    sendResponse({ farewell: localStorage.getItem("delay") });
                    break
                    //asos
                case "asos":
                    sendResponse({ farewell: localStorage.getItem("status_aco_asos") });
                    break
                    // offspring
                case "offspring":
                    sendResponse({ farewell: localStorage.getItem("status_aco_offspring") });
                    break
                case "offspring_size":
                    sendResponse({ farewell: localStorage.getItem("size_offspring") });
                    break
                    //footdistrict
                case "footdistrict":
                    sendResponse({ farewell: localStorage.getItem("status_aco_footdistrict") });
                    break
                case "footdistrict_login":
                    sendResponse({ farewell: localStorage.getItem("status_login_footdistrict") });
                    break
                case "footdistrict_size":
                    sendResponse({ farewell: localStorage.getItem("size_footdistrict") });
                    break
                case "email_pw_footdistrict":
                    sendResponse({ farewell: localStorage.getItem("email_pw_footdistrict") });
                    break
                    // awlab
                case "awlab":
                    sendResponse({ farewell: localStorage.getItem("status_aco_awlab") });
                    break
                case "awlab_checkout_mode":
                    sendResponse({ farewell: localStorage.getItem("checkout_mode_awlab") });
                    break
                case "awlab_payment_mode":
                    sendResponse({ farewell: localStorage.getItem("payment_mode_awlab") });
                    break
                case "awlab_mode":
                    sendResponse({ farewell: localStorage.getItem("guest_mode_awlab") });
                    break
                case "awlab_continue":
                    sendResponse({ farewell: localStorage.getItem("continue_yes_awlab") });
                    break
                case "awlab_login":
                    sendResponse({ farewell: localStorage.getItem("status_login_awlab") });
                    break
                case "email_pw_awlab":
                    sendResponse({ farewell: localStorage.getItem("email_pw_awlab") });
                    break
                case "awlab_coupon":
                    sendResponse({ farewell: localStorage.getItem("coupon_awlab") });
                    break
                case "awlab_profile":
                    sendResponse({ farewell: localStorage.getItem("profile_awlab") });
                    break
                    // sns
                case "sns":
                    sendResponse({ farewell: localStorage.getItem("status_aco_sns") });
                    break
                case "sns_size":
                    sendResponse({ farewell: localStorage.getItem("size_sns") });
                    break
                case "sns_mode":
                    sendResponse({ farewell: localStorage.getItem("mode_sns") });
                    break
                    // woodwood
                case "woodwood":
                    sendResponse({ farewell: localStorage.getItem("status_aco_woodwood") });
                    break
                case "woodwood_size":
                    sendResponse({ farewell: localStorage.getItem("size_woodwood") });
                    break
                case "woodwood_mode":
                    sendResponse({ farewell: localStorage.getItem("mode_woodwood") });
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
                case "snipes_checkout_mode":
                    sendResponse({ farewell: localStorage.getItem("checkout_mode_snipes") });
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
                case "solebox_payment_mode":
                    sendResponse({ farewell: localStorage.getItem("payment_mode_solebox") });
                    break
                case "solebox_checkout_mode":
                    sendResponse({ farewell: localStorage.getItem("checkout_mode_solebox") });
                    break
                    //lvr
                case "lvr":
                    sendResponse({ farewell: localStorage.getItem("status_aco_lvr") });
                    break
                case "lvr_size":
                    sendResponse({ farewell: localStorage.getItem("size_lvr") });
                    break
                case "lvr_mode":
                    sendResponse({ farewell: localStorage.getItem("mode_lvr") });
                    break
                    //naked
                case "naked":
                    sendResponse({ farewell: localStorage.getItem("status_aco_naked") });
                    break
                case "naked_size":
                    sendResponse({ farewell: localStorage.getItem("size_naked") });
                    break
                case "naked_mode":
                    sendResponse({ farewell: localStorage.getItem("mode_naked") });
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

                default:
                    sendResponse({ farewell: localStorage.getItem(request.greeting) });
                    break
            }
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

    checkoutSound()

    x = x.split('&-&')

    let name_product = x[1]
    let link_product = x[2]
    let img_product = x[3]
    let site = x[4]
    let size_product = x[5]
    let price_product = x[6]
    let email = ""
    let payment_link = ""
    if (site.startsWith("Zalando")) {
        email = x[7]
    }
    if (site == "Solebox" || site.startsWith("Snipes") || site == "Onygo") {
        email = x[7]
        payment_link = x[8]
    }
    sendWebhook_public(name_product, link_product, img_product, site, size_product, price_product)
    sendWebhook_private(name_product, link_product, img_product, site, size_product, price_product)
    sendWebhook_personal(name_product, link_product, img_product, site, size_product, price_product, email, payment_link)

}

async function checkoutSound() {
    try {
        var audio = new Audio('checkout_sound.mp3');
        audio.play();
    } catch (error) {}
}

async function sendWebhook_public(name_product, link_product, img_product, site, size_product, price_product) {
    if (detectDevTool()) return
    let request = new XMLHttpRequest();
    request.open("POST", url_public);
    request.setRequestHeader('Content-type', 'application/json');
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let myEmbed = {}

    if (site.startsWith("Zalando")) {

        myEmbed = {
            title: ":fire: Pokèmon caught! :fire:",
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

    } else if (site == "Sns" || site == "Woodwood" || site == "Naked" || site == "Kickz" || site == "B4B" || site == "Lvr" || site.startsWith("Awlab") || site == "Offspring" || site == "Footdistrict") {

        myEmbed = {
            title: ":fire: Pokèmon almost caught! :fire:",
            description: '[' + name_product + '](' + link_product + ')',
            thumbnail: { url: img_product },
            color: ("15715328"),
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
            title: ":fire: Pokèmon caught! :fire:",
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

    if (site.startsWith("Zalando")) {

        myEmbed = {
            title: ":fire: Pokèmon caught! :fire:",
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

    } else if (site == "Sns" || site == "Woodwood" || site == "Naked" || site == "Kickz" || site == "B4B" || site == "Lvr" || site.startsWith("Awlab") || site == "Offspring" || site == "Footdistrict") {

        myEmbed = {
            title: ":fire: Pokèmon almost caught! :fire:",
            description: '[' + name_product + '](' + link_product + ')',
            thumbnail: { url: img_product },
            color: ("15715328"),
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
            title: ":fire: Pokèmon caught! :fire:",
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

async function sendWebhook_personal(name_product, link_product, img_product, site, size_product, price_product, email, payment_link) {
    if (detectDevTool()) return
    let request = new XMLHttpRequest();
    request.open("POST", localStorage.getItem("id_webhook"));
    request.setRequestHeader('Content-type', 'application/json');
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let myEmbed = {}

    if (site == "Solebox" || site.startsWith("Snipes") || site == "Onygo") {

        myEmbed = {
            title: ":fire: Pokèmon caught! :fire:",
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
                    name: 'Email',
                    value: "||" + email + "||",
                    inline: false
                },
                {
                    name: 'Checkout link',
                    value: '[ Click here to check out ](' + payment_link + ')',
                    inline: false
                }
            ],
            footer: {
                text: 'Cava-Scripts ' + version + ' | ' + String(time),
                icon_url: icon,
            },
        }

    } else if (site.startsWith("Zalando")) {

        myEmbed = {
            title: ":fire: Pokèmon caught! :fire:",
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
                    name: 'Quantity',
                    value: price_product,
                    inline: true
                },
                {
                    name: 'Email',
                    value: '||' + email + '||',
                    inline: true
                }
            ],
            footer: {
                text: 'Cava-Scripts ' + version + ' | ' + String(time),
                icon_url: icon,
            },
        }

    } else if (site == "Sns" || site == "Woodwood" || site == "Naked" || site == "Kickz" || site == "B4B" || site == "Lvr" || site.startsWith("Awlab") || site == "Offspring" || site == "Footdistrict") {

        myEmbed = {
            title: ":fire: Pokèmon almost caught! :fire:",
            description: '[' + name_product + '](' + link_product + ')',
            thumbnail: { url: img_product },
            color: ("15715328"),
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
            title: ":fire: Pokèmon caught! :fire:",
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