import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function Profile() {
  return (
    <View style={styles.container}>
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
    // padding:10,
    // marginTop:30,
  },
  textInputField:{
    fontSize: 18,
    marginBottom: 10,
  },
});