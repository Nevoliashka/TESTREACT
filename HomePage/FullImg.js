import React from 'react'
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native'
import {h, w} from "../constant";

const ShowFull = ({src, onPress}) => {
    const {container, cover} = styles
    return(
        <View style={container}>
            <TouchableOpacity onPress={onPress}>
            <Image style={cover} source={{uri: src.full}}></Image>
        </TouchableOpacity>
        </View>
    )

}


const styles = StyleSheet.create({
    container:{

    },
    cover:{
        borderRadius:30,
        width: w,
        height:h-120,

    }
})

export {ShowFull}