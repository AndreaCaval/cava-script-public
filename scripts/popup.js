debugger

const version = 'Cava-Scripts 1.3.2'
let array_export_profile = ["array_profiles"]

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

function isValid(str) {
    return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
}

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

//auth
try {
    const button = document.querySelector("button")
    if (button.getAttribute("id") == "button_in") sing_in()
    else if (button.getAttribute("id") == "button_out") sing_out()
} catch (error) {}

function sing_in() { /* popup-sign-in-script.js */
    try {
        const button_in = document.getElementById("button_in");
        button_in.addEventListener('click', () => {
            const license = document.getElementById("license").value
            chrome.runtime.sendMessage({ greeting: 'login', license: license }, function(response) {
                if (response.farewell == 'success') {
                    window.location.replace("/popup/popup-site-aco.html");
                }
            });
        });
    } catch (error) {}
}

function sing_out() { /* popup-sign-out-script.js */
    try {
        const button_out = document.getElementById('button_out');
        button_out.addEventListener('click', () => {
            const license = localStorage.getItem("license")
            chrome.runtime.sendMessage({ greeting: 'logout', license: license }, function(response) {
                if (response.farewell == 'success') {
                    window.location.replace("/popup/popup-login.html");
                }
            });
        });
    } catch (error) {}
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

    chrome.runtime.sendMessage({ greeting: "userData" }, function(response) {
        const userData = response.farewell
        try {
            document.getElementById("imgAvatar").src = "https://cdn.discordapp.com/avatars/" + userData.discordId + "/" + userData.avatar + ".png";
            document.getElementById("discordTag").innerHTML = userData.discordTag;
            document.getElementById("discordEmail").innerHTML = userData.discordEmail;
        } catch (error) {}
    });

    //INSERISCO LA VERSIONE NELLE PAGINE----------------------------------
    try { document.getElementById("version").innerHTML = version; } catch (error) {}
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
    //Here
    if (localStorage.getItem("status_aco_here") == "on") { $('#Status_aco_here').prop('checked', true); }
    //Onygo
    if (localStorage.getItem("status_aco_onygo") == "on") { $('#Status_aco_onygo').prop('checked', true); }
    //Woodwood
    if (localStorage.getItem("status_aco_woodwood") == "on") { $('#Status_aco_woodwood').prop('checked', true); }
    //Footdistrict
    if (localStorage.getItem("status_aco_footdistrict") == "on") { $('#Status_aco_footdistrict').prop('checked', true); }
    //Asos
    if (localStorage.getItem("status_aco_asos") == "on") { $('#Status_aco_asos').prop('checked', true); }
    //Kith
    if (localStorage.getItem("status_aco_kith") == "on") { $('#Status_aco_kith').prop('checked', true); }
    //Courir
    if (localStorage.getItem("status_aco_courir") == "on") { $('#Status_aco_courir').prop('checked', true); }
    //Supreme
    if (localStorage.getItem("status_aco_supreme") == "on") { $('#Status_aco_supreme').prop('checked', true); }
    //Office
    if (localStorage.getItem("status_aco_office") == "on") { $('#Status_aco_office').prop('checked', true); }
    //Nbb
    if (localStorage.getItem("status_aco_nbb") == "on") { $('#Status_aco_nbb').prop('checked', true); }
    //Aboutyou
    if (localStorage.getItem("status_aco_aboutyou") == "on") { $('#Status_aco_aboutyou').prop('checked', true); }
    //Ldlc
    if (localStorage.getItem("status_aco_ldlc") == "on") { $('#Status_aco_ldlc').prop('checked', true); }
    //MagicEden
    if (localStorage.getItem("status_monitor_magiceden") == "on") { $('#Status_monitor_magiceden').prop('checked', true); }
    //Shopify
    if (localStorage.getItem("status_aco_shopify") == "on") { $('#Status_aco_shopify').prop('checked', true); }

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
    //Here
    $('#Status_aco_here').click(function() {
        if ($("#Status_aco_here").is(':checked')) { localStorage.setItem("status_aco_here", "on"); } else { localStorage.setItem("status_aco_here", "off"); }
    });
    //Onygo
    $('#Status_aco_onygo').click(function() {
        if ($("#Status_aco_onygo").is(':checked')) { localStorage.setItem("status_aco_onygo", "on"); } else { localStorage.setItem("status_aco_onygo", "off"); }
    });
    //Woodwood
    $('#Status_aco_woodwood').click(function() {
        if ($("#Status_aco_woodwood").is(':checked')) { localStorage.setItem("status_aco_woodwood", "on"); } else { localStorage.setItem("status_aco_woodwood", "off"); }
    });
    //Footdistrict
    $('#Status_aco_footdistrict').click(function() {
        if ($("#Status_aco_footdistrict").is(':checked')) { localStorage.setItem("status_aco_footdistrict", "on"); } else { localStorage.setItem("status_aco_footdistrict", "off"); }
    });
    //Asos
    $('#Status_aco_asos').click(function() {
        if ($("#Status_aco_asos").is(':checked')) { localStorage.setItem("status_aco_asos", "on"); } else { localStorage.setItem("status_aco_asos", "off"); }
    });
    //Kith
    $('#Status_aco_kith').click(function() {
        if ($("#Status_aco_kith").is(':checked')) { localStorage.setItem("status_aco_kith", "on"); } else { localStorage.setItem("status_aco_kith", "off"); }
    });
    //Courir
    $('#Status_aco_courir').click(function() {
        if ($("#Status_aco_courir").is(':checked')) { localStorage.setItem("status_aco_courir", "on"); } else { localStorage.setItem("status_aco_courir", "off"); }
    });
    //Supreme
    $('#Status_aco_supreme').click(function() {
        if ($("#Status_aco_supreme").is(':checked')) { localStorage.setItem("status_aco_supreme", "on"); } else { localStorage.setItem("status_aco_supreme", "off"); }
    });
    //Office
    $('#Status_aco_office').click(function() {
        if ($("#Status_aco_office").is(':checked')) { localStorage.setItem("status_aco_office", "on"); } else { localStorage.setItem("status_aco_office", "off"); }
    });
    //Nbb
    $('#Status_aco_nbb').click(function() {
        if ($("#Status_aco_nbb").is(':checked')) { localStorage.setItem("status_aco_nbb", "on"); } else { localStorage.setItem("status_aco_nbb", "off"); }
    });
    //Aboutyou
    $('#Status_aco_aboutyou').click(function() {
        if ($("#Status_aco_aboutyou").is(':checked')) { localStorage.setItem("status_aco_aboutyou", "on"); } else { localStorage.setItem("status_aco_aboutyou", "off"); }
    });
    //Ldlc
    $('#Status_aco_ldlc').click(function() {
        if ($("#Status_aco_ldlc").is(':checked')) { localStorage.setItem("status_aco_ldlc", "on"); } else { localStorage.setItem("status_aco_ldlc", "off"); }
    });
    //MagicEden
    $('#Status_monitor_magiceden').click(function() {
        if ($("#Status_monitor_magiceden").is(':checked')) { localStorage.setItem("status_monitor_magiceden", "on"); } else { localStorage.setItem("status_monitor_magiceden", "off"); }
    });
    //Shopify
    $('#Status_aco_shopify').click(function() {
        if ($("#Status_aco_shopify").is(':checked')) { localStorage.setItem("status_aco_shopify", "on"); } else { localStorage.setItem("status_aco_shopify", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA Login------------------------------------------------

    //contollo se le variabili sono on e in caso checko la casella
    //Awlab
    if (localStorage.getItem("status_login_awlab") == "on") { $('#Status_login_awlab').prop('checked', true); }
    //Here
    if (localStorage.getItem("status_login_here") == "on") { $('#Status_login_here').prop('checked', true); }
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
    //Footdistrict
    if (localStorage.getItem("status_login_footdistrict") == "on") { $('#Status_login_footdistrict').prop('checked', true); }
    //Courir
    if (localStorage.getItem("status_login_courir") == "on") { $('#Status_login_courir').prop('checked', true); }
    //Nbb
    if (localStorage.getItem("status_login_nbb") == "on") { $('#Status_login_nbb').prop('checked', true); }
    //Ldlc
    if (localStorage.getItem("status_login_ldlc") == "on") { $('#Status_login_ldlc').prop('checked', true); }

    //gestisco i click delle checkbox
    //Awlab
    $('#Status_login_awlab').click(function() {
        if ($("#Status_login_awlab").is(':checked')) { localStorage.setItem("status_login_awlab", "on"); } else { localStorage.setItem("status_login_awlab", "off"); }
    });
    //Here
    $('#Status_login_here').click(function() {
        if ($("#Status_login_here").is(':checked')) { localStorage.setItem("status_login_here", "on"); } else { localStorage.setItem("status_login_here", "off"); }
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
    //Footdistrict
    $('#Status_login_footdistrict').click(function() {
        if ($("#Status_login_footdistrict").is(':checked')) { localStorage.setItem("status_login_footdistrict", "on"); } else { localStorage.setItem("status_login_footdistrict", "off"); }
    });
    //Courir
    $('#Status_login_courir').click(function() {
        if ($("#Status_login_courir").is(':checked')) { localStorage.setItem("status_login_courir", "on"); } else { localStorage.setItem("status_login_courir", "off"); }
    });
    //Nbb
    $('#Status_login_nbb').click(function() {
        if ($("#Status_login_nbb").is(':checked')) { localStorage.setItem("status_login_nbb", "on"); } else { localStorage.setItem("status_login_nbb", "off"); }
    });
    //Ldlc
    $('#Status_login_ldlc').click(function() {
        if ($("#Status_login_ldlc").is(':checked')) { localStorage.setItem("status_login_ldlc", "on"); } else { localStorage.setItem("status_login_ldlc", "off"); }
    });


    //GESTIONE PAGINA PROFILI----------------------------------------------
    profiles = localStorage.getItem("array_profiles")
    profiles = profiles.split('&')
    if (profiles.length != 0 && profiles != "off") {
        $('#ProfileSaved').removeAttr('disabled')
        $('#btnEditProfile').removeAttr('disabled')
        for (let i = 0; i < profiles.length; i++) {
            $('#ProfileSaved').append($('<option>', {
                value: profiles[i],
                text: profiles[i],
                id: profiles[i]
            }));
        }
    }
    $("#btnEditProfile").click(function() {
        $("#ProfileCreator").show();
        profile_edit = $("#ProfileSaved").val();
        data = JSON.parse(localStorage.getItem(profile_edit))
        $("#ProfileName").val(profile_edit);
        $("#FirstName").val(data.FirstName);
        $("#LastName").val(data.LastName);
        $("#Email").val(data.Email);
        $("#Telephone").val(data.Telephone);
        $("#AddressOne").val(data.AddressOne);
        $("#AddressTwo").val(data.AddressTwo);
        $("#City").val(data.City);
        $("#Zip").val(data.Zip);
        $("#State").val(data.State);
        $("#Country").val(data.Country);
        $("#CardOwnerName").val(data.CardOwnerName);
        $("#CardNumber").val(data.CardNumber);
        $("#MMYY").val(data.MMYY);
        $("#CVV").val(data.CVV);
    });
    $("#btnNewProfile").click(function() {
        $("#ProfileCreator").toggle(500);
    });
    $("#btnDeleteProfile").click(function() {
        profile_delete = $("#ProfileSaved").val();

        profiles = localStorage.getItem("array_profiles")
        if (profiles.includes('&')) {
            profiles = profiles.split('&')
            const index = profiles.indexOf(profile_delete);
            if (index > -1) {
                profiles.splice(index, 1);
            }
            localStorage.removeItem(profile_delete)
            profiles = localStorage.setItem("array_profiles", profiles.join('&'))
        }


        location.reload();
    });
    $("#btnSaveProfile").click(function() {
        profile_name = $("#ProfileName").val()
        if (!isValid(profile_name)) {
            alert("Profile name invalid, remove special characters")
        } else if (profile_name == null || profile_name == "") {
            alert("Profile name invalid")
        } else {

            save = true

            if (localStorage.getItem(profile_name) != null) {
                if (!confirm("Profile already exists, you want to replace it?")) {
                    save = false
                }
            }

            if (save == true) {

                profiles = localStorage.getItem("array_profiles")
                if (profiles == "off") {
                    profiles = []
                } else {
                    profiles = profiles.split('&')
                }
                if (!profiles.includes(profile_name)) {
                    profiles.push(profile_name)
                    profiles = localStorage.setItem("array_profiles", profiles.join('&'))
                }

                json_profile = {
                    "FirstName": $("#FirstName").val(),
                    "LastName": $("#LastName").val(),
                    "Email": $("#Email").val(),
                    "Telephone": $("#Telephone").val(),
                    "AddressOne": $("#AddressOne").val(),
                    "AddressTwo": $("#AddressTwo").val(),
                    "City": $("#City").val(),
                    "Zip": $("#Zip").val(),
                    "State": $("#State").val(),
                    "Country": $("#Country").val(),
                    "CardOwnerName": $("#CardOwnerName").val(),
                    "CardNumber": $("#CardNumber").val(),
                    "MMYY": $("#MMYY").val(),
                    "CVV": $("#CVV").val(),
                }

                localStorage.setItem(profile_name, JSON.stringify(json_profile))

                location.reload();
            }
        }
    });
    $("#btnExportProfiles").click(() => {
        saveLocalStorageToJsonProfile()
    })
    $("#btnImportProfiles").click(() => {
            try {
                const fileSelector = document.getElementById('importProfileSelector');
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
                    alert("Error importing profiles")
                }
            } catch (error) { alert("Error importing profiles") }
        })
        //---------------------------------------------------------------------

    //GESTIONE PAGINA SETTING----------------------------------------------
    profiles = localStorage.getItem("array_profiles")
    profiles = profiles.split('&')
    if (profiles.length != 0 && profiles != "off") {
        $('#ProfileDefault').removeAttr('disabled')
        for (let i = 0; i < profiles.length; i++) {
            $('#ProfileDefault').append($('<option>', {
                value: profiles[i],
                text: profiles[i],
                id: profiles[i]
            }));
        }
    }
    if (localStorage.getItem("default_profile") != "off") { $("#ProfileDefault").val(localStorage.getItem("default_profile")); }
    if (localStorage.getItem("id_webhook") != "off") { $("#idWebhook").val(localStorage.getItem("id_webhook")); }
    $("#nDelay").val(localStorage.getItem("delay"));
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
        try {
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
        } catch (error) { alert("Error importing data") }
    })
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
    $("#delay_zalando").val(localStorage.getItem("delay_zalando"));
    //contollo se sono già presenti nello storage e in caso li inserisco nell' input
    if (localStorage.getItem("coupon_zalando") != "off") { $("#couponZ").val(localStorage.getItem("coupon_zalando")); }
    if (localStorage.getItem("cart_mode_zalando") != "off") { $("#zalandoCartMode").val(localStorage.getItem("cart_mode_zalando")); }
    if (localStorage.getItem("checkout_mode_zalando") != "off") { $("#zalandoCheckoutMode").val(localStorage.getItem("checkout_mode_zalando")); }
    if (localStorage.getItem("payment_zalando") != "off") { $("#zalandoPaymentMode").val(localStorage.getItem("payment_zalando")); }
    if (localStorage.getItem("size_zalando") != "off") { $("#size_zalando").val(localStorage.getItem("size_zalando")); }
    //gestisco il click del bottone salva
    $("#btnZ").click(function() {
        let e = $("#email_zalando").val()
        let p = $("#pw_zalando").val()
        let cart = $("#zalandoCartMode").val();
        let ck = $("#zalandoCheckoutMode").val();
        let ppp = $("#zalandoPaymentMode").val();
        let size_zalando = $("#size_zalando").val();
        let delay_zalando = $("#delay_zalando").val();

        if (delay_zalando != '') { localStorage.setItem("delay_zalando", delay_zalando); } else { localStorage.setItem("delay_zalando", "1000"); }
        if (!(isBlank(e)) && !(isBlank(p))) { localStorage.setItem("email_pw_zalando", e + ":" + p) } else { localStorage.setItem("email_pw_zalando", "off"); }
        if (!(isBlank(size_zalando))) { localStorage.setItem("size_zalando", size_zalando); } else { localStorage.setItem("size_zalando", "off"); }
        if (cart != '') { localStorage.setItem("cart_mode_zalando", cart); } else { localStorage.setItem("cart_mode_zalando", "off"); }
        if (ck != '') { localStorage.setItem("checkout_mode_zalando", ck); } else { localStorage.setItem("checkout_mode_zalando", "off"); }
        if (ppp != '') { localStorage.setItem("payment_zalando", ppp); } else { localStorage.setItem("payment_zalando", "off"); }
    });
    //DropMode
    if (localStorage.getItem("drop_mode_zalando") == "on") { $('#zalandoDropMode').prop('checked', true); }
    $('#zalandoDropMode').click(function() {
        if ($("#zalandoDropMode").is(':checked')) { localStorage.setItem("drop_mode_zalando", "on"); } else { localStorage.setItem("drop_mode_zalando", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA SOLEBOX----------------------------------------------
    //contollo se email e pw sono già presenti nello storage e in caso li inserisco nell' input
    profiles = localStorage.getItem("array_profiles")
    profiles = profiles.split('&')
    if (profiles.length != 0 && profiles != "off") {
        $('#ProfileSolebox').removeAttr('disabled')
        for (let i = 0; i < profiles.length; i++) {
            $('#ProfileSolebox').append($('<option>', {
                value: profiles[i],
                text: profiles[i],
                id: profiles[i]
            }));
        }
    }
    if (localStorage.getItem("profile_solebox") != "off") { $("#ProfileSolebox").val(localStorage.getItem("profile_solebox")); }
    if (localStorage.getItem("email_pw_solebox") != "off") {
        let email = localStorage.getItem("email_pw_solebox").split(':')[0]
        let pw = localStorage.getItem("email_pw_solebox").split(':')[1]
        $("#email_solebox").val(email);
        $("#pw_solebox").val(pw);
    }
    if (localStorage.getItem("size_solebox") != "off") { $("#size_solebox").val(localStorage.getItem("size_solebox")); }
    if (localStorage.getItem("payment_mode_solebox") != "off") { $("#payment_mode_solebox").val(localStorage.getItem("payment_mode_solebox")); }
    if (localStorage.getItem("checkout_mode_solebox") != "off") { $("#checkout_mode_solebox").val(localStorage.getItem("checkout_mode_solebox")); }
    //gestisco il click del bottone salva
    $("#btn_save_solebox").click(function() {
        let e = $("#email_solebox").val();
        let p = $("#pw_solebox").val();
        let size_solebox = $("#size_solebox").val();
        let payment_mode_solebox = $("#payment_mode_solebox").val();
        let checkout_mode_solebox = $("#checkout_mode_solebox").val();
        let profile_solebox = $("#ProfileSolebox").val();

        if (profile_solebox != '') { localStorage.setItem("profile_solebox", profile_solebox); } else { localStorage.setItem("profile_solebox", "off"); }
        if (payment_mode_solebox != '') { localStorage.setItem("payment_mode_solebox", payment_mode_solebox); } else { localStorage.setItem("payment_mode_solebox", "off"); }
        if (checkout_mode_solebox != '') { localStorage.setItem("checkout_mode_solebox", checkout_mode_solebox); } else { localStorage.setItem("checkout_mode_solebox", "off"); }
        if (!(isBlank(size_solebox))) { localStorage.setItem("size_solebox", size_solebox); } else { localStorage.setItem("size_solebox", "off"); }
        if (!(isBlank(e)) && !(isBlank(p))) { localStorage.setItem("email_pw_solebox", e + ":" + p); } else { localStorage.setItem("email_pw_solebox", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA COURIR----------------------------------------------
    profiles = localStorage.getItem("array_profiles")
    profiles = profiles.split('&')
    if (profiles.length != 0 && profiles != "off") {
        $('#ProfileCourir').removeAttr('disabled')
        for (let i = 0; i < profiles.length; i++) {
            $('#ProfileCourir').append($('<option>', {
                value: profiles[i],
                text: profiles[i],
                id: profiles[i]
            }));
        }
    }
    if (localStorage.getItem("profile_courir") != "off") { $("#ProfileCourir").val(localStorage.getItem("profile_courir")); }
    if (localStorage.getItem("email_pw_courir") != "off") {
        let email = localStorage.getItem("email_pw_courir").split(':')[0]
        let pw = localStorage.getItem("email_pw_courir").split(':')[1]
        $("#email_courir").val(email);
        $("#pw_courir").val(pw);
    }
    if (localStorage.getItem("size_courir") != "off") { $("#size_courir").val(localStorage.getItem("size_courir")); }
    if (localStorage.getItem("payment_mode_courir") != "off") { $("#payment_mode_courir").val(localStorage.getItem("payment_mode_courir")); }
    if (localStorage.getItem("checkout_mode_courir") != "off") { $("#checkout_mode_courir").val(localStorage.getItem("checkout_mode_courir")); }
    //gestisco il click del bottone salva
    $("#btn_save_courir").click(function() {
        let e = $("#email_courir").val();
        let p = $("#pw_courir").val();
        let size_courir = $("#size_courir").val();
        let payment_mode_courir = $("#payment_mode_courir").val();
        let checkout_mode_courir = $("#checkout_mode_courir").val();
        let profile_courir = $("#ProfileCourir").val();

        if (profile_courir != '') { localStorage.setItem("profile_courir", profile_courir); } else { localStorage.setItem("profile_courir", "off"); }
        if (payment_mode_courir != '') { localStorage.setItem("payment_mode_courir", payment_mode_courir); } else { localStorage.setItem("payment_mode_courir", "off"); }
        if (checkout_mode_courir != '') { localStorage.setItem("checkout_mode_courir", checkout_mode_courir); } else { localStorage.setItem("checkout_mode_courir", "off"); }
        if (!(isBlank(size_courir))) { localStorage.setItem("size_courir", size_courir); } else { localStorage.setItem("size_courir", "off"); }
        if (!(isBlank(e)) && !(isBlank(p))) { localStorage.setItem("email_pw_courir", e + ":" + p); } else { localStorage.setItem("email_pw_courir", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA SNIPES----------------------------------------------
    profiles = localStorage.getItem("array_profiles")
    profiles = profiles.split('&')
    if (profiles.length != 0 && profiles != "off") {
        $('#ProfileSnipes').removeAttr('disabled')
        for (let i = 0; i < profiles.length; i++) {
            $('#ProfileSnipes').append($('<option>', {
                value: profiles[i],
                text: profiles[i],
                id: profiles[i]
            }));
        }
    }
    if (localStorage.getItem("profile_snipes") != "off") { $("#ProfileSnipes").val(localStorage.getItem("profile_snipes")); }
    if (localStorage.getItem("email_pw_snipes") != "off") {
        let email = localStorage.getItem("email_pw_snipes").split(':')[0]
        let pw = localStorage.getItem("email_pw_snipes").split(':')[1]
        $("#email_snipes").val(email);
        $("#pw_snipes").val(pw);
    }
    if (localStorage.getItem("size_snipes") != "off") { $("#size_snipes").val(localStorage.getItem("size_snipes")); }
    if (localStorage.getItem("checkout_mode_snipes") != "off") { $("#checkout_mode_snipes").val(localStorage.getItem("checkout_mode_snipes")); }
    if (localStorage.getItem("payment_mode_snipes") != "off") { $("#payment_mode_snipes").val(localStorage.getItem("payment_mode_snipes")); }
    if (localStorage.getItem("country_snipes") != "off") { $("#country_snipes").val(localStorage.getItem("country_snipes")); }
    //gestisco il click del bottone salva
    $("#btn_save_snipes").click(function() {
        let e = $("#email_snipes").val();
        let p = $("#pw_snipes").val();
        let c = $("#country_snipes").val();
        let size_snipes = $("#size_snipes").val();
        let checkout_mode_snipes = $("#checkout_mode_snipes").val();
        let profile_snipes = $("#ProfileSnipes").val();
        let payment_mode_snipes = $("#payment_mode_snipes").val();

        if (payment_mode_snipes != '') { localStorage.setItem("payment_mode_snipes", payment_mode_snipes); } else { localStorage.setItem("payment_mode_snipes", "off"); }
        if (profile_snipes != '') { localStorage.setItem("profile_snipes", profile_snipes); } else { localStorage.setItem("profile_snipes", "off"); }
        if (checkout_mode_snipes != '') { localStorage.setItem("checkout_mode_snipes", checkout_mode_snipes); } else { localStorage.setItem("checkout_mode_snipes", "off"); }
        if (!(isBlank(e)) && !(isBlank(p))) { localStorage.setItem("email_pw_snipes", e + ":" + p); } else { localStorage.setItem("email_pw_snipes", "off"); }
        if (!(isBlank(size_snipes))) { localStorage.setItem("size_snipes", size_snipes); } else { localStorage.setItem("size_snipes", "off"); }
        if (c != '') { localStorage.setItem("country_snipes", c); } else { localStorage.setItem("country_snipes", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA ONYGO----------------------------------------------
    profiles = localStorage.getItem("array_profiles")
    profiles = profiles.split('&')
    if (profiles.length != 0 && profiles != "off") {
        $('#ProfileOnygo').removeAttr('disabled')
        for (let i = 0; i < profiles.length; i++) {
            $('#ProfileOnygo').append($('<option>', {
                value: profiles[i],
                text: profiles[i],
                id: profiles[i]
            }));
        }
    }
    if (localStorage.getItem("profile_onygo") != "off") { $("#ProfileOnygo").val(localStorage.getItem("profile_onygo")); }
    if (localStorage.getItem("email_pw_onygo") != "off") {
        let email = localStorage.getItem("email_pw_onygo").split(':')[0]
        let pw = localStorage.getItem("email_pw_onygo").split(':')[1]
        $("#email_onygo").val(email);
        $("#pw_onygo").val(pw);
    }
    if (localStorage.getItem("size_onygo") != "off") { $("#size_onygo").val(localStorage.getItem("size_onygo")); }
    //gestisco il click del bottone salva
    $("#btn_save_onygo").click(function() {
        let e = $("#email_onygo").val();
        let p = $("#pw_onygo").val();
        let size_onygo = $("#size_onygo").val();
        let profile_onygo = $("#ProfileOnygo").val();

        if (profile_onygo != '') { localStorage.setItem("profile_onygo", profile_onygo); } else { localStorage.setItem("profile_onygo", "off"); }
        if (!(isBlank(size_onygo))) { localStorage.setItem("size_onygo", size_onygo); } else { localStorage.setItem("size_onygo", "off"); }
        if (!(isBlank(e)) && !(isBlank(p))) { localStorage.setItem("email_pw_onygo", e + ":" + p); } else { localStorage.setItem("email_pw_onygo", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA FOOTDISTRICT----------------------------------------------
    profiles = localStorage.getItem("array_profiles")
    profiles = profiles.split('&')
    if (profiles.length != 0 && profiles != "off") {
        $('#ProfileFootdistrict').removeAttr('disabled')
        for (let i = 0; i < profiles.length; i++) {
            $('#ProfileFootdistrict').append($('<option>', {
                value: profiles[i],
                text: profiles[i],
                id: profiles[i]
            }));
        }
    }
    if (localStorage.getItem("profile_footdistrict") != "off") { $("#ProfileFootdistrict").val(localStorage.getItem("profile_footdistrict")); }
    if (localStorage.getItem("email_pw_footdistrict") != "off") {
        let email = localStorage.getItem("email_pw_footdistrict").split(':')[0]
        let pw = localStorage.getItem("email_pw_footdistrict").split(':')[1]
        $("#email_footdistrict").val(email);
        $("#pw_footdistrict").val(pw);
    }
    if (localStorage.getItem("size_footdistrict") != "off") { $("#size_footdistrict").val(localStorage.getItem("size_footdistrict")); }
    //gestisco il click del bottone salva
    $("#btn_save_footdistrict").click(function() {
        let e = $("#email_footdistrict").val();
        let p = $("#pw_footdistrict").val();
        let size_footdistrict = $("#size_footdistrict").val();
        let profile_footdistrict = $("#ProfileFootdistrict").val();

        if (profile_footdistrict != '') { localStorage.setItem("profile_footdistrict", profile_footdistrict); } else { localStorage.setItem("profile_footdistrict", "off"); }
        if (!(isBlank(size_footdistrict))) { localStorage.setItem("size_footdistrict", size_footdistrict); } else { localStorage.setItem("size_footdistrict", "off"); }
        if (!(isBlank(e)) && !(isBlank(p))) { localStorage.setItem("email_pw_footdistrict", e + ":" + p); } else { localStorage.setItem("email_pw_footdistrict", "off"); }
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
    if (localStorage.getItem("size_kickz") != "off") { $("#size_kickz").val(localStorage.getItem("size_kickz")); }
    $("#delay_kickz").val(localStorage.getItem("delay_kickz"));
    //gestisco il click del bottone salva
    $("#btn_save_kickz").click(function() {
        let e = $("#email_kickz").val();
        let p = $("#pw_kickz").val();
        let size_kickz = $("#size_kickz").val();
        let delay_kickz = $("#delay_kickz").val();
        if (delay_kickz != '') { localStorage.setItem("delay_kickz", delay_kickz); } else { localStorage.setItem("delay_kickz", "1000"); }
        if (!(isBlank(size_kickz))) { localStorage.setItem("size_kickz", size_kickz); } else { localStorage.setItem("size_kickz", "off"); }
        if (!(isBlank(e)) && !(isBlank(p))) { localStorage.setItem("email_pw_kickz", e + ":" + p); } else { localStorage.setItem("email_pw_kickz", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA SNS----------------------------------------------
    if (localStorage.getItem("size_sns") != "off") { $("#size_sns").val(localStorage.getItem("size_sns")); }
    if (localStorage.getItem("mode_sns") != "off") { $("#mode_sns").val(localStorage.getItem("mode_sns")); }
    $("#delay_sns").val(localStorage.getItem("delay_sns"));
    //gestisco il click del bottone salva
    $("#btn_save_sns").click(function() {
        let size_sns = $("#size_sns").val();
        let mode_sns = $("#mode_sns").val();
        let delay_sns = $("#delay_sns").val();
        if (delay_sns != '') { localStorage.setItem("delay_sns", delay_sns); } else { localStorage.setItem("delay_sns", "1000"); }
        if (mode_sns != '') { localStorage.setItem("mode_sns", mode_sns); } else { localStorage.setItem("mode_sns", "off"); }
        if (!(isBlank(size_sns))) { localStorage.setItem("size_sns", size_sns); } else { localStorage.setItem("size_sns", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA WOODWOOD----------------------------------------------
    if (localStorage.getItem("size_woodwood") != "off") { $("#size_woodwood").val(localStorage.getItem("size_woodwood")); }
    if (localStorage.getItem("mode_woodwood") != "off") { $("#mode_woodwood").val(localStorage.getItem("mode_woodwood")); }
    $("#delay_woodwood").val(localStorage.getItem("delay_woodwood"));
    //gestisco il click del bottone salva
    $("#btn_save_woodwood").click(function() {
        let size_woodwood = $("#size_woodwood").val();
        let mode_woodwood = $("#mode_woodwood").val();
        let delay_woodwood = $("#delay_woodwood").val();
        if (delay_woodwood != '') { localStorage.setItem("delay_woodwood", delay_woodwood); } else { localStorage.setItem("delay_woodwood", "1000"); }
        if (mode_woodwood != '') { localStorage.setItem("mode_woodwood", mode_woodwood); } else { localStorage.setItem("mode_woodwood", "off"); }
        if (!(isBlank(size_woodwood))) { localStorage.setItem("size_woodwood", size_woodwood); } else { localStorage.setItem("size_woodwood", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA NAKED----------------------------------------------
    if (localStorage.getItem("size_naked") != "off") { $("#size_naked").val(localStorage.getItem("size_naked")); }
    if (localStorage.getItem("mode_naked") != "off") { $("#mode_naked").val(localStorage.getItem("mode_naked")); }
    $("#delay_naked").val(localStorage.getItem("delay_naked"));
    //gestisco il click del bottone salva
    $("#btn_save_naked").click(function() {
        var size_naked = $("#size_naked").val();
        let mode_naked = $("#mode_naked").val();
        let delay_naked = $("#delay_naked").val();
        if (delay_naked != '') { localStorage.setItem("delay_naked", delay_naked); } else { localStorage.setItem("delay_naked", "1000"); }
        if (mode_naked != '') { localStorage.setItem("mode_naked", mode_naked); } else { localStorage.setItem("mode_naked", "off"); }
        if (!(isBlank(size_naked))) { localStorage.setItem("size_naked", size_naked); } else { localStorage.setItem("size_naked", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA B4B----------------------------------------------
    if (localStorage.getItem("size_b4b") != "off") { $("#size_b4b").val(localStorage.getItem("size_b4b")); }
    $("#delay_b4b").val(localStorage.getItem("delay_b4b"));
    //gestisco il click del bottone salva
    $("#btn_save_b4b").click(function() {
        let size_b4b = $("#size_b4b").val();
        let delay_b4b = $("#delay_b4b").val();
        if (delay_b4b != '') { localStorage.setItem("delay_b4b", delay_b4b); } else { localStorage.setItem("delay_b4b", "1000"); }
        if (!(isBlank(size_b4b))) { localStorage.setItem("size_b4b", size_b4b); } else { localStorage.setItem("size_b4b", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA LVR----------------------------------------------
    profiles = localStorage.getItem("array_profiles")
    profiles = profiles.split('&')
    if (profiles.length != 0 && profiles != "off") {
        $('#ProfileLvr').removeAttr('disabled')
        for (let i = 0; i < profiles.length; i++) {
            $('#ProfileLvr').append($('<option>', {
                value: profiles[i],
                text: profiles[i],
                id: profiles[i]
            }));
        }
    }
    if (localStorage.getItem("profile_lvr") != "off") { $("#ProfileLvr").val(localStorage.getItem("profile_lvr")); }
    if (localStorage.getItem("payment_mode_lvr") != "off") { $("#payment_mode_lvr").val(localStorage.getItem("payment_mode_lvr")); }
    if (localStorage.getItem("mode_lvr") != "off") { $("#mode_lvr").val(localStorage.getItem("mode_lvr")); }
    if (localStorage.getItem("size_lvr") != "off") { $("#size_lvr").val(localStorage.getItem("size_lvr")); }
    //gestisco il click del bottone salva
    $("#btn_save_lvr").click(function() {
        let size_lvr = $("#size_lvr").val();
        let mode_lvr = $("#mode_lvr").val();
        let profile_lvr = $("#ProfileLvr").val();
        let payment_mode_lvr = $("#payment_mode_lvr").val();
        if (payment_mode_lvr != '') { localStorage.setItem("payment_mode_lvr", payment_mode_lvr); } else { localStorage.setItem("payment_mode_lvr", "off"); }
        if (profile_lvr != '') { localStorage.setItem("profile_lvr", profile_lvr); } else { localStorage.setItem("profile_lvr", "off"); }
        if (mode_lvr != '') { localStorage.setItem("mode_lvr", mode_lvr); } else { localStorage.setItem("mode_lvr", "off"); }
        if (!(isBlank(size_lvr))) { localStorage.setItem("size_lvr", size_lvr); } else { localStorage.setItem("size_lvr", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA SUPREME----------------------------------------------
    profiles = localStorage.getItem("array_profiles")
    profiles = profiles.split('&')
    if (profiles.length != 0 && profiles != "off") {
        $('#ProfileSupreme').removeAttr('disabled')
        for (let i = 0; i < profiles.length; i++) {
            $('#ProfileSupreme').append($('<option>', {
                value: profiles[i],
                text: profiles[i],
                id: profiles[i]
            }));
        }
    }
    if (localStorage.getItem("profile_supreme") != "off") { $("#ProfileSupreme").val(localStorage.getItem("profile_supreme")); }
    if (localStorage.getItem("payment_mode_supreme") != "off") { $("#payment_mode_supreme").val(localStorage.getItem("payment_mode_supreme")); }
    if (localStorage.getItem("checkout_mode_supreme") != "off") { $("#checkout_mode_supreme").val(localStorage.getItem("checkout_mode_supreme")); }
    if (localStorage.getItem("size_supreme") != "off") { $("#size_supreme").val(localStorage.getItem("size_supreme")); }
    //gestisco il click del bottone salva
    $("#btn_save_supreme").click(function() {
        let size_supreme = $("#size_supreme").val();
        let payment_mode_supreme = $("#payment_mode_supreme").val();
        let checkout_mode_supreme = $("#checkout_mode_supreme").val();
        let profile_supreme = $("#ProfileSupreme").val();
        if (profile_supreme != '') { localStorage.setItem("profile_supreme", profile_supreme); } else { localStorage.setItem("profile_supreme", "off"); }
        if (payment_mode_supreme != '') { localStorage.setItem("payment_mode_supreme", payment_mode_supreme); } else { localStorage.setItem("payment_mode_supreme", "off"); }
        if (checkout_mode_supreme != '') { localStorage.setItem("checkout_mode_supreme", checkout_mode_supreme); } else { localStorage.setItem("checkout_mode_supreme", "off"); }
        if (!(isBlank(size_supreme))) { localStorage.setItem("size_supreme", size_supreme); } else { localStorage.setItem("size_supreme", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA KITH----------------------------------------------
    profiles = localStorage.getItem("array_profiles")
    profiles = profiles.split('&')
    if (profiles.length != 0 && profiles != "off") {
        $('#ProfileKith').removeAttr('disabled')
        for (let i = 0; i < profiles.length; i++) {
            $('#ProfileKith').append($('<option>', {
                value: profiles[i],
                text: profiles[i],
                id: profiles[i]
            }));
        }
    }
    if (localStorage.getItem("profile_kith") != "off") { $("#ProfileKith").val(localStorage.getItem("profile_kith")); }
    if (localStorage.getItem("checkout_mode_kith") != "off") { $("#checkout_mode_kith").val(localStorage.getItem("checkout_mode_kith")); }
    if (localStorage.getItem("size_kith") != "off") { $("#size_kith").val(localStorage.getItem("size_kith")); }
    //gestisco il click del bottone salva
    $("#btn_save_kith").click(function() {
        let size_kith = $("#size_kith").val();
        let checkout_mode_kith = $("#checkout_mode_kith").val();
        let profile_kith = $("#ProfileKith").val();
        if (profile_kith != '') { localStorage.setItem("profile_kith", profile_kith); } else { localStorage.setItem("profile_kith", "off"); }
        if (checkout_mode_kith != '') { localStorage.setItem("checkout_mode_kith", checkout_mode_kith); } else { localStorage.setItem("checkout_mode_kith", "off"); }
        if (!(isBlank(size_kith))) { localStorage.setItem("size_kith", size_kith); } else { localStorage.setItem("size_kith", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA OFFSPRING----------------------------------------------
    profiles = localStorage.getItem("array_profiles")
    profiles = profiles.split('&')
    if (profiles.length != 0 && profiles != "off") {
        $('#ProfileOffspring').removeAttr('disabled')
        for (let i = 0; i < profiles.length; i++) {
            $('#ProfileOffspring').append($('<option>', {
                value: profiles[i],
                text: profiles[i],
                id: profiles[i]
            }));
        }
    }
    if (localStorage.getItem("profile_offspring") != "off") { $("#ProfileOffspring").val(localStorage.getItem("profile_offspring")); }
    if (localStorage.getItem("payment_mode_offspring") != "off") { $("#payment_mode_offspring").val(localStorage.getItem("payment_mode_offspring")); }
    if (localStorage.getItem("checkout_mode_offspring") != "off") { $("#checkout_mode_offspring").val(localStorage.getItem("checkout_mode_offspring")); }
    if (localStorage.getItem("size_offspring") != "off") { $("#size_offspring").val(localStorage.getItem("size_offspring")); }
    $("#delay_offspring").val(localStorage.getItem("delay_offspring"));
    //gestisco il click del bottone salva
    $("#btn_save_offspring").click(function() {
        let size_offspring = $("#size_offspring").val();
        let delay_offspring = $("#delay_offspring").val();
        let payment_mode_offspring = $("#payment_mode_offspring").val();
        let checkout_mode_offspring = $("#checkout_mode_offspring").val();
        let profile_offspring = $("#ProfileOffspring").val();
        if (profile_offspring != '') { localStorage.setItem("profile_offspring", profile_offspring); } else { localStorage.setItem("profile_offspring", "off"); }
        if (payment_mode_offspring != '') { localStorage.setItem("payment_mode_offspring", payment_mode_offspring); } else { localStorage.setItem("payment_mode_offspring", "off"); }
        if (checkout_mode_offspring != '') { localStorage.setItem("checkout_mode_offspring", checkout_mode_offspring); } else { localStorage.setItem("checkout_mode_offspring", "off"); }
        if (delay_offspring != '') { localStorage.setItem("delay_offspring", delay_offspring); } else { localStorage.setItem("delay_offspring", "1000"); }
        if (!(isBlank(size_offspring))) { localStorage.setItem("size_offspring", size_offspring); } else { localStorage.setItem("size_offspring", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA OFFICE----------------------------------------------
    profiles = localStorage.getItem("array_profiles")
    profiles = profiles.split('&')
    if (profiles.length != 0 && profiles != "off") {
        $('#ProfileOffice').removeAttr('disabled')
        for (let i = 0; i < profiles.length; i++) {
            $('#ProfileOffice').append($('<option>', {
                value: profiles[i],
                text: profiles[i],
                id: profiles[i]
            }));
        }
    }
    if (localStorage.getItem("profile_office") != "off") { $("#ProfileOffice").val(localStorage.getItem("profile_office")); }
    if (localStorage.getItem("payment_mode_office") != "off") { $("#payment_mode_office").val(localStorage.getItem("payment_mode_office")); }
    if (localStorage.getItem("checkout_mode_office") != "off") { $("#checkout_mode_office").val(localStorage.getItem("checkout_mode_office")); }
    if (localStorage.getItem("size_office") != "off") { $("#size_office").val(localStorage.getItem("size_office")); }
    $("#delay_office").val(localStorage.getItem("delay_office"));
    //gestisco il click del bottone salva
    $("#btn_save_office").click(function() {
        let size_office = $("#size_office").val();
        let delay_office = $("#delay_office").val();
        let payment_mode_office = $("#payment_mode_office").val();
        let checkout_mode_office = $("#checkout_mode_office").val();
        let profile_office = $("#ProfileOffice").val();
        if (profile_office != '') { localStorage.setItem("profile_office", profile_office); } else { localStorage.setItem("profile_office", "off"); }
        if (payment_mode_office != '') { localStorage.setItem("payment_mode_office", payment_mode_office); } else { localStorage.setItem("payment_mode_office", "off"); }
        if (checkout_mode_office != '') { localStorage.setItem("checkout_mode_office", checkout_mode_office); } else { localStorage.setItem("checkout_mode_office", "off"); }
        if (delay_office != '') { localStorage.setItem("delay_office", delay_office); } else { localStorage.setItem("delay_office", "1000"); }
        if (!(isBlank(size_office))) { localStorage.setItem("size_office", size_office); } else { localStorage.setItem("size_office", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA ASOS----------------------------------------------
    $("#delay_asos").val(localStorage.getItem("delay_asos"));
    //gestisco il click del bottone salva
    $("#btn_save_asos").click(function() {
        let delay_asos = $("#delay_asos").val();
        if (delay_asos != '') { localStorage.setItem("delay_asos", delay_asos); } else { localStorage.setItem("delay_asos", "1000"); }
    });
    //multicart
    if (localStorage.getItem("multicart_asos") == "on") { $('#multicart_asos').prop('checked', true); }
    $('#multicart_asos').click(function() {
        if ($("#multicart_asos").is(':checked')) { localStorage.setItem("multicart_asos", "on"); } else { localStorage.setItem("multicart_asos", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA AWLAB----------------------------------------------

    profiles = localStorage.getItem("array_profiles")
    profiles = profiles.split('&')
    if (profiles.length != 0 && profiles != "off") {
        $('#ProfileAwlab').removeAttr('disabled')
        for (let i = 0; i < profiles.length; i++) {
            $('#ProfileAwlab').append($('<option>', {
                value: profiles[i],
                text: profiles[i],
                id: profiles[i]
            }));
        }
    }
    if (profiles.length != 0 && profiles != "off") {
        $('#ProfileAwlabEN').removeAttr('disabled')
        for (let i = 0; i < profiles.length; i++) {
            $('#ProfileAwlabEN').append($('<option>', {
                value: profiles[i],
                text: profiles[i],
                id: profiles[i]
            }));
        }
    }
    if (profiles.length != 0 && profiles != "off") {
        $('#ProfileAwlabES').removeAttr('disabled')
        for (let i = 0; i < profiles.length; i++) {
            $('#ProfileAwlabES').append($('<option>', {
                value: profiles[i],
                text: profiles[i],
                id: profiles[i]
            }));
        }
    }
    if (localStorage.getItem("profile_awlab") != "off") { $("#ProfileAwlab").val(localStorage.getItem("profile_awlab")); }
    if (localStorage.getItem("profile_awlab_en") != "off") { $("#ProfileAwlabEN").val(localStorage.getItem("profile_awlab_en")); }
    if (localStorage.getItem("profile_awlab_es") != "off") { $("#ProfileAwlabES").val(localStorage.getItem("profile_awlab_es")); }
    if (localStorage.getItem("checkout_mode_awlab") != "off") { $("#checkout_mode_awlab").val(localStorage.getItem("checkout_mode_awlab")); }
    if (localStorage.getItem("payment_mode_awlab") != "off") { $("#payment_mode_awlab").val(localStorage.getItem("payment_mode_awlab")); }

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
        let checkout_mode_awlab = $("#checkout_mode_awlab").val();
        let payment_mode_awlab = $("#payment_mode_awlab").val();
        let profile_awlab = $("#ProfileAwlab").val();
        let profile_awlab_en = $("#ProfileAwlabEN").val();
        let profile_awlab_es = $("#ProfileAwlabES").val();

        if (profile_awlab_es != '') { localStorage.setItem("profile_awlab_es", profile_awlab_es); } else { localStorage.setItem("profile_awlab_es", "off"); }
        if (profile_awlab_en != '') { localStorage.setItem("profile_awlab_en", profile_awlab_en); } else { localStorage.setItem("profile_awlab_en", "off"); }
        if (profile_awlab != '') { localStorage.setItem("profile_awlab", profile_awlab); } else { localStorage.setItem("profile_awlab", "off"); }
        if (payment_mode_awlab != '') { localStorage.setItem("payment_mode_awlab", payment_mode_awlab); } else { localStorage.setItem("payment_mode_awlab", "off"); }
        if (checkout_mode_awlab != '') { localStorage.setItem("checkout_mode_awlab", checkout_mode_awlab); } else { localStorage.setItem("checkout_mode_awlab", "off"); }

        if (!(isBlank(e)) && !(isBlank(p))) { localStorage.setItem("email_pw_awlab", e + ":" + p); } else { localStorage.setItem("email_pw_awlab", "off"); }
    });
    //multicart
    if (localStorage.getItem("multicart_awlab") == "on") { $('#multicart_awlab').prop('checked', true); }
    $('#multicart_awlab').click(function() {
        if ($("#multicart_awlab").is(':checked')) { localStorage.setItem("multicart_awlab", "on"); } else { localStorage.setItem("multicart_awlab", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA HERE----------------------------------------------
    profiles = localStorage.getItem("array_profiles")
    profiles = profiles.split('&')
    if (profiles.length != 0 && profiles != "off") {
        $('#ProfileHere').removeAttr('disabled')
        for (let i = 0; i < profiles.length; i++) {
            $('#ProfileHere').append($('<option>', {
                value: profiles[i],
                text: profiles[i],
                id: profiles[i]
            }));
        }
    }
    if (localStorage.getItem("profile_here") != "off") { $("#ProfileHere").val(localStorage.getItem("profile_here")); }
    if (localStorage.getItem("checkout_mode_here") != "off") { $("#checkout_mode_here").val(localStorage.getItem("checkout_mode_here")); }
    if (localStorage.getItem("payment_mode_here") != "off") { $("#payment_mode_here").val(localStorage.getItem("payment_mode_here")); }

    if (localStorage.getItem("email_pw_here") != "off") {
        var email = localStorage.getItem("email_pw_here").split(':')[0]
        var pw = localStorage.getItem("email_pw_here").split(':')[1]
        $("#email_here").val(email);
        $("#pw_here").val(pw);
    }
    //gestisco il click del bottone salva
    $("#btn_save_here").click(function() {
        let e = $("#email_here").val();
        let p = $("#pw_here").val();
        let checkout_mode_here = $("#checkout_mode_here").val();
        let payment_mode_here = $("#payment_mode_here").val();
        let profile_here = $("#ProfileHere").val();

        if (profile_here != '') { localStorage.setItem("profile_here", profile_here); } else { localStorage.setItem("profile_here", "off"); }
        if (payment_mode_here != '') { localStorage.setItem("payment_mode_here", payment_mode_here); } else { localStorage.setItem("payment_mode_here", "off"); }
        if (checkout_mode_here != '') { localStorage.setItem("checkout_mode_here", checkout_mode_here); } else { localStorage.setItem("checkout_mode_here", "off"); }

        if (!(isBlank(e)) && !(isBlank(p))) { localStorage.setItem("email_pw_here", e + ":" + p); } else { localStorage.setItem("email_pw_here", "off"); }
    });
    //multicart
    if (localStorage.getItem("multicart_here") == "on") { $('#multicart_here').prop('checked', true); }
    $('#multicart_here').click(function() {
        if ($("#multicart_here").is(':checked')) { localStorage.setItem("multicart_here", "on"); } else { localStorage.setItem("multicart_here", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA NBB----------------------------------------------
    profiles = localStorage.getItem("array_profiles")
    profiles = profiles.split('&')
    if (profiles.length != 0 && profiles != "off") {
        $('#ProfileNbb').removeAttr('disabled')
        for (let i = 0; i < profiles.length; i++) {
            $('#ProfileNbb').append($('<option>', {
                value: profiles[i],
                text: profiles[i],
                id: profiles[i]
            }));
        }
    }
    if (localStorage.getItem("profile_nbb") != "off") { $("#ProfileNbb").val(localStorage.getItem("profile_nbb")); }
    if (localStorage.getItem("checkout_mode_nbb") != "off") { $("#checkout_mode_nbb").val(localStorage.getItem("checkout_mode_nbb")); }

    if (localStorage.getItem("email_pw_nbb") != "off") {
        var email = localStorage.getItem("email_pw_nbb").split(':')[0]
        var pw = localStorage.getItem("email_pw_nbb").split(':')[1]
        $("#email_nbb").val(email);
        $("#pw_nbb").val(pw);
    }
    //gestisco il click del bottone salva
    $("#btn_save_nbb").click(function() {
        let e = $("#email_nbb").val();
        let p = $("#pw_nbb").val();
        let checkout_mode_nbb = $("#checkout_mode_nbb").val();
        let profile_nbb = $("#ProfileNbb").val();

        if (profile_nbb != '') { localStorage.setItem("profile_nbb", profile_nbb); } else { localStorage.setItem("profile_nbb", "off"); }
        if (checkout_mode_nbb != '') { localStorage.setItem("checkout_mode_nbb", checkout_mode_nbb); } else { localStorage.setItem("checkout_mode_nbb", "off"); }
        if (!(isBlank(e)) && !(isBlank(p))) { localStorage.setItem("email_pw_nbb", e + ":" + p); } else { localStorage.setItem("email_pw_nbb", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA ABOUTYOU----------------------------------------------

    if (localStorage.getItem("payment_mode_aboutyou") != "off") { $("#payment_mode_aboutyou").val(localStorage.getItem("payment_mode_aboutyou")); }
    //gestisco il click del bottone salva
    $("#btn_save_aboutyou").click(function() {
        let payment_mode_aboutyou = $("#payment_mode_aboutyou").val();

        if (payment_mode_aboutyou != '') { localStorage.setItem("payment_mode_aboutyou", payment_mode_aboutyou); } else { localStorage.setItem("payment_mode_aboutyou", "off"); }
    });
    //---------------------------------------------------------------------

    //GESTIONE PAGINA LDLC----------------------------------------------
    profiles = localStorage.getItem("array_profiles")
    profiles = profiles.split('&')
    if (profiles.length != 0 && profiles != "off") {
        $('#ProfileLdlc').removeAttr('disabled')
        for (let i = 0; i < profiles.length; i++) {
            $('#ProfileLdlc').append($('<option>', {
                value: profiles[i],
                text: profiles[i],
                id: profiles[i]
            }));
        }
    }
    if (localStorage.getItem("profile_ldlc") != "off") { $("#ProfileLdlc").val(localStorage.getItem("profile_ldlc")); }
    if (localStorage.getItem("checkout_mode_ldlc") != "off") { $("#checkout_mode_ldlc").val(localStorage.getItem("checkout_mode_ldlc")); }
    if (localStorage.getItem("country_ldlc") != "off") { $("#country_ldlc").val(localStorage.getItem("country_ldlc")); }
    if (localStorage.getItem("email_pw_ldlc") != "off") {
        var email = localStorage.getItem("email_pw_ldlc").split(':')[0]
        var pw = localStorage.getItem("email_pw_ldlc").split(':')[1]
        $("#email_ldlc").val(email);
        $("#pw_ldlc").val(pw);
    }
    //gestisco il click del bottone salva
    $("#btn_save_ldlc").click(function() {
        let e = $("#email_ldlc").val();
        let p = $("#pw_ldlc").val();
        let checkout_mode_ldlc = $("#checkout_mode_ldlc").val();
        let profile_ldlc = $("#ProfileLdlc").val();
        let country_ldlc = $("#country_ldlc").val();
        if (country_ldlc != '') { localStorage.setItem("country_ldlc", country_ldlc); } else { localStorage.setItem("country_ldlc", "off"); }
        if (profile_ldlc != '') { localStorage.setItem("profile_ldlc", profile_ldlc); } else { localStorage.setItem("profile_ldlc", "off"); }
        if (checkout_mode_ldlc != '') { localStorage.setItem("checkout_mode_ldlc", checkout_mode_ldlc); } else { localStorage.setItem("checkout_mode_ldlc", "off"); }
        if (!(isBlank(e)) && !(isBlank(p))) { localStorage.setItem("email_pw_ldlc", e + ":" + p); } else { localStorage.setItem("email_pw_ldlc", "off"); }
    });
    //---------------------------------------------------------------------


    //GESTIONE PAGINA SHOPIFY----------------------------------------------
    profiles = localStorage.getItem("array_profiles")
    profiles = profiles.split('&')
    if (profiles.length != 0 && profiles != "off") {
        $('#ProfileShopify').removeAttr('disabled')
        for (let i = 0; i < profiles.length; i++) {
            $('#ProfileShopify').append($('<option>', {
                value: profiles[i],
                text: profiles[i],
                id: profiles[i]
            }));
        }
    }
    if (localStorage.getItem("profile_shopify") != "off") { $("#ProfileShopify").val(localStorage.getItem("profile_shopify")); }

    //gestisco il click del bottone salva
    $("#btn_save_shopify").click(function() {
        let profile_shopify = $("#ProfileShopify").val();
        if (profile_shopify != '') { localStorage.setItem("profile_shopify", profile_shopify); } else { localStorage.setItem("profile_shopify", "off"); }
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

function saveLocalStorageToJsonProfile() {

    profiles = localStorage.getItem("array_profiles")
    profiles = profiles.split('&')
    if (profiles.length != 0 && profiles != "off") {
        for (let i = 0; i < profiles.length; i++) {
            array_export_profile.push(profiles[i])
        }
    }

    const storageData = JSON.parse(JSON.stringify(localStorage))
    const filteredVariables = {}
    for (key in storageData) {
        if (shouldSaveKeyProfile(key)) {
            filteredVariables[key] = storageData[key]
        }
    }
    const localStorageJSON = JSON.stringify(filteredVariables)
    download(localStorageJSON, 'info.json', 'application/json');
}

function shouldSaveKeyProfile(key) {
    return array_export_profile.includes(key)
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