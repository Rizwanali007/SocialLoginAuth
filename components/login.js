import React, { useEffect,useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


const Login = ({navigation}) => {
  const [useData, setUserData] = useState({})
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '83153779247-lm9ekq03drusda8k41ttfmhrm3mg44ub.apps.googleusercontent.com',
    });
  }, [])

  const googleSignIn = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  const signOut = async ()=>{
    try {
      await GoogleSignin.revokeAccess();
      await auth().signOut();
      console.log('Sign Out Success')
    } catch ( error ){
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={() => googleSignIn().then(res => {
        console.log(res.user)
        setUserData(res.user)
      }).catch(error => console.log(error))
      } style={styles.btnBox} >
        <Text style={styles.title}> Google SignIn</Text>
      </Pressable>
      <Pressable onPress={signOut} style={styles.btnBox}>
        <Text style={styles.title}>Google SignOut</Text>
      </Pressable>
    </View>
  )
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold'
  },
  btnBox: {
    paddingHorizontal: 20,
    backgroundColor: 'coral',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10
  }
})