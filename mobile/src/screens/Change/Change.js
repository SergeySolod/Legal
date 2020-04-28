import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import Posts from "../Posts/Posts";

const Change = () => {
    return (
        <View style={styles.center}>
            <Text>
              Post page
            </Text>
        </View>
    );
};

Change.navigationOptions = {
    headerTitle: 'Change page'
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Change;
