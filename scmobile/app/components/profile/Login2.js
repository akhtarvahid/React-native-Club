import React, { Component } from 'react';
import {View,Text, Image, Button,
     TextInput, Dimensions, 
     ImageBackground,  TouchableOpacity,
     StyleSheet} from 'react-native';
//import { TextField } from 'react-native-material-textfield';
//let deviceWidth = Dimensions.get('window').width;
const { mywidth, myheight } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => mywidth / guidelineBaseWidth * size;
const verticalScale = size => myheight / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

class Login2 extends Component {
    static navigationOptions = {
        header: null,
    };
   
         constructor(props){
             super(props);
         state = { 
          username: "vaheed",
          password: "akhtar"
          };
     }
      
      onEmailChange = (text) =>{
       this.setState({ username:text })
      }
      onPasswordChange = (text) => {
        this.setState({ password:text })
      }
  
   loginProfile = () => {
        if(this.state.username === 'user'){
          if(this.state.password ==='pass'){
             this.props.navigation.navigate('home');
           }else{
              alert('invalid password');
           }
         }else if(username === '' && password === ''){
            alert('please fill fields');
         }else{
             alert('invalid username')
         }
        console.log('work in progress')
       // this.navigation.navigate('Login')
       // this.props.navigation.navigate('home')
       
   }

    render() {
        
        return (
            <View
            style={styles.container}
          >
            <ImageBackground
              source={{uri: 'https://images.unsplash.com/photo-1424819827928-55f0c8497861?fit=crop&w=600&h=600'}}
              style={styles.image}>

              <View style={{
                   flex: 1,
                   flexDirection: 'column',
                   justifyContent: 'flex-end',
                     alignItems:'center'}}>  
                
                <TextInput  
                  style={{backgroundColor:'white', marginBottom:5,width:Dimensions.get('window').width-20,padding:12}}
                  placeholder="Enter your username"
                  onChangeText={this.onEmailChange}
                  />
                <TextInput  
                  style={{backgroundColor:'white', marginBottom:15,width:Dimensions.get('window').width-20 ,padding:12}}
                  placeholder="Enter your password"
                  onChangeText={this.onPasswordChange}
                  />
                <TouchableOpacity style={{marginTop:20}} onPress={this.loginProfile}>
                  <Text style={{backgroundColor:'#f57f20', color:'#fff', padding:15, 
                  fontSize:20, width:300, textAlign:'center'}}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('forgotpassword')} style={{marginTop:20}}>
                 <Text style={{fontSize:20, color:'#f57f20'}}>Forgot your password ?</Text>
                </TouchableOpacity>
                <Text style={{marginTop:30 ,textAlign:'center', color:'#fff', fontWeight:'800'}}>
                    Classic House, #678, 2nd Floor, 17th Main, 6th A Cross, 3rd Block, Koramangala, Bengaluru, Karnataka 560034
                </Text>
              </View>
              
            </ImageBackground>
          </View>
        );
    }
}

export default Login2; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
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