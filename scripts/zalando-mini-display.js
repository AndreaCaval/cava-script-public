debugger

var link = ''; var dropmode = ''; var timer = 'off'; var size = []
var zalandoUrl = location.href.split('/')[2]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    n = Math.floor(Math.random() * (max - min + 1)) + min;
    return n//Il max è incluso e il min è incluso 
}

async function main() {
    try {
        await sleep(100)
        searchSize()
        await sleep(100)
        buttonAtc()
        await sleep(100)
        setDelay()
    } catch (error) { console.log(error) }
}

async function searchSize() {
    if (zalandoUrl.split('.')[1] == 'zalando') {
        console.log('search size')
        try {
            var s = document.getElementById('z-vegas-pdp-props').textContent
            s = s.slice(8, -2)
            var obj = JSON.parse(s)
            var sizes = obj[0].model.articleInfo.units
            for (var i = 0; i < sizes.length; i++) {
                size.push(sizes[i].id)
                //console.log(size[i])
            }
        } catch (error) { console.log(error) }
    }
}

async function buttonAtc() {
    try {
        var btn1 = document.getElementsByClassName("z-navicat-header_navContent")[0].parentNode
        btn1.insertAdjacentHTML("beforebegin", '<div id="CavaScripts" style="font-family: Verdana, Geneva, sans-serif; position: fixed; right:0; top: 40px; z-index: 1000; min-width: 300px; background-color: rgb(105, 105, 105); padding: 5px 10px; color: white; border-radius: 10px;">'
            + '<p>Cava Scripts Info</p> <p id="rCount">Request count: 0</p>'
            + '<input style="text-align: center; background-color:black; width:120px; float:left; margin:5px;" id="btnZatc_normal" type="submit" value="ATC NORMAL">'
            + '<input style="text-align: center; background-color:black; width:120px; float:right; margin:5px;" id="btnZatc_fast" type="submit" value="ATC FAST"> </div>');

        var btn_atc_clear = document.getElementById('btnZatc_normal')
        btn_atc_clear.addEventListener("click", function () {
            try {
                atc_normal()
            } catch (error) {
                console.log(error)
            }
        });

        var btn_atc_fast = document.getElementById('btnZatc_fast')
        btn_atc_fast.addEventListener("click", function () {
            try {
                atc_fast()
            } catch (error) {
                console.log(error)
            }
        });
    }
    catch (error) {
        console.log(error)
    }
}

async function atc_normal() {

    try { var frsx = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5) }
    catch (error) { console.log(error) }

    try { atc() }
    catch (error) { console.log(error) }
}

async function atc_fast() {

    try { var frsx = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5) }
    catch (error) { console.log(error) }

    try { atc() }
    catch (error) { console.log(error) }

    document.location = "https://" + zalandoUrl + "/checkout/confirm"
}

async function atc_timer() {
    console.log("atcdrop")
    if (dropmode == 'on') {
        h = timer.split(':')[0]
        m = timer.split(':')[1]
        for (var q = 0; q < 10; i++) {//q++  cosi fa ciclo infinito   ottimo
            await sleep(250)
            var data = new Date()
            var hours = data.getHours()
            var min = data.getMinutes()
            console.log('waiting...')
            if (hours == h && min < m) break
        }
        searchSize()
    }
    atc()

}

async function atc() {
    try { var frsx = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5) }
    catch (error) { console.log(error) }

    for (var i = 0; i < size.length; i++) {
        id_prodotto = size[i]
        fetch("https://" + zalandoUrl + "/api/graphql/", {
            "headers": {
                "accept": "*/*",
                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/json",
                "dpr": "1",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36',
                "x-xsrf-token": frsx,
                "x-zalando-intent-context": "navigationTargetGroup=WOMEN"
            },
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": "[{\"id\":\"e7f9dfd05f6b992d05ec8d79803ce6a6bcfb0a10972d4d9731c6b94f6ec75033\",\"variables\":{\"addToCartInput\":{\"productId\":\"" + id_prodotto + "\",\"clientMutationId\":\"addToCartMutation\"}}}]",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
            .then(response => {
                if (response.status) {
                    console.log('atc success')
                    setCount(i + 1)
                }
            })
            .catch((error) => {
                console.log(error)
            });
        ;

    }
}

async function setCount(i) {
    try { document.getElementById('rCount').innerHTML = "Request count: " + i }
    catch (error) { console.log(error) }
}

chrome.runtime.sendMessage({ greeting: "linkzalando" }, function (response) {
    link = response.farewell;
});

chrome.runtime.sendMessage({ greeting: "timerzalando" }, function (response) {
    timer = response.farewell;
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function (response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "zalando" }, function (response) {
            if (response.farewell == 'on') {
                if (timer != "off") {
                    atc_timer()
                }
            }
        });
        main()
    }
});

