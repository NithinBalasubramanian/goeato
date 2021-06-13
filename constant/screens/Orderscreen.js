import React , { useState } from 'react';
import { StyleSheet, Text, View ,SafeAreaView ,ScrollView , TouchableOpacity } from 'react-native';

//Styles

import { Styles , ScreenDisp } from '../../assets/style/theme'

const product = [
    {
        'id' : 1,
        'productName' : 'Biriyani',
        'price' : 120,
        'qty' : 1
    }, 
    {
        'id' : 2,
        'productName' : 'Chilli Chicken',
        'price' : 140,
        'qty' : 2
    },
]


const OrderScreen = () => {

    let [ orderData , setOrderData ] = useState(product);

    let [ grandTotal , setGrandTotal ] = useState(250);

    const padBelow = () => {
        return(
            <View style={{ height:80 }}></View>
        )
    }

    return(
        <SafeAreaView style = { style.midView }>
            <ScrollView style = { style.scrollPart} >
                <View style = { style.midView }>
                    <View style={ style.orderView }>
                      <Text style={{margin:15,fontWeight:'900',fontSize:20}}>Cart</Text>
                      {(orderData.length > 0) ? 
                        orderData.map((itm,k) => {
                            return(
                                <View style={style.orderList }>
                                  <Text style={style.productList }>{itm.productName }</Text>
                                  <Text style={style.productPrice }>{itm.price }</Text>
                                </View>
                            )
                        }) : 
                         <Text>Cart Is Empty</Text> 
                      }
                      <View style={style.grandView}>
                          <Text style={style.grandTotal}>
                                 Grand Total : Rs { grandTotal }
                           </Text>
                      </View>
                      <TouchableOpacity style={style.payment}>
                          <Text style={style.paymentText}>
                                 Add Payment
                           </Text>
                      </TouchableOpacity>
                    </View>
                    {padBelow()}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    midView : {
        width : ScreenDisp.WidthFull,
    },
    orderView : {
        width : '90%',
        marginHorizontal : '5%',
        marginVertical : 15,
        borderRadius : 10,
        backgroundColor : '#faf7f0',
        minHeight : 620
    },
    orderList : {
        width : ScreenDisp.WidthFull,
        minHeight : 80,
        backgroundColor : Styles.noteColor,
        marginVertical : 2,
    },
    grandView : {
        width : ScreenDisp.WidthFull,
        minHeight : 60,
        backgroundColor : Styles.SecondaryColor,
        marginVertical : 2,
        justifyContent : 'center',
        alignItems : 'center',
    },
    productList : {
        marginHorizontal : 10,
        marginBottom: 5,
        marginTop : 10,
        letterSpacing : 1,
        fontSize : 18,
        fontWeight : '600',
    },
    productPrice : {
        marginHorizontal : 10,
        marginBottom: 5,
        letterSpacing : 1,
        fontSize : 14,
        color : Styles.SubText,
    },
    grandTotal : {
        fontSize : 20,
        padding : 10,
        color : Styles.white,
    },
    payment : {
        width : ScreenDisp.WidthFull,
        minHeight : 60,
        backgroundColor : Styles.PriColor,
        marginVertical : 2,
        justifyContent : 'center',
        alignItems : 'center',
    },
    paymentText : {
        fontSize : 18,
        padding : 10,
    }
})

export default OrderScreen