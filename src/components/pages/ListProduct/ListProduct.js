import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './ListProduct.styles';

const listProductStateInitialValue = '';
/**
 * ListProduct component
 * @param {object} props ListProduct props of component
 * @returns
 */
const ListProduct = props => {
  const [listProductState, setListProductState] = useState(
    listProductStateInitialValue,
  );
  useEffect(() => {
    console.log('update/mount de listProductState');
  }, [listProductState]);
  useEffect(() => {
    console.log('mount de listProduct');
    return () => {
      console.log('unmount de listProduct');
    };
  }, []);
  return (
    <View style={styles.ListProduct}>
      <Text>listProduct</Text>
    </View>
  );
};

ListProduct.propTypes = {};
ListProduct.defaultProps = {};

export default ListProduct;
