import React, { Component } from 'react';
import {View,Text, Image, Button,
     TextInput, Dimensions, Alert,
     ImageBackground,  TouchableOpacity,
     StyleSheet, Picker, ScrollView, Platform} from 'react-native';
     import PasswordInputText from 'react-native-hide-show-password-input';
 

class Signup extends Component {
   
    static navigationOptions = {
        header: null,
    }; 
   constructor(props){
     super(props);
     this.state = {
         name:'',
         profiletype:'',
         mobileno:'',
         email:'',
         password:'',

         hidePassword:true,
     }
   }

   onRegister(){
     console.log(this.state)
   }
    
   managePasswordVisibility = () =>
   {
     this.setState({ hidePassword: !this.state.hidePassword });
   }

    render() {
        return (
            

            <ImageBackground
              source={{uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMWFRUXFxUVFxcXGBcVGBcXFRUXFhUVFRgYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHx0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLf/AABEIASwAqAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQAGB//EADwQAAEDAgQDBQcDAgQHAAAAAAEAAhEDIQQSMVEFQWETInGRoQYygbHB0fAUQuFi8RVScpIjM0NjgrLS/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIxEBAQACAgICAwEBAQAAAAAAAAECEQMSITETUQRBYXEiFP/aAAwDAQACEQMRAD8AHK4FQrBq9t5iwV+Sq1pXaapGghLvCaCDUCIRcuQ3GURzVEKiBIVHBHeEItT2QRUIhau7NNIcLg1E7NSGI2A8quGq4Cs1qWzVa1WyK8Lils1QFZdEKHD1/PggILlyquQTREIhQQVbOpUNmIVZBVQ6VVyQ2lwVCrhc9qAGWoZaigq/Zp7BVzUEp17ELspTlKlVyM+mRyQ3NTSorAhUIUhqBsSVIKoArAIG0kqQuyrpSNBUOC4FSGoJQBcihq5GwZNMq7WJkNVfgo2pFNoU5FW6JTYkaMoVTTRnCFTt/BACbh5R20Y10XNxfQFdWrgpeRuBvc1Bc9VcEMhVInaXHcoVQhWchEKoVqJXSFOVSAmSA5dnUwuyoCpcVwaiZFIakFQ1cZRMq4oMMhQrFcgNVzDqoyc0bLC4MWW1hFqGGndNZFzWI2RB7TugOatZtIEob8NJVTIrGZdEbU3TLsMhupQnuEDmCqUXIoNNMgCFSEyaa4MT2RbKrAJltMK7GBLYLBiKyh8EwHDZWLgltRU01BYmmmbJz/B3lsjVTcpPZyW+mPCqQtxns9VgEwNxNwFoUuAU4uCfjr5JXlxipxZV5NcvWVeF0qYzFui5KcsvqC8dnulhQIVezAWkcMudhpWfZfVluZOir2S0hhoXdkn2LqRpsOys+kfBPMYuqxsjY0yHU1SpTlPPpobmBVKjTPdSQ3NTtRAcFcqaVLVzWIrmquRNK1Km06mPgjfpGgSX/AC6AKaZwuDLiEr/AKc/wD9Ofy6kYGpIhpNp+H0XqMPhmNOgWlTojZY3m03x4NvJcNwNRz84aTl56R4yvXUGWE6prCUwDsj1GAiBa6wz5O1dPHxdYAA0qpojkjtoKwEErPbbTHx/Dy/9xAHqoW2QDquVzOxneKW7eemVB6qhcELtFtpz7FfVA0QXVeiqSoLgnpNqDU6INR5V3OJVHNTRaA4lUgphQfBVtJRzFTImyCuFGU9looaakUU52MLmUSdAjsNAUaIkTotTK1vu+PkhNwTk/wAP4dL++Lctis8so1wxvrS2DoTc67rapMACr+mDbN0V20jC58rt2YY9V3RqppuSrzCvScp0rZt4hUpi6k1ZC5rUlCEiFyqBC5AeVyKppJ4UFH6c7Lq24urPcxDLFpOwu6vSptHKUdi6MsUTsVJw7tivQU3N2UvaDyU/Iv4Z9vN5N1xYtfEUh4pPs1cy2yuGigpIzaSap0UTsUrTmBI0VAZsnxhlH6c7Jdj6A4dhJ6Dda9Cp3AXWSQpFpuIRlGXlrh4PiqDzVxWCzwVV1eNFHVr3N4iDoqtCnCVWkd7U+iLTptPMpH78hsKaa8IeIw2W8ghBBS9mfauSzXLktK2zHKWvTjcMEVtILW5RjMKzi47KGg7LRJbshvAR2HT+lS0xohguRyFIaOaey0XLOa4MRyBsqhqNloMMVy1XyqjkBLBdONIOizu0PJWpYo6DU2CVlOZyGa9IpYe9l5rWbg3mJI6pUUWiq7UZRaee5UyquIzMAIk3MW/subwIFvecZI12P1TWHEGT5J4wouVi+kv6eSDX03Fjo3+30TDCoxuEioSSSZmT6KuZaXyyk0f7SRBVKrIVaJBTRpyJhQ1nkoXlcr9kuQBsO2QiMYDz0UU6osE3TphK1UKupKopwnmtA5Ib6gS2NE3UTqAl3tK0g4nQKpok6nyVTIrizMhPIqOydsthtMBQWhHcujHGHcVcYWNU7VqCYStVyrdT1kDw1IF0Ew0evSU3UwTWkPYIg6fIpZszK0cJWBsUsrTxkHZWBhFZlNxCXzibItMws60c9gVgVziCgVqhGn4OaAT4pVEwFk0xJWnxG7Bl6eSzqQhaY+mOXsWm06jRaFGuYhJ0TYhEwpSqsRKroXK2KoXBBsd+S5JXkOJMBOirCVo2XPKKIcOJQ4m6VD03h3Ja0cozTI8FBej02hDqsg9FOzBL0vUeQmsqC+jPNXCpaoxLunROGiN0vVYqlZ5QESCiipzQXM6KmTqq0jdh6lW56pmpiAs6lGivKixpMjra8o3aNPw1Wa16OHS0hKxUoOMqDRuiXMRqrvYYuPugvom8Koi7EpORQkmvhMU3c5RYJTnaQRmuFCA+qFynStrtUgLgVbOqJLWpmi8BLh2ym41U1UOmpsrNfOqRbURKdRLR7MkID2uJgeaKehXIMtWwjrkEOHkUnnW5S0QXYBm5lOZfaLj9M7UJZ0Ap99DLbUJKowqpU2DDDgDNpzQXlM1Huy7jZIvciC+F5VnVcqA0SrVqlrJltV2JJKk1yQRyKX011Uhyek9qpUMKn6hXf6qhgC4AVM6kYhcsPjHGG0Wl22g3OwUJ6T3pfgXtoWwzENzNsM494Dcj93z8V7nBYulWaHUnBw1sbjxGoXxpgBva3gtHhuIfSqNq0z3gZtoRzaRzGqWWMvpWHJZ78vrmTqplJ8E4qzEUg9tjo5p1aduo2K0CBuFja6pqzcLuapa5GDC7RXGCMTN9kbg0vSYYRWuC7PaIQ3vCj2oZtUR0QqtcTZLMqSdgqYlzQJlOQtnaQ1nmg1WhJOxwGpgQgfrQT7wVTGpueJ2oLQknUxN0B3EgTrCBVx55Gd+iuY1nlyYtikGtaZGqyMTiGg63S2J4mTpy3WVUfeTzVY4fbLk5p6jSqYoaylncT2usutW3KUfiDoLeS16xz97WvX4qf4S1fHPcPCSb7CUkwdfPmsn2g4gGtyMIBObNEG3ITtqp/wAVN32zeK401Xa2Ex91yznHrKhTauH21LnKQYtbX4jktXAmYPMftM3+sLzmGzZnGALjnMnTboFo06ptFiES7gs1XraXEzQdmaSw2GXUEHcHlbUXuV7fh9dlZgc02Oom4Oxj8uvmVLHZw0PPu6HYWt1FvVPcN4q+k7umWm0aSPoUtbVM9f2PqdLEBggean9dNl5XDY0PGYE9QdR4ozq2yn440+dvvx/UJR/EBHPxWMOqpVd1VTCIvPTNbHOJMGAl6lcnUkobxAUNhX4Y3K32Jnadc076+nkhnxVXNhUlCdrl8IXbWuuqvDUk+qnIVo1WpAWfiMTHiq4h5mOfyQC6OpKafaHzqTc7KjX8yhueUrVrboqp/DWL4jlYctrRvrsvM1Xkkk6mPh+XR8RWLyY0E/3KzMXVABEwd7H0WWWUjfDG0pjsTFp+PLwXJUvm2vOeo9Fyy9+3RJJHpeH4Co/M5hLoBc5oAByhxEi19dOiljSTYzyvb4FU4ZFCoHuzupnO0jM4SM9og6gxHrutWrUAvTEtmc0yRmBt5GFWNsZ54yg0yG2E21lM0zygfHolKLJJa3qY8AT/AG8Vak+dVoxsbWD4iWaHbXbY7rdocWaQM1j5j7ryFMyQExSrZbfnwVJsesxGKINPLcOcQTa47N7rfFoRu0Xkm4qH0vecO0JIm0mk8cyvS0SDHIHfklBl6gj6iqKkKrqg2QSCVTO0Y1wqVa1pQXGECo6UaLdTUrE3VGPA7x5XjfZI1eK0w80yYLWkn4AOPoViD2jDsQ2kIg52k7uzDIWx0B80rnF48eVbTqhMnmZPmofbx5/ZZWM45Spvc0kyDlMbw02+Dj5LKxftMO0yiMkxPOLGfmllyYxePFlW/Xq7fnVZuKqGInUqtPHMIBBkEkWtcT9vVLDFB5JBkSRy1BUXkkVjx0vxGpl7oi4vp166rIqFx1uftymFp4fBurFzgQwA5QHau/i6Tr4UNeWvJBB1ExptC57y42+3TJJCbR4De4XI4pjRxJPLb1XI7w3oKD4DRci+otf+wRRSynu+4YtMnxHX7JAVS2IiJ6bfn5CsMWef5Kyx/Kn0myZNMtdTIPgQdRfT/SUWvkPeYCN2TN927jpy+QqeJD6ZDr5eZIENJFr68zCT/VDN7wI0EGb9Dt4LSflcf2yyx14aDQR8wU0x8nQLKHEItvp5/gXO4nlMltoEHkDJvKqflcaZjtpVgJpxbvdf8rr/AJutjh/EYOV1gdDyn6LzFTHZmBzQLEmZ5wQLealnGmuJbA7ok94DqdU5+Vx7vk8sdx7wAKHOheSwntA8d1rWuA3Ol46I1T2icR7rN9YnzPRV/wCni+2Xx1uVHyUJxheaxPHq7iMjANJgs1MSO87kSk8TXrPa6HEu5tzR0tBgJX8zjOcNYPEMWXVqrxFy4az0MH7rNDyIeDoQfj+BNswFae83WSTmb5kz8UBuEfJaGkxebRbrp6rKZy/t3SQLGOJfmP7rzbp5IRWnT4VVflaWEzBBBaTF+8L3ENd/tOy9VjvY2lTawszVJI7znNIIkzAZF9E5lKNx4plUxr7sOHw/j5JnAuAnWDeQTYzY+votapw3KLU47p03Lasf+rfNRjsAWteCIzdtlvNhVa/TkpyssFiaL3g94BtjDnAiCLw4ZdTfyKer0c4PbZmkE6TDXDuwIkuuOW6SxuDqf8UODmg1G1GHK6XMca0FttII6JviNasST2RyAsfmgjm117DfdY3CbLTHw9HMH96S1heCBGj2g662JMdCuT/BeHO/UZHCGubUpSSNKjS0O8nArlepfMGUm2DiMSWwQRBgEExq6dOegPwQxxAuII0Fpzam2gXpaXEWsptFOk5wc3LDMPhma371TK5xHU3SHGe3rlhNKocrQAalXPqB3WtgZQDyGqUmE9nJIDhXvdZjHumB3RIJJBGabC8KwZWJh7O/mDXZnskHxLpPwkXWxwDgGKc21Ihtjm7Ea2/6lYQB8Y1W9R9iKrjmqYlwmCWipa39NEZdtSo/5+tjxXksRw2u0gnIJP8AVl5xfLHkUTH8LHZh3aAvi7QGlpuNCKmbT+kr31H2KwszUzVHTMkNaZ3vmPlC2sPwigz3aTf/ACl/o4keQTmN/UKTX6fJMNhHkQwPeeTWM53uM4Ej8hejwHsa53e/TvGZgB7R5pkEDaRyjyX0amA0Q0QNmgNHkFaVfx0PE0PYN0kufTaCBYGo8gjqSLc9U9Q9haIADqjneDGD55vwnderpZf3uyjwJJ8B94QnYmD3CRsdCqnHiGJR9isI1sEOI0uWTp/S0HkEVvs3g26Uj8Xv8YgGE+6p1KC5xVagLt4Nhh7tIDwL/utJnDKT2ZGtbn0DXAEEAWyTaeh15JZp8UQPT1Ax3YZ9J3/LbDQbtaGuBAMAtAm2Y2ukaT2xlzEf0nkSTuNZuvatq06wy1jldo2rz6CpuOqyeL8KNMxVaCP2u1B6tdyXHyfi7842wXH6rEwLQ0Q92Z062Aib+FpUYsNJlrbkGIjb+PVUxfDSTLHT0d9x4c0pVrOZILC0Adbx1FguPPi5cfPtFuU9w1xVrgKObM0mjTIBHwGlhMG3VZ3GADh/e1AGxkEWg35J7HcQD+zc/wDYxlMZYcTBMTmIH7hzWRxDi8GBh6jgDEuqNaNwQAwkc+a0w7ZZf8w5e1Z9K1RhMwWgn49w/L1XK3+Lua6RhaMiPffVdobWDmhcuucWdjTrv29zhuA4ZmlMuP8A3Hkj/azLHmVpUKbWe4xjP9DWtP8AuAzeqFnC41VpMMZ6hTx6NEkmSb7m58ypkJPtV3aHdWDvaKM6WCNSx5pGWRm3IDo8JBhMNCjw92XPUIps3daf9LdSka2IaDDSSNyI9Elisa+ocz3Enr8h0QUA66sOajtQk5gIUJk0RVlVdUSjX+Cq6qUj0a7bwVhWSJJ1CgPcmNNHtlp4DiwDezqjPSPI3LerfzwXnSSrB6A3eJcB7va4Y9pTN4F3D/6+a8653IrT4bxN9F0sNj7zTo77HqtzEYChjWl9M5KvPef6xzHUfwp0qPAYrhzHXBynceemhWRj8E+ZMPA8Aei9PxLhlSi7LUBGx1B6g80k6nussuLGlcMa8dicKLHK0QLggN1EQuXrm04uInq0H5qVj8WU9J+H+tAPVg9BYCruqBuq61jAFFaYWY/GHkEB1UnfzlA01a2MAtKW/VDfdIj8+Ks0H+E9A7+olW7ayVaispzy1TJz8SZsrtrnohvaBayFn9PugaMnFRyCj9QlMysANuX5zSPRoV1xqpbNZSKonWUxoftfFUGKHXyKoXhQ12qCMNrFHw2Lexwcw5SNCPkdws81FZtdIPd8O4rSxTezrNGb/KdHdWdfULD477Nvpy+l32akRLm/Ae8Oo/lYYq9b2+9l6jgftPoyuegf9H/fz3Qp4w1CuXveOezdOuC+nDKms/tcf6gPmPVQlo3in4iPz5patiJSdZ59VFPXU3j1MJkaZU30t11Vmm+v0S9MWn8/LK559PWRN0wZa8R1lFc6bettfyUk530RG/WPQoI4HQofXAFvz4IBGp2n6/ZLu59P4+6APnm8qDJQ2D6KQ7T83SNawXNPX+/NDc7vR0+qkO/PBMCn85rgOqFMfnVSD9fRAFnxXNcqMv8AnioHzQBBUsqOcqUhMeMKzmwSgnCrFkQPsgQrNakbf4J7ROow1/ep+rPDcdPLrK86TcKUG//Z'}}
              style={styles.image}>

             
              <View style={{
                width:Dimensions.get('window').width-20,
                marginBottom:20
                
                    }}> 
                   <ScrollView>
                <TouchableOpacity style={{marginTop:20, marginBottom:30, }} onPress={()=> this.props.navigation.navigate('login')}>
                  <Text style={{backgroundColor:'#fff', padding:12, 
                  fontSize:20,textAlign:'center', color:'#f57f22',}}>Have an account? Login</Text>
                </TouchableOpacity>

                <TextInput  
                  style={{ backgroundColor:'white', marginBottom:5,padding:12}}
                  placeholder="Full Name"
                  onChangeText={(name) => this.setState({name: name})}
                  />
                
                <View  style={{height: 50,backgroundColor:'white', marginBottom:5,}}>
                <Picker
                    mode="dropdown"
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemIndex) => this.setState({profiletype: itemValue})}>
                    <Picker.Item label="SELECT" value="" />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                </View>
                <TextInput  
                  style={{backgroundColor:'white', marginBottom:5,padding:12}}
                  placeholder="Mobile No"
                  onChangeText={(contact) => this.setState({mobileno: contact})}
                />     
                
                <TextInput  
                  style={{backgroundColor:'white', marginBottom:5,padding:12}}
                  placeholder="Email ID"
                  onChangeText={(email) => this.setState({email: email})}
                  />
                {/* <TextInput  
                  style={{backgroundColor:'white', marginBottom:20,padding:12}}
                  placeholder="Password"
                  onChangeText={(pass) => this.setState({password: pass})}
                  /> */}
                <View style = { styles.passwordview }>
                  <TextInput underlineColorAndroid = "transparent" 
                  secureTextEntry = { this.state.hidePassword } 
                  style = { styles.password }
                  placeholder="Password"/>
                  <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
                    <Image source = { ( this.state.hidePassword ) ? require('../../images/hide.png') : require('../../images/show.png') } style = { styles.btnImage } />
                  </TouchableOpacity>
                </View>


                <TouchableOpacity 
                  onPress={() => this.onRegister()}                   style={{marginTop:10, marginBottom:20,}} >
                  <Text style={{backgroundColor:'#8cc63f', color:'#fff', padding:12, 
                  fontSize:20, textAlign:'center'}}>Sign Up</Text>
                </TouchableOpacity>

            
                <Text style={{marginTop:15 ,textAlign:'center', color:'#fff', fontWeight:'800'}}>
                    Classic House, #678, 2nd Floor, 17th Main, 6th A Cross, 3rd Block, Koramangala, Bengaluru, Karnataka 560034
                </Text>
                </ScrollView>
              </View>
             
            </ImageBackground>
        
        );
    }
}

export default Signup;

const styles = StyleSheet.create({
    image: {
      flexGrow:1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },

// --------password field -------
    passwordview:
    {
      position: 'relative',
      alignSelf: 'center',
      justifyContent: 'center',
      width: Dimensions.get('window').width-20,
      backgroundColor:'#fff',
      marginBottom:5,
      padding:12
    },
  
    password:
    {
      fontSize: 18,
     
      paddingVertical: 0,
      borderColor: 'grey',
      borderRadius: 5
    },
  
    visibilityBtn:
    {
      position: 'absolute',
      right: 3,
      height: 40,
      width: 35,
      padding: 5
    },
  
    btnImage:
    {
      resizeMode: 'contain',
      height: '100%',
      width: '100%'
    },
// -------password field end-----------    
  

});