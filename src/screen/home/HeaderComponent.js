import React, { useContext } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { AuthContext } from '../../provider/AuthProvider'
import menuPng from '../../assets/menu.png'
import noProfile from '../../assets/noprofile.png'

const HeaderComponent = ({ navigation }) => {
    const { signOut, user } = useContext(AuthContext)
    return(
        <View style={{backgroundColor: '#fff'}}>
            <View style={{flexDirection: 'row', marginVertical: 10}}>
                <View style={{marginLeft : 20}}>
                    <TouchableOpacity onPress={signOut}>
                        <Image 
                            style={{width: 70, height: 70, borderRadius: 35}}
                            source={user._user.photoURL ? {uri: user._user.photoURL} : noProfile}/>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', marginLeft: 20 }}>
                    <Text>{user._user.email}</Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>{user._user.displayName  ??  user._user.phoneNumber}</Text>
                </View>
                
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={{flex : 1, alignItems : 'flex-end', marginRight: 10, justifyContent: 'center'}}>
                    <Image source={menuPng} style={{ width: 32, height: 32}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HeaderComponent