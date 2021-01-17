debugger

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    try {
        await sleep(5000)
        let len_1 = 0
        let len_2 = 0

        len_1 = document.getElementsByClassName('anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB embedTitleLink-1Zla9e embedLink-1G1K1D embedTitle-3OXDkz').length
        console.log(len_1)
        while (true) {
            await sleep(500)
            len_2 = document.getElementsByClassName('anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB embedTitleLink-1Zla9e embedLink-1G1K1D embedTitle-3OXDkz').length
            console.log(len_2)
            if (len_1 != len_2) {
                let x = document.getElementsByClassName('anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB embedTitleLink-1Zla9e embedLink-1G1K1D embedTitle-3OXDkz')[len_2 - 1].getAttribute('href')
                open(x, "_blank")
                len_1 = document.getElementsByClassName('anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB embedTitleLink-1Zla9e embedLink-1G1K1D embedTitle-3OXDkz').length
            }
        }
    } catch (error) { }
}

chrome.runtime.sendMessage({ greeting: "authLog" }, function (response) {
    if (response.farewell == 'on') {
        chrome.runtime.sendMessage({ greeting: "discord_autoclick" }, function (response) {
            if (response.farewell == 'on') {
                main()
            }
        });
    }
});