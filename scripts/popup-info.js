debugger

const version = 'Cava-Scripts 1.0.6'
let discord_email = localStorage.getItem("discord_email")
let discord_id = localStorage.getItem("discord_id")
let discord_tag = localStorage.getItem("discord_tag")
let avatar_id = localStorage.getItem("avatar")
let img_avatar = "https://cdn.discordapp.com/avatars/" + discord_id + "/" + avatar_id + ".png"


$(function() {
    document.getElementById("imgAvatar").src = img_avatar;
    document.getElementById("discordTag").innerHTML = discord_tag;
    document.getElementById("discordEmail").innerHTML = discord_email;
    document.getElementById("version").innerHTML = version;
});