import React, {PureComponent} from 'react'
import {View, Text} from 'react-native'
import {ShowFull} from './FullImg'
import {Header} from '../src/components/uikit'
import {HOME} from "../routes";


export default class FullPhoto extends PureComponent {
    state = {
        title: 'Picture',
        author: 'Drokin Igor',
        data: []
    }

    render() {
        const {navigation} = this.props
        const {title, author} = this.state
        const item = navigation.getParam('item')

        return (
            <View>
                <Header title={title} name={author}/>

                <ShowFull src={item.urls} onPress={() =>   navigation.navigate(HOME)} />
                <Text>{}</Text>


            </View>
        )
    }
}
