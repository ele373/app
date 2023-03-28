import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableHighlight, View} from 'react-native';
import styles from './Button.style';
interface IButtonProps {
  style?: object;
  bgcolor?: string;
  color?: string;
  text?: string;
  children?: React.ReactElement | Array<React.ReactElement>;
  onPress?: Function;
}
const Button: React.FC<IButtonProps> = props => {
  console.log(props);
  return (
    <TouchableHighlight
      style={{...styles.Button, ...props.style, backgroundColor: props.bgcolor}}
      onPress={evt => {
        console.log('event', evt.target);
        if (props.onPress) {
          props.onPress();
        }
      }}>
      <View style={{...styles.mainView}}>
        {props.children !== undefined ? (
          props.children
        ) : (
          <Text style={{...styles.text, color: props.color}}>{props.text}</Text>
        )}
      </View>
    </TouchableHighlight>
  );
};
Button.propTypes = {
  bgcolor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
  onPress: PropTypes.func,
};
Button.defaultProps = {
  bgcolor: 'skyblue',
  color: 'white',
  //onPress: () => {},
};
export default Button;
