/*
95Windows - JavaScript Scripts
A web-based Windows 95 product key generator.
GitHub Repo: https://github.com/jstmaxlol/95Windows/
*/

function generateProductKey() {
  function GF3() {
    while (true) {
        let num = Math.floor(Math.random() * 999) + 1;
        if (![333, 444, 555, 666, 777, 888, 999].includes(num)) {
            return num;
        }
    }
  }

  let F3 = GF3();
  let U4 = "-";
  
  function GL7() {
    while (true) {
        let number = Array.from({ length: 7 }, () => Math.floor(Math.random() * 9));
        if (number.reduce((a, b) => a + b, 0) % 7 === 0) {
            return parseInt(number.join(''));
        }
    }
  }

  let L7 = GL7();
  let F3_str = F3.toString().padStart(3, '0');
  let FPK = F3_str + U4 + L7;
  
  return FPK;
}

function generateSecondProductKey() {
    function GF3X() {
        var ddd = Math.floor(Math.random() * (366 - 100 + 1)) + 100;
        return ddd;
    }
    var F3X = GF3X();

    function GY2X() {
        var yy = Math.floor(Math.random() * (99 - 95 + 1)) + 95;
        return yy;
    }
    var Y2X = GY2X();

    var SEPO = "-OEM-";
    var IX = '00';
    var SEPT = "-";

    function GSSX() {
        while (true) {
            var sevx = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
            var sevsum = Array.from(String(sevx), Number).reduce((a, b) => a + b, 0);
            if (sevsum % 7 === 0) {
                return sevx;
            }
        }
    }
    var SSX = GSSX();

    function GLFX() {
        var lsfv = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
        return lsfv;
    }
    var LFX = GLFX();

    var FPKX = F3X.toString() + Y2X.toString() + SEPO + IX + SSX.toString() + SEPT + LFX.toString();
    return FPKX;
}

function handleGenerateButtonClick() {
  let productKey = generateProductKey();
  let secondProductKey = generateSecondProductKey();

  let productKeyElement = document.getElementById('productKey');
  let secondProductKeyElement = document.getElementById('secondProductKey');

  productKeyElement.textContent = "Generated type 'A' Product Key: " + productKey;
  secondProductKeyElement.textContent = "Generated type 'B/C' Product Key: " + secondProductKey;
}

document.getElementById('generateBtn').addEventListener('click', handleGenerateButtonClick);

function darkMode() {
  var element = document.body;
  var darkModeButton = document.getElementById('darkMode');
  var darkButton = document.getElementById('darkButton');
  var badge = document.querySelector('.badge');
  element.classList.toggle("dbody");
  element.classList.toggle("body");
  darkModeButton.classList.toggle("drktgl");
  darkModeButton.classList.toggle("dtgl");
  darkButton.classList.toggle("dbutton");
  badge.classList.toggle("dbadge");
  var isDarkMode = element.classList.contains("dbody");
  document.cookie = "darkMode=" + (isDarkMode ? "true" : "false") + ";path=/";
}

function acceptCookies() {
  var cookieBanner = document.getElementById("cookieBanner");
  cookieBanner.parentNode.removeChild(cookieBanner);

  document.cookie = "cookiesAccepted=true;path=/";
}

window.onload = function() {
  var cookiesAccepted = getCookie("cookiesAccepted");
  if (!cookiesAccepted) {
    // Show cookie banner if cookies are not accepted
    var cookieBanner = document.getElementById("cookieBanner");
    cookieBanner.style.display = "block";
  }
}

function getCookie(name) {
  var cookieArr = document.cookie.split(";");
  for(var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    if(name == cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}
