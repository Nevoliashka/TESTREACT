import React from 'react'
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {h, w} from './../../../constant'


const Img = ({data, onPress}) => {
    const {textStyle, cover, container} = styles
    const [image, name, description] = [data.urls.small, data.user.name, data.description || 'Picture']
    return (

        <View style={container}>
            <TouchableOpacity onPress={onPress}>
            <Image style={cover} source={{uri: image}}></Image>
            </TouchableOpacity>
            <Text style={textStyle}>{description} by {name} </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    textStyle: {
        fontFamily:'sans-serif-condensed',
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
        textAlign: 'center',
        width: w / 2,
        paddingTop: 8,
        paddingBottom: 10,
    },
    cover:{
        marginLeft: 10,
        borderRadius: 14,
        width: w/2.3,
        height: h *0.4,
    },
    container:{
        width: w/2,
    }
})

export {Img}