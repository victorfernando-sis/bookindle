import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const BookDetails = ({ book }) => {
    return <View >
        <View style={style.viewBookDetailsStyle}>

            <Image style={style.imageStyle} source={{ uri: book.imageLinks.thumbnail }} />
            <Text style={style.authorStyle} numberOfLines={1}>{book.authors}</Text>
            <Text style={style.titleStyle} numberOfLines={1}>{book.title}</Text>
        </View>
    </View>
};

const style = StyleSheet.create({

    titleStyle: {
        fontSize: 13,
        width: 110,
        alignSelf: "center",
        fontWeight: "bold"
    },
    authorStyle: {
        fontSize: 12,
        width: 110,
        color: "#808080",
        textAlign: "center",
        alignSelf: "center",
        marginBottom: 5
    },

    imageStyle: {
        width: 110,
        height: 160,
        borderRadius: 7,
        margin: 5,
    },
    viewBookDetailsStyle:{
        backgroundColor: "#FFFF",
        marginHorizontal: 4,
        padding: 5,
        borderRadius:7,

        shadowColor: 'black',
        shadowOpacity: 0.04,
        shadowOffset: { width: 1, height: 5},
        shadowRadius: 2,
        elevation: 3,

    }
});

export default BookDetails;