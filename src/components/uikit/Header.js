import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header = ({title, name}) => {
    const {viewStyle, textStyle, authorStyle, bc} = styles
    return (
        <View style={bc}>
        <View style={viewStyle}>
            <Text style={textStyle}> {title} <Text style={authorStyle}>design by {name}</Text></Text>
        </View>
        </View>
    )
}

export {Header}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#230ddd',
        height: 120,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 22,
        paddingTop: 30,
        borderRadius:15,

    },
    textStyle: {
        color: 'white',
        fontSize: 50,
        fontFamily: 'Cochin',

    },
    authorStyle: {
        fontSize: 15,
    },
    bc:{
       backgroundColor: 'rgba(13,239,69,0.44)'
    }
});
