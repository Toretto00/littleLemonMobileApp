import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function Onboarding({navigation}) {

    function moveToHomeScreen(){
        navigation.navigate('Home');
    }

  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/Logo.png')}/>
        <View style = {styles.inputField}>
            <Text style={styles.textInputField}>Let us get to know you</Text>
            <TextInput style={styles.input} mode='outlined' label='First Name'/>
            <TextInput  mode='outlined' label='Email'/>
        </View>
        <Button style={styles.nextBtn} mode='contained' onPress={moveToHomeScreen}>Next</Button>
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