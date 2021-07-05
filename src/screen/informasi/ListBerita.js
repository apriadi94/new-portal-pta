import React, { useState, useEffect, useContext} from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, RefreshControl } from 'react-native'
import { AuthContext } from '../../provider/AuthProvider'
import LoadingInformasi from './LoadingInformasi'
import axios from 'axios'

const ListBerita = ({parentId = 296, navigation}) => {
    const { baseUrl2 } = useContext(AuthContext)
    const [beritaPta, setBeritaPta] = useState([])
    const [page, setPage] = useState(2)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [loading, setLoading] = useState(true)
    const [refreshing, setRefreshing] = React.useState(false);


    const getBeritaPta = async () => {
        setLoading(true)
        await axios({
            method: 'get',
            url: `${baseUrl2}/api/artikel/list/${parentId}/1`,
            headers: {
                'Accept' : 'aplication/json'
            }
        }).then(res => {
            setBeritaPta(res.data.data)
            setPage(2)
        }).catch(err => {
            console.log(err)
        })
        setLoading(false)
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
           {
               loading ? 
                <React.Fragment>
                    <LoadingInformasi/>
                    <LoadingInformasi/>
                    <LoadingInformasi/>
                    <LoadingInformasi/>
                </React.Fragment>
               :
               beritaPta.map((list, index) => 
                <TouchableOpacity onPress={() => navigation.navigate('BeritaScreencreen', {id : list.id, title: list.title})} key={index} style={{ marginTop: 10, marginHorizontal: 5, marginBottom: 10 }}>
                    <Image source={{ uri : list.image}} style={{ width: '100%', height: 200 }}/>
                    <Text style={{ fontWeight: 'bold', marginTop: 5 }}>{list.title}</Text>
                    <Text style={{ color: 'gray', marginTop: 5, fontSize: 12  }}>Ditulis oleh {list.username}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{ color: 'gray', fontSize: 11 }}>Dilihat {list.klik}x</Text>
                        <Text style={{ color: 'gray', fontSize: 11, textAlign: 'right', flex: 1, marginRight: 10 }}>{list.tanggal}</Text>
                    </View>
                </TouchableOpacity>
               )
           }
            {
                loadingNextPage ? <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}><Text>Loading...</Text></View> : null
            }
       </ScrollView>
    )
}

export default ListBerita