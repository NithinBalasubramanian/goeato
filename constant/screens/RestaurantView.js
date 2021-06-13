import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView ,ScrollView , Image , TouchableOpacity } from 'react-native';

//Styles

import { Styles , ScreenDisp } from '../../assets/style/theme'


const RestaurantView = ({navigation}) => {
    return(
        <SafeAreaView style = { style.midView }>
            <ScrollView style = { style.scrollPart} >
                <View style = { style.midView }>
                    <View style={style.back} >
                        <TouchableOpacity  onPress={() => navigation.goBack()} style={{height:'100%'}}>
                            <Image 
                                source ={require('../../assets/icons/back.png')}
                                resizeMode ='contain'
                                style = {{
                                    width:25,
                                    height : 25,
                                    top : 40,
                                    left : 20,
                                    tintColor : '#000000',
                                }}
                            ></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={style.Notification}>
                        <Text style={{margin:15,fontWeight:'900',fontSize:20}}>Food View</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    midView : {
        width : ScreenDisp.WidthFull,
    },
    back : {
        width : '100%',
        height:80,
        backgroundColor : Styles.PriColor
    },
    Notification : {
        width : '90%',
        marginHorizontal : '5%',
        marginVertical : 15,
        borderRadius : 10,
        backgroundColor : '#f3f3f3',
        minHeight : 620
    }
})

export default RestaurantView