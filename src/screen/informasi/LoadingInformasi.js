import React from 'react'
import { View } from 'react-native'
import  {Placeholder, Fade, PlaceholderMedia, PlaceholderLine} from 'rn-placeholder'

const LoadingBertia = () => {
    return(
        <View style={{marginHorizontal: 10, flexDirection: 'row', marginTop: 10}}>
           <Placeholder
                Animation={Fade}
                >
                <PlaceholderMedia style={{ height: 200, width: '100%', marginBottom: 10 }}/>
                <PlaceholderLine/>
                <PlaceholderLine width={20}/>
                <View style={{flex : 1, flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                    <PlaceholderLine width={40}/>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <PlaceholderLine width={40}/>
                </View>
                </View>
            </Placeholder>
        </View>
    )
}

export default LoadingBertia