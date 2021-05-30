import React from 'react';
import { StyleSheet, Text, View , SafeAreaView ,FlatList ,TouchableOpacity , Image} from 'react-native';


//pages

import Header from './includes/Header'

const HomeScreen = () => {

        const categoryData = [
        {
            id: 1,
            name: "Rice",
            icon: "../../../assets/icons/rice-bowl.png",
        },
        {
            id: 2,
            name: "Noodles",
            icon: "../../../assets/icons/noodle.png",
        },
        {
            id: 3,
            name: "Hot Dogs",
            icon: "../../../assets/icons/hotdog.png",
        },
        {
            id: 4,
            name: "Salads",
            icon: "../../../assets/icons/hotdog.png",
        },
        {
            id: 5,
            name: "Burgers",
            icon: "../../../assets/icons/hotdog.png",
        },
        {
            id: 6,
            name: "Pizza",
            icon: "../../../assets/icons/hotdog.png",
        },
        {
            id: 7,
            name: "Snacks",
            icon: "../../../assets/icons/hotdog.png",
        },
        {
            id: 8,
            name: "Sushi",
            icon: "../../../assets/icons/hotdog.png",
        },
        {
            id: 9,
            name: "Desserts",
            icon: "../../../assets/icons/hotdog.png",
        },
        {
            id: 10,
            name: "Drinks",
            icon: "../../../assets/icons/hotdog.png",
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
                        backgroundColor: (selectedCategory?.id == item.id) ? 'red' : 'blue',
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
                            backgroundColor: (selectedCategory?.id == item.id) ? 'red' : 'blue',
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: 10,
                            backgroundColor: (selectedCategory?.id == item.id) ? 'red' : 'blue',
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return(
            <View style={{ padding:10 }} >
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
    return(
        <SafeAreaView style = { style.midView }>
            <Header />
            {categoryView()}
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    midView : {
        width : '100%',
    }
})

export default HomeScreen