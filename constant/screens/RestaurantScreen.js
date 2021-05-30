import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Restaurant = () => {
    return(
        <View style = { style.midView }>
            <Text>Restaurant</Text>
        </View>
    )
}

const style = StyleSheet.create({
    midView : {
        margin : 120,
        alignItems : 'center',
    }
})

export default Restaurant