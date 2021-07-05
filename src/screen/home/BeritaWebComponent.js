import React, { useContext, useEffect, useState } from 'react'
import { View, ScrollView, Text, TouchableOpacity, RefreshControl } from 'react-native'
import CardBerita from './CardBerita'
import axios from 'axios'
import { AuthContext } from '../../provider/AuthProvider'
import CardInformasiComponent from './CardInformasiComponent'
import Icon from 'react-native-vector-icons/FontAwesome'
import LoadingBertia from './LoadingBerita'

const BeritaWebComponent = ({navigation }) => {
    const { baseUrl2 } = useContext(AuthContext)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [loadingFirstScreen, SetLoadingFirstScreen] = useState(true)
    const [beritaPta, setBeritaPta] = useState([])
    const [page, setPage] = useState(2)
    const [refreshing, setRefreshing] = React.useState(false);


    const getBeritaPta = async () => {
        SetLoadingFirstScreen(true)
        await axios({
            method: 'get',
            url: `${baseUrl2}/api/artikel/list/296/1`,
            headers: {
                'Accept' : 'aplication/json'
            }
        }).then(res => {
            setBeritaPta(res.data.data)
            setPage(2)
        }).catch(err => {
            console.log(err)
        })
        SetLoadingFirstScreen(false)
    }

    
    const getNextBeritaPta = () => {
        setLoadingNextPage(true)
        axios({
            method: 'get',
            url: `${baseUrl2}/api/artikel/list/296/${page}`,
            headers: {
                'Accept' : 'aplication/json'
            }
        }).then(res => {
            setBeritaPta(beritaPta => [...beritaPta, ...res.data.data])
            setPage(page + 1)
            setLoadingNextPage(false)
        }).catch(err => {
            console.log(err)
        })
    }

    const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
          contentSize.height - paddingToBottom;
      };

    useEffect(() => {
        getBeritaPta()
    }, [])

  
    return(
        <View style={{ flex: 1, backgroundColor: '#F3F6FF', marginTop : 5}}>
            <View style={{ marginBottom: 10 }}>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={getBeritaPta}
                        />
                    }
                    onScroll={({nativeEvent}) => {
                        if (isCloseToBottom(nativeEvent)) {
                            getNextBeritaPta()
                        }
                    }}
                    scrollEventThrottle={400}
                >
                    <CardInformasiComponent navigation={navigation}/>
                    <View style={{ marginTop : 5, backgroundColor: '#fff'}}>
                    <View style={{ marginLeft: 10, flexDirection: 'row', marginVertical: 10}}>
                        <View style={{ width: 5, backgroundColor: '#cc3300', marginRight: 5 }}></View>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Terkini</Text>
                        <View style={{ flex : 1, alignItems: 'flex-end', marginRight: 10}}>
                            <TouchableOpacity onPress={() => navigation.navigate('InformasiScreen')} style={{flexDirection: 'row'}}>
                                <Text style={{ color: '#cc3300', fontSize: 11, fontWeight: 'bold', marginRight: 5 }}>Semua Berita</Text>
                                <Icon name="arrow-circle-right" color="#cc3300" size={15} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    {
                        loadingFirstScreen ? 
                        <React.Fragment>
                            <LoadingBertia/>
                            <LoadingBertia/>
                            <LoadingBertia/>
                            <LoadingBertia/>
                        </React.Fragment>
                        :
                        beritaPta.map((item, index) =>
                            <CardBerita key={index} data={item} navigation={navigation}/>
                        )
                    }
                    {
                        loadingNextPage ? <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}><Text>Loading...</Text></View> : null
                    }
                    </View>
                   
                </ScrollView>
            </View>
        </View>
    )
}

export default BeritaWebComponent