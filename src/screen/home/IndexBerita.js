import React, { useContext } from 'react'
import BeritaScreen from './BeritaScreen'
import { AuthContext } from '../../provider/AuthProvider'
import ChatButtonComponent from './ChatButtonComponent'

const IndexBerita = ({ route, navigation }) => {
    const { countChat } = useContext(AuthContext)
    return(
        <React.Fragment>
            <BeritaScreen route={route} navigation={navigation}/>
            {
                countChat > 0 ? 
                <ChatButtonComponent navigation={navigation} countChat={countChat}/> 
                : null
            }
        </React.Fragment>
    )
}

export default IndexBerita