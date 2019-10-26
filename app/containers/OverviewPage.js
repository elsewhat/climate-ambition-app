import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import {
    getAmbitionHeadersAsList,
    getIsFetching
} from '../store/ambition-header/reducer';
import * as actions from '../store';

class OverviewPage extends Component {

    componentWillMount() {
        console.log("OverviewPage")
        loadAmbitionHeaders();
      }

      renderItem = ({ item }) => (
        <ListItem
          title={item.name}
          subtitle={item.subtitle}
          leftAvatar={{ source: { uri: item.avatar_url } }}
          bottomDivider
          chevron
        />
      )
      
      render() {
        return (
          <>
          <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <FlatList
            keyExtractor={this.keyExtractor}
            data={ambitionHeaders}
            renderItem={this.renderItem}
          />
          </>
        );
      };
}

const mapStateToProps = state => ({
  ambitionHeaders: getAmbitionHeadersAsList(state)
});

const mapDispatchToProps = dispatch => (
  {
    loadAmbitionHeaders: text => dispatch(actions.fetchAmbitionHeaders),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(OverviewPage);   