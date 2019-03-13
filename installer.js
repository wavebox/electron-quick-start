const packager = require('electron-packager')
const winstaller = require('electron-winstaller')

Promise.resolve()
	.then(() => packager({
		dir: '.',
		overwrite: true,
		ignore: [ 'electron-quick-start-win32-x64', 'electron-quick-start-installer' ]
	}))
	.then(() => winstaller.createWindowsInstaller({
		appDirectory: 'electron-quick-start-win32-x64',
    	outputDirectory: 'electron-quick-start-installer',
    	authors: 'My App Inc.',
    	exe: 'electron-quick-start.exe',
    	version: '1.0.0',
    	noMsi: true
	}))
	.then(() => {
		console.log('DONE')
	})
	.catch((ex) => {
		console.log('ERROR', ex)
	})