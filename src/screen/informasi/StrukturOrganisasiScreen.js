import React from 'react'
import { WebView } from 'react-native-webview';

const StrukturOrganisasiScreen = () => {

    return(
        <WebView
        scalesPageToFit={true}
          bounces={false}
          javaScriptEnabled
            source={{ html: `
                <html>
                    <head><style> img { display: block; max-width: 100%; height: auto; } </style><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>  
                    <body>
                        <h4>Struktur Organisasi</h4>
                        <p style='margin-top : -10; margin-bottom : -10; color : grey'>Oleh Admin</p>
                        <iframe style="margin-top: 50px" src="https://drive.google.com/file/d/1vVJ9FndBxnkgNlbecmWScD1yLGyrhnUp/preview" width="100%" height="300"></iframe> 
                    </body>
                </html>
                `}}
        />
    )
}

export default StrukturOrganisasiScreen