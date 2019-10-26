/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import OverviewPage from './OverviewPage'
import store from '../store/config';


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


const MainNavigator = createStackNavigator(
  {
    Overview: OverviewPage
  },
  { 
    initialRouteName: 'Overview'
  }
);


export default class App extends Component {
  componentDidMount() {
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <Provider store={store}>
        <MenuProvider>
          <AppNavigator ref={(ref) => { setNavigator(ref); }} />
        </MenuProvider>
      </Provider>
    );
  }
}
