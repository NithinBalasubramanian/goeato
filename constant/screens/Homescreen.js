import React from 'react';
import { StyleSheet, Text, View , SafeAreaView ,FlatList ,TouchableOpacity , Image , ScrollView} from 'react-native';


//Styles

import { Styles , ScreenDisp } from '../../assets/style/theme'

//pages

import Header from './includes/Header'

const HomeScreen = () => {

        const categoryData = [
        {
            id: 1,
            name: "Rice",
            icon: "../../../assets/images/pizza.jpg",
        },
        {
            id: 2,
            name: "Noodles",
            icon: "../../../assets/images/noodle.png",
        },
        {
            id: 3,
            name: "Hot Dogs",
            icon: "../../../assets/images/hotdog.png",
        },
        {
            id: 4,
            name: "Salads",
            icon: "../../../assets/images/hotdog.png",
        },
        {
            id: 5,
            name: "Burgers",
            icon: "../../../assets/images/hotdog.png",
        },
        {
            id: 6,
            name: "Pizza",
            icon: "../../../assets/images/hotdog.png",
        },
        {
            id: 7,
            name: "Snacks",
            icon: "../../../assets/images/hotdog.png",
        },
        {
            id: 8,
            name: "Sushi",
            icon: "../../../assets/images/hotdog.png",
        },
        {
            id: 9,
            name: "Desserts",
            icon: "../../../assets/images/hotdog.png",
        },
        {
            id: 10,
            name: "Drinks",
            icon: "../../../assets/images/hotdog.png",
        },

    ]



    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)

    const categoryView = () => {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: 10,
                        paddingBottom: 20,
                        backgroundColor: (selectedCategory?.id == item.id) ? '#fff' : '#fff',
                        borderRadius: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 20,
                    }}
                    //onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? Styles.PriColor : Styles.PriColor,
                        }}
                    >
                        <Image
                            source="../../../assets/images/pizza.jpg"
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: 10,
                            //backgroundColor: (selectedCategory?.id == item.id) ? '#FFF701' : '#FFF701',
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return(
            <View style={{ padding:10 }} >
                <Text style={{fontSize:20,fontWeight:'900'}}>Categories</Text>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: 20 }}
                />
            </View>
        )
    }

    const popularProducts = () => {
        return(
            <View style={{ paddingHorizontal:10 }} >
                <Text style={{fontSize:20,fontWeight:'900'}}>Store 99</Text>
                <ScrollView horizontal={true} 
                    showsHorizontalScrollIndicator={false} >
                    <View style={style.productCard}> 
                      <View style={style.likedPart} >
                       <Image 
                        source ={require('../../assets/icons/like.png')}
                        resizeMode ='contain'
                        style = {{
                            width:20,
                            height : 20,
                            tintColor :  Styles.PriColor,
                            right :14,
                            flex : 1,
                        }} />
                        </View>
                        <Image 
                            source ={require('../../assets/images/burger.png')}
                            resizeMode ='contain'
                            style = {{
                                width:'90%',
                                marginHorizontal:'5%',
                                height : 180,
                                //tintColor :  '#FFF701',
                            }} />
                            <Text style={style.prodName}>Burgar</Text>
                            <Text style={style.subDetail}>Double cheese filled Burgar</Text>
                            <Text style={style.priceView}>RS 1200</Text>
                    </View>
                    <View style={style.productCard}> 
                    <View style={style.likedPart} >
                       <Image 
                        source ={require('../../assets/icons/like.png')}
                        resizeMode ='contain'
                        style = {{
                            width:20,
                            height : 20,
                            tintColor :  Styles.PriColor,
                            right :14,
                            flex : 1,
                        }} />
                        </View>
                        <Image 
                            source ={require('../../assets/images/pizza_img.png')}
                            resizeMode ='contain'
                            style = {{
                                width:'90%',
                                marginHorizontal:'5%',
                                height : 180,
                                //tintColor :  '#FFF701',
                            }} />
                            <Text style={style.prodName}>Burgar</Text>
                            <Text style={style.subDetail}>Double cheese filled Burgar</Text>
                            <Text style={style.priceView}>RS 1200</Text>
                    </View>
                    <View style={style.productCard}> 
                        <View style={style.likedPart} >
                        <Image 
                            source ={require('../../assets/icons/like.png')}
                            resizeMode ='contain'
                            style = {{
                                width:20,
                                height : 20,
                                tintColor :  Styles.PriColor,
                                right :14,
                                flex : 1,
                            }} />
                            </View>
                        <Image 
                            source ={require('../../assets/images/pizza_img.png')}
                            resizeMode ='contain'
                            style = {{
                                width:'90%',
                                marginHorizontal:'5%',
                                height : 180,
                            }} />
                            <Text style={style.prodName}>Burgar</Text>
                            <Text style={style.subDetail}>Double cheese filled Burgar</Text>
                            <Text style={style.priceView}>RS 1200</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }

    const featuredProducts = () => {
        return(
            <View style={{ paddingHorizontal:10 }} >
                <Text style={{fontSize:20,fontWeight:'900'}}>Popular Products</Text>
                <ScrollView horizontal={true} 
                    showsHorizontalScrollIndicator={false} >
                    <View style={style.productCard}> 
                       <View style={style.likedPart} >
                       <Image 
                        source ={require('../../assets/icons/like.png')}
                        resizeMode ='contain'
                        style = {{
                            width:20,
                            height : 20,
                            tintColor :  Styles.PriColor,
                            right :14,
                            flex : 1,
                        }} />
                        </View>
                        <Image 
                        source ={require('../../assets/images/burger.png')}
                        resizeMode ='contain'
                        style = {{
                            width:'90%',
                            marginHorizontal:'5%',
                            height : 180,
                        }} />
                        <Text style={style.prodName}>Burgar</Text>
                            <Text style={style.subDetail}>Double cheese filled Burgar</Text>
                            <Text style={style.priceView}>RS 1200</Text>
                    </View>
                    <View style={style.productCard}> 
                       <View style={style.likedPart} >
                       <Image 
                        source ={require('../../assets/icons/like.png')}
                        resizeMode ='contain'
                        style = {{
                            width:20,
                            height : 20,
                            tintColor :  Styles.PriColor,
                            right :14,
                            flex : 1,
                        }} />
                        </View>
                        <Image 
                            source ={require('../../assets/images/pizza_img.png')}
                            resizeMode ='contain'
                            style = {{
                                width:'90%',
                                marginHorizontal:'5%',
                                height : 180,
                            }} />
                            <Text style={style.prodName}>Burgar</Text>
                            <Text style={style.subDetail}>Double cheese filled Burgar</Text>
                            <Text style={style.priceView}>RS 1200</Text>
                    </View>
                    <View style={style.productCard}> 
                       <View style={style.likedPart} >
                       <Image 
                        source ={require('../../assets/icons/like.png')}
                        resizeMode ='contain'
                        style = {{
                            width:20,
                            height : 20,
                            tintColor :  Styles.PriColor,
                            right :14,
                            flex : 1,
                        }} />
                        </View>
                        <Image 
                            source ={require('../../assets/images/pizza_img.png')}
                            resizeMode ='contain'
                            style = {{
                                width:'90%',
                                marginHorizontal:'5%',
                                height : 180,
                            }} />
                            <Text style={style.prodName}>Burgar</Text>
                            <Text style={style.subDetail}>Double cheese filled Burgar</Text>
                            <Text style={style.priceView}>RS 1200</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }

    const foodList = () => {
        return(
            <View style={{ paddingHorizontal:10 }} >
            <Text style={{fontSize:20,fontWeight:'900'}}>Food Listing</Text>
            <ScrollView  >
                <View style={style.productVericalCard}> 
                   <View style={style.likedPart} >
                   <Image 
                    source ={require('../../assets/icons/like.png')}
                    resizeMode ='contain'
                    style = {{
                        width:20,
                        height : 20,
                        tintColor :  Styles.PriColor,
                        right :14,
                        flex : 1,
                    }} />
                    </View>
                    <Image 
                    source ={require('../../assets/images/burger.png')}
                    resizeMode ='contain'
                    style = {{
                        width:'90%',
                        marginHorizontal:'5%',
                        height : 180,
                    }} />
                    <Text style={style.prodName}>Burgar</Text>
                        <Text style={style.subDetail}>Double cheese filled Burgar</Text>
                        <Text style={style.priceView}>RS 1200</Text>
                </View>
                <View style={style.productVericalCard}> 
                   <View style={style.likedPart} >
                   <Image 
                    source ={require('../../assets/icons/like.png')}
                    resizeMode ='contain'
                    style = {{
                        width:20,
                        height : 20,
                        tintColor :  Styles.PriColor,
                        right :14,
                        flex : 1,
                    }} />
                    </View>
                    <Image 
                        source ={require('../../assets/images/pizza_img.png')}
                        resizeMode ='contain'
                        style = {{
                            width:'90%',
                            marginHorizontal:'5%',
                            height : 180,
                        }} />
                        <Text style={style.prodName}>Burgar</Text>
                        <Text style={style.subDetail}>Double cheese filled Burgar</Text>
                        <Text style={style.priceView}>RS 1200</Text>
                </View>
                <View style={style.productVericalCard}> 
                   <View style={style.likedPart} >
                   <Image 
                    source ={require('../../assets/icons/like.png')}
                    resizeMode ='contain'
                    style = {{
                        width:20,
                        height : 20,
                        tintColor :  Styles.PriColor,
                        right :14,
                        flex : 1,
                    }} />
                    </View>
                    <Image 
                        source ={require('../../assets/images/pizza_img.png')}
                        resizeMode ='contain'
                        style = {{
                            width:'90%',
                            marginHorizontal:'5%',
                            height : 180,
                        }} />
                        <Text style={style.prodName}>Burgar</Text>
                        <Text style={style.subDetail}>Double cheese filled Burgar</Text>
                        <Text style={style.priceView}>RS 1200</Text>
                </View>
            </ScrollView>
        </View>
        )
    }

    const bannerDisp = () => {
        return(
            <View style={{ height:200 }}>
                <Image 
                        source ={require('../../assets/images/banner.jpg')}
                        resizeMode ='contain'
                        style = {{
                            width:'98%',
                            marginHorizontal:'1%',
                            height : 180,
                        }} />
            </View>
        )
    }

    const bannerDispMid = () => {
        return(
            <View style={{ height:200 }}>
                <Image 
                        source ={require('../../assets/images/banner1.jpeg')}
                        resizeMode ='contain'
                        style = {{
                            width:'98%',
                            marginHorizontal:'1%',
                            height : 180,
                        }} />
            </View>
        )
    }

    const padBelow = () => {
        return(
            <View style={{ height:160 }}></View>
        )
    }

    return(
        <SafeAreaView style = { style.midView }>
             <Header />
            <ScrollView style = { style.scrollPart} >
                {categoryView()}
                {bannerDisp()}
                {popularProducts()}
                {bannerDispMid()}
                {featuredProducts()}
                {foodList()}
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
        height : 300,
        width : 200,
        marginRight : 15,
        marginVertical : 15,
        backgroundColor : '#fff',
        borderRadius: 10,
        alignItems: "flex-start",
        justifyContent: "center",
    },
    productVericalCard : {
        height : 340,
        width : '90%',
        marginTop : 15,
        marginHorizontal : '5%',
        backgroundColor : '#fff',
        borderRadius: 10,
        alignItems: "flex-start",
        justifyContent: "center",
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
    }
})

export default HomeScreen