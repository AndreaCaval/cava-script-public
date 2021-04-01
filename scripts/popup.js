debugger

const version = 'Cava-Scripts 1.1.6'

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

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
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
    //Offspring
    if (localStorage.getItem("status_aco_offspring") == "on") { $('#Status_aco_offspring').prop('checked', true); }
    //Basket4ballers
    if (localStorage.getItem("status_aco_basket4ballers") == "on") { $('#Status_aco_basket4ballers').prop('checked', true); }
    //Awlab
    if (localStorage.getItem("status_aco_awlab") == "on") { $('#Status_aco_awlab').prop('checked', true); }
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
    //Offspring
    $('#Status_aco_offspring').click(function() {
        if ($("#Status_aco_offspring").is(':checked')) { localStorage.setItem("status_aco_offspring", "on"); } else { localStorage.setItem("status_aco_offspring", "off"); }
    });
    //Basket4ballers
    $('#Status_aco_basket4ballers').click(function() {
        if ($("#Status_aco_basket4ballers").is(':checked')) { localStorage.setItem("status_aco_basket4ballers", "on"); } else { localStorage.setItem("status_aco_basket4ballers", "off"); }
    });
    //Awlab
    $('#Status_aco_awlab').click(function() {
        if ($("#Status_aco_awlab").is(':checked')) { localStorage.setItem("status_aco_awlab", "on"); } else { localStorage.setItem("status_aco_awlab", "off"); }
    });
    //Onygo
    $('#Status_aco_onygo').click(function() {
        if ($("#Status_aco_onygo").is(':checked')) { localStorage.setItem("status_aco_onygo", "on"); } else { localStorage.setItem("status_aco_onygo", "off"); }
    });

    //---------------------------------------------------------------------

    //GESTIONE PAGINA Login------------------------------------------------

    //contollo se le variabili sono on e in caso checko la casella
    //Awlab
    if (localStorage.getItem("status_login_awlab") == "on") { $('#Status_login_awlab').prop('checked', true); }
    //Solebox
    if (localStorage.getItem("status_login_solebox") == "on") { $('#Status_login_solebox').prop('checked', true); }
    //Snipes
    if (localStorage.getItem("status_login_snipes") == "on") { $('#Status_login_snipes').prop('checked', true); }
    //Kickz
    if (localStorage.getItem("status_login_kickz") == "on") { $('#Status_login_kickz').prop('checked', true); }
    //Offspring
    if (localStorage.getItem("status_login_offspring") == "on") { $('#Status_login_offspring').prop('checked', true); }
    //Onygo
    if (localStorage.getItem("status_login_onygo") == "on") { $('#Status_login_onygo').prop('checked', true); }

    //gestisco i click delle checkbox
    //Awlab
    $('#Status_login_awlab').click(function() {
        if ($("#Status_login_awlab").is(':checked')) { localStorage.setItem("status_login_awlab", "on"); } else { localStorage.setItem("status_login_awlab", "off"); }
    });
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
    //Offspring
    $('#Status_login_offspring').click(function() {
        if ($("#Status_login_offspring").is(':checked')) { localStorage.setItem("status_login_offspring", "on"); } else { localStorage.setItem("status_login_offspring", "off"); }
    });
    //Onygo
    $('#Status_login_onygo').click(function() {
        if ($("#Status_login_onygo").is(':checked')) { localStorage.setItem("status_login_onygo", "on"); } else { localStorage.setItem("status_login_onygo", "off"); }
    });


    //GESTIONE PAGINA PROFILI----------------------------------------------

    np = parseInt(localStorage.getItem("n_profile"))
    if (np != 0) {
        $('#ProfileSaved').removeAttr('disabled')
        $('#btnEditProfile').removeAttr('disabled')
        for (var i = 1; i <= np; i++) {
            x = localStorage.getItem("profiles" + String(i))
            x = String(x).split('$&')[0]
            $('#ProfileSaved').append($('<option>', {
                value: x,
                text: x,
                id: x
            }));
            //$("#ProfileSaved").append(new Option(x,x));
        }
    }

    //gestisco il click del bottone new profile
    $("#btnEditProfile").click(function() {
        $("#ProfileCreator").show();
        profile = $("#ProfileSaved").val();
        profile2 = localStorage.getItem(profile);
        data = localStorage.getItem(profile2);
        data = data.split('$&')
        $("#ProfileName").val(data[0]);
        $("#fname").val(data[1]);
        $("#lname").val(data[2]);
        $("#email").val(data[3]);
        $("#telephone").val(data[4]);
        $("#addressOne").val(data[5]);
        $("#addressTwo").val(data[6]);
        $("#city").val(data[7]);
        $("#zip").val(data[8]);
        $("#state").val(data[9]);
        $("#country").val(data[10]);
        $("#card_owner_name").val(data[11]);
        $("#cardNumber").val(data[12]);
        $("#month_year").val(data[13]);
        $("#cvv").val(data[14]);
    });

    //gestisco il click del bottone new profile
    $("#btnNewProfile").click(function() {
        $("#ProfileCreator").toggle(500);
    });

    //gestisco il click del bottone new profile
    $("#btnDeleteProfile").click(function() {
        profile = $("#ProfileSaved").val();
        $("#" + profile + "").remove();
        nprofile = localStorage.getItem(profile);
        localStorage.removeItem(profile);
        localStorage.removeItem(nprofile);
        np = parseInt(localStorage.getItem("n_profile"));
        np = np - 1;
        localStorage.setItem("n_profile", np);
    });

    //gestisco il click del bottone salva
    $("#btnSaveProfile").click(function() {
        profile_name = $("#ProfileName").val()
        if (profile_name == null || profile_name == "") {
            alert("Profile Name Invalid");
        } else {
            fn = $("#fname").val();
            ln = $("#lname").val();
            email = $("#email").val();
            tel = $("#telephone").val();
            ad1 = $("#addressOne").val();
            ad2 = $("#addressTwo").val();
            city = $("#city").val();
            zip = $("#zip").val();
            state = $("#state").val();
            country = $("#country").val();
            cown = $("#card_owner_name").val();
            cnum = $("#cardNumber").val();
            mmyy = $("#month_year").val();
            cvv = $("#cvv").val();

            $("#ProfileName").val("");
            $("#fname").val("");
            $("#lname").val("");
            $("#email").val("");
            $("#telephone").val("");
            $("#addressOne").val("");
            $("#addressTwo").val("");
            $("#city").val("");
            $("#zip").val("");
            $("#state").val("");
            $("#country").val("");
            $("#card_owner_name").val("");
            $("#cardNumber").val("");
            $("#month_year").val("");
            $("#cvv").val("");

            data = profile_name + "$&" + fn + "$&" + ln + "$&" + email + "$&" + tel + "$&" + ad1 + "$&" + ad2 + "$&" + city + "$&" + zip + "$&" + state + "$&" + country + "$&" + cown + "$&" + cnum + "$&" + mmyy + "$&" + cvv;

            check = localStorage.getItem(profile_name);
            if (check != null) {
                localStorage.setItem(check, data);
            } else {
                np = parseInt(localStorage.getItem("n_profile"));
                np = np + 1;
                localStorage.setItem("n_profile", np);
                localStorage.setItem("profiles" + np, data);
                localStorage.setItem(profile_name, "profiles" + np);
            }
            location.reload();
        }
    });

    //---------------------------------------------------------------------

    //GESTIONE PAGINA SETTING----------------------------------------------

    //contollo se l'id è già presente e in caso lo inserisco nell' input

    np = parseInt(localStorage.getItem("n_profile"))
    if (np != 0) {
        $('#ProfileDefault').removeAttr('disabled')
        for (var i = 1; i <= np; i++) {
            x = localStorage.getItem("profiles" + String(i))
            x = String(x).split('$&')[0]
            $('#ProfileDefault').append($('<option>', {
                value: x,
                text: x,
                id: x
            }));
        }
    }
    if (localStorage.getItem("default_profile") != "off") { $("#ProfileDefault").val(localStorage.getItem("default_profile")); }
    if (localStorage.getItem("id_webhook") != "off") { $("#idWebhook").val(localStorage.getItem("id_webhook")); }
    $("#nDelay").val(localStorage.getItem("delay"));

    //gestisco il click del bottone salva
    $("#btnSetting").click(function() {
        var id = $("#idWebhook").val();
        var d = $("#nDelay").val();
        var pd = $("#ProfileDefault").val();

        if (id != '') { localStorage.setItem("id_webhook", id); } else { localStorage.setItem("id_webhook", "off"); }
        if (d != '') { localStorage.setItem("delay", d); } else { localStorage.setItem("delay", "0"); }
        if (pd != '') { localStorage.setItem("default_profile", pd); } else { localStorage.setItem("default_profile", "off"); }
    });

    $("#btnExportData").click(() => {
        saveLocalStorageToJson()
    })

    $("#btnImportData").click(() => {
        const fileSelector = document.getElementById('importDataSelector');
        const file = fileSelector.files[0]
            // alert(file.name)
        const reader = new FileReader()
        reader.readAsText(file, "UTF-8")
        reader.onload = (evt) => {
            const result = evt.target.result
            const resultObj = JSON.parse(result)
            importData(resultObj)
        }
        reader.onerror = (error) => {
            alert("Error importing data")
        }
    })

    //gestisco il bottone test webhook
    $("#btnWebhook").click(function() {
        testWebhook($("#idWebhook").val())
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
    if (localStorage.getItem("cart_mode_zalando") != "off") { $("#zalandoCartMode").val(localStorage.getItem("cart_mode_zalando")); }
    if (localStorage.getItem("checkout_mode_zalando") != "off") { $("#zalandoCheckoutMode").val(localStorage.getItem("checkout_mode_zalando")); }
    if (localStorage.getItem("payment_zalando") != "off") { $("#zalandoPaymentMode").val(localStorage.getItem("payment_zalando")); }
    $("#zalandoCartLimit").val(localStorage.getItem("zalando_cart_limit"));
    if (localStorage.getItem("size_zalando") != "off") { $("#size_zalando").val(localStorage.getItem("size_zalando")); }

    //gestisco il click del bottone salva
    $("#btnZ").click(function() {
        var e = $("#email_zalando").val();
        var p = $("#pw_zalando").val();
        var cart = $("#zalandoCartMode").val();
        var ck = $("#zalandoCheckoutMode").val();
        var ppp = $("#zalandoPaymentMode").val();
        var cl = $("#zalandoCartLimit").val();
        var size_zalando = $("#size_zalando").val();

        if (!(isBlank(size_zalando))) { localStorage.setItem("size_zalando", size_zalando); } else { localStorage.setItem("size_zalando", "off"); }
        if (!(isBlank(e)) && !(isBlank(p))) { localStorage.setItem("email_pw_zalando", e + ":" + p); } else { localStorage.setItem("email_pw_zalando", "off"); }
        if (cart != '') { localStorage.setItem("cart_mode_zalando", cart); } else { localStorage.setItem("cart_mode_zalando", "off"); }
        if (ck != '') { localStorage.setItem("checkout_mode_zalando", ck); } else { localStorage.setItem("checkout_mode_zalando", "off"); }
        if (ppp != '') { localStorage.setItem("payment_zalando", ppp); } else { localStorage.setItem("payment_zalando", "off"); }
        if (!(isBlank(cl))) { localStorage.setItem("zalando_cart_limit", cl); } else { localStorage.setItem("zalando_cart_limit", "1"); }
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
    if (localStorage.getItem("payment_mode_solebox") != "off") { $("#payment_mode_solebox").val(localStorage.getItem("payment_mode_solebox")); }
    if (localStorage.getItem("checkout_mode_solebox") != "off") { $("#checkout_mode_solebox").val(localStorage.getItem("checkout_mode_solebox")); }
    //gestisco il click del bottone salva
    $("#btn_save_solebox").click(function() {
        var e = $("#email_solebox").val();
        var p = $("#pw_solebox").val();
        var size_solebox = $("#size_solebox").val();
        var payment_mode_solebox = $("#payment_mode_solebox").val();
        var checkout_mode_solebox = $("#checkout_mode_solebox").val();

        if (payment_mode_solebox != '') { localStorage.setItem("payment_mode_solebox", payment_mode_solebox); } else { localStorage.setItem("payment_mode_solebox", "off"); }
        if (checkout_mode_solebox != '') { localStorage.setItem("checkout_mode_solebox", checkout_mode_solebox); } else { localStorage.setItem("checkout_mode_solebox", "off"); }
        if (!(isBlank(size_solebox))) { localStorage.setItem("size_solebox", size_solebox); } else { localStorage.setItem("size_solebox", "off"); }
        if (!(isBlank(e)) && !(isBlank(p))) { localStorage.setItem("email_pw_solebox", e + ":" + p); } else { localStorage.setItem("email_pw_solebox", "off"); }
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
    if (localStorage.getItem("size_snipes") != "off") { $("#size_snipes").val(localStorage.getItem("size_snipes")); }
    if (localStorage.getItem("checkout_mode_snipes") != "off") { $("#checkout_mode_snipes").val(localStorage.getItem("checkout_mode_snipes")); }
    if (localStorage.getItem("country_snipes") != "off") { $("#country_snipes").val(localStorage.getItem("country_snipes")); }
    //gestisco il click del bottone salva
    $("#btn_save_snipes").click(function() {
        var e = $("#email_snipes").val();
        var p = $("#pw_snipes").val();
        var c = $("#country_snipes").val();
        var size_snipes = $("#size_snipes").val();
        var checkout_mode_snipes = $("#checkout_mode_snipes").val();

        if (checkout_mode_snipes != '') { localStorage.setItem("checkout_mode_snipes", checkout_mode_snipes); } else { localStorage.setItem("checkout_mode_snipes", "off"); }
        if (!(isBlank(e)) && !(isBlank(p))) { localStorage.setItem("email_pw_snipes", e + ":" + p); } else { localStorage.setItem("email_pw_snipes", "off"); }
        if (!(isBlank(size_snipes))) { localStorage.setItem("size_snipes", size_snipes); } else { localStorage.setItem("size_snipes", "off"); }
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

        if (!(isBlank(size_onygo))) { localStorage.setItem("size_onygo", size_onygo); } else { localStorage.setItem("size_onygo", "off"); }
        if (!(isBlank(e)) && !(isBlank(p))) { localStorage.setItem("email_pw_onygo", e + ":" + p); } else { localStorage.setItem("email_pw_onygo", "off"); }
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

        if (!(isBlank(size_kickz))) { localStorage.setItem("size_kickz", size_kickz); } else { localStorage.setItem("size_kickz", "off"); }
        if (!(isBlank(e)) && !(isBlank(p))) { localStorage.setItem("email_pw_kickz", e + ":" + p); } else { localStorage.setItem("email_pw_kickz", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA SNS----------------------------------------------
    if (localStorage.getItem("size_sns") != "off") { $("#size_sns").val(localStorage.getItem("size_sns")); }
    if (localStorage.getItem("mode_sns") != "off") { $("#mode_sns").val(localStorage.getItem("mode_sns")); }
    //gestisco il click del bottone salva
    $("#btn_save_sns").click(function() {
        let size_sns = $("#size_sns").val();
        let mode_sns = $("#mode_sns").val();

        if (mode_sns != '') { localStorage.setItem("mode_sns", mode_sns); } else { localStorage.setItem("mode_sns", "off"); }
        if (!(isBlank(size_sns))) { localStorage.setItem("size_sns", size_sns); } else { localStorage.setItem("size_sns", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA NAKED----------------------------------------------
    if (localStorage.getItem("size_naked") != "off") { $("#size_naked").val(localStorage.getItem("size_naked")); }
    //gestisco il click del bottone salva
    $("#btn_save_naked").click(function() {
        var size_naked = $("#size_naked").val();

        if (!(isBlank(size_naked))) { localStorage.setItem("size_naked", size_naked); } else { localStorage.setItem("size_naked", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA B4B----------------------------------------------
    if (localStorage.getItem("size_b4b") != "off") { $("#size_b4b").val(localStorage.getItem("size_b4b")); }
    //gestisco il click del bottone salva
    $("#btn_save_b4b").click(function() {
        var size_b4b = $("#size_b4b").val();

        if (!(isBlank(size_b4b))) { localStorage.setItem("size_b4b", size_b4b); } else { localStorage.setItem("size_b4b", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA LVR----------------------------------------------
    if (localStorage.getItem("mode_lvr") != "off") { $("#mode_lvr").val(localStorage.getItem("mode_lvr")); }
    if (localStorage.getItem("size_lvr") != "off") { $("#size_lvr").val(localStorage.getItem("size_lvr")); }
    //gestisco il click del bottone salva
    $("#btn_save_lvr").click(function() {
        let size_lvr = $("#size_lvr").val();
        let mode_lvr = $("#mode_lvr").val();

        if (mode_lvr != '') { localStorage.setItem("mode_lvr", mode_lvr); } else { localStorage.setItem("mode_lvr", "off"); }
        if (!(isBlank(size_lvr))) { localStorage.setItem("size_lvr", size_lvr); } else { localStorage.setItem("size_lvr", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA OFFSPRING----------------------------------------------
    np = parseInt(localStorage.getItem("n_profile"))
    if (np != 0) {
        $('#profile_offspring').removeAttr('disabled')
        for (var i = 1; i <= np; i++) {
            x = localStorage.getItem("profiles" + String(i))
            x = String(x).split('$&')[0]
            $('#profile_offspring').append($('<option>', {
                value: x,
                text: x,
                id: x
            }));
        }
    }
    if (localStorage.getItem("profile_offspring") != "off") { $("#profile_offspring").val(localStorage.getItem("profile_offspring")); }

    if (localStorage.getItem("account_mode_offspring") == "on") {
        $('#account_mode_offspring').prop('checked', true);
        $("#div_account_mode_offspring").toggle(500);
    }
    $('#account_mode_offspring').click(function() {
        if ($("#account_mode_offspring").prop('checked', true) && $("#div_account_mode_offspring").css("display") == "none") {
            localStorage.setItem("account_mode_offspring", "on");
            localStorage.setItem("guest_mode_offspring", "off");
            $("#div_account_mode_offspring").toggle(500);
            $("#div_guest_mode_offspring").toggle(500);
        }
    });
    if (localStorage.getItem("guest_mode_offspring") == "on") {
        $('#guest_mode_offspring').prop('checked', true);
        $("#div_guest_mode_offspring").toggle(500);
    }
    $('#guest_mode_offspring').click(function() {
        if ($("#guest_mode_offspring").prop('checked', true) && $("#div_guest_mode_offspring").css("display") == "none") {
            localStorage.setItem("guest_mode_offspring", "on");
            localStorage.setItem("account_mode_offspring", "off");
            $("#div_guest_mode_offspring").toggle(500);
            $("#div_account_mode_offspring").toggle(500);
        }
    });

    if (localStorage.getItem("checkout_mode_offspring") != "off") { $("#checkout_mode_offspring").val(localStorage.getItem("checkout_mode_offspring")); }
    if (localStorage.getItem("payment_mode_offspring") != "off") { $("#payment_mode_offspring").val(localStorage.getItem("payment_mode_offspring")); }
    if (localStorage.getItem("size_offspring") != "off") { $("#size_offspring").val(localStorage.getItem("size_offspring")); }

    if (localStorage.getItem("email_pw_offspring") != "off") {
        var email = localStorage.getItem("email_pw_offspring").split(':')[0]
        var pw = localStorage.getItem("email_pw_offspring").split(':')[1]
        $("#email_offspring").val(email);
        $("#pw_offspring").val(pw);
    }
    //gestisco il click del bottone salva
    $("#btn_save_offspring").click(function() {
        let e = $("#email_offspring").val();
        let p = $("#pw_offspring").val();
        let size_offspring = $("#size_offspring").val();
        let profile_offspring = $("#profile_offspring").val();
        let checkout_mode_offspring = $("#checkout_mode_offspring").val();
        let payment_mode_offspring = $("#payment_mode_offspring").val();

        if (payment_mode_offspring != '') { localStorage.setItem("payment_mode_offspring", payment_mode_offspring); } else { localStorage.setItem("payment_mode_offspring", "off"); }
        if (checkout_mode_offspring != '') { localStorage.setItem("checkout_mode_offspring", checkout_mode_offspring); } else { localStorage.setItem("checkout_mode_offspring", "off"); }
        if (profile_offspring != '') { localStorage.setItem("profile_offspring", profile_offspring); } else { localStorage.setItem("profile_offspring", "off"); }
        if (!(isBlank(size_offspring))) { localStorage.setItem("size_offspring", size_offspring); } else { localStorage.setItem("size_offspring", "off"); }
        if (!(isBlank(e)) && !(isBlank(p))) { localStorage.setItem("email_pw_offspring", e + ":" + p); } else { localStorage.setItem("email_pw_offspring", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA AWLAB----------------------------------------------

    np = parseInt(localStorage.getItem("n_profile"))
    if (np != 0) {
        $('#profile_awlab').removeAttr('disabled')
        for (var i = 1; i <= np; i++) {
            x = localStorage.getItem("profiles" + String(i))
            x = String(x).split('$&')[0]
            $('#profile_awlab').append($('<option>', {
                value: x,
                text: x,
                id: x
            }));
        }
    }
    if (localStorage.getItem("profile_awlab") != "off") { $("#profile_awlab").val(localStorage.getItem("profile_awlab")); }

    if (localStorage.getItem("account_mode_awlab") == "on") {
        $('#account_mode_awlab').prop('checked', true);
        $("#div_accountmode_awlab").toggle(500);
    }
    $('#account_mode_awlab').click(function() {
        if ($("#account_mode_awlab").prop('checked', true) && $("#div_accountmode_awlab").css("display") == "none") {
            localStorage.setItem("account_mode_awlab", "on");
            localStorage.setItem("guest_mode_awlab", "off");
            $("#div_accountmode_awlab").toggle(500);
            $("#div_guestmode_awlab").toggle(500);
        }
    });
    if (localStorage.getItem("guest_mode_awlab") == "on") {
        $('#guest_mode_awlab').prop('checked', true);
        $("#div_guestmode_awlab").toggle(500);
    }
    $('#guest_mode_awlab').click(function() {
        if ($("#guest_mode_awlab").prop('checked', true) && $("#div_guestmode_awlab").css("display") == "none") {
            localStorage.setItem("guest_mode_awlab", "on");
            localStorage.setItem("account_mode_awlab", "off");
            $("#div_guestmode_awlab").toggle(500);
            $("#div_accountmode_awlab").toggle(500);
        }
    });

    if (localStorage.getItem("continue_yes_awlab") == "on") {
        $('#continue_yes_awlab').prop('checked', true);
    }
    $('#continue_yes_awlab').click(function() {
        if ($("#continue_yes_awlab").prop('checked', true)) {
            localStorage.setItem("continue_yes_awlab", "on");
            localStorage.setItem("continue_no_awlab", "off");
        }
    });
    if (localStorage.getItem("continue_no_awlab") == "on") {
        $('#continue_no_awlab').prop('checked', true);
    }
    $('#continue_no_awlab').click(function() {
        if ($("#continue_no_awlab").prop('checked', true)) {
            localStorage.setItem("continue_no_awlab", "on");
            localStorage.setItem("continue_yes_awlab", "off");
        }
    });

    if (localStorage.getItem("checkout_mode_awlab") != "off") { $("#checkout_mode_awlab").val(localStorage.getItem("checkout_mode_awlab")); }
    if (localStorage.getItem("payment_mode_awlab") != "off") { $("#payment_mode_awlab").val(localStorage.getItem("payment_mode_awlab")); }
    if (localStorage.getItem("coupon_awlab") != "off") { $("#coupon_awlab").val(localStorage.getItem("coupon_awlab")); }

    if (localStorage.getItem("email_pw_awlab") != "off") {
        var email = localStorage.getItem("email_pw_awlab").split(':')[0]
        var pw = localStorage.getItem("email_pw_awlab").split(':')[1]
        $("#email_awlab").val(email);
        $("#pw_awlab").val(pw);
    }
    //gestisco il click del bottone salva
    $("#btn_save_awlab").click(function() {
        let e = $("#email_awlab").val();
        let p = $("#pw_awlab").val();
        let coupon_awlab = $("#coupon_awlab").val();
        let profile_awlab = $("#profile_awlab").val();
        let checkout_mode_awlab = $("#checkout_mode_awlab").val();
        let payment_mode_awlab = $("#payment_mode_awlab").val();

        if (payment_mode_awlab != '') { localStorage.setItem("payment_mode_awlab", payment_mode_awlab); } else { localStorage.setItem("payment_mode_awlab", "off"); }
        if (checkout_mode_awlab != '') { localStorage.setItem("checkout_mode_awlab", checkout_mode_awlab); } else { localStorage.setItem("checkout_mode_awlab", "off"); }
        if (profile_awlab != '') { localStorage.setItem("profile_awlab", profile_awlab); } else { localStorage.setItem("profile_awlab", "off"); }

        if (!(isBlank(coupon_awlab))) { localStorage.setItem("coupon_awlab", coupon_awlab); } else { localStorage.setItem("coupon_awlab", "off"); }
        if (!(isBlank(e)) && !(isBlank(p))) { localStorage.setItem("email_pw_awlab", e + ":" + p); } else { localStorage.setItem("email_pw_awlab", "off"); }
    });
    //---------------------------------------------------------------------


}


function saveLocalStorageToJson() {
    const storageData = JSON.parse(JSON.stringify(localStorage))
    const filteredVariables = {}
    for (key in storageData) {
        if (shouldSaveKey(key)) {
            filteredVariables[key] = storageData[key]
        }
    }
    console.log(filteredVariables)
    const localStorageJSON = JSON.stringify(filteredVariables)
    download(localStorageJSON, 'info.json', 'application/json');
}

function shouldSaveKey(key) {
    return key != "license"
}

function download(content, fileName, contentType) {
    let a = document.createElement("a");
    let file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function importData(data) {
    for (key in data) {
        localStorage.setItem(key, data[key])
    }
}