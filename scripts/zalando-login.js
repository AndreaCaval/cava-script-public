debugger

var email = ''; var pw = ''
var zalandoUrl = location.href.split('/')[2]

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function loginR() {

  var link = document.location.href
  var xsrf = document.cookie.split('; ').find(row => row.startsWith('frsx')).substring(5)

  await fetch("https://" + zalandoUrl + "/api/reef/login", {
    "headers": {
      "accept": "application/json",
      "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
      "content-type": "application/json",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-xsrf-token": xsrf,
      "x-zalando-redirect-target": "http://" + zalandoUrl + "/myaccount/",
      "x-zalando-render-page-uri": "/login?target=/myaccount/",
      "x-zalando-request-uri": "/login?target=/myaccount/"
    },
    "referrer": link,
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": "{\"username\":\"" + email + "\",\"password\":\"" + pw + "\",\"wnaMode\":\"shop\"}",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  })
    .then(response => { checkResLogin(response) })
    .catch((error) => { console.log(error) });
  ;
}

async function checkResLogin(response) {
  await sleep(10000)
  try { window.close() }
  catch (error) { }
}

chrome.runtime.sendMessage({ greeting: "email_pw_zalando" }, function (response) {
  var x = response.farewell
  email = x.split(':')[0]
  pw = x.split(':')[1]
});

chrome.runtime.sendMessage({ greeting: "authLog" }, function (response) {
  if (response.farewell == 'on') {
    chrome.runtime.sendMessage({ greeting: "zalando" }, function (response) {
      if (response.farewell == 'on') {
        loginR()
      }
    });
  }
});
