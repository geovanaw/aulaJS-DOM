const turnOn = document.getElementById( 'turnOn' );
const turnOff = document.getElementById( 'turnOff' );
const lamp = document.getElementById( 'lamp' );

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1 /*Se o indexOf não achar o que estmaos procurando, ele retorna -1 */
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src="./img/ligada.jpg";
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src="./img/desligada.jpg";
    }
}

function lampBroken() {
    return lamp.src="./img/quebrada.jpg";
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('dblclick', lampBroken);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff)
