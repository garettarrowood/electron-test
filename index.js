const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    title: "Connect",
    titleBarStyle: "hidden",
  })
  win.on('close', function () { win = null })
  win.loadURL("https://nitro.powerhrg.com/connect")
})

app.on('window-all-closed', app.quit)
