import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
    return(
        <View style = { style.midView }>
            <Text>Home</Text>
        </View>
    )
}

const style = StyleSheet.create({
    midView : {
        margin : 120,
        alignItems : 'center',
    }
})

export default HomeScreen