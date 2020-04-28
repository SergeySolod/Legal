import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native'

const Home = (props) => {
    const goPosts = () => {
        props.navigation.navigate('Posts')
    }
    const goAddPost = () => {
        props.navigation.navigate('Add')
    }
    return (
        <View style={styles.center}>
            <Text>
                Dr. Sigurdsson is a cardiologist at the Department of Cardiology at The Landspitali University Hospital
                in Reykjavik Iceland. He also practices cardiology at Hjartamidstodin (The Heart Center) which is a
                private heart clinic in the Reykjavik area. He is a Fellow of the American College of Cardiology (ACC),
                The Icelandic Society of Cardiology and the Swedish Society of Cardiology. He is a past president of the
                Icelandic Cardiac Society.
            </Text>
            <Button title='Posts' onPress={goPosts}/>
            <Button title='Add post' onPress={goAddPost}/>
        </View>
    );
};

Home.navigationOptions = {
    headerTitle: 'Home page'
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Home;
