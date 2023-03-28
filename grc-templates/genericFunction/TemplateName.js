import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.styles';

const templateNameStateInitialValue = '';
/**
 * TemplateName component
 * @param {object} props TemplateName props of component
 * @returns
 */
const TemplateName = props => {
  const [templateNameState, setTemplateNameState] = useState(
    templateNameStateInitialValue,
  );
  useEffect(() => {
    console.log('update/mount de templateNameState');
  }, [templateNameState]);
  useEffect(() => {
    console.log('mount de templateName');
    return () => {
      console.log('unmount de templateName');
    };
  }, []);
  return (
    <View style={styles.TemplateName}>
      <Text>templateName</Text>
    </View>
  );
};

TemplateName.propTypes = {};
TemplateName.defaultProps = {};

export default TemplateName;
