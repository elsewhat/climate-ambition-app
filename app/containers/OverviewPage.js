import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ListItem,Header,FlatList} from 'react-native-elements'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import {
    getAmbitionHeadersAsList,
    getIsFetching
} from '../store/ambition-header/reducer';
import * as actions from '../store';

class OverviewPage extends Component {
  static propTypes = {
    ambitionHeaders: PropTypes.array.isRequired,
    loadAmbitionHeaders: PropTypes.func.isRequired,
  }

      componentDidMount() {
        //console.log(this.props)
        //this.props.loadAmbitionHeaders();
        this.props.ambitionHeaders.push({name:'Test', subtitle:'Test sub'})
      }

      renderItem = ({ item }) => (
        <ListItem
          title={item.name}
          subtitle={item.subtitle}
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
        <View>
        {
          this.props.ambitionHeaders.map((item, i) => (
              <ListItem
                title={item.name}
                subtitle={item.subtitle}
                bottomDivider
                chevron
              />    
          ))
        }
        </View>        
        </>
        );
      };
}

const mapStateToProps = (state, ownProps) => {
  /*const { ambitionHeaders } = ownProps.navigation.state.params;*/
  return ({
    ambitionHeaders: getAmbitionHeadersAsList(state)
    });
};

const mapDispatchToProps = dispatch => {
  return {
    loadAmbitionHeaders: () => dispatch(actions.fetchAmbitionHeaders)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewPage);   

/*
      <FlatList
            data={this.props.ambitionHeaders}
            renderItem={this.renderItem}
          />*/