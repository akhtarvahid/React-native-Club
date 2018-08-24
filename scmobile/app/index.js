import React, {Component} from 'react';
import {StyleSheet, Text, View, 
  ActivityIndicator,
  Image, Dimensions } from 'react-native';


import Login from './components/profile/Login';
import Signup from './components/profile/Signup';
import Home from './components/profile/Home';
import ForgotPassword from './components/profile/ForgotPassword';
import MainScreenNavigator from './components/MainScreenNavigator';
import LoginNext from './components/profile/Login2';
import HamburgerIcon from './components/drawer/HamburgerIcon';
import Custom_Side_Menu from './components/drawer/Custom_Side_Menu';
import Demoday from './components/drawer/Demoday';
import Contact from './components/drawer/Contactus';


import reducers from './reducers'
import { createStackNavigator, createDrawerNavigator,
   } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';


class App extends Component{


  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
        <MyDrawerNavigator />
      </Provider>
    );
  }
}



const homeStack = createStackNavigator({
   home: { screen:MainScreenNavigator, navigationOptions:{
    title: 'main'
     },
     navigationOptions: ({ navigation }) => ({
      title: 'main',
      headerLeft: <HamburgerIcon navigationProps={navigation}  />,

      headerStyle: {
        backgroundColor: '#FF9800'
      },
      headerTintColor: '#fff',
    })
    },
}) 

const loginStack = createStackNavigator({
  login: {screen: Login, navigationOptions:{
        title: 'STARTUPS CLUB',
        headerRight: 
            <View style= {{flexDirection:"row",alignItems:"center",marginRight:15}}>
                <View  style= {{marginLeft:10}}>
                 <Image source={{uri:'https://eabiawak.com/wp-content/uploads/2017/07/photo.png'}}
                   style={{height:45,width:45}}
                 />
                </View>
            </View>
        },
    }
})

const login2Stack = createStackNavigator({
  login2: {screen: LoginNext, navigationOptions:{
        title: 'Login',
        headerStyle:{
          backgroundColor: '#f57f20'
        },
        headerTintColor: '#fff'
        }
    },
})

const signupStack = createStackNavigator({
  signup: {screen:Signup, navigationOptions:{
    title: 'Signup',
    headerStyle:{
      backgroundColor: '#f57f20'
    },
    headerTintColor: '#fff'
   }
  }
})

const ForgotPasswordStack = createStackNavigator({
  ForgotPassword: {screen:ForgotPassword, navigationOptions:{
    title: 'Forgot Password',
    headerStyle:{
      backgroundColor: '#f57f20'
    },
    headerTintColor: '#fff'
   }
  }
})


// ------------drawer layout-----------------
export default MyDrawerNavigator = createDrawerNavigator({
  Login:{
    screen:loginStack, navigationOptions:{
      drawerLockMode: 'locked-closed'
    }
  },

  Login2:{
    screen: login2Stack,navigationOptions:{
      drawerLockMode: 'locked-closed'
    }
  },

  signup: {
    screen: signupStack, navigationOptions:{
      drawerLockMode: 'locked-closed'
    }
  },

  forgotpassword:{
    screen: ForgotPassword, navigationOptions:{
      drawerLockMode: 'locked-closed'
    }
  },

  home: {
    screen: homeStack
  },
 
},
  {
    contentComponent: Custom_Side_Menu,
    drawerWidth: Dimensions.get('window').width - 130,
  
});
