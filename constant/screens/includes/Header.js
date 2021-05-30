import React from 'react';
import { View , StyleSheet , Text ,Image ,TouchableOpacity ,FlatList} from 'react-native';

const Header = () => {

    
    return(
        <View style={style.head} >
            <TouchableOpacity style={{ width : '30%', height:50,marginTop:25}}> 
                <Image 
                        source ={require('../../../assets/icons/list.png')}
                        resizeMode ='contain'
                        style = {{
                            width:30,
                            height : 30,
                            tintColor :  '#64e3d3',
                            marginTop:10,
                            marginLeft:10,
                        }}
                    ></Image>
            </TouchableOpacity>
            <View style={style.logoPart}>
                <Text style={style.logoText}>Goeato</Text>
            </View>
            <TouchableOpacity style={{ width : '15%', height:50,marginTop:25,}}> 

            </TouchableOpacity>
            <TouchableOpacity style={{ width : '15%', height:50,marginTop:25,}}> 

            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    head : {
        width : '100%',
        height : 80,
        backgroundColor : '#FFF701',
        flexDirection : 'row',
        elevation : 1,
    },
    logoPart : {
        width : '40%',
        marginTop: 15,
        height : 60,
        alignItems:'center',
        justifyContent:'center',
        textAlignVertical:'center',
    },
    logoText : {
        fontSize:22,
        fontWeight : '900',
        marginTop:10,
    }
})


export default Header