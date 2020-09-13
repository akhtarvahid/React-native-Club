import React, { Component } from 'react';
import {View} from 'react-native'
import Header from './src/components/Header'
import Albumlist from './src/components/Albumlist'
// export default class App extends Component{
// 	render() {
// 		return(
//          <View>
//            <Header />
//          </View>

// 	   )
// 	}
// }
const App = () =>{
	 return(
	  <View> 	
       <Header />
        <View>
          <Albumlist />
        </View>
	 </View>
	 )
}

export default App;