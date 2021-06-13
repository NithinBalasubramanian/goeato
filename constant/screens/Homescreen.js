import React , { useEffect } from 'react';
import { StyleSheet, Text, View , SafeAreaView ,FlatList ,TouchableOpacity , TouchableHighlight ,Image , ScrollView ,TextInput } from 'react-native';

import * as Font from 'expo-font';

import { useFonts } from 'expo-font';



//Styles

import { Styles , ScreenDisp } from '../../assets/style/theme'


const HomeScreen = ({navigation}) => {

        const categoryData = [
        {
            id: 1,
            name: "Burgar",
            icon: "../../assets/images/burgar.jpg",
        },
        {
            id: 2,
            name: "Desert",
            icon: "../../assets/images/dessert.png",
        },
        {
            id: 3,
            name: "Drinks",
            icon: "../../assets/images/drinks.jpeg",
        },
        {
            id: 4,
            name: "Hot dog",
            icon: "../../assets/images/hot dog.png",
        },
        {
            id: 5,
            name: "Noodles",
            icon: "../../assets/images/noodles.png",
        },
        {
            id: 6,
            name: "Pizza",
            icon: "../../assets/images/pizza.png",
        },
        {
            id: 7,
            name: "Rice",
            icon: "../../assets/images/pizza.png",
        },
        {
            id: 8,
            name: "Salads",
            icon: "../../assets/images/salads.png",
        },
        {
            id: 9,
            name: "Desserts",
            icon: "../../assets/images/hot dog.png",
        }

    ]





    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)

    const searchBar = () => {
        return(
            <View style={style.searchSection}>
                {/* <Icon style={style.searchIcon} name="magnifying-glass" size={20} color="#000"/> */}
                <TextInput
                    style={style.input}
                    placeholder="Search"
                    underlineColorAndroid="transparent"
                />
            </View>
        )
    }

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
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                //tintColor : 'red'
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

    const popularProducts = (navigation) => {
        return(
            <View style={{ paddingHorizontal:10 }} >
                <Text style={{fontSize:20,fontWeight:'900'}}>Store 99</Text>
                <ScrollView horizontal={true} 
                    showsHorizontalScrollIndicator={false} >
                    <TouchableOpacity onPress={() => navigation.navigate("FoodView") }>
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
                    </TouchableOpacity>
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
            <View style={{ height:100 }}></View>
        )
    }

    return(
        <SafeAreaView style = { style.midView }>
            <ScrollView style = { style.scrollPart} >
                {searchBar()}
                {categoryView()}
                {bannerDisp()}
                {popularProducts(navigation)}
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
       // fontFamily : 'CrimsonText-SemiBold',
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
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin:15,
        paddingLeft:15,
        borderRadius : 5,
        letterSpacing : 1,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
})

export default HomeScreen