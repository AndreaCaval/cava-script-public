debugger

const BEARER_TOKEN = 'pk_vY85vQ0iDWNhBqYqLAIfBDSgncRenqBf' // api metalabs

const version = "1.3.2";
const icon = "https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/dash%2Ficonpk.png?alt=media&token=52cd991d-5687-40b0-945a-49dcbf4c999a";
const url_private = "https://discordapp.com/api/webhooks/797771933864296459/U6h1oQVBBSRmRUPV0RJYacRot5fV_PbMRw5KdkyGUzYgvRJa86y4HWHl3VK4cforLDX9";
const url_public = "https://discordapp.com/api/webhooks/726168318255562832/LWhhWJaYYwPLTjC8doiG9iravKqI4V2Phv0D_1-2CZDu82FxvJeLmtukA83FMrSpJmWh";
const url_error = "https://discord.com/api/webhooks/816300442521960448/RnEvfmMS5sKVlD84Z70zvjEIYYdXJltS7rZ57DKEDHpxQFoohxEgGRx6IE2eo_revnLx";
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

    //Asos
    setIfNotPresent("delay_asos", 1000)

    //B4b
    setIfNotPresent("delay_b4b", 1000)

    //Kickz
    setIfNotPresent("delay_kickz", 1000)

    //Zalando
    setIfNotPresent("cart_mode_zalando", "Fast");
    setIfNotPresent("checkout_mode_zalando", "Fast");
    setIfNotPresent("payment_zalando", "COD");
    setIfNotPresent("delay_zalando", 1000)

    //Solebox
    setIfNotPresent("checkout_mode_solebox", "Full Checkout");
    setIfNotPresent("payment_mode_solebox", "PayPal");

    //Supreme
    setIfNotPresent("checkout_mode_supreme", "Full Checkout");
    setIfNotPresent("payment_mode_supreme", "PayPal");

    //Courir
    setIfNotPresent("checkout_mode_courir", "Full Checkout");
    setIfNotPresent("payment_mode_courir", "PayPal");

    //Snipes
    setIfNotPresent("checkout_mode_snipes", "Full Checkout");
    setIfNotPresent("payment_mode_snipes", "PayPal");

    //Kith
    setIfNotPresent("checkout_mode_kith", "Full Checkout");

    //Nbb
    setIfNotPresent("checkout_mode_nbb", "Fast")

    //Ldlc
    setIfNotPresent("checkout_mode_ldlc", "Fast")

    //Aboutyou
    setIfNotPresent("payment_mode_aboutyou", "Cash On Delivery")

    //Lvr
    setIfNotPresent("mode_lvr", "Fast");
    setIfNotPresent("payment_mode_lvr", "PayPal");

    //Awlab
    setIfNotPresent("checkout_mode_awlab", "Full Checkout");
    setIfNotPresent("payment_mode_awlab", "PayPal");
    setIfNotPresent("guest_mode_awlab", "on");
    setIfNotPresent("continue_yes_awlab", "on");

    //Here
    setIfNotPresent("checkout_mode_here", "Full Checkout");
    setIfNotPresent("payment_mode_here", "Credit Card");
    setIfNotPresent("guest_mode_here", "on");
    setIfNotPresent("continue_yes_here", "on");

    //Office
    setIfNotPresent("checkout_mode_office", "Full Checkout");
    setIfNotPresent("payment_mode_office", "PayPal");
    setIfNotPresent("guest_mode_office", "on");
    setIfNotPresent("delay_office", 1000)

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

        //Shopify
        "status_aco_shopify",
        "profile_shopify",

        //Nbb
        "status_aco_nbb",
        "status_login_nbb",
        "email_pw_nbb",
        "profile_nbb",

        //Ldlc
        "status_aco_ldlc",
        "status_login_ldlc",
        "email_pw_ldlc",
        "profile_ldlc",
        "country_ldlc",

        //Supreme
        "status_aco_supreme",
        "status_aco_supreme_instore",
        "size_supreme",
        "profile_supreme",

        //Aboutyou
        "status_aco_aboutyou",
        "size_aboutyou",

        //Kith EU
        "status_aco_kith",
        "size_kith",
        "profile_kith",

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

        //Office
        "status_aco_office",
        "status_login_office",
        "account_mode_office",
        "email_pw_office",
        "size_office",
        "profile_office",

        //Awlab
        "status_aco_awlab",
        "status_login_awlab",
        "email_pw_awlab",
        "coupon_awlab",
        "continue_no_awlab",
        "profile_awlab",
        "profile_awlab_es",
        "profile_awlab_en",
        "multicart_awlab",

        //Here
        "status_aco_here",
        "status_login_here",
        "email_pw_here",
        "coupon_here",
        "continue_no_here",
        "profile_here",
        "multicart_here",

        //Zalando
        "status_aco_zalando",
        "email_pw_zalando",
        "drop_mode_zalando",
        "size_zalando",

        //Sns,
        "status_aco_sns",
        "size_sns",

        //Yoox,
        "status_aco_yoox",
        "size_yoox",

        //Asos,
        "status_aco_asos",
        "multicart_asos",

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
        "profile_snipes",

        //Solebox
        "status_aco_solebox",
        "status_login_solebox",
        "email_pw_solebox",
        "size_solebox",
        "profile_solebox",

        //Courir
        "status_aco_courir",
        "status_login_courir",
        "email_pw_courir",
        "size_courir",
        "profile_courir",

        //Onygo
        "status_aco_onygo",
        "status_login_onygo",
        "email_pw_onygo",
        "size_onygo",
        "profile_onygo",

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
        try {

            if (request.greeting.startsWith("ldlc_checkout")) getCheckoutldlc(request.greeting.split("&")[1])
            else if (request.greeting == "data_ldlc_checkout") {
                sendResponse({ farewell: localStorage.getItem("data_ldlc_checkout") });
                localStorage.removeItem("data_ldlc_checkout")
            }
            //sendWebhookCheckout
            else if (request.greeting.startsWith("checkout_webhook")) sendWebhookCheckout(request.greeting);
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

        } catch (error) {}
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
                localStorage.removeItem("license")
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
            "metadata": null
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
    if (site == "Lvr" || site.startsWith("Courir")) {
        email = x[7]
    }
    if (site.startsWith("Zalando") || site.startsWith("LDLC") || site == "Solebox" || site.startsWith("Snipes") || site == "Onygo" || site.startsWith("Awlab") || site == "Here" || site == "Offspring" || site == "Office" || site == "Supreme") {
        try {
            email = x[7]
            payment_link = x[8]
        } catch (error) {}
    }
    sendWebhook_public(name_product, link_product, img_product, site, size_product, price_product, email, payment_link)
    sendWebhook_private(name_product, link_product, img_product, site, size_product, price_product, email, payment_link)
    sendWebhook_personal(name_product, link_product, img_product, site, size_product, price_product, email, payment_link)

}

async function checkoutSound() {
    try {
        var audio = new Audio('checkout_sound.mp3');
        audio.play();
    } catch (error) {}
}

async function sendWebhook_public(name_product, link_product, img_product, site, size_product, price_product, email, payment_link) {
    if (detectDevTool()) return
    let request = new XMLHttpRequest();
    request.open("POST", url_public);
    request.setRequestHeader('Content-type', 'application/json');
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let myEmbed = {}

    if (site.startsWith("Courir") && email != "") {
        myEmbed = {
            title: ":fire: Pokèmon caught! :fire:",
            color: ("65280"),
            fields: [{
                name: 'Site',
                value: site,
                inline: true
            }, ],
            footer: {
                text: 'Cava-Scripts ' + version + ' | ' + String(time),
                icon_url: icon,
            },
        }
    } else if (site.startsWith("Zalando")) {

        let pid = link_product.split('=')[1]

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
                    name: 'Regions',
                    value: "[[AT](https://www.zalando.at/katalog/?q=" + pid + ")]" +
                        "[[BE](https://www.zalando.be/catalogus/?q=" + pid + ")]" +
                        "[[CH](https://www.zalando.ch/schuhe/?q=" + pid + ")] " +
                        "[[UK](https://www.zalando.co.uk/catalog/?q=" + pid + ")] " +
                        "[[CZ](https://www.zalando.cz/katalog/?q=" + pid + ")]" +
                        "[[DE](https://www.zalando.de/katalog/?q=" + pid + ")]" +
                        "[[ES](https://www.zalando.es/catalogo/?q=" + pid + ")]" +
                        "[[FR](https://www.zalando.fr/catalogue/?q=" + pid + ")]" +
                        "[[IT](https://www.zalando.it/catalogo/?q=" + pid + ")]" +
                        "[[NL](https://www.zalando.nl/catalogus/?q=" + pid + ")]" +
                        "[[NO](https://www.zalando.no/catalog/?q=" + pid + ")]" +
                        "[[PL](https://www.zalando.pl/katalog/?q=" + pid + ")] ",
                    inline: true
                }
            ],
            footer: {
                text: 'Cava-Scripts ' + version + ' | ' + String(time),
                icon_url: icon,
            },
        }

    } else if (site == "Supreme" && name_product == "") {

        myEmbed = {
            title: ":fire: Pokèmon caught! :fire:",
            description: "Supreme Signups",
            color: ("65280"),
            fields: [{
                name: 'Location',
                value: payment_link,
                inline: true
            }],
            footer: {
                text: 'Cava-Scripts ' + version + ' | ' + String(time),
                icon_url: icon,
            },
        }

    } else if (site == "Sns" || site.startsWith("Courir") || (site.startsWith("LDLC") && payment_link == "") || site == "Woodwood" || site == "Naked" || site == "Kickz" || site == "Kith EU" || site == "B4B" || (site == "Lvr" && email == "atc") || (site.startsWith("Awlab") && payment_link == "") || (site == "Here" && payment_link == "") || site == "Offspring" || site == "Office" || site == "Footdistrict") {

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

async function sendWebhook_private(name_product, link_product, img_product, site, size_product, price_product, email, payment_link) {
    if (detectDevTool()) return
    let request = new XMLHttpRequest();
    request.open("POST", url_private);
    request.setRequestHeader('Content-type', 'application/json');
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let myEmbed = {}

    if (site.startsWith("Courir") && email != "") {
        myEmbed = {
            title: ":fire: Pokèmon caught! :fire:",
            color: ("65280"),
            fields: [{
                    name: 'Site',
                    value: site,
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
    } else if (site.startsWith("Zalando")) {
        let pid = link_product.split('=')[1]
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

    } else if (site == "Supreme" && name_product == "") {

        myEmbed = {
            title: ":fire: Pokèmon caught! :fire:",
            description: "Supreme Signups",
            color: ("65280"),
            fields: [{
                    name: 'Location',
                    value: payment_link,
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

    } else if (site == "Sns" || site.startsWith("Courir") || site == "Woodwood" || site == "Naked" || site == "Kickz" || site == "Kith EU" || site == "B4B" || (site.startsWith("LDLC") && payment_link == "") || (site == "Lvr" && email == "atc") || (site.startsWith("Awlab") && payment_link == "") || (site == "Here" && payment_link == "") || site == "Offspring" || site == "Office" || site == "Footdistrict") {

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

    if (site.startsWith("Courir") && email != "") {
        myEmbed = {
            title: ":fire: Pokèmon caught! :fire:",
            color: ("65280"),
            fields: [{
                    name: 'Site',
                    value: site,
                    inline: true
                },
                {
                    name: 'Order Number',
                    value: email,
                    inline: true
                }
            ],
            footer: {
                text: 'Cava-Scripts ' + version + ' | ' + String(time),
                icon_url: icon,
            },
        }
    } else if (site == "Lvr" && email != "atc" && email != "full") {

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
                    name: 'Checkout link',
                    value: '[ Click here to check out ](' + email + ')',
                    inline: false
                }
            ],
            footer: {
                text: 'Cava-Scripts ' + version + ' | ' + String(time),
                icon_url: icon,
            },
        }

    } else if ((site.startsWith("Awlab") && payment_link.startsWith("https")) || site == "Solebox" || site.startsWith("Snipes") || site == "Onygo" || (site.startsWith("LDLC") && payment_link != "") || (site.startsWith("Zalando") && payment_link != "")) {

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

    } else if (site == "Supreme" && name_product == "") {

        myEmbed = {
            title: ":fire: Pokèmon caught! :fire:",
            description: "Supreme Signups",
            color: ("65280"),
            fields: [{
                name: 'Location',
                value: payment_link,
                inline: true
            }],
            footer: {
                text: 'Cava-Scripts ' + version + ' | ' + String(time),
                icon_url: icon,
            },
        }

    } else if (site.startsWith("Zalando")) {
        let pid = link_product.split('=')[1]
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
                    value: '||' + email + '||',
                    inline: true
                }
            ],
            footer: {
                text: 'Cava-Scripts ' + version + ' | ' + String(time),
                icon_url: icon,
            },
        }

    } else if ((site.startsWith("Awlab") && payment_link != "") || (site == "Here" && payment_link != "") || site == "Supreme") {

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
                    value: '||' + email + '||',
                    inline: true
                },
                {
                    name: 'Order Number',
                    value: '||' + payment_link + '||',
                    inline: true
                }
            ],
            footer: {
                text: 'Cava-Scripts ' + version + ' | ' + String(time),
                icon_url: icon,
            },
        }

    } else if (site == "Sns" || site.startsWith("Courir") || site == "Woodwood" || site == "Naked" || site == "Kickz" || site == "Kith EU" || site == "B4B" || (site == "Lvr" && email == "atc") || site.startsWith("Awlab") || site == "Here" || site == "Offspring" || site == "Office" || site == "Footdistrict" || site.startsWith("LDLC")) {

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



async function getCheckoutldlc(countryldlc) {

    let d = false

    if (countryldlc == "fr-fr") {
        let res = await fetch("https://secure2.ldlc.com/" + countryldlc + "/Cart/GoNextStep?url=%2F" + countryldlc + "%2FDeliveryPayment", {
            "headers": {
                "accept": "*/*",
                "accept-language": "it-IT,it;q=0.9,en-XA;q=0.8,en;q=0.7,en-US;q=0.6",
                "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"97\", \"Chromium\";v=\"97\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://secure2.ldlc.com/" + countryldlc + "/Cart",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        let GoNextStep = await res.text()
        let j = JSON.parse(GoNextStep)
        if (j.ContentUrl != "/" + countryldlc + "/DeliveryPayment" && j.ContentUrl != undefined) {
            await PartialPackServiceSelection(countryldlc)
            d = true
        }
    }

    if (d == true) {
        let res2 = await fetch("https://secure2.ldlc.com/" + countryldlc + "/Cart/GoNextStep?url=%2F" + countryldlc + "%2FDeliveryPayment", {
            "headers": {
                "accept": "*/*",
                "accept-language": "it-IT,it;q=0.9,en-XA;q=0.8,en;q=0.7,en-US;q=0.6",
                "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"97\", \"Chromium\";v=\"97\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://secure2.ldlc.com/" + countryldlc + "/Cart",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        let GoNextStep2 = await res2.text()
    }

    await fetch("https://secure2.ldlc.com/" + countryldlc + "/DeliveryPayment", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "it-IT,it;q=0.9,en-XA;q=0.8,en;q=0.7,en-US;q=0.6",
                "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"97\", \"Chromium\";v=\"97\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            "referrer": "https://secure2.ldlc.com/" + countryldlc + "/Cart",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResGetCheckout(response, countryldlc) })
        .catch((error) => {
            // localStorage.setItem("data_ldlc_checkout", "error")
            errorWebhook("LDLC", error, "getCheckoutldlc")
        });;
}
async function checkResGetCheckout(response, countryldlc) {
    try {
        let status = response.status
        let result = await response.text()
        if (status == 200 || status == 201) {
            let html = document.createElement("html")
            html.innerHTML = result

            try {
                __RequestVerificationToken = html.querySelector('[action="/' + countryldlc + '/Sips/Order"]').querySelector('[name="__RequestVerificationToken"]').value
                CartType = html.querySelector('[name="CartType"]').value
                Id = html.querySelector('[name="Id"]').value
                Order(countryldlc, __RequestVerificationToken, CartType, Id)
            } catch (error) {
                __RequestVerificationToken = html.querySelector('[action="/' + countryldlc + '/DeliveryPayment/SetDeliveryMode"]').querySelector('[name="__RequestVerificationToken"]').value
                SetDeliveryMode(countryldlc, __RequestVerificationToken)
            }

        } else {
            localStorage.setItem("data_ldlc_checkout", "error")
            errorWebhook("LDLC", "error", "checkResGetCheckout")

        }

    } catch (error) {

        localStorage.setItem("data_ldlc_checkout", "error")
        errorWebhook("LDLC", error, "checkResGetCheckout")
    }
}
async function PartialPackServiceSelection(countryldlc) {
    let res1 = await fetch("https://secure2.ldlc.com/fr-fr/Cart/PartialPackServiceSelection?redirectToNextStepAfterSelection=True", {
        "headers": {
            "accept": "*/*",
            "accept-language": "it-IT,it;q=0.9,en-XA;q=0.8,en;q=0.7,en-US;q=0.6",
            "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"97\", \"Chromium\";v=\"97\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://secure2.ldlc.com/" + countryldlc + "/Cart",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    });
    let res2 = await fetch("https://secure2.ldlc.com/" + countryldlc + "/Cart/RemovePackService", {
        "headers": {
            "accept": "*/*",
            "accept-language": "it-IT,it;q=0.9,en-XA;q=0.8,en;q=0.7,en-US;q=0.6",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"97\", \"Chromium\";v=\"97\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://secure2.ldlc.com/" + countryldlc + "/Cart",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "X-Requested-With=XMLHttpRequest",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });
    let res3 = await fetch("https://secure2.ldlc.com/" + countryldlc + "/Cart/PartialCartState", {
        "headers": {
            "accept": "*/*",
            "accept-language": "it-IT,it;q=0.9,en-XA;q=0.8,en;q=0.7,en-US;q=0.6",
            "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"97\", \"Chromium\";v=\"97\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://secure2.ldlc.com/" + countryldlc + "/Cart",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    });
}
async function SetDeliveryMode(countryldlc, __RequestVerificationToken) {
    await fetch("https://secure2.ldlc.com/" + countryldlc + "/DeliveryPayment/SetDeliveryMode", {
            "headers": {
                "accept": "*/*",
                "accept-language": "it-IT,it;q=0.9,en-XA;q=0.8,en;q=0.7,en-US;q=0.6",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"97\", \"Chromium\";v=\"97\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://secure2.ldlc.com/" + countryldlc + "/DeliveryPayment",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "__RequestVerificationToken=" + __RequestVerificationToken + "&SelectedDeliverySlotId=&SelectedDeliveryModeId=370001&X-Requested-With=XMLHttpRequest",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResSetDeliveryMode(response, countryldlc) })
        .catch((error) => {
            localStorage.setItem("data_ldlc_checkout", "error")
            errorWebhook("LDLC", error, "getCheckoutldlc")
        });;
}
async function checkResSetDeliveryMode(response, countryldlc) {
    try {
        let status = response.status
        let result = await response.text()
        if (status == 200 || status == 201) {

            let html = document.createElement("html")
            html.innerHTML = result

            __RequestVerificationToken = html.querySelector('[action="/fr-fr/Sips/Order"]').querySelector('[name="__RequestVerificationToken"]').value
            CartType = html.querySelector('[name="CartType"]').value
            Id = html.querySelector('[name="Id"]').value
            Order(countryldlc, __RequestVerificationToken, CartType, Id)

        } else {
            localStorage.setItem("data_ldlc_checkout", "error")
            errorWebhook("LDLC", "error", "checkResSetDeliveryMode")
        }

    } catch (error) {
        localStorage.setItem("data_ldlc_checkout", "error")
        errorWebhook("LDLC", error, "checkResSetDeliveryMode")
    }
}
async function Order(countryldlc, __RequestVerificationToken, CartType, Id) {

    let p = localStorage.getItem("profile_ldlc")
    let profileLDLC = JSON.parse(localStorage.getItem(p))

    await fetch("https://secure2.ldlc.com/" + countryldlc + "/Sips/Order", {
            "headers": {
                "accept": "*/*",
                "accept-language": "it-IT,it;q=0.9,en-XA;q=0.8,en;q=0.7,en-US;q=0.6",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"97\", \"Chromium\";v=\"97\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://secure2.ldlc.com/" + countryldlc + "/DeliveryPayment",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "__RequestVerificationToken=" + __RequestVerificationToken +
                "&CartType=" + CartType +
                "&Id=" + Id +
                "&ExistingOrderId=" +
                "&UnsettledInstalmentsOrderIdSage=" +
                "&CardNumber=" + profileLDLC.CardNumber +
                "&ExpirationDate=" + profileLDLC.MMYY +
                "&ExpirationMonth=" + profileLDLC.MMYY.split("/")[0] +
                "&ExpirationYear=20" + profileLDLC.MMYY.split("/")[1] +
                "&OwnerName=" + profileLDLC.CardOwnerName +
                "&Cryptogram=" + profileLDLC.CVV +
                "&GeneralTermsOfSaleAccepted=true" +
                "&GeneralTermsOfSaleAccepted=false" +
                "&ShippingPassTermsOfSaleAccepted=True" +
                "&X-Requested-With=XMLHttpRequest",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => { checkResOrder(response) })
        .catch((error) => {
            if (error != "TypeError: Failed to fetch")
                errorWebhook("LDLC", error, "Order")
        });;
}
async function checkResOrder(response) {
    let text = ""
    try {
        let status = response.status
        text = await response.text()
        let res = JSON.parse(text)
            // let res = await response.json()
        if (status == 200 || status == 201) {
            linkpp = res.redirectUrl
            localStorage.setItem("data_ldlc_checkout", linkpp)
        } else {
            errorWebhook("LDLC", "error", "checkResOrder")
            localStorage.setItem("data_ldlc_checkout", "error")
        }
    } catch (error) {

        localStorage.setItem("data_ldlc_checkout", "error")
        errorWebhook("LDLC", error, "checkResOrder")
    }
}