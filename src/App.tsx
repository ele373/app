/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainLayout from './components/layouts/MainLayout/MainLayout';
import ListProduct from './components/pages/ListProduct/ListProduct';
import Menu from './components/uis/Menu/Menu';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <MainLayout>
        <ScrollView style={styles.page}>
          <ListProduct />
        </ScrollView>
        <Menu />
      </MainLayout>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
  },
});
export default App;
