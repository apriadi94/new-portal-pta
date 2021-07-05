import React, { useContext, useEffect } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { AuthContext } from '../../provider/AuthProvider'
import ChatButtonComponent from '../home/ChatButtonComponent';
import ListBerita from './ListBerita';
import Icon from 'react-native-vector-icons/FontAwesome';

const InformasiScreen = ({navigation}) => {
    const { countChat } = useContext(AuthContext)

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <View style={{ marginLeft : 25 }}>
                      <Icon name="navicon" color="gray" size={18} />
                    </View>
                </TouchableOpacity>
              ),
        })
    }, [])
    return(
        <View style={{flex : 1}}>
            <ListBerita navigation={navigation}/>
            {
                countChat > 0 ? 
                <ChatButtonComponent navigation={navigation} countChat={countChat}/> 
                : null
            }
        </View>
    )
}

export default InformasiScreen