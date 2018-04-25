import React, {Component} from 'react'
import {View ,Text, StyleSheet} from 'react-native'


class Header extends Component{
	
	render() {

		const {header, headerText}=styles;

		return(
         <View style={header}>
            <Text style={headerText}>Albums </Text>
         </View>
		)
	}
}
export default Header;

const styles=StyleSheet.create({
	header:{
		backgroundColor:'#DCDCDC',
		justifyContent:'center',
		alignItems:'center',
		shadowColor: '#000',
		shadowOpacity: 0.9,
		shadowOffset: {width: 0, height: 2},
	},
	headerText:{
		fontSize: 20,
		padding:15,
		color:'black'
	}
})