import React from "react";
import {View, Text, StyleSheet} from 'react-native'

const Change = () => {
    return (
        <View style={styles.center}>
            <Text>
              Post page
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

export default Change;
