import React from "react";
import {View, Text, StyleSheet} from 'react-native'

const Posts = () => {
    return (
        <View style={styles.center}>
            <Text>
              Posts page
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Posts;
