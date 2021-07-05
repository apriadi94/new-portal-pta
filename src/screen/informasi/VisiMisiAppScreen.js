import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import VisiMisiScreen from './VisiMisiScreen'
import Icon from 'react-native-vector-icons/FontAwesome';

const VisiMisiAppScreen = ({ navigation }) => {
    return(
        <View style={{ flex: 1 }}>
            <View style={{
                backgroundColor: '#fff',
                marginBottom: 1
            }}>
                 <View style={{marginVertical: 15, marginLeft: 20, flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Icon name="navicon" color="gray" size={20} />
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', marginLeft: 30, marginTop: -5 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Visi Misi Pengadilan</Text>
                    </View>
                 </View>
            </View>
            <VisiMisiScreen/>
        </View>
    )
}

export default VisiMisiAppScreen