const electron = require('electron');
const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      backgroundThrottling: false
    },
    height: 500,
    width: 800
  });

  mainWindow.loadURL(`file://${__dirname}/dist/index.html`);

  // TEST MESSAGES SENT AND RECEIVED
  // ___________________________________
  // received message from electron
  ipcMain.on('msg-to-electron', (e, test) => {
    console.log(test)
  });

  // message sent to Browser
  mainWindow.webContents.send('msg-to-browser', 'this is a message to the browser')

});