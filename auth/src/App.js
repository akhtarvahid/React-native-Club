import React, { Component } from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = { loggedIn: null };

    componentWillMount(){
     firebase.initializeApp({
	    apiKey: 'AIzaSyBGmgn_vsi5VZ1Ppf9Wk_PK5QzzUUiHKFU',
	    authDomain: "myfirebaseauthapp-5a196.firebaseapp.com",
	    databaseURL: "https://myfirebaseauthapp-5a196.firebaseio.com",
	    projectId: "myfirebaseauthapp-5a196",
	    storageBucket: "myfirebaseauthapp-5a196.appspot.com",
	    messagingSenderId: "706130523857"
     
     })

     firebase.auth().onAuthStateChanged((user) =>{
    	if(user){
    		this.setState({loggedIn: true});
    	}else{
    		this.setState({loggedIn: false});
    	}
    });
    }
    
    

     renderContent(){
     switch(this.state.loggedIn){
        	case true:
        	     return (
        	     	<Button onPress={() => firebase.auth().signOut()}>
        	     	Log Out
        	     	</Button>
                 );

        	case false:
        	     return <LoginForm />;
        	default:
        	     <Spinner size="large" />;

        }
    }


	render(){
	return(
     <View>
       <Header headerText="Authentication"/>
       <View style={{height:50}}>
         {this.renderContent()}
       </View>
     </View>
	)
}
}
 
 export default App;