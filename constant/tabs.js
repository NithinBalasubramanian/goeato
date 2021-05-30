import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View , Image , TouchableOpacity } from 'react-native';
import React from 'react'

//pages

import HomeScreen from './screens/Homescreen';
import OrderScreen from './screens/Orderscreen'
import Restaurant from './screens/RestaurantScreen'

const Tab = createBottomTabNavigator();

const CustomTab = ({children , onPress }) => (
    <TouchableOpacity style={{
        top:-20,
        justifyContent:'center',
        alignItem:'center',
        ...style.shadow
    }}
    onPress={onPress}>
        <View  style={{
            width:60,
            height:60,
            borderRadius : 35,
            backgroundColor:'#FFF701',
        }}>
          {children}
        </View>
    </TouchableOpacity>
);

const Tabs = () => {

    return(
        <Tab.Navigator
         tabBarOptions={{
             showLabel : false,
             style : {
                 position : 'absolute',
                 bottom:10,
                 right:10,
                 left:10,
                 borderRadius:5,
                 elevation : 1,
                 backgroundColor:'#fff',
                 height:60,
                 ...style.shadow,
             }
         }}
        >
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon : ({focused}) => (
                <View style={style.navIcon }>
                    <Image 
                     source ={require('../assets/icons/home.png')}
                     resizeMode ='contain'
                     style = {{
                         width:30,
                         height : 30,
                         tintColor : focused ? '#FFF701' : '#64e3d3',
                     }}
                    ></Image>
                </View>
            ),
        }} />
        <Tab.Screen name="Order" component={Restaurant} options={{
            tabBarIcon : ({focused}) => (
                <View style={style.navIcon }>
                    <Image 
                     source ={require('../assets/icons/restaurant.png')}
                     resizeMode ='contain'
                     style = {{
                         width:30,
                         height : 30,
                         tintColor : focused ? '#FFF701' : '#64e3d3',
                     }}
                    ></Image>
                </View>
            ),
        }}/>
        <Tab.Screen name="Third" component={OrderScreen} options={{
            tabBarIcon : ({focused}) => (
                    <Image 
                     source ={require('../assets/icons/shopping-basket.png')}
                     resizeMode ='contain'
                     style = {{
                         width:30,
                         height : 30,
                         tintColor : focused ? '#fff' : '#64e3d3',
                     }}
                    ></Image>
            ),
            tabBarButton : (props) => (
                <CustomTab {...props} />
            )
        }}/>
        <Tab.Screen name="Forth" component={OrderScreen} options={{
            tabBarIcon : ({focused}) => (
                <View style={style.navIcon }>
                    <Image 
                     source ={require('../assets/icons/like.png')}
                     resizeMode ='contain'
                     style = {{
                         width:25,
                         height : 25,
                         tintColor : focused ? '#FFF701' : '#64e3d3',
                     }}
                    ></Image>
                </View>
            ),
        }}/>
        <Tab.Screen name="Fifth" component={OrderScreen} options={{
            tabBarIcon : ({focused}) => (
                <View style={style.navIcon }>
                    <Image 
                     source ={require('../assets/icons/user.png')}
                     resizeMode ='contain'
                     style = {{
                         width:25,
                         height : 25,
                         tintColor : focused ? '#FFF701' : '#64e3d3',
                     }}
                    ></Image>
                </View>
            ),
        }}/>
      </Tab.Navigator>
    )
}

const style = StyleSheet.create({
      shadow : {
          shadowColor : '#7F5DF0',
          shadowOffset : {
              width : 0,
              height : 10,
          },
          shadowOpacity : 0.25,
          shadowRadius : 3.5,
          elevation : 5,
      },
      navIcon : {
          alignItems : 'center',
          justifyContent : 'center',
      }
})

export default Tabs