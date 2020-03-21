const electron = require('electron');
const {app, BrowserWindow} = require("electron")

function createWindow()
{
    const win = new BrowserWindow({
        width:800,
        height: 800,
        webReferences:
        {
            nodeIntegration:true,
        }
    });
    win.loadFile("index.html");

    win.WebContents.openDevTools();
};

app.whenReady(createWindow).then((createWindow));