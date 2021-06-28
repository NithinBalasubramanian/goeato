import React , { useEffect , useState } from 'react';
import { StyleSheet, Text, View ,SafeAreaView ,ScrollView , Image , FlatList } from 'react-native';
import axios from 'axios'

//Styles

import { Styles , ScreenDisp } from '../../assets/style/theme'

const initialState = [
    {
        'restaurant' : '',
        'quote' : '',
        'img' : '',
        'address' : '',
    }
]

const popularScroll = ({ item }) => {

        return(
            <View style={style.productCard}> 
                <Image 
                    source = {{ uri : item.img }}
                    resizeMode ='contain'
                    style = {{
                        width:'90%',
                        marginHorizontal:'5%',
                        height : 180,
                        //tintColor :  '#FFF701',
                    }} />
                    <Text style={style.prodName}>{ item.name }</Text>
                    <Text style={style.subDetail}>{ item.address }</Text>
            </View>
        )
}

const favorateScroll = ({ item }) => {

    return(
        <View style={style.productCard}> 
            <Image 
                source = {{ uri : item.img }}
                resizeMode ='contain'
                style = {{
                    width:'90%',
                    marginHorizontal:'5%',
                    height : 180,
                    //tintColor :  '#FFF701',
                }} />
                <Text style={style.prodName}>{ item.name }</Text>
                <Text style={style.subDetail}>{ item.address }</Text>
        </View>
    )
}

const padBelow = () => {
    return(
        <View style={{ height:160 }}></View>
    )
}

const Restaurant = () => {

    let [ data , setData ] = useState(initialState);

    useEffect(() => {
        axios.get('https://goeato.com/Api/fetchRestaurant')
             .then((res) => {
                setData(res.data);
                setfavorateData(res.data);
             }).catch((err) => {
                 console.log(err);
             })
    },[])

    return(
        <SafeAreaView style = { style.midView }>
            <ScrollView style = { style.scrollPart} >
             <View style={{ paddingHorizontal:10  }}>
               <Text style={{fontSize:20,fontWeight:'900'}}> Popular Restaurants</Text>
                    <FlatList  
                        horizontal 
                        showsHorizontalScrollIndicator={false}  data={ data }
                        keyExtractor={item => `${item._id}`}
                        renderItem={popularScroll}
                        contentContainerStyle={{ paddingVertical: 10 }} 
                    />
                    
                <Text style={{fontSize:20,fontWeight:'900'}}> Favorate Restaurants</Text>
                    <FlatList  
                        horizontal 
                        showsHorizontalScrollIndicator={false}  data={ data }
                        keyExtractor={item => `${item._id}`}
                        renderItem={favorateScroll}
                        contentContainerStyle={{ paddingVertical: 10 }} 
                    />
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