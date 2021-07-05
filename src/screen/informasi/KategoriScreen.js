import React, { useContext, useEffect } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { AuthContext } from '../../provider/AuthProvider'
import ChatButtonComponent from '../home/ChatButtonComponent';
import ListBerita from './ListBerita';
import Icon from 'react-native-vector-icons/FontAwesome';

const KategoriScreen = ({navigation, route}) => {
    const { countChat } = useContext(AuthContext)
    const { parentId, title } = route.params

    useEffect(() => {
        navigation.setOptions({
            title
        })
    }, [])
    return(
        <View style={{flex : 1}}>
            <ListBerita navigation={navigation} parentId={parentId}/>
            {
                countChat > 0 ? 
                <ChatButtonComponent navigation={navigation} countChat={countChat}/> 
                : null
            }
        </View>
    )
}

export default KategoriScreen