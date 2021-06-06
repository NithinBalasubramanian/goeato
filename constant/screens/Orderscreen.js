import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView ,ScrollView} from 'react-native';

//Styles

import { Styles , ScreenDisp } from '../../assets/style/theme'

//pages

import Header from './includes/Header'

const OrderScreen = () => {
    return(
        <SafeAreaView style = { style.midView }>
             <Header />
            <ScrollView style = { style.scrollPart} >
                <View style = { style.midView }>
                    <Text>Order</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    midView : {
        width : ScreenDisp.WidthFull,
    },
})

export default OrderScreen