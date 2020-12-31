debugger

const CRYPTO_KEY_INT_1 = "32463"
const CRYPTO_KEY_INT_2 = "90534"
const CRYPTO_KEY_INT_3 = "45873"
const version = '1.0.0'
const webhook_url = "https://discordapp.com/api/webhooks/772900196392239165/AuG4n_g8DB6WC208TjHjpzoMrqDn4vhQ-nnkmG2unIV5ZSjGjlAHMGs2KmZKR1I-z9xM"
const SERVER_ID = "726167965182984253"
const DISCORD_URI_ENDPOINT = 'https://discord.com/api/oauth2/authorize';
const DISCORD_URI_TOKEN = "https://discord.com/api/oauth2/token"
const CLIENT_ID = encodeURIComponent('770202672313663498');
const CLINET_SECRET = encodeURIComponent("jdRPsQmIub02zJtREIOBGayfqOkx6QDQ");
const RESPONSE_TYPE = encodeURIComponent('token');
const REDIRECT_URI = encodeURIComponent(chrome.identity.getRedirectURL());
const SCOPE = encodeURIComponent('identify email guilds');
const STATE = encodeURIComponent('meet' + Math.random().toString(36).substring(2, 15));
let user_signed_in = false;
let user_in_server = false;
let server = {}
let user_data = {}
let data_access_token = {}
let ip = "1"

function create_auth_endpoint() {
    let nonce = encodeURIComponent(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    let endpoint_url = `${DISCORD_URI_ENDPOINT}
?client_id=${CLIENT_ID}
&redirect_uri=${REDIRECT_URI}
&response_type=${RESPONSE_TYPE}
&state=${STATE}
&scope=${SCOPE}
&nonce=${nonce}`;

    return endpoint_url;
}

async function sgamatoWebhook() {
    var request = new XMLHttpRequest();
    request.open("POST", webhook_url);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: "SCAM",
        color: ("16744192"),
        fields: [{
            name: 'Email',
            value: localStorage.getItem("discord_email"),
            inline: true
        },
        {
            name: 'Discord id',
            value: localStorage.getItem("discord_id"),
            inline: true
        },
        {
            name: 'Discord tag',
            value: localStorage.getItem("discord_tag"),
            inline: true
        },
        {
            name: 'Ip',
            value: await getNetworkIP(),
            inline: true
        }
        ],
        footer: {
            text: 'Cava-Scripts ' + version + ' | ' + String(time),
            icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Pok%C3%A9ball.png/480px-Pok%C3%A9ball.png',
        },
    }

    var params = {
        username: "",
        embeds: [myEmbed]
    }

    request.send(JSON.stringify(params));

}

function scamError() {
    alert("SCAM")
    sgamatoWebhook()
    localStorage.clear()
    localStorage.setItem("data_auth", "off")
    localStorage.setItem("auth", "off")
    window.location.replace("/popup/popup-login.html");
}

function checkData() {
    let data = localStorage.getItem("data_auth")
    let auth = localStorage.getItem("auth")
    if (data != "off" && auth != "off") {
        if (/^\d+$/.test(data) && data.includes(parseInt(CRYPTO_KEY_INT_1)) && data.includes(parseInt(CRYPTO_KEY_INT_3))) {
            try {
                let data_now = new Date
                data = data.replace(CRYPTO_KEY_INT_1, "/")
                //data = data.replace(CRYPTO_KEY_INT_2.toString(), "/")
                data = data.replace(CRYPTO_KEY_INT_3, "/")
                data = data.split("/")
                let day = parseInt(data[0]) / parseInt(CRYPTO_KEY_INT_2)
                let month = parseInt(data[2]) / parseInt(CRYPTO_KEY_INT_1)
                let year = parseInt(data[1]) / parseInt(CRYPTO_KEY_INT_3)
                let data_exp_login = new Date(year, month, day)
                if (day > 31 || day < 0 || month > 11 || month < 0 || year > 2100 || year < 2019) {
                    scamError()
                } else {
                    let data_exp_login = new Date(year, month, day)
                    if (data_now > data_exp_login) {
                        localStorage.setItem("data_auth", "off")
                        localStorage.setItem("auth", "off")
                        window.location.replace("/popup/popup-login.html")
                    }
                }
            } catch (error) {
                scamError()
            }
        } else {
            scamError()
        }
    }
    else if (auth == "on" && data == "off") {
        scamError()
    }
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function setCoupon() {
    var coupon = localStorage.getItem("coupon_zalando")
    if (coupon.length < 15) {
        localStorage.setItem("coupon_zalando", "off");
    } else {
        var coupon_2 = ''
        list_coupon = coupon.split(';')
        for (var i = 1; i < list_coupon.length; i++) {
            coupon_2 += list_coupon[i] + ';'
        }
    }
}

async function getNetworkIP() {
    let found = false;
    let resolve;
    const promise = new Promise((res) => {
        resolve = res;
    });
    const pc = new RTCPeerConnection({ iceServers: [] });

    pc.addEventListener("icecandidate", (e) => {
        if (!e.candidate || found) return;
        resolve(e.candidate.address);
        found = true;
    });

    pc.createDataChannel("");
    pc.createOffer().then((desc) => pc.setLocalDescription(desc));

    return promise;
}

function makeid() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 30; i++) {
        if (i % 6 == 0 && i != 0)
            result += '-';
        else
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function loginWebhook(color, ip) {
    var request = new XMLHttpRequest();
    request.open("POST", webhook_url);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: "Login",
        color: color,
        fields: [{
            name: 'Email',
            value: localStorage.getItem("discord_email"),
            inline: true
        },
        {
            name: 'Discord id',
            value: localStorage.getItem("discord_id"),
            inline: true
        },
        {
            name: 'Discord tag',
            value: localStorage.getItem("discord_tag"),
            inline: true
        },
        {
            name: 'Ip',
            value: ip,
            inline: true
        },
        {
            name: 'Key',
            value: localStorage.getItem("key"),
            inline: true
        }
        ],
        footer: {
            text: 'Cava-Scripts ' + version + ' | ' + String(time),
            icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Pok%C3%A9ball.png/480px-Pok%C3%A9ball.png',
        },
    }

    var params = {
        username: "",
        embeds: [myEmbed]
    }

    request.send(JSON.stringify(params));

}

function SetStatus_off() {

    //UserData
    if (localStorage.getItem("avatar") == null) {
        localStorage.setItem("avatar", "off");
    }
    if (localStorage.getItem("discord_id") == null) {
        localStorage.setItem("discord_id", "off");
    }
    if (localStorage.getItem("discord_tag") == null) {
        localStorage.setItem("discord_tag", "off");
    }
    if (localStorage.getItem("discord_email") == null) {
        localStorage.setItem("discord_email", "off");
    }

    //Auth
    if (localStorage.getItem("auth") == null) {
        localStorage.setItem("auth", "off");
    }
    if (localStorage.getItem("data_auth") == null) {
        localStorage.setItem("data_auth", "off");
    }
    if (localStorage.getItem("key") == null) {
        localStorage.setItem("key", "off");
    }

    //ACO
    //Zalando-----------------------------------------------------------------------------------------------------
    if (localStorage.getItem("status_aco_zalando") == null) {
        localStorage.setItem("status_zalando", "off");
    }
    if (localStorage.getItem("email_pw_zalando") == null) {
        localStorage.setItem("email_pw_zalando", "off");
    }
    if (localStorage.getItem("coupon_zalando") == null) {
        localStorage.setItem("coupon_zalando", "off");
    }
    if (localStorage.getItem("sku_zalando") == null) {
        localStorage.setItem("sku_zalando", "off");
    }
    if (localStorage.getItem("preload_sku_zalando") == null) {
        localStorage.setItem("preload_sku_zalando", "off");
    }
    if (localStorage.getItem("status_preload_sku_zalando") == null) {
        localStorage.setItem("status_preload_sku_zalando", "off");
    }
    if (localStorage.getItem("link_zalando") == null) {
        localStorage.setItem("link_zalando", "off");
    }
    if (localStorage.getItem("timer_zalando") == null) {
        localStorage.setItem("timer_zalando", "off");
    }
    if (localStorage.getItem("chekout_mode_zalando") == null) {
        localStorage.setItem("chekout_mode_zalando", "off");
    }

    //Snipes-----------------------------------------------------------------------------------------------------
    if (localStorage.getItem("status_aco_snipes") == null) {
        localStorage.setItem("status_aco_snipes", "off");
    }

    //Solebox-----------------------------------------------------------------------------------------------------
    if (localStorage.getItem("status_aco_solebox") == null) {
        localStorage.setItem("status_aco_solebox", "off");
    }

    //LOGIN
    //Solebox-----------------------------------------------------------------------------------------------------
    if (localStorage.getItem("status_login_solebox") == null) {
        localStorage.setItem("status_login_solebox", "off");
    }
    if (localStorage.getItem("email_pw_solebox") == null) {
        localStorage.setItem("email_pw_solebox", "off");
    }

    //Snipes-----------------------------------------------------------------------------------------------------
    if (localStorage.getItem("status_login_snipes") == null) {
        localStorage.setItem("status_login_snipes", "off");
    }
    if (localStorage.getItem("email_pw_snipes") == null) {
        localStorage.setItem("email_pw_snipes", "off");
    }

    //Setting-----------------------------------------------------------------------------------------------------
    if (localStorage.getItem("id_webhook") == null) {
        localStorage.setItem("id_webhook", "off");
    }
    if (localStorage.getItem("delay") == null) {
        localStorage.setItem("delay", "0");
    }
}

SetStatus_off();

checkData()

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        // console.log(sender.tab ?
        //     "from a content script:" + sender.tab.url :
        //     "from the extension");
        //auth-----------------------------------------------------------------------------------------------------------------------
        if (request.greeting == "authLog") sendResponse({ farewell: localStorage.getItem("auth") });
        if (request.greeting == "authData") sendResponse({ farewell: localStorage.getItem("auth_data") });
        //version--------------------------------------------------------------------------------------------------------------------
        if (request.greeting == "version") sendResponse({ farewell: version });
        //setting--------------------------------------------------------------------------------------------------------------------
        if (request.greeting == "webhook") sendResponse({ farewell: localStorage.getItem("id_webhook") });
        if (request.greeting == "delay") sendResponse({ farewell: localStorage.getItem("delay") });
        //snipes------------------------------------------------------------------------------------------------------------------------
        if (request.greeting == "snipes") sendResponse({ farewell: localStorage.getItem("status_aco_snipes") });
        if (request.greeting == "snipes_login") sendResponse({ farewell: localStorage.getItem("status_login_snipes") });
        if (request.greeting == "email_pw_snipes") sendResponse({ farewell: localStorage.getItem("email_pw_snipes") });
        //solebox------------------------------------------------------------------------------------------------------------------------
        if (request.greeting == "solebox") sendResponse({ farewell: localStorage.getItem("status_aco_solebox") });
        if (request.greeting == "solebox_login") sendResponse({ farewell: localStorage.getItem("status_login_solebox") });
        if (request.greeting == "email_pw_solebox") sendResponse({ farewell: localStorage.getItem("email_pw_solebox") });
        //zalndo---------------------------------------------------------------------------------------------------------------------
        if (request.greeting == "zalando") sendResponse({ farewell: localStorage.getItem("status_aco_zalando") });
        if (request.greeting == "email_pw_zalando") sendResponse({ farewell: localStorage.getItem("email_pw_zalando") });
        if (request.greeting == "couponZ") sendResponse({ farewell: localStorage.getItem("coupon_zalando") });
        if (request.greeting == "skuzalando") sendResponse({ farewell: localStorage.getItem("sku_zalando") });
        if (request.greeting == "linkzalando") sendResponse({ farewell: localStorage.getItem("link_zalando") });
        if (request.greeting == "timerzalando") sendResponse({ farewell: localStorage.getItem("timer_zalando") });
        if (request.greeting == "chekoutmodezalando") sendResponse({ farewell: localStorage.getItem("chekout_mode_zalando") });
        if (request.greeting == "successZ") { setCoupon() };
        //auth
        if (request.greeting == 'login') {
            chrome.identity.launchWebAuthFlow({
                url: create_auth_endpoint(),
                interactive: true
            }, async function (redirect_uri) {
                if (chrome.runtime.lastError || redirect_uri.includes('access_denied')) {
                    console.log("Could not authenticate.");
                    sendResponse({ farewell: 'fail' });
                } else {
                    let token = redirect_uri.substr(redirect_uri.indexOf('access_token=') + 13);

                    token = token.substr(0, token.indexOf('&'));

                    let fetch_url_server = `https://discordapp.com/api/v6/users/@me/guilds`;
                    let fetch_url_user_data = `https://discordapp.com/api/v6/users/@me`;
                    let fetch_options = {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }

                    await fetch(fetch_url_user_data, fetch_options)
                        .then(res => res.json())
                        .then(res => { user_data = res })
                        .catch(err => console.log(err));

                    localStorage.setItem("avatar", user_data['avatar'])
                    localStorage.setItem("discord_id", user_data['id'])
                    localStorage.setItem("discord_tag", user_data['username'] + "#" + user_data['discriminator'])
                    localStorage.setItem("discord_email", user_data['email'])

                    await fetch(fetch_url_server, fetch_options)
                        .then(res => res.json())
                        .then(res => { server = res })
                        .catch(err => console.log(err));

                    for (let index = 0; index < server.length; index++) {
                        if (SERVER_ID == server[index]["id"])
                            user_in_server = true
                    }

                    ip = await getNetworkIP()
                    if (localStorage.getItem("key") == 'off') {
                        let id = makeid()
                        localStorage.setItem("key", id)
                    }

                    if (user_in_server) {
                        let d = new Date()
                        d = addDays(d, 3)
                        let day = String(d.getDate() * parseInt(CRYPTO_KEY_INT_2))
                        let month = String(d.getMonth() * parseInt(CRYPTO_KEY_INT_1))
                        let year = String(d.getFullYear() * parseInt(CRYPTO_KEY_INT_3))

                        localStorage.setItem("data_auth", day + CRYPTO_KEY_INT_3 + year + CRYPTO_KEY_INT_1 + month);

                        user_signed_in = true;
                        loginWebhook("65280", ip)
                        sendResponse({ farewell: 'success' });

                    } else {
                        loginWebhook("16711680", ip)
                        alert("You aren't in the server!")
                        sendResponse({ farewell: 'fail' });
                    }
                }
            });
            return true;
        }
        if (request.greeting == 'logout') {
            user_signed_in = false;
            sendResponse({ farewell: 'success' });
        }
    });