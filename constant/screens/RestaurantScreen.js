import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView ,ScrollView , Image} from 'react-native';

//Styles

import { Styles , ScreenDisp } from '../../assets/style/theme'


const popularScroll = () => {
    return(
        <View style={{ paddingHorizontal:10  }}>
           <Text style={{fontSize:20,fontWeight:'900'}}> Popular Restaurants</Text>
           <ScrollView horizontal={true} 
                    showsHorizontalScrollIndicator={false} >
                    <View style={style.productCard}> 
                        <Image 
                            source ={require('../../assets/images/restaurant3.jpg')}
                            resizeMode ='contain'
                            style = {{
                                width:'90%',
                                marginHorizontal:'5%',
                                height : 180,
                                //tintColor :  '#FFF701',
                            }} />
                            <Text style={style.prodName}>MC Donals</Text>
                            <Text style={style.subDetail}>Taste to heart</Text>
                    </View>
                    <View style={style.productCard}> 
                        <Image 
                            source ={require('../../assets/images/restaurant2.jpeg')}
                            resizeMode ='contain'
                            style = {{
                                width:'90%',
                                marginHorizontal:'5%',
                                height : 180,
                                //tintColor :  '#FFF701',
                            }} />
                            <Text style={style.prodName}>Restaurant</Text>
                            <Text style={style.subDetail}>Double cheese filled Burgar</Text>
                    </View>
                    <View style={style.productCard}> 
                        <Image 
                            source ={require('../../assets/images/restaurant1.jpeg')}
                            resizeMode ='contain'
                            style = {{
                                width:'90%',
                                marginHorizontal:'5%',
                                height : 180,
                            }} />
                            <Text style={style.prodName}>Tndian</Text>
                            <Text style={style.subDetail}>Double cheese filled Burgar</Text>
                    </View>
                </ScrollView>
        </View>
    )
}

const favorateScroll = () => {
    return(
        <View style={{ paddingHorizontal:10  }}>
           <Text style={{fontSize:20,fontWeight:'900'}}> Favorate Restaurants</Text>
           <ScrollView horizontal={true} 
                    showsHorizontalScrollIndicator={false} >
                    <View style={style.productCard}> 
                        <Image 
                            source ={require('../../assets/images/restaurant3.jpg')}
                            resizeMode ='contain'
                            style = {{
                                width:'90%',
                                marginHorizontal:'5%',
                                height : 180,
                                //tintColor :  '#FFF701',
                            }} />
                            <Text style={style.prodName}>MC Donals</Text>
                            <Text style={style.subDetail}>Taste to heart</Text>
                    </View>
                    <View style={style.productCard}> 
                        <Image 
                            source ={require('../../assets/images/restaurant2.jpeg')}
                            resizeMode ='contain'
                            style = {{
                                width:'90%',
                                marginHorizontal:'5%',
                                height : 180,
                                //tintColor :  '#FFF701',
                            }} />
                            <Text style={style.prodName}>Restaurant</Text>
                            <Text style={style.subDetail}>Double cheese filled Burgar</Text>
                    </View>
                    <View style={style.productCard}> 
                        <Image 
                            source ={require('../../assets/images/restaurant1.jpeg')}
                            resizeMode ='contain'
                            style = {{
                                width:'90%',
                                marginHorizontal:'5%',
                                height : 180,
                            }} />
                            <Text style={style.prodName}>Tndian</Text>
                            <Text style={style.subDetail}>Double cheese filled Burgar</Text>
                    </View>
                </ScrollView>
        </View>
    )
}

const padBelow = () => {
    return(
        <View style={{ height:160 }}></View>
    )
}

const Restaurant = () => {
    return(
        <SafeAreaView style = { style.midView }>
            <ScrollView style = { style.scrollPart} >
                {popularScroll()}
                {favorateScroll()}
                {padBelow()}
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    midView : {
        width : ScreenDisp.WidthFull,
    },
    productCard : {
        height : 240,
        width : 220,
        marginRight : 15,
        marginVertical : 10,
        backgroundColor : '#fff',
        borderRadius: 10,
        alignItems: "flex-start",
        //justifyContent: "center",
    },
    productVericalCard : {
        height : 340,
        width : '90%',
        marginTop : 15,
        marginHorizontal : '5%',
        backgroundColor : '#fff',
        borderRadius: 10,
        alignItems: "flex-start",
        //justifyContent: "center",
    },
    likedPart : {
        width : ScreenDisp.WidthFull,
        alignItems: "flex-end",
        flex : 1,
    },
    proData : {
        width : ScreenDisp.WidthFull,
        height : 40,
    },
    prodName : {
        marginHorizontal:15,
        fontWeight : '900',
        letterSpacing : 1,
        color : Styles.TextHeading,
    },
    priceView : {
        marginHorizontal : 15,
        marginTop : 4,
        marginBottom : 20,
    },
    subDetail : {
        fontSize : 10,
        marginLeft : 15,
        color : Styles.SubText,
    },
    scrollPart : {
        marginTop : 10,
    }
})


export default Restaurant