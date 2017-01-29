const electron = require('electron')
const {app, BrowserWindow} = electron
let path = require('path')

app.on('ready', () => {
  let win = new BrowserWindow({width: 800, height: 600, icon: path.join(__dirname, 'img/logo.icns')})
  win.loadURL(`file://${__dirname}/index.html`)
  // win.webContents.openDevTools()
})

exports.openWindow = () => {
  let win = new BrowserWindow({width: 400, height: 200})
  win.loadURL(`file://${__dirname}/cow.html`)
}
