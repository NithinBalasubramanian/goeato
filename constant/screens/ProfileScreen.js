import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView ,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

//Styles

import { Styles , ScreenDisp } from '../../assets/style/theme'



const padBelow = () => {
    return(
        <View style={{ height:70 }}></View>
    )
}

const ProfileScreen = () => {
    return(
        <SafeAreaView style = { style.midView }>
            <ScrollView style = { style.scrollPart} >
                <View style={style.profileDisp}>
                    <View style={style.profileName}>
                        <Text style={style.profileNameDisp}>
                            Karthick 
                        </Text>
                        <Text style={style.profileSince}>
                            Since 13 June , 2021
                        </Text>
                    </View>
                    <View style={style.profilePic}>
                        <View style={style.profileImg}>

                        </View>
                    </View>
                </View>
                <View style={style.customDisp}>
                    <Text style={style.subHeading}>
                        Activities
                    </Text>
                    <TouchableOpacity style={ style.customList }> 
                        <Text style={ style.customListText }>
                            Your Orders
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ style.customList }> 
                        <Text style={ style.customListText }>
                            Favorate Orders
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ style.customList }> 
                        <Text style={ style.customListText }>
                            Address Book
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ style.customList }> 
                        <Text style={ style.customListText }>
                            Online Help
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ style.customList }> 
                        <Text style={ style.customListText }>
                            Payment Details
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ style.customList }> 
                        <Text style={ style.customListText }>
                            Complains
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ style.customList }> 
                        <Text style={ style.customListText }>
                            Rate Us on Playstore
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ style.customList }> 
                        <Text style={ style.customListText }>
                            Logout
                        </Text>
                    </TouchableOpacity>
                </View>
                { padBelow() }
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    midView : {
        width : ScreenDisp.WidthFull,
    },
    profileDisp : {
        width : '90%',
        marginHorizontal : '5%',
        marginVertical : 10,
        height : 120,
        backgroundColor : Styles.white,
        flexDirection : 'row'
    },
    profileName : {
        width : '60%',
        height : 120,
        justifyContent : 'center',
    },
    profilePic : {
        width : '40%',
        height : 120,
        justifyContent : 'center',
        alignItems : 'center',
    },
    profileNameDisp : {
        paddingLeft : 20,
        fontSize : 22,
        letterSpacing : 1,
    },
    profileSince : {
        fontSize : 12,
        letterSpacing : 1,
        color : Styles.SubText,
        paddingLeft : 20,
        marginVertical : 6,
    },
    profileImg : {
        width : '60%',
        borderRadius : 50,
        backgroundColor : Styles.PriColor,
        height : 80,
    },
    customDisp : {
        width : '90%',
        marginHorizontal : '5%',
        marginBottom : 10,
        minHeight : 120,
        paddingBottom : 20,
        backgroundColor : Styles.white,
    },
    subHeading : {
        color : Styles.SubText,
        paddingTop : 10,
        paddingLeft : 10,
        marginVertical : 6,
        letterSpacing : 1,
    },
    customList : {
        padding : 10,
        paddingLeft : 25,
        marginVertical : 1,
        backgroundColor : Styles.shadeColor,
        borderRadius : 3,
    },
    customListText : {
        letterSpacing : 1,
        color : Styles.SecondaryColor,
    }
})

export default ProfileScreen