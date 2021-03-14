import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import BookDetails from '../components/BookDetails';
import { withNavigation } from 'react-navigation';

const BookList = ({ title, books, navigation }) => {

    //if(!books.lenght){
    //    return null;
    //}

    return <View >
        <View style={style.titleViewStyle} >
            <Text style={style.titleStyle}>{title}</Text>
            <Text style={style.countBooksTextStyle}>(50)</Text>
            <Text style={style.seeAllButtomStyle}>See All</Text>
        </View>
        <FlatList
            style={{ paddingLeft: 10 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={books}
            keyExtractor={(book) => { book.id }}
            renderItem={
                ({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => { navigation.navigate("BookShow", {id:item.id}) }}>
                            <BookDetails book={item.volumeInfo} />
                        </TouchableOpacity>)
                }
            } />
    </View>
};

const style = StyleSheet.create({

    titleViewStyle: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,

    },

    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginRight: 5,

    },
    seeAllButtomStyle: {
        marginRight: 15,
        alignSelf: "flex-end",
        fontWeight: "bold",
        color: "#808080",
        fontSize: 12,

    },
    countBooksTextStyle: {
        flex: 1,
        fontWeight: "bold",
        fontSize: 14,
        color: "#734bcc"

    }
});

export default withNavigation(BookList);