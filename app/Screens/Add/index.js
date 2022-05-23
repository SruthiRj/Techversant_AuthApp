import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';

export default class Add extends Component {
  constructor() {
    super();
    this.state = {name: '', lname: '', username: ''};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Create</Text>
        <TextInput
          placeholder="First Name"
          value={this.state.name}
          style={styles.textField}
          onChange={value => {
            this.setState({name: value});
          }}
        />
        <View style={styles.top}>
          <TextInput
            placeholder="Last Name"
            value={this.state.lname}
            style={styles.textField}
            onChange={value => {
              this.setState({lname: value});
            }}
          />
        </View>
        <View style={styles.top}>
          <TextInput
            placeholder="Username"
            value={this.state.username}
            style={styles.textField}
            onChange={value => {
              this.setState({username: value});
            }}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
