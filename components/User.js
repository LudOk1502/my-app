import React from "react";
import {FlatList, StyleSheet} from "react-native";
import {View, Text, Button, TouchableOpacity} from "react-native";

const User = ({item}) => {

    return (
        <View style={[styles.userBox, styles.margins, styles.sizes]}>
            <Text>{item.name}</Text>
        </View>
    );
}

export {User};
let styles = StyleSheet.create({
    userBox: {
        flex: 1,
        backgroundColor: 'coral',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    margins: {
        marginBottom: 3
    },
    sizes: {
        height: 50,
    }
})