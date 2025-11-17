/*
                                          95Windows
      A web-based Windows 95 product key generator.
GitHub Repo: https://github.com/jstmaxlol/95Windows
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

    productKeyElement.textContent = "Retail Product Key: " + productKey;
    secondProductKeyElement.textContent = "OEM Product Key: " + secondProductKey;
}

document.getElementById('generateBtn').addEventListener('click', handleGenerateButtonClick);

function darkMode() {
    var element = document.body;
    var darkModeButton = document.getElementById('darkMode');
    var darkButton = document.getElementById('darkButton');
    var badge = document.querySelector('.badge');

    element.classList.toggle("dbody");
    element.classList.toggle("body");

    if (darkModeButton) {
        darkModeButton.classList.toggle("drktgl");
        darkModeButton.classList.toggle("dtgl");
    }

    if (darkButton) {
        darkButton.classList.toggle("dbutton");
    }

    if (badge) {
        badge.classList.toggle("dbadge");
    }

    var isDarkMode = document.body.classList.contains("dbody");
    document.cookie = "darkModeSet=" + (isDarkMode ? "true" : "false") + ";path=/; max-age=61536000";
}


function acceptCookies() {
    var cookieBanner = document.getElementById("cookieBanner");
    // remove cookie banner once accepted
    cookieBanner.parentNode.removeChild(cookieBanner);
    // set lifetime to.. yeah
    document.cookie = "cookiesAccepted=true; path=/; max-age=61536000";
}

window.onload = function() {
    var cookiesAccepted = getCookie("cookiesAccepted");
    var cookieBanner = document.getElementById("cookieBanner");

    if (!cookiesAccepted) {
        cookieBanner.style.display = "block";
    } else {
        // hide banner if cookie present
        if (cookieBanner) cookieBanner.style.display = "none";
    }

    var darkModeSet = getCookie("darkModeSet");
    if (darkModeSet === "true") {
        darkMode();
    }
}
function getCookie(name) {
    var cookieArr = document.cookie.split(";");
    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");

        if (name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

