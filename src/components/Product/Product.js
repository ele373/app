import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from '.Product.styles';

const productStateInitialValue = '';
/**
 * Product component
 * @param {object} props Product props of component
 * @returns
 */
const Product = props => {
  const [productState, setProductState] = useState(productStateInitialValue);
  useEffect(() => {
    console.log('update/mount de productState');
  }, [productState]);
  useEffect(() => {
    console.log('mount de product');
    return () => {
      console.log('unmount de product');
    };
  }, []);
  return (
    <View style={styles.Product}>
      <Text>product</Text>
    </View>
  );
};

Product.propTypes = {};
Product.defaultProps = {};

export default Product;
