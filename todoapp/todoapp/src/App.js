import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Layout from './layout';
import { Component } from 'react';
import store from './store';
import Main from './main';

 class App extends Component{
  render(){
    return(
      <Provider store= {store}>
        <Main />
      </Provider>
    )
  }
 }
export default App;