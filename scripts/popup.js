debugger

const version = 'Cava-Scripts 1.1.0'

function testWebhook(url_private) {
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
            icon_url: "https://firebasestorage.googleapis.com/v0/b/cavascript-4bcd8.appspot.com/o/iconpk.png?alt=media&token=e0bc7565-d880-42af-80c1-65099bc176d2"
        },
    }

    var params = {
        username: "",
        embeds: [myEmbed]
    }

    request.send(JSON.stringify(params));
}

$(function() {

    chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
        if (response.farewell == 'on') {
            onUserLogged()
        } else {
            open('popup-login.html', "_self")
        }
    });

});

function onUserLogged() {

    //INSERISCO LA VERSIONE NELLE PAGINE----------------------------------
    document.getElementById("version").innerHTML = version;
    //--------------------------------------------------------------------

    //GESTIONE PAGINA ACO------------------------------------------------

    //contollo se le variabili sono on e in caso checko la casella
    //Zalando
    if (localStorage.getItem("status_aco_zalando") == "on") { $('#Status_aco_zalando').prop('checked', true); }
    //Sns
    if (localStorage.getItem("status_aco_sns") == "on") { $('#Status_aco_sns').prop('checked', true); }
    //Solebox
    if (localStorage.getItem("status_aco_solebox") == "on") { $('#Status_aco_solebox').prop('checked', true); }
    //Solebox
    if (localStorage.getItem("status_aco_snipes") == "on") { $('#Status_aco_snipes').prop('checked', true); }
    //Lvr
    if (localStorage.getItem("status_aco_lvr") == "on") { $('#Status_aco_lvr').prop('checked', true); }
    //Naked
    if (localStorage.getItem("status_aco_naked") == "on") { $('#Status_aco_naked').prop('checked', true); }
    //Kickz
    if (localStorage.getItem("status_aco_kickz") == "on") { $('#Status_aco_kickz').prop('checked', true); }
    //Basket4ballers
    if (localStorage.getItem("status_aco_basket4ballers") == "on") { $('#Status_aco_basket4ballers').prop('checked', true); }
    //Onygo
    if (localStorage.getItem("status_aco_onygo") == "on") { $('#Status_aco_onygo').prop('checked', true); }

    //gestisco i click delle checkbox
    //Zalando
    $('#Status_aco_zalando').click(function() {
        if ($("#Status_aco_zalando").is(':checked')) { localStorage.setItem("status_aco_zalando", "on"); } else { localStorage.setItem("status_aco_zalando", "off"); }
    });
    //Sns
    $('#Status_aco_sns').click(function() {
        if ($("#Status_aco_sns").is(':checked')) { localStorage.setItem("status_aco_sns", "on"); } else { localStorage.setItem("status_aco_sns", "off"); }
    });
    //Solebox
    $('#Status_aco_solebox').click(function() {
        if ($("#Status_aco_solebox").is(':checked')) { localStorage.setItem("status_aco_solebox", "on"); } else { localStorage.setItem("status_aco_solebox", "off"); }
    });
    //Snipes
    $('#Status_aco_snipes').click(function() {
        if ($("#Status_aco_snipes").is(':checked')) { localStorage.setItem("status_aco_snipes", "on"); } else { localStorage.setItem("status_aco_snipes", "off"); }
    });
    //Lvr
    $('#Status_aco_lvr').click(function() {
        if ($("#Status_aco_lvr").is(':checked')) { localStorage.setItem("status_aco_lvr", "on"); } else { localStorage.setItem("status_aco_lvr", "off"); }
    });
    //Naked
    $('#Status_aco_naked').click(function() {
        if ($("#Status_aco_naked").is(':checked')) { localStorage.setItem("status_aco_naked", "on"); } else { localStorage.setItem("status_aco_naked", "off"); }
    });
    //Kickz
    $('#Status_aco_kickz').click(function() {
        if ($("#Status_aco_kickz").is(':checked')) { localStorage.setItem("status_aco_kickz", "on"); } else { localStorage.setItem("status_aco_kickz", "off"); }
    });
    //Basket4ballers
    $('#Status_aco_basket4ballers').click(function() {
        if ($("#Status_aco_basket4ballers").is(':checked')) { localStorage.setItem("status_aco_basket4ballers", "on"); } else { localStorage.setItem("status_aco_basket4ballers", "off"); }
    });
    //Onygo
    $('#Status_aco_onygo').click(function() {
        if ($("#Status_aco_onygo").is(':checked')) { localStorage.setItem("status_aco_onygo", "on"); } else { localStorage.setItem("status_aco_onygo", "off"); }
    });

    //---------------------------------------------------------------------

    //GESTIONE PAGINA Login------------------------------------------------

    //contollo se le variabili sono on e in caso checko la casella
    //Solebox
    if (localStorage.getItem("status_login_solebox") == "on") { $('#Status_login_solebox').prop('checked', true); }
    //Snipes
    if (localStorage.getItem("status_login_snipes") == "on") { $('#Status_login_snipes').prop('checked', true); }
    //Kickz
    if (localStorage.getItem("status_login_kickz") == "on") { $('#Status_login_kickz').prop('checked', true); }
    //Onygo
    if (localStorage.getItem("status_login_onygo") == "on") { $('#Status_login_onygo').prop('checked', true); }

    //gestisco i click delle checkbox
    //Solebox
    $('#Status_login_solebox').click(function() {
        if ($("#Status_login_solebox").is(':checked')) { localStorage.setItem("status_login_solebox", "on"); } else { localStorage.setItem("status_login_solebox", "off"); }
    });
    //Snipes
    $('#Status_login_snipes').click(function() {
        if ($("#Status_login_snipes").is(':checked')) { localStorage.setItem("status_login_snipes", "on"); } else { localStorage.setItem("status_login_snipes", "off"); }
    });
    //Kickz
    $('#Status_login_kickz').click(function() {
        if ($("#Status_login_kickz").is(':checked')) { localStorage.setItem("status_login_kickz", "on"); } else { localStorage.setItem("status_login_kickz", "off"); }
    });
    //Onygo
    $('#Status_login_onygo').click(function() {
        if ($("#Status_login_onygo").is(':checked')) { localStorage.setItem("status_login_onygo", "on"); } else { localStorage.setItem("status_login_onygo", "off"); }
    });

    //---------------------------------------------------------------------


    //GESTIONE PAGINA SETTING----------------------------------------------
    if (localStorage.getItem("id_webhook") != "off") { $("#idWebhook").val(localStorage.getItem("id_webhook")); }
    $("#nDelay").val(localStorage.getItem("delay"));
    //gestisco il click del bottone salva
    $("#btnSetting").click(function() {
        var id = $("#idWebhook").val();
        var d = $("#nDelay").val();
        if (id != '') { localStorage.setItem("id_webhook", id); } else { localStorage.setItem("id_webhook", "off"); }
        if (d != '') { localStorage.setItem("delay", d); } else { localStorage.setItem("delay", "0"); }
    });
    //gestisco il bottone test webhook
    $("#btnWebhook").click(function() {
        testWebhook($("#idWebhook").val())
    });

    //---------------------------------------------------------------------

    //GESTIONE PAGINA ZALANDO----------------------------------------------
    if (localStorage.getItem("email_pw_zalando") != "off") {
        var email = localStorage.getItem("email_pw_zalando").split(':')[0]
        var pw = localStorage.getItem("email_pw_zalando").split(':')[1]
        $("#email_zalando").val(email);
        $("#pw_zalando").val(pw);
    }
    //contollo se sono già presenti nello storage e in caso li inserisco nell' input
    if (localStorage.getItem("cart_mode_zalando") != "off") { $("#zalandoCartMode").val(localStorage.getItem("cart_mode_zalando")); }
    if (localStorage.getItem("checkout_mode_zalando") != "off") { $("#zalandoCheckoutMode").val(localStorage.getItem("checkout_mode_zalando")); }
    $("#zalandoCartLimit").val(localStorage.getItem("zalando_cart_limit"));
    //gestisco il click del bottone salva
    $("#btnZ").click(function() {
        var e = $("#email_zalando").val();
        var p = $("#pw_zalando").val();
        var cart = $("#zalandoCartMode").val();
        var ck = $("#zalandoCheckoutMode").val();
        var cl = $("#zalandoCartLimit").val();

        if (e != '' && p != '') { localStorage.setItem("email_pw_zalando", e + ":" + p); } else { localStorage.setItem("email_pw_zalando", "off"); }
        if (cart != '') { localStorage.setItem("cart_mode_zalando", cart); } else { localStorage.setItem("cart_mode_zalando", "off"); }
        if (ck != '') { localStorage.setItem("checkout_mode_zalando", ck); } else { localStorage.setItem("checkout_mode_zalando", "off"); }
        if (cl != '') { localStorage.setItem("zalando_cart_limit", cl); } else { localStorage.setItem("zalando_cart_limit", "1"); }
    });
    //DropMode
    if (localStorage.getItem("drop_mode_zalando") == "on") { $('#zalandoDropMode').prop('checked', true); }
    $('#zalandoDropMode').click(function() {
        if ($("#zalandoDropMode").is(':checked')) { localStorage.setItem("drop_mode_zalando", "on"); } else { localStorage.setItem("drop_mode_zalando", "off"); }
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
    if (localStorage.getItem("size_solebox") != "off") { $("#size_solebox").val(localStorage.getItem("size_solebox")); }
    //gestisco il click del bottone salva
    $("#btn_save_solebox").click(function() {
        var e = $("#email_solebox").val();
        var p = $("#pw_solebox").val();
        var size_solebox = $("#size_solebox").val();

        if (size_solebox != '') { localStorage.setItem("size_solebox", size_solebox); } else { localStorage.setItem("size_solebox", "off"); }
        if (e != '' && p != '') { localStorage.setItem("email_pw_solebox", e + ":" + p); } else { localStorage.setItem("email_pw_solebox", "off"); }
    });
    //--------------------------------------------------------------------

    //GESTIONE PAGINA SNIPES----------------------------------------------
    //contollo se email e pw sono già presenti nello storage e in caso li inserisco nell' input
    if (localStorage.getItem("email_pw_snipes") != "off") {
        var email = localStorage.getItem("email_pw_snipes").split(':')[0]
        var pw = localStorage.getItem("email_pw_snipes").split(':')[1]
        $("#email_snipes").val(email);
        $("#pw_snipes").val(pw);
    }
    if (localStorage.getItem("size_snipes") != "off") { $("#size_snipes").val(localStorage.getItem("size_snipes")); }
    if (localStorage.getItem("country_snipes") != "off") { $("#country_snipes").val(localStorage.getItem("country_snipes")); }
    //gestisco il click del bottone salva
    $("#btn_save_snipes").click(function() {
        var e = $("#email_snipes").val();
        var p = $("#pw_snipes").val();
        var c = $("#country_snipes").val();
        var size_snipes = $("#size_snipes").val();

        if (e != '' && p != '') { localStorage.setItem("email_pw_snipes", e + ":" + p); } else { localStorage.setItem("email_pw_snipes", "off"); }
        if (size_snipes != '') { localStorage.setItem("size_snipes", size_snipes); } else { localStorage.setItem("size_snipes", "off"); }
        if (c != '') { localStorage.setItem("country_snipes", c); } else { localStorage.setItem("country_snipes", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA ONYGO----------------------------------------------
    //contollo se email e pw sono già presenti nello storage e in caso li inserisco nell' input
    if (localStorage.getItem("email_pw_onygo") != "off") {
        var email = localStorage.getItem("email_pw_onygo").split(':')[0]
        var pw = localStorage.getItem("email_pw_onygo").split(':')[1]
        $("#email_onygo").val(email);
        $("#pw_onygo").val(pw);
    }
    if (localStorage.getItem("size_onygo") != "off") { $("#size_onygo").val(localStorage.getItem("size_onygo")); }
    //gestisco il click del bottone salva
    $("#btn_save_onygo").click(function() {
        var e = $("#email_onygo").val();
        var p = $("#pw_onygo").val();
        var size_onygo = $("#size_onygo").val();

        if (size_onygo != '') { localStorage.setItem("size_onygo", size_onygo); } else { localStorage.setItem("size_onygo", "off"); }
        if (e != '' && p != '') { localStorage.setItem("email_pw_onygo", e + ":" + p); } else { localStorage.setItem("email_pw_onygo", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA KICKZ----------------------------------------------
    //contollo se email e pw sono già presenti nello storage e in caso li inserisco nell' input
    if (localStorage.getItem("email_pw_kickz") != "off") {
        var email = localStorage.getItem("email_pw_kickz").split(':')[0]
        var pw = localStorage.getItem("email_pw_kickz").split(':')[1]
        $("#email_kickz").val(email);
        $("#pw_kickz").val(pw);
    }
    if (localStorage.getItem("size_kickz") != "off") { $("#size_sns").val(localStorage.getItem("size_kickz")); }
    //gestisco il click del bottone salva
    $("#btn_save_kickz").click(function() {
        var e = $("#email_kickz").val();
        var p = $("#pw_kickz").val();
        var size_kickz = $("#size_kickz").val();

        if (size_kickz != '') { localStorage.setItem("size_kickz", size_kickz); } else { localStorage.setItem("size_kickz", "off"); }
        if (e != '' && p != '') { localStorage.setItem("email_pw_kickz", e + ":" + p); } else { localStorage.setItem("email_pw_kickz", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA SNS----------------------------------------------
    if (localStorage.getItem("size_sns") != "off") { $("#size_sns").val(localStorage.getItem("size_sns")); }
    //gestisco il click del bottone salva
    $("#btn_save_sns").click(function() {
        var size_sns = $("#size_sns").val();

        if (size_sns != '') { localStorage.setItem("size_sns", size_sns); } else { localStorage.setItem("size_sns", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA NAKED----------------------------------------------
    if (localStorage.getItem("size_naked") != "off") { $("#size_naked").val(localStorage.getItem("size_naked")); }
    //gestisco il click del bottone salva
    $("#btn_save_naked").click(function() {
        var size_naked = $("#size_naked").val();

        if (size_naked != '') { localStorage.setItem("size_naked", size_naked); } else { localStorage.setItem("size_naked", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA B4B----------------------------------------------
    if (localStorage.getItem("size_b4b") != "off") { $("#size_b4b").val(localStorage.getItem("size_b4b")); }
    //gestisco il click del bottone salva
    $("#btn_save_b4b").click(function() {
        var size_b4b = $("#size_b4b").val();

        if (size_b4b != '') { localStorage.setItem("size_b4b", size_b4b); } else { localStorage.setItem("size_b4b", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA LVR----------------------------------------------
    if (localStorage.getItem("size_lvr") != "off") { $("#size_lvr").val(localStorage.getItem("size_lvr")); }
    //gestisco il click del bottone salva
    $("#btn_save_lvr").click(function() {
        var size_lvr = $("#size_lvr").val();

        if (size_lvr != '') { localStorage.setItem("size_lvr", size_lvr); } else { localStorage.setItem("size_lvr", "off"); }
    });
    //---------------------------------------------------------------------
}