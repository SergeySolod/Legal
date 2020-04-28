import React from "react";
import {View, Text, StyleSheet} from 'react-native'

const Home = () => {
    return (
        <View className="row">
            <Text>
                Dr. Sigurdsson is a cardiologist at the Department of Cardiology at The Landspitali University Hospital
                in Reykjavik Iceland. He also practices cardiology at Hjartamidstodin (The Heart Center) which is a
                private heart clinic in the Reykjavik area. He is a Fellow of the American College of Cardiology (ACC),
                The Icelandic Society of Cardiology and the Swedish Society of Cardiology. He is a past president of the
                Icelandic Cardiac Society.
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

export default Home;
