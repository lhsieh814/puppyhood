import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Weight from './components/weight.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: '',
    }
  }

  handlePress(option) {
    this.setState({
      currentPage: option,
    });  
  }

  render() {
    if (this.state.currentPage === 'weight') {
      return <Weight />;
    }
    return (
      <View style={styles.pageButton}>
        <Button onPress={() => this.handlePress('weight')} title="Weight" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageButton: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
