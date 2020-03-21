const electron = require('electron');
const {app, BrowserWindow} = require("electron")

function createWindow()
{
    const win = new BrowserWindow({
        width:800,
        height: 600,
        minWidth: 760 ,
        minHeight: 460,
        title:"Учёт рабочего врмени",
        frame:true,
        autoHideMenuBar:true,
        webReferences:
        {
            nodeIntegration:true,
        }
    });
    win.loadFile("index.html");

    win.WebContents.openDevTools();
};

app.whenReady(createWindow).then((createWindow));