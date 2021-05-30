import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const OrderScreen = () => {
    return(
        <View style = { style.midView }>
            <Text>Orders</Text>
        </View>
    )
}

const style = StyleSheet.create({
    midView : {
        margin : 120,
        alignItems : 'center',
    }
})

export default OrderScreen