import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

export default function App() {

  const youPressedMe = () => {
    alert('Dev Team~KHR')
  }

  return (

    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
  
    <View style={styles.container1}>
      <Text>text #1!</Text>
      <Image
        style={{width:40, height:40}}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />

      <TextInput
        style={{backgroundColor: 'grey', margin : 10, paddingHorizontal : 4}}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />

    </View>

    <View style={styles.container2}>
      <Text>text2!</Text>
      <TouchableOpacity 
      style={{backgroundColor: 'red'}}
      onPress={youPressedMe}
      >
        <Text>Click Me!</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  container1: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
