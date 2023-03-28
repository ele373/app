import {View, Text, Image, TouchableHighlight} from 'react-native';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.styles';

const menuStateInitialValue = '';
/**
 * Menu component
 * @param {object} props Menu props of component
 * @returns
 */
const Menu = props => {
  const [menuState, setMenuState] = useState(menuStateInitialValue);
  useEffect(() => {
    console.log('update/mount de menuState');
  }, [menuState]);
  useEffect(() => {
    console.log('mount de menu');
    return () => {
      console.log('unmount de menu');
    };
  }, []);
  return (
    <View style={styles.Menu}>
      <TouchableHighlight>
        <Image
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/home_house_desktop_dashboard-512.png',
          }}
          style={styles.buttonImage}
        />
      </TouchableHighlight>
      <TouchableHighlight>
        <Image
          source={{
            uri: 'https://cdn2.iconfinder.com/data/icons/e-commerce-line-4-1/1024/open_box4-512.png',
          }}
          style={styles.buttonImage}
        />
      </TouchableHighlight>
    </View>
  );
};

Menu.propTypes = {};
Menu.defaultProps = {};

export default Menu;
