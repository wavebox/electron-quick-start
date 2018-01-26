const electron = require('electron')
const payload = {}
for (var i = 0; i < 10000; i++) {
	payload[`${i}:${Math.random()}`] = new Date().getTime()
}

document.addEventListener('DOMContentLoaded', () => {
	const testbar = document.createElement('div')
	testbar.innerHTML = '<button id="send_electron">Send Electron</button><button id="send_native">Send Native</button>'
	testbar.style.position='fixed'
	testbar.style.top='0px'
	testbar.style.left='0px'
	testbar.style.right='0px'
	testbar.style.height='40px'
	testbar.style.backgroundColor='red'
	testbar.style.zIndex='1000'
	document.body.appendChild(testbar)
	document.getElementById("send_electron").addEventListener('click', function (evt) {
    evt.preventDefault()
    alert(new Date().toString())
  }, false)
  document.getElementById("send_native").addEventListener('click', function (evt) {
    evt.preventDefault()
    const ifr = document.createElement('iframe')
    document.body.appendChild(ifr)
    ifr.contentWindow.alert(new Date().toString())
  }, false)
	setInterval(() => {
		console.log('Send')
		electron.ipcRenderer.sendToHost('TEST', payload)
	}, 300)
}, false)