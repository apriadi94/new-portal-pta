import React from 'react'
import { View } from 'react-native'
import  {Placeholder, Fade, PlaceholderMedia, PlaceholderLine} from 'rn-placeholder'

const LoadingBertia = () => {
    return(
        <View style={{marginHorizontal: 10, flexDirection: 'row', marginTop: 10}}>
           <Placeholder
                Animation={Fade}
                Left={() => <PlaceholderMedia style={{ marginRight : 10, width: 100, height: 100}}/>}
                >
                <PlaceholderLine width={60}/>
                <PlaceholderLine/>
                <PlaceholderLine/>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <PlaceholderLine width={30}/>
                </View>
            </Placeholder>
        </View>
    )
}

export default LoadingBertia