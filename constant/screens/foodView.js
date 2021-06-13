import React , { useState } from 'react';
import { StyleSheet, Text, View ,SafeAreaView ,ScrollView , Image , TouchableOpacity , Button } from 'react-native';

//Styles

import { Styles , ScreenDisp } from '../../assets/style/theme'


const FoodView = ({navigation}) => {

    const initialState = {
        qty : 1
    }

    let [ productData , setProductData ] = useState(initialState);

    const subtractQty = () => {
        if(productData.qty != 1){
            setProductData(prev => (
                { ...prev , qty : prev.qty - 1 }
            ));
        }
    }

    const addQty = () => {
            setProductData(prev => (
                { ...prev , qty : prev.qty + 1 }
            ));
    }

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
                        <View style={style.foodViewImg}>
                            <View style={style.foodImg}>
                                <Image 
                                    source ={require('../../assets/images/burger.png')}
                                    resizeMode ='contain'
                                    style = {{
                                        width:'90%',
                                        marginHorizontal:'5%',
                                        height : 200,
                                        //tintColor :  '#FFF701',
                                    }} />

                                    <View style={style.productView}>
                                      <View style={style.qtyPart}>
                                        <TouchableOpacity style={style.subQty}
                                           onPress={subtractQty} > 
                                          <Text>
                                              -
                                          </Text>
                                        </TouchableOpacity>
                                        <View style={style.qty}>
                                            <Text>
                                                { productData.qty }
                                            </Text>
                                        </View>
                                        <TouchableOpacity style={style.addQty} 
                                                 onPress={ addQty } > 
                                          <Text>
                                              +
                                           </Text> 
                                        </TouchableOpacity>
                                      </View>
                                    </View>

                            </View>
                           
                        </View>
                        <View style={style.prodDisp}>
                            <Text style={style.foodName}>Burgar - Rs 120</Text>
                            <Text style={style.foodDesc}>Have you banished burgers from your diet because you thought they didn't fit in with your weight-loss plan? It's time to stop flipping them off—unless we're talking about moving them from the grill. In that case, by all means, please proceed.</Text>
                        </View>

                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginVertical : 10,
                            }} >
                                <TouchableOpacity
                                    style={style.productDisplay}
                                    onPress={() => alert('Add To Cart')}
                                >
                                    <Text style={style.addButton} >ADD to cart</Text>
                                </TouchableOpacity>
                        </View>
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
        marginVertical : 10,
        borderRadius : 10,
        backgroundColor : '#f2f2f2',
        minHeight : 620
    },
    foodViewImg : {
        width : '100%',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#fff',
        borderRadius : 5,
    },
    foodImg : {
        width : '60%',
        height : 230,
    },
    productView : {
        alignItems : 'center',
        //justifyContent:'center'
    },
    foodName : {
        alignItems : 'center',
        justifyContent:'center',
        fontWeight : '900',
        fontSize : 20,
        padding:10,
    },
    foodDesc : {
        width : ScreenDisp.WidthFull,
        marginBottom : 20,
        padding : 10,
        color : Styles.SubText,
        lineHeight : 20,
    },
    qtyPart : {
        width : 140,
        height : 40,
        backgroundColor : Styles.PriColor,
        borderRadius : 15,
        marginHorizontal : 'auto',
        marginVertical : 10,
        position : 'absolute',
        flexDirection : 'row',
    },
    addButton : {
        //marginVertical : 20,
        color : Styles.black,
        paddingHorizontal : 20,
        paddingVertical : 4,
        textTransform : 'uppercase',
        letterSpacing : 1,
        fontSize : 16
    },
    prodDisp : {
        top : 28,
        minHeight : 200,
        width :  ScreenDisp.WidthFull,
        backgroundColor : Styles.white,
        borderRadius : 10,
    },
    subQty : {
        width : 45,
        justifyContent : 'center',
        alignItems : 'center',
    },
    addQty : {
        width : 45,
        justifyContent : 'center',
        alignItems : 'center',
    },
    qty : {
        width : 45,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : Styles.PriVariant,
    },
    productDisplay : {
        width: ScreenDisp.WidthFull,
        padding: 8,
        backgroundColor: Styles.PriColor,
        alignItems: 'center',
        borderRadius: 10,
        marginVertical : 30,
        top : 5,
    }
})

export default FoodView