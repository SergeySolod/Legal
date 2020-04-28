import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native'

const Posts = () => {
    return <View><FlatList /></View>
};

Posts.navigationOptions = {
    headerTitle: 'Posts page'
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Posts;
