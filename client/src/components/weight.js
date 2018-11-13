import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Modal, TouchableOpacity, TextInput } from 'react-native';
import App from '../App.js';

class Weight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weights: [
        { key: '23' },
        { key: '24' },
        { key: '29' },
      ],
      newWeight: '',
      modalVisible: false,
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
    let weightArr = this.state.weights;
    weightArr.push({ key: this.state.newWeight });
    this.setState({ weights: weightArr });
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 22}}>
              <View>
                <Text style={styles.text}>Input Weight:</Text>
                <TextInput
                  style={styles.text}
                  placeholder="How much does your pet weigh today?" 
                  onChangeText={(newWeight) => this.setState({newWeight})}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text style={styles.text}>Confirm</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}>
            <Text style={styles.text}>Add New Weight</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.container}>
          <FlatList
            data={this.state.weights}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
        </View>
        <View style={{marginTop: 22}}>

        
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top: 100,
    alignItems: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  text: {
    padding: 20,
    fontSize: 18,
  }
})

export default Weight;