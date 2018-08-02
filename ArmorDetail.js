import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import FormGroup from './FormGroup';
import styles from './Stylesheet'

export default class ArmorDetail extends React.Component {

  static navigationOptions = {
    title: 'Armor Detail'
  }

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item', {});
    return <ScrollView style={styles.container}>
      <FormGroup label="Name" value= {item.name} />
      <FormGroup label="Type" value = {item.type.charAt(0).toUpperCase() + item.type.substr(1)}/>
      <FormGroup label="Cell Slot" value = {item.cell_slot.charAt(0).toUpperCase() + item.cell_slot.substr(1)}/>
      <FormGroup label="Base Armor" value= {item.base_armor}/>
      <FormGroup label="Elemental Resistance " value = {item.elemental_resistance.name}/>
      <FormGroup label="Resistance Amount" value = {item.elemental_resistance_amount}/>
      <FormGroup label="Elemental Weakness" value = {item.elemental_weakness.name}/>
      <FormGroup label="Weakness Amount" value = {item.elemental_weakness_amount}/>
      <FormGroup label="Perk" value = {item.perk.name}/>
      <FormGroup label="Perk Amount" value = {item.perk_amount}/>
    </ScrollView>
  }
}

