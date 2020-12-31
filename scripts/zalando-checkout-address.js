debugger

var zalandoUrl = location.href.split('/')[2]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function address() {
    
    await sleep(250)
    var button = document.getElementsByClassName('z-coast-fjord_deliveryDestinationTabIcon')
    if (button.length != 0) {
        button[1].click()
    }

    await sleep(250)
    var button = document.getElementsByClassName('z-1-button z-coast-base-primary-accessible undefined z-1-button--primary z-1-button--button')
    if (button.length != 0) {
        button[0].click()
    }

    document.location = 'https://'+zalandoUrl+'/checkout/confirm'
}

chrome.runtime.sendMessage({ greeting: "authLog" }, function (response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "zalando" }, function (response) {
            if (response.farewell == 'on') {
                address()
            }
        });
    }
});
