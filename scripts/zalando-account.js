debugger

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function _main() {
    try {
        await sleep(10000)
        window.close()
    } catch (error) {}
}

chrome.runtime.sendMessage({ greeting: "authLog" }, function(response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "zalando" }, function(response) {
            if (response.farewell == 'on') {
                _main()
            }
        });
    }

});