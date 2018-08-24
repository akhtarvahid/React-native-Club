import React, {Component } from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

export default class HamburgerIcon extends Component {

    toggleDrawer = () => {
      console.log(this.props.navigationProps);
      this.props.navigationProps.toggleDrawer();
    }
    render() {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
            <Image
              source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png' }}
              style={{ width: 25, height: 25, marginLeft: 15 }}
            />
          </TouchableOpacity>
        </View>
  
      );
  
  
    }
  }