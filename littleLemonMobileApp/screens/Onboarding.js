import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert, ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function Onboarding({navigation}) {

  const [firstName, setFirstName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const user = {
    name: firstName,
    email: userEmail
  };

  function moveToHomeScreen(){
    if(firstName !== '' && userEmail !== '') {
      
      navigation.navigate('Home');
    }
    else
      Alert.alert('Please fill all input field!');
  }

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user))
    } catch ( error ) {
      Alert.alert(error);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/Logo.png')}/>
          <View style = {styles.inputField}>
              <Text style={styles.textInputField}>Let us get to know you</Text>
              <TextInput style={styles.input} mode='outlined' label='First Name' value={firstName} onChangeText={firstName => setFirstName(firstName)}/>
              <TextInput style={styles.input} mode='outlined' label='Email' value={userEmail} onChangeText={userEmail => setUserEmail(userEmail)}/>
          </View>
          <Button style={styles.nextBtn} mode='contained' onPress={moveToHomeScreen}>Next</Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    width:'100%',
    padding:10,
    marginTop:30,
  },
  logo: {
    width: 185,
    height: 40,
    padding: 10,
    alignSelf:'center'
  },
  inputField: {
    flex:1,
    justifyContent:'center',
    alignSelf:'center',
    width:260,
  },
  textInputField:{
    fontSize: 18,
    marginBottom: 10,
  },
  input:{
    marginBottom: 10, 
  },
  nextBtn:{
    alignSelf: 'flex-end',
  }
});