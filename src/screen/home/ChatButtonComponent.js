import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import chatPng from '../../assets/chat.png'

const ChatButtonComponent = ({ navigation, countChat }) => {
    return(
        <TouchableOpacity 
        onPress={() => navigation.navigate('Chat')}
        style={{
                width : 70, height: 70, 
                borderRadius: 25,
                position: 'absolute',
                bottom: 0,
                right: 0,
                marginBottom : 10,
                marginRight: 10,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <View style={{ position: 'absolute', top: 0, right: 0, backgroundColor: 'red', width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 15, zIndex: 999 }}>
                <Text style={{color : 'white', fontWeight: 'bold', fontSize: 15}}>{countChat}</Text>
            </View>
            <Image source={chatPng} style={{ width: 50, height: 50 }}/>
        </TouchableOpacity>
    )
}

export default ChatButtonComponent