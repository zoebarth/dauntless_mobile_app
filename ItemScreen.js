import React from 'react';
import {Text, View, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import styles from './Stylesheet'

export default class ItemScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.renderItem = this.renderItem.bind(this)
  }

  componentDidMount() {
    fetch(`http://localhost:3000/${this.props.path}.json`)
      .then((res) => res.json())
      .then((items) => {
        this.setState({
          items: items
        })
      });
  }

  renderItem({ item }) {
    return <TouchableOpacity
      style={styles.item}
      onPress={() => this.props.navigation.navigate('Detail', { item: item })}
    >
      <Text style = {styles.tFont}>{item.name}</Text>
    </TouchableOpacity>
  }

  render() {
    const { items } = this.state;
    return (
      <View style={styles.containerNoPadding}>
        <FlatList
          data={items}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
    );
  }
}
