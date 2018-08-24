import React, {Component} from 'react';
import {View,Text,Image, StyleSheet} from 'react-native';

export default class Custom_Side_Menu extends Component {

    render() {
  
      return (
  
        <View style={styles.sideMenuContainer}>
  
          <Image source={{ uri: 'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-business-man-399587fe24739d5a-512x512.png' }}
            style={styles.sideMenuProfileIcon} />
          <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15}} />
  
          <View style={{width: '100%'}}>
  
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/08/social.jpg' }}
                style={styles.sideMenuIcon} />
                <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('demoday') }} > Demoday </Text>
              </View>
  
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/08/promotions.jpg' }}
                style={styles.sideMenuIcon} />
                <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('contact') }} > Contact </Text>
              </View>
  
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/08/outbox.jpg' }}
                style={styles.sideMenuIcon} />
                <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('Third') }} > Scincurator </Text>
              </View>

              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/08/social.jpg' }}
                style={styles.sideMenuIcon} />
                <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('First') }} > About </Text>
              </View>
  
  
         </View>
  
         <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15}} />
  
  
        </View>
      );
    }
  }

  const styles = StyleSheet.create({

    MainContainer: {
  
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  
    },
  
    sideMenuContainer: {
  
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 20
    },
  
    sideMenuProfileIcon:
    {
      resizeMode: 'center',
      width: 100, 
      height: 100, 
      borderRadius: 150
    },
  
    sideMenuIcon:
    {
      resizeMode: 'center',
      width: 28, 
      height: 28, 
      marginRight: 10,
      marginLeft: 20
      
    },
  
    menuText:{
  
      fontSize: 15,
      color: '#222222',
      
    }
  
  });