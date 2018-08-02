import React from 'react';
import ItemScreen from './ItemScreen';

export default class ArmorScreen extends React.Component
{
   static navigationOptions = {
    title: 'Armor List'
  }

  render() {
    return <ItemScreen path="armors" navigation = {this.props.navigation} />
  }
}
