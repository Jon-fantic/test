import {ipcMain, BrowserWindow, shell, webContents} from 'electron'

const window = BrowserWindow.fromWebContents(webContents.getFocusedWebContents());
ipcMain.on('qqLogin', (event, data) => {
    const loginWindow = new BrowserWindow({
        width: 750,
        parent: window,
        height: 450,
        modal: true,
        darkTheme: true,
        resizable: false,
        minimizable: false,
        maximizable: false,
        show:false,
        webPreferences: {
            devTools: false,
        }
    });

    loginWindow.setMenu(null);

    loginWindow.loadURL(data.url);

    loginWindow.webContents.on('new-window', (event, url) => {
        event.preventDefault();
        shell.openExternal(url);
    });
    const content = loginWindow.webContents;

    content.on('will-navigate', (e, status) => {
        content.on('did-get-response-details', (e, status, url, originalURL, httpResponseCode, requestMethod, referrer, header) => {
            if (httpResponseCode === 200) {
                event.sender.send('reply', header);
                loginWindow.close();
            }
        })
    });
});