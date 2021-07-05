import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import StrukturOrganisasiScreen from './StrukturOrganisasiScreen'
import Icon from 'react-native-vector-icons/FontAwesome';

const StrukturOrganisasiAppScreen = ({ navigation }) => {
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
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Struktur Organisasi</Text>
                    </View>
                 </View>
            </View>
            <StrukturOrganisasiScreen/>
        </View>
    )
}

export default StrukturOrganisasiAppScreen