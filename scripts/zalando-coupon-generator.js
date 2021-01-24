debugger

var xsrf = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5)
var link = document.location.href
var country = link.split('/')[2]
var alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    n = Math.floor(Math.random() * (max - min + 1)) + min;
    return n
}

async function miniDisplay() {
    try {
        var btn1 = document.getElementsByClassName("z-navicat-header_navContent")[0].parentNode
        btn1.insertAdjacentHTML("beforebegin", '<div id="CavaScripts" style="font-family:Verdana,Geneva,sans-serif; position:fixed; right:0; top: 300px; z-index: 1000; min-width: 300px; background-color: rgb(105, 105, 105); padding:10px; color: white; border-radius: 10px;">'
            + '<p style="text-align:center">Cava Scripts </p><p id="nCount">Coupon count: 0</p>'
            + '<label>Catchall: </label><input style="color:black; float:right" type="text" id="catchall" placeholder="es: cavascripts.com"><br style="clear:both">'
            + '<label>N Coupon: </label><input style="color:black; float:right" id="nCoupon" type="number" value="0"> <br style="clear:both"><br>'
            + '<input style="text-align: center; background-color:black; width:100%; padding:5px;" id="btnSend" type="submit" value="GENERATE COUPON"></div>');

        var btn_atc_clear = document.getElementById('btnSend')
        btn_atc_clear.addEventListener("click", function () {
            try { genCoupon() }
            catch (error) { }
        });
    }
    catch (error) { }
}

async function genCoupon() {
    var nc = document.getElementById("nCoupon").value
    var catchall = document.getElementById("catchall").value

    if (catchall != "") {
        var data = new Date()
        var day = data.getDate()
        var month = data.getMonth() + 1
        var mail = ""

        for (var i = 0; i < nc; i++) {
            await sleep(100)
            nrandom = getRandomIntInclusive(1000, 9999)
            na1 = getRandomIntInclusive(0, alfabeto.length - 1)
            na2 = getRandomIntInclusive(0, alfabeto.length - 1)
            na3 = getRandomIntInclusive(0, alfabeto.length - 1)
            na4 = getRandomIntInclusive(0, alfabeto.length - 1)
            na5 = getRandomIntInclusive(0, alfabeto.length - 1)
            na6 = getRandomIntInclusive(0, alfabeto.length - 1)
            mail = alfabeto[na1] + "" + alfabeto[na2] + "" + alfabeto[na3] + "" + alfabeto[na4] + "" + alfabeto[na5] + "" + alfabeto[na6] + "" + nrandom + "" + day + "" + month + "@" + catchall
            await newsletterR(mail, i)
        }

        await sleep(1000)
        document.getElementById("nCount").innerHTML = "Coupon count: 0"

    }
    else {
        document.getElementById("nCount").innerHTML = "Error Catchall"
    }
}

async function newsletterR(mail, i) {
    await fetch("https://" + country + "/api/newsletter-banner-fragment/subscribe-customer", {
        "headers": {
            "accept": "*/*",
            "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/json",
            "dpr": "1",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "viewport-width": "1247",
            "x-xsrf-token": xsrf,
            "x-zalando-toggle-label": "THE_LABEL_IS_ENABLED"
        },
        "referrer": link,
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"email\":\"" + mail + "\",\"gender\":\"MALE\",\"preferences\":[{\"key\":\"survey\",\"enabled\":true,\"translation\":{\"locale\":\"it-IT\",\"name\":\"Sondaggi\",\"description\":\"In base ai tuoi acquisti precedenti e alla tue interazioni con i servizi e prodotti Zalando, potremmo chiederti di darci un'opinione cosí da poter apportare numerosi miglioramenti.\"}},{\"key\":\"recommendations\",\"enabled\":true,\"translation\":{\"locale\":\"it-IT\",\"name\":\"Suggerimenti\",\"description\":\"Scopri brand e prodotti che potrebbero interessarti, selezionati in base ai brand che segui e ai tuoi acquisti precedenti. Riceverai questo tipo di avviso al massimo 2 volte a settimana.\"}},{\"key\":\"follow_brand\",\"enabled\":true,\"translation\":{\"locale\":\"it-IT\",\"name\":\"Brand che segui\",\"description\":\"Ricevi un avviso quando un brand che segui lancia una nuova collezione.\"}},{\"key\":\"fashion_fix\",\"enabled\":true,\"translation\":{\"locale\":\"it-IT\",\"name\":\"Novità e tendenze\",\"description\":\"Ricevi info fino a 3 volte a settimana su ultime tendenze, collezioni esclusive e must have di stagione, solo se rilevanti.\"}},{\"key\":\"offers_sales\",\"enabled\":true,\"translation\":{\"locale\":\"it-IT\",\"name\":\"Offerte e promozioni\",\"description\":\"Aggiornamenti su offerte e sconti e codici sconto direttamente nella tua casella di posta elettronica. Riceverai questo tipo di avviso al massimo 3 volte a settimana.\"}},{\"key\":\"item_alerts\",\"enabled\":true,\"translation\":{\"locale\":\"it-IT\",\"name\":\"Notifiche sugli articoli\",\"description\":\"Ricevi un avviso ogni volta che un prodotto della tua wish list o nel tuo carrello viene scontato. Ti manderemo al massimo un reminder al giorno riguardo prodotti dimenticati nel carrello.\"}},{\"key\":\"subscription_confirmations\",\"enabled\":true,\"translation\":{\"locale\":\"it-IT\",\"name\":\"Notifiche sulla disponibilità di taglie\",\"description\":\"Ricevi un'email di notifica quando la tua taglia diventa di nuovo disponibile.\"}}]}",
        "method": "PUT",
        "mode": "cors",
        "credentials": "include"
    })
        .then(response => {
            if (response.status == 200 || response.status == 201) {
                document.getElementById("nCount").innerHTML = "Coupon count: " + (i + 1)
            }
        })
        .catch((error) => {            console.log(error)        });
    ;
}

chrome.runtime.sendMessage({ greeting: "authLog" }, function (response) {
    if (response.farewell == 'on') {
      chrome.runtime.sendMessage({ greeting: "zalando" }, function (response) {
        if (response.farewell == 'on') {
          miniDisplay()
        }
      });
    }
  });

