debugger

const version = 'Cava-Scripts 1.0.4'
const webhook_url = "https://discordapp.com/api/webhooks/772900196392239165/AuG4n_g8DB6WC208TjHjpzoMrqDn4vhQ-nnkmG2unIV5ZSjGjlAHMGs2KmZKR1I-z9xM"
const CRYPTO_KEY_INT_1 = "32463"
const CRYPTO_KEY_INT_2 = "90534"
const CRYPTO_KEY_INT_3 = "45873"
let discord_email = localStorage.getItem("discord_email")
let discord_id = localStorage.getItem("discord_id")
let discord_tag = localStorage.getItem("discord_tag")
let avatar_id = localStorage.getItem("avatar")
let img_avatar = "https://cdn.discordapp.com/avatars/" + discord_id + "/" + avatar_id + ".png"

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
    } else if (auth == "on" && data == "off") {
        scamError()
    }
}

$(function() {
    checkData()
    document.getElementById("imgAvatar").src = img_avatar;
    document.getElementById("discordTag").innerHTML = discord_tag;
    document.getElementById("discordEmail").innerHTML = discord_email;
    document.getElementById("version").innerHTML = version;
});