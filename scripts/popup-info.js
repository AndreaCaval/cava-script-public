debugger

const version = 'Cava-Scripts 1.1.0'

$(function() {
    chrome.runtime.sendMessage({ greeting: "userData" }, function(response) {
        const userData = response.farewell
        document.getElementById("imgAvatar").src = "https://cdn.discordapp.com/avatars/" + userData.discordId + "/" + userData.avatar + ".png";
        document.getElementById("discordTag").innerHTML = userData.discordTag;
        document.getElementById("discordEmail").innerHTML = userData.discordEmail;
        document.getElementById("version").innerHTML = version;
    });
});