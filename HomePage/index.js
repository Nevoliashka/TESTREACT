import {createStackNavigator, createAppContainer} from 'react-navigation'
import Home from './Home'
import FullPhotoUrls from './FullPhoto'
import {HOME, FullPhoto} from "../routes";
import React from 'react'


const AppNav = createStackNavigator(
    {
        [HOME]: Home,
        [FullPhoto]: FullPhotoUrls,
    },
    {
        headerMode: 'none'
    }
)
const App = createAppContainer(AppNav)
export default App