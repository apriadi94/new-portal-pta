import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import toaPng from '../../assets/toa.png'
import logoMA from '../../assets/logo-ma.png'
import logoPTA from '../../assets/pta.png'

const CardInformasiComponent = ({navigation}) => {
    return(
        <View style={{ backgroundColor: '#fff'}}>
            <View style={{flexDirection : 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 10}}>
                <TouchableOpacity  onPress={() => navigation.navigate('KategoriScreen', { parentId: 290, title: 'Pengumuman'})}  style={{ backgroundColor: '#00ace6', height: 100, flex: 1, borderRadius: 10, marginRight: 5 }}>
                    <View style={{marginTop: 5, marginLeft: 5, flexDirection: 'row'}}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Pengumuman</Text>
                        <View style={{alignItems: 'flex-end', flex: 1, marginRight: 10}}>
                            <Icon name="info" color="white" size={18} />
                        </View>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 5}}>
                        <Image source={toaPng} style={{width : 50, height: 50}}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('KategoriScreen', { parentId: 296, title: 'Berita PTA'})}  style={{ backgroundColor: '#33cc33', height: 100, flex: 1, borderRadius: 10, marginRight: 5 }}>
                    <View style={{marginTop: 5, marginLeft: 5, flexDirection: 'row'}}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Berita PTA</Text>
                        <View style={{alignItems: 'flex-end', flex: 1, marginRight: 10}}>
                            <Icon name="microphone" color="white" size={18} />
                        </View>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 5}}>
                        <Icon name="newspaper-o" color="white" size={50} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection : 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 10, marginBottom: 10}}>
                <TouchableOpacity  onPress={() => navigation.navigate('KategoriScreen', { parentId: 805, title: 'Berita Badilag & MA'})}  style={{ backgroundColor: '#ff6666', height: 100, flex: 1, borderRadius: 10, marginRight: 5 }}>
                    <View style={{marginTop: 5, marginLeft: 5, flexDirection: 'row'}}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Badilag & MA</Text>
                        <View style={{alignItems: 'flex-end', flex: 1, marginRight: 10}}>
                            <Icon name="balance-scale" color="white" size={18} />
                        </View>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                        <Image source={logoMA} style={{width : 40, height: 50}}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('KategoriScreen', { parentId: 801, title: 'Berita PA se-Kalsel'})}  style={{ backgroundColor: '#cccc00', height: 100, flex: 1, borderRadius: 10, marginRight: 5 }}>
                    <View style={{marginTop: 5, marginLeft: 5, flexDirection: 'row'}}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Berita PA Sekalsel</Text>
                        <View style={{alignItems: 'flex-end', flex: 1, marginRight: 10}}>
                            <Icon name="globe" color="white" size={18} />
                        </View>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 5}}>
                        <Image source={logoPTA} style={{width : 45, height: 50}}/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CardInformasiComponent