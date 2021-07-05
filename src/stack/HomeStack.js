import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/home/HomeScreen'
import IndexBerita from '../screen/home/IndexBerita'
import KategoriScreen from '../screen/informasi/KategoriScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
    return(
          <Stack.Navigator>
              <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }}/>
              <Stack.Screen name='BeritaScreencreen' component={IndexBerita}/>
              <Stack.Screen name='KategoriScreen' component={KategoriScreen}/>
          </Stack.Navigator>
      )
}

export default HomeStack