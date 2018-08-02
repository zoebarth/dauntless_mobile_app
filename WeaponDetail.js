import React from 'react';
import { View, Text, ScrollView } from 'react-native';
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
      <FormGroup label="Type" value = {item.weapon_type.charAt(0).toUpperCase() + item.weapon_type.substr(1)}/>
      <FormGroup label="Base Power" value= {item.base_power}/>
      <FormGroup label="Max Power" value= {item.max_power}/>
      <FormGroup label="Elemental Power" value = {item.elemental_power.name}/>
      <FormGroup label="Elemental Power Amount" value = {item.elemental_power_amount}/>
      <FormGroup label="Perk" value = {item.perk.name}/>
      <FormGroup label="Perk Amount" value = {item.perk_amount}/>
      <FormGroup label="Cell Slot One" value= {item.cell_slot_type_one.charAt(0).toUpperCase() + item.cell_slot_type_one.substr(1)}/>
      <FormGroup label="Cell Slot Two" value= {item.cell_slot_type_two.charAt(0).toUpperCase() + item.cell_slot_type_two.substr(1)}/>
    </ScrollView>
  }
}
