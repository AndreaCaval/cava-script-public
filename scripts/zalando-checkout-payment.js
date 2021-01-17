debugger

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function payment() {
    
    var button = document.getElementsByClassName('payz-footer__submit payz-btn payz-btn--primary')
    if (button.length != 0) {
        button[0].click()
    }
}

chrome.runtime.sendMessage({ greeting: "authLog" }, function (response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "zalando" }, function (response) {
            if (response.farewell == 'on') {
                payment()
            }
        });
    }
});