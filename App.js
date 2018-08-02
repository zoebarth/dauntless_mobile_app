import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ArmorScreen from './ArmorScreen'
import ArmorDetail from './ArmorDetail'
import WeaponScreen from './WeaponScreen';
import WeaponDetail from './WeaponDetail';
import GearBuilder from './GearBuilder';
import GearSetDetail from './GearSetDetail';

const ArmorStack = createStackNavigator({
  List: {
    screen: ArmorScreen
  },
  Detail: {
    screen: ArmorDetail
  }
});

const WeaponStack = createStackNavigator({
  List: {
    screen: WeaponScreen
  },
  Detail: {
    screen: WeaponDetail
  }
});

const BuilderStack = createStackNavigator({
  List: {
    screen: GearBuilder
  },
  Detail: {
    screen: GearSetDetail
  }
});

const Tabs = createBottomTabNavigator(
  {
    'Gear Set': BuilderStack,
    Armor: ArmorStack,
    Weapons: WeaponStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Weapons') {
          iconName = `sword-cross`;
        } else if (routeName === 'Armor') {
          iconName = `shield`;
        } else if (routeName === 'Gear Set') {
          iconName = 'account-settings-variant'
        }
        return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
)

export default class App extends React.Component {

  render() {
    return <Tabs />
  }
}