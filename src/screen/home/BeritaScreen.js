import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../../provider/AuthProvider'
import { WebView } from 'react-native-webview';
import { View, Text } from 'react-native'

const BeritaScreen = ({ route, navigation }) => {
    const { id, title } = route.params 
    const { baseUrl2 } = useContext(AuthContext)
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    const getBerita = async () => {
        await axios({
            method: 'get',
            url: `${baseUrl2}/api/artikel/berita/${id}`,
            headers: {
                Accept : 'aplication/json'
            }
        }).then(res => {
            setData(res.data.data)
        }).catch(err => {
            console.log(err)
        })
        setLoading(false)
    }

    useEffect(() => {
        getBerita()
        navigation.setOptions({
            title
        })
    }, [])

    return(
        loading ? <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text>Loading...</Text></View> :
        <WebView
            source={{ html: `
                <html>
                    <head><style> img { display: block; max-width: 100%; height: auto; } </style><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>  
                    <body>
                        <h4>${data.title}</h4>
                        <p style='margin-top : -10; margin-bottom : -10; color : grey'>Oleh ${data.username}</p>
                        ${data.introtext}
                    </body>
                </html>
                `}}
        />
    )
}

export default BeritaScreen