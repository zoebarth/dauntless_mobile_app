import React from 'react';
import { View, Text, ScrollView} from 'react-native';
import FormGroup from './FormGroup';
import styles from './Stylesheet'


export default class GearSetDetail extends React.Component {

  static navigationOptions = {
    title: 'Gear Stats'
  }

  perkValue(item)
  {
    const amount = item.perk_amount;
    const perkName = item.perk.name + " ";
    const perkPoint = "point_";
    var s = "";
    for(var i=1; i<=amount; i++)
    {
      s+= ', ' + item.perk[perkPoint+i]
    }
    return perkName + s.substring(2);
  }

  get base_armor()
  {
    const set = this.state;
    return set.head.base_armor + set.torso.base_armor + set.arms.base_armor + set.legs.base_armor;
  }

  constructor(props){
    super(props);
    const { navigation } = this.props;
    this.state = {
      weapon: navigation.getParam('weapon', {}),
      head: navigation.getParam('head', {}),
      torso: navigation.getParam('torso', {}),
      arms: navigation.getParam('arms', {}),
      legs: navigation.getParam('legs', {}),
    }

  }

  render() {
    const set = this.state;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.heading}>You picked: </Text>
        <FormGroup label="Weapon" value= {set.weapon.name} />
        <FormGroup label="Head" value= {set.head.name} />
        <FormGroup label="Torso" value= {set.torso.name}/>
        <FormGroup label="Arms" value= {set.arms.name}/>
        <FormGroup label="Legs" value= {set.legs.name} />
        
        <Text style = {styles.heading}>Perks: </Text>
        <Text style= {{marginBottom: 10}}>
          <Text style = {styles.label}>Weapon Perk: </Text>
          <Text style = {styles.value}>{this.perkValue(this.state.weapon)} </Text>
        </Text>
        <Text style= {{marginBottom: 10}}>
          <Text style= {styles.label}>Head Perk: </Text>
          <Text style={styles.value}>{this.perkValue(this.state.head)} </Text>
        </Text>
        <Text style= {{marginBottom: 10}}>
          <Text style= {styles.label}>Torso Perk: </Text>
          <Text style={styles.value}>{this.perkValue(this.state.torso)} </Text>
        </Text>
        <Text style= {{marginBottom: 10}}>
          <Text style= {styles.label}>Arms Perk: </Text>
          <Text style={styles.value}>{this.perkValue(this.state.arms)} </Text>
        </Text>
        <Text style= {{marginBottom: 10}}>
          <Text style= {styles.label}>Legs Perk: </Text>
          <Text style={styles.value}>{this.perkValue(this.state.legs)} </Text>
        </Text>
        
        <Text style = {styles.heading}>Elemental Resistances: </Text>
        <FormGroup label="Head Resistance" value={set.head.elemental_resistance.name + ": " + set.head.elemental_resistance_amount}/>
        <FormGroup label="Torso Resistance" value={set.torso.elemental_resistance.name + ": " + set.torso.elemental_resistance_amount}/>
        <FormGroup label="Arms Resistance" value={set.arms.elemental_resistance.name + ": " + set.arms.elemental_resistance_amount}/>
        <FormGroup label="Legs Resistance" value={set.legs.elemental_resistance.name + ": " + set.legs.elemental_resistance_amount}/>
        
        <Text style = {styles.heading}>Elemental Weaknesses: </Text>
        <FormGroup label="Head Weakness" value={set.head.elemental_weakness.name + ": " + set.head.elemental_weakness_amount}/>
        <FormGroup label="Torso Weakness" value={set.torso.elemental_weakness.name + ": " + set.torso.elemental_weakness_amount}/>
        <FormGroup label="Arms Weakness" value={set.arms.elemental_weakness.name + ": " + set.arms.elemental_weakness_amount}/>
        <FormGroup label="Legs Weakness" value={set.legs.elemental_weakness.name + ": " + set.legs.elemental_weakness_amount}/>
        
        <Text style = {styles.heading}>Stats: </Text>
        <FormGroup label="Elemental Damages" value={set.weapon.elemental_power.name + ": " + set.weapon.elemental_power_amount} />
        <FormGroup label="Base Power" value={set.weapon.base_power}/>
        <FormGroup label="Max Power" value={set.weapon.max_power}/>
        <FormGroup label="Base Armor" value={this.base_armor}/>
        
        <Text style = {styles.heading}>Cell Slots: </Text>
        <Text style= {{marginBottom: 10}}>
          <Text style = {styles.label}>Weapon Cell Slots: </Text>
          <Text style = {styles.value}>{set.weapon.cell_slot_type_one.charAt(0).toUpperCase() + set.weapon.cell_slot_type_one.substr(1)
          + ", " + set.weapon.cell_slot_type_two.charAt(0).toUpperCase() + set.weapon.cell_slot_type_two.substr(1)} </Text>
        </Text>
        <FormGroup label="Head Cell Slot" value = {set.head.cell_slot.charAt(0).toUpperCase() + set.head.cell_slot.substr(1)}/>
        <FormGroup label="Torso Cell Slot" value = {set.torso.cell_slot.charAt(0).toUpperCase() + set.torso.cell_slot.substr(1)}/>
        <FormGroup label="Arms Cell Slot" value = {set.arms.cell_slot.charAt(0).toUpperCase() + set.arms.cell_slot.substr(1)}/>
        <FormGroup label="Legs Cell Slot" value = {set.legs.cell_slot.charAt(0).toUpperCase() + set.legs.cell_slot.substr(1) + "\n"}/>
      </ScrollView>
      );
  }
}

