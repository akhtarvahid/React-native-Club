import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component{
	componentWillMount(){

		var config = {
    apiKey: 'AIzaSyC3COsgsUbMKwEFyr3hG4fc-5wgrOm6hN0',
    authDomain: "manager-83a19.firebaseapp.com",
    databaseURL: "https://manager-83a19.firebaseio.com",
    projectId: "manager-83a19",
    storageBucket: "manager-83a19.appspot.com",
    messagingSenderId: "7229850911"
  };
  firebase.initializeApp(config);
	}
	render() {
		return(
       <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
				 <Router />
       </Provider>
		)
	}
}

export default App;
