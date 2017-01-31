const {app, Menu, BrowserWindow} = require('electron')

const menuTemplate = [
  {
    label: "Application",
    submenu: [
      { role: "about" },
      { type: "separator" },
      { role: "quit" }
    ]
  },
  {
    label: "Edit",
    submenu: [
      { role: "undo" },
      { role: "redo" },
      { type: "separator" },
      { role: "cut" },
      { role: "copy" },
      { role: "paste" },
      { role: "selectall" }
    ]
  },
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'toggledevtools' },
      { type: 'separator' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  }
]

const menu = Menu.buildFromTemplate(menuTemplate)

app.on('ready', () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    title: "Connect",
    titleBarStyle: "hidden-inset",
  })
  win.on('close', function () { win = null })
  Menu.setApplicationMenu(menu)
  win.loadURL("https://nitro.powerhrg.com/connect")
})

app.on('window-all-closed', app.quit)
