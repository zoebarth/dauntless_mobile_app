import React from 'react';
import { View, StyleSheet, Text, Button, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class GearBuilder extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      weapons: [],
      armors: []
    }
  }

  componentDidMount() {
    fetch(`http://192.168.101.132:3000/weapons.json`)
      .then((res) => res.json())
      .then((items) => {
        this.setState({
          weapons: items
        })
      });
    fetch(`http://192.168.101.132:3000/armors.json`)
      .then((res) => res.json())
      .then((items) => {
        this.setState({
          armors: items
        })
      });
  }

  onPickerChange = (key) => value => {
    this.setState({
      [key]: value
    })    
  }

  seeStats = () => {
    this.props.navigation.navigate('Detail', {
      head: this.state.head, 
      arms: this.state.arms, 
      torso: this.state.torso,
      legs: this.state.legs,
      weapon: this.state.weapon
     })
  }

  pickerOptionsForItems(items) {
    return items.map((item) => this.pickerOptionForItem(item));
  }

  pickerOptionForItem(item) {
    return { label: item.name, value: item, key: item.id }
  }

  armorsToOptions() {
    const { armors } = this.state;
    return armors.reduce((acc, armor) => {
      if(acc[armor.type]) {
        acc[armor.type].push(this.pickerOptionForItem(armor))
      } else {
        acc[armor.type] = []
        acc[armor.type].push(this.pickerOptionForItem(armor))
      }
      return acc;
    }, {});
  }

  isDisabled(){
    return !(this.state.weapon && this.state.head && this.state.torso && this.state.legs && this.state.arms)
  }

  render() {
    const { weapons } = this.state;
    const pickerWeapons = this.pickerOptionsForItems(weapons);
    const { head, torso, legs, arms } = this.armorsToOptions();
    return <ScrollView style={{marginTop: 10, padding: 20}}>
      <Text style = {pickerSelectStyles.header}> Gear Set Builder </Text>
      <Text style= {pickerSelectStyles.prettyText}>Select your weapon</Text>
      <RNPickerSelect
        items={pickerWeapons}
        onValueChange={this.onPickerChange('weapon')}
        style={pickerSelectStyles}
      />
      {[head, torso, arms, legs].map((slotArmors, i) => {
        const armorType = (slotArmors && slotArmors.length) ? slotArmors[0].value.type : ''
        return <View key={i}>
          <Text style={pickerSelectStyles.prettyText} >Select your {armorType}</Text>
          <RNPickerSelect
            items={slotArmors || []}
            onValueChange={this.onPickerChange(armorType)}
            style={pickerSelectStyles}
          />
        </View>
      })}
      <View style={{ padding: 10 }}>
          <Button style = {pickerSelectStyles.button}
            onPress={this.seeStats}
            title="View Stats"
            accessibilityLabel="View Stats"
            disabled = {this.isDisabled()}
          /> 
      </View>
      
    </ScrollView>
    
  }

}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    fontFamily: 'AmericanTypewriter',
    paddingTop: 15,
    paddingHorizontal: 10,
    paddingBottom: 15,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: '#e0e0eb',
    color: 'black',
    marginBottom: 15,
  },
  header: {
    fontSize: 38,
    fontWeight: 'bold',
    paddingBottom: 15,
    color: '#3d3d5c',
    textAlign: 'center',
    fontFamily: 'AmericanTypewriter-Bold',

  },
  prettyText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'AmericanTypewriter-Bold',
  },
  button: {
    paddingBottom: 15,
  }
});