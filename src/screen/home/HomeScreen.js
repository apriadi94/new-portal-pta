import React, { useContext } from 'react'
import { View } from 'react-native'
import { AuthContext } from '../../provider/AuthProvider'
import HeaderComponent from './HeaderComponent'
import ChatButtonComponent from './ChatButtonComponent'
import BeritaWebComponent from './BeritaWebComponent'


const HomeScreen = ({navigation}) => {
    const { countChat } = useContext(AuthContext)

    return(
        <View style={{flex : 1, backgroundColor: '#F3F6FF'}}>
                <React.Fragment>
                    <HeaderComponent navigation={navigation}/>
                    <BeritaWebComponent navigation={navigation} />
                    {
                        countChat > 0 ? 
                        <ChatButtonComponent navigation={navigation} countChat={countChat}/> 
                        : null
                    }
                </React.Fragment>
        </View>
    )
}

export default HomeScreen