function pageLoaded() {
    const btnSend = document.querySelector('.j-btn-open');
    const btnGeoLocation = document.querySelector('.j-btn-geo-location');
    const infoOutput = document.querySelector('.info-output');
    const chatContainer = document.querySelector('.chat-container');
    const wsUri = "wss://echo.websocket.org/";

    webSocket = new WebSocket(wsUri);

    webSocket.onopen = () => {
        infoOutput.innerHTML = 'connected';
    }

    webSocket.onerror = () => {
        infoOutput.innerHTML = 'connected error'
    }

    webSocket.onmessage = function(event) {
        writeToScreen(event.data, false);
    }

    function locationSuccsess(position) {
        const latitube = position.coords.latitube;
        const longitube = position.coords.longitube;
        let flag = true;
        href = `https://www.openstreetmap.org/#map=18/${latitube}/${longitube}`;
        writeGeolocation(href, flag);
    }

    function locationError() {
        let flag = false;
        writeGeolocation('error geolocation');
    }

    function writeToScreen(message, flag) {
        let chatOutput = `<div class="${flag ? 'clientMessage' : 'serverMessage'}">${message}</div>`;
        chatContainer.innerHTML += chatOutput;
        
    }

    function writeGeolocation(message, flag) {
        if(flag) {
            console.log(message);
            let chatGeolocation = `<div class="geolocation"><a class"link" href ="${message} target="_blank">${message}</a></div>`;
            chatContainer.innerHTML +=chatGeolocation;
        } else {
            console.log(message);
            let chatGeolocation = `<div class="geoLocation">${message}</div`;
            chatContainer.innerHTML += chatGeolocation;
        }
    }

    btnSend.addEventListener('click', () => {
        const inputValue = document.querySelector('.input').value;
        if (inputValue == '') return;
        console.log('1-' + inputValue);
        webSocket.send(inputValue);
        let flag = true;
        document.querySelector('.input').value = '';
        writeToScreen(inputValue, flag);
            })
    
            btnGeoLocation.addEventListener('click', () =>{
                if("geolocation" in navigator) {
                    navigator.geolocation.getCurrentPosition(locationSuccsess, locationError);
                } else {
                    writeGeolocation('I cant take information about your geolocation')
                }
            })
}

document.addEventListener("DOMContentLoaded", pageLoaded);