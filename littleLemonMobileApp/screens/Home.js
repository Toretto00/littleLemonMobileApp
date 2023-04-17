import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Header from '../components/Header';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header/>
      <Text style={styles.textInputField}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    width:'100%',
    paddingTop: 40,
    //marginTop:30,
  },
  textInputField:{
    fontSize: 18,
    marginBottom: 10,
  },
});