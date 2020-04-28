import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import Change from "../Change/Change";

const Add = () => {
    return (
        <View style={styles.center}>
            <Text>
              Add post page
            </Text>
        </View>
    );
};

Add.navigationOptions = {
    headerTitle: 'Add page'
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Add;
