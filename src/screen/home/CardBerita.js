import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const CardBerita = ({ data, navigation }) => {
    return(
        <React.Fragment>
            <View style={{marginHorizontal: 10, flexDirection: 'row', marginTop: 5}}>
                <View>
                    <Image 
                        source={{ uri: data.image }} 
                        style={{ width: 100, height: 100, borderRadius: 10 }}/>
                </View>
                <View style={{marginLeft: 20}}>
                    <Text numberOfLines={2} style={{ fontWeight: 'bold', width: 270, fontSize: 12 }}>{data.title}</Text>
                    <Text numberOfLines={2} style={{ width: 270, fontSize: 10, marginTop: 5 }}>{data.intro}</Text>
                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('BeritaScreencreen', {id : data.id, title: data.title})} style={{ width: 150, alignItems: 'center', justifyContent: 'center', backgroundColor: '#cc3300', borderRadius: 5 }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', marginVertical: 2 }}>Selengkapnya</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{height: 1, backgroundColor: '#e6e6e6', marginHorizontal: 5, marginTop: 10, marginBottom: 15}}></View>
        </React.Fragment>
    )
}

export default CardBerita