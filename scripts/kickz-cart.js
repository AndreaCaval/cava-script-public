debugger

chrome.runtime.sendMessage({ greeting: "authLog" }, function (response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "kickz" }, function (response) {
            if (response.farewell == 'on') {
                document.getElementsByClassName("checkout_btn_link checkout_btn_table")[0].click()
            }
        });
    }
});
