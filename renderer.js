// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const electron = require('electron')

setInterval(() => {
	const metrics = electron.remote.app.getAppMetrics()
	const metric = metrics.find((m) => m.pid === process.pid)
	const mem = Math.round(metric.memory.workingSetSize / 1024)
	document.getElementById("mem").textContent = mem+'MB'
}, 500)
