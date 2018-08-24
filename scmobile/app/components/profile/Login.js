import React, {Component} from 'react';
import { StyleSheet, Text, View,
   Image, Dimensions,
   TouchableOpacity } from 'react-native';
import Carousel from 'react-native-carousel-view';

const {height, width} = Dimensions.get('window');
export default class Login extends Component {
    
    static navigationOptions = {
        header: null,
    };
    


  render() {
    return (
      <View style={{ flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
          alignItems:'center'}}>
        <View style={styles.container}>
          <Carousel
            width={width}
            height={height}
            delay={2000}
            indicatorAtBottom={true}
            indicatorSize={10}
            indicatorText="✽"
            indicatorColor="#f57f20"
            >
            <View style={styles.contentContainer}>
              <Image source={{uri:'https://qph.fs.quoracdn.net/main-qimg-e66d47d5088a2d65f5f6de2875daa170-c'}}
              style={{width: '100%', height: '100%'}}
              resizeMode='cover' />
            </View>
             
            <View style={styles.contentContainer}>
              <Image source={{uri:'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&h=350'}}
                style={{width: '100%', height: '100%'}}
                resizeMode='cover' />
            </View>
            <View style={styles.contentContainer}>
              <Image source={{uri:'https://78.media.tumblr.com/8b43b02bf7b27be82550b6366ac9b6c7/tumblr_ohgj6eKFmP1ub9aago3_500.jpg'}}
                style={{width: '100%', height: '100%'}}
                resizeMode='cover' />
            </View>
          </Carousel>
        </View>
        <View style={{ padding:5, marginLeft:10, marginRight:10 }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('login2')}>
            <Text style={{textAlign:'center',fontSize:20, padding:12, backgroundColor:'#f57f20', color:'#fff' }}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> this.props.navigation.navigate('signup')} style={{ padding:10}}>
            <Text style={{color:'#f57f20', fontSize:20, textAlign:'center'}}>Not registered? Signup</Text>
          </TouchableOpacity>

          <Text style={{ textAlign:'center', color:'#000'}}>
              Classic House, #678, 2nd Floor, 17th Main, 6th A Cross, 3rd Block, Koramangala, Bengaluru, Karnataka 560034
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   height:height,
   width:width,
  },
  contentContainer: {
    borderWidth: 2,
    borderColor: '#CCC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});