import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import styles from './Button.style';

const Button = props => {
  console.log(props);
  return (
    <TouchableHighlight
      style={styles.Button}
      onPress={evt => {
        console.log('event', evt.target);
      }}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableHighlight>
  );
};

export default Button;
