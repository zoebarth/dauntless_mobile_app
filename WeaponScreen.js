import React from 'react';
import ItemScreen from './ItemScreen'

export default class WeaponScreen extends React.Component {

   static navigationOptions = {
    title: 'Weapon List'
  }


  render() {
    return <ItemScreen path="weapons" navigation={this.props.navigation} />
  }
}