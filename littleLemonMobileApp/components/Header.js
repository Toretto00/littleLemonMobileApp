import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Touchable } from 'react-native';
import { Button, TextInput, Avatar } from 'react-native-paper';

export default function Header() {

    const navigation = useNavigation();

    function showProfile () {
        navigation.navigate('Profile');
    }

  return (
    <View style={styles.container}>
        <View style={styles.logo} > 
            <Image source={require('../assets/Logo.png')}/>
        </View>
        <View style={styles.avatar}>
            <Avatar.Image onTouchStart={showProfile}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems:'center',
    //justifyContent:'center',
    width:'100%',
  },
  logo: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  avatar: {
    justifyContent:'flex-end',
  },
});