import React, { useEffect } from 'react';
import { View , StyleSheet , Text ,Image ,TouchableOpacity ,FlatList} from 'react-native';

//Styles

import { Styles , ScreenDisp } from '../../../assets/style/theme'
import * as Font from 'expo-font';

import { useFonts } from 'expo-font';


const Header = ({ onFunction , onDiscount }) => {

    const [loaded] = useFonts({
        'Merriweather-Regular' : require('../../../assets/fonts/Merriweather-Regular.ttf'),
      });
      
      if (!loaded) {
        return null;
      }

//     useEffect(()=>{
//         await Font.loadAsync({
//             'Merriweather-Regular' : require('../../../assets/fonts/Merriweather-Regular.ttf')
//         })
//    },[]);

    
    return(
        <View style={style.head} >
            {/* <TouchableOpacity style={{ width : '30%', height:50,marginTop:25}}> 
                <Image 
                        source ={require('../../../assets/icons/menu.png')}
                        resizeMode ='contain'
                        style = {{
                            width:20,
                            height : 20,
                            tintColor :  '#000000',
                            marginTop:15,
                            marginLeft:20,
                        }}
                    ></Image>
            </TouchableOpacity> */}
            <View style={style.logoPart}>
                <Text style={style.logoText}>Goeato</Text>
            </View>
            {/* <TouchableOpacity style={{ width : '15%', height:50,marginTop:25,}} onPress={onDiscount}> 
                    <Image 
                        source ={require('../../../assets/icons/discount.png')}
                        resizeMode ='contain'
                        style = {{
                            width:20,
                            height : 20,
                            tintColor :  Styles.SecondaryColor,
                            marginTop:15,
                            marginLeft:15,
                            tintColor : 'red'
                        }}
                    ></Image>
            </TouchableOpacity> */}
            <TouchableOpacity style={{ width : '15%', height:50,marginTop:25,}} onPress={onFunction} >
                     <Image 
                        source ={require('../../../assets/icons/notification.png')}
                        resizeMode ='contain'
                        style = {{
                            width:20,
                            height : 20,
                            tintColor :  Styles.SecondaryColor,
                            marginTop:15,
                            marginLeft:0,
                        }}
                    ></Image>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    head : {
        width : ScreenDisp.WidthFull,
        height : 80,
        backgroundColor : Styles.PriColor,
        flexDirection : 'row',
        elevation : 1,
    },
    logoPart : {
        width : '72%',
        margin: 20,
        height : 60,
        // alignItems:'center',
        // justifyContent:'center',
        // textAlignVertical:'center',
    },
    logoText : {
        fontSize:28,
        fontWeight : '900',
        marginTop:10,
        fontFamily : 'Merriweather-Regular',
    }
})


export default Header