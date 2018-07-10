import React from 'react'
import {View ,Text, StyleSheet} from 'react-native'


const Header = (props) => {
	  
		const {header, headerText}=styles;

		return(
         <View style={header}>
            <Text style={headerText}>{ props.headerText }</Text>
         </View>
	);
};

export { Header };

const styles=StyleSheet.create({
	header:{
		backgroundColor:'#DCDCDC',
		justifyContent:'center',
		alignItems:'center',
		shadowColor: '#000',
		shadowOpacity: 0.9,
		shadowOffset: {width: 0, height: 2},
		height: 60,
		paddingTop:15,
		elevation: 2,
		position: 'relative'
	},
	headerText:{
		fontSize: 20,
		padding:15,
		color:'black'
	}
})