import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet} from "react-native";
import {View, Text, Button, TouchableOpacity} from "react-native";
import {getUsers} from "../service/api.service";
import {User} from "./User";

const Users = () => {
    let [users, setUsers] = useState();
    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])
    return (
        <View style={styles.usersView}>
            <FlatList data={users} renderItem={({item}) => {
                return <User item={item}/>
            }} keyExtractor={item => '' + item.id}/>
        </View>
    );
}
export {Users};
let styles = StyleSheet.create({
    usersView: {
        marginTop: 70,
    }
})