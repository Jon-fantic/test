import {BrowserWindow, webContents, app, ipcMain} from 'electron'

// const window = BrowserWindow.fromWebContents(webContents.getFocusedWebContents());
LoginWindow();

ipcMain.on('quitApp', () => {
    app.quit();
});

function LoginWindow() {
    const loginURL = process.env.NODE_ENV === 'development' ? `http://localhost:9080/#/login` : `file://${__dirname}/index.html/#/login`;
    const loginWindow = new BrowserWindow({
        width: 430,
        height: 328,
        alwaysOnTop: true,
        modal: true,
        frame: false,
        darkTheme: true,
        resizable: false,
        minimizable: false,
        maximizable: false,
        transparent: true,
        webPreferences: {
            devTools: false,
        }
    });


    loginWindow.setMenu(null);
    loginWindow.loadURL(loginURL);
}