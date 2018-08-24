import React, { Component } from 'react';
import { View, Text} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Home from './profile/Home';
import Demoday from './drawer/Demoday';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const MainScreenNavigator = createMaterialBottomTabNavigator({
    home: {screen: Home,
        navigationOptions:
        {
          tabBarIcon: <Icon size={40} color="#f57f20" name="home"/> 
        }
    },

    demoday: {screen:Demoday,
      navigationOptions:
        {
          tabBarIcon: <Icon size={40} color="yellow" name="contacts"/> 
        }
    },

    Meetup: {screen:Demoday,
      navigationOptions:
        {
          tabBarIcon: <Icon size={40} color="yellow" name="contacts"/> 
        }
    },

    Locate: {screen:Demoday,
      navigationOptions:
        {
          tabBarIcon: <Icon size={40} color="yellow" name="contacts"/> 
        }
    },

   }, {
    initialRouteName: 'demoday',
    activeTintColor: '#f0edf6',
    inactiveTintColor: '#3e2465',
    barStyle: { backgroundColor: '#8cc63f' },
  //     tabBarOptions: 
  //     {
  //        activeTintColor: '#f57f20',
  //         showIcon:true,
  // //       showLabel:true,
  // //       style: 
  // //       {
  // //         backgroundColor: "grey",
         
  // //       },
  //      },
  // //     tabBarPosition: "bottom",
  //      swipeEnabled: true,
  //     lazyLoad: true,
  //     animationEnabled: false,
  })


export default MainScreenNavigator;