import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {View, Text, StyleSheet, FlatList} from 'react-native'

const Posts = () => {
    useEffect(() => {
       console.log('asd')
    }, [])
    return <View style={styles.wrapper}><FlatList /></View>
};

Posts.navigationOptions = {
    headerTitle: 'Posts page'
}

const styles = StyleSheet.create({
    wrapper: {
       padding: 10
    }
})

const mapStateToProps = state => {
    return {

    };
};

export default connect(mapStateToProps, {})(Posts)