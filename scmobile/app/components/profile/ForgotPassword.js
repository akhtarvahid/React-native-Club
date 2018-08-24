import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity,
       TextInput, Button, ImageBackground, Dimensions,
       StyleSheet} from 'react-native';

class ForgotPassword extends Component {
    render() {
        return (
            <View
            style={styles.container}
          >
             <View style={{width:Dimensions.get('window').width}}>
              <View style={{
                   flex: 1,
                   flexDirection: 'column',
                   justifyContent: 'center',
                     alignItems:'center'}}>  
                
                <TextInput  
                  style={{backgroundColor:'white', marginBottom:5,padding:12}}
                  placeholder="Enter your username"
                  onChangeText={this.onEmailChange}
                  />
                <TextInput  
                  style={{backgroundColor:'white', marginBottom:15,padding:12}}
                  placeholder="Enter your password"
                  onChangeText={this.onPasswordChange}
                  />
                <TouchableOpacity style={{marginTop:20}} onPress={this.loginProfile}>
                  <Text style={{backgroundColor:'#f57f20', color:'#fff', padding:15, 
                  fontSize:20, textAlign:'center'}}>Reset Password</Text>
                </TouchableOpacity>  
              </View>

              <View style={{marginBottom:20}}>
                  <Text style={{marginTop:30 ,textAlign:'center', color:'#fff', fontWeight:'800'}}>
                    Classic House, #678, 2nd Floor, 17th Main, 6th A Cross, 3rd Block, Koramangala, Bengaluru, Karnataka 560034
                </Text>
              </View>
            </View>  
            
          </View> 
        );
    }
}

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    image: {
      flexGrow:1,
      height:null,
      width:null,
      alignItems: 'center',
      justifyContent:'center',
    },
  });