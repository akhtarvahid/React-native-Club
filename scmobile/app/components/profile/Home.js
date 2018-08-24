import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends Component {
    render() {
        return (
            <View>
                <Text>HOME</Text>
                <Icon name="rocket" size={30} color="#900" />
                <Icon name="music" size={50} color="#4F8EF7" />
                <Icon name="search" size={50} color="#4F8EF7" />
            </View>
        );
    }
}

export default Home;