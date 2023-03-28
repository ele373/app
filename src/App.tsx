/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
  Image,
  Button as NButton,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Button from './components/uis/Button/Button';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Button bgcolor="tomato" color="green" style={{borderRadius: 64}}>
        <Image
          source={{
            uri: 'https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/face-grin-tongue-1024.png',
          }}
          style={{width: 32, height: 32}}
        />
        <Text>Cliquez ici</Text>
      </Button>
      <Button text="Button3" />
      <Button>
        <Text>toto</Text>
      </Button>
      <NButton title="Hello" />
    </SafeAreaView>
  );
}

//const styles = StyleSheet.create({});

export default App;
