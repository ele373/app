import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './EditProduct.styles';

const editProductStateInitialValue = '';
/**
 * EditProduct component
 * @param {object} props EditProduct props of component
 * @returns
 */
const EditProduct = props => {
  const [editProductState, setEditProductState] = useState(
    editProductStateInitialValue,
  );
  useEffect(() => {
    console.log('update/mount de editProductState');
  }, [editProductState]);
  useEffect(() => {
    console.log('mount de editProduct');
    return () => {
      console.log('unmount de editProduct');
    };
  }, []);
  return (
    <View style={styles.EditProduct}>
      <Text>editProduct</Text>
    </View>
  );
};

EditProduct.propTypes = {};
EditProduct.defaultProps = {};

export default EditProduct;
