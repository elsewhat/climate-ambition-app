import React, { Component } from 'react';

import OverviewPage from './OverviewPage'
import store from '../store/config';
import { Provider } from 'react-redux'
//import { MenuProvider } from 'react-native-popup-menu';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//import AppNavigator from '../navigation';


const MainNavigator = createAppContainer(createStackNavigator(
  {
    Overview: OverviewPage
  },
  { 
    initialRouteName: 'Overview'
  }
));



export default class App extends Component {
  componentDidMount() {
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    );
  }
}

/*
        <MenuProvider>
          <AppNavigator ref={(ref) => { setNavigator(ref); }} />
        </MenuProvider>
        */
