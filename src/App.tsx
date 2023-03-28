/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  useColorScheme,
  Image,
  //Button as NButton,
  Text,
  View,
  StyleSheet,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Button from './components/uis/Button/Button';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Nouvelle valeur : ', counter);
  }, [counter]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <Text style={styles.displayCounter}>Valeur du compteur</Text>
        <Text style={{...styles.displayCounter, ...styles.big}}>{counter}</Text>
      </View>
      <Button
        bgcolor="tomato"
        color="green"
        onPress={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
        style={{borderRadius: 64}}>
        <Image
          source={{
            uri: 'https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/face-grin-tongue-1024.png',
          }}
          style={{width: 32, height: 32}}
        />
        <Text>Ajouter</Text>
      </Button>
      <Button
        onPress={() => {
          setCounter(counter - 1);
          console.log(counter);
        }}>
        <Image
          source={{
            uri: 'https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/face-frown-512.png',
          }}
          style={{width: 32, height: 32}}
        />
        <Text>Retirer</Text>
      </Button>
      {/*  <Button>
        <Text>toto</Text>
      </Button> 
      <NButton title="Hello" />*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  displayCounter: {
    textAlign: 'center',
    color: 'black',
  },
  big: {
    fontSize: 19,
    fontWeight: '900',
  },
});

export default App;
