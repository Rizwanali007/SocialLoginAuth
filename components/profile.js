import React from "react";
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

const Profile = ({navigation})=>{
    return(
        <View style = {{ flex:1, alignItems:'center',justifyContent:'center'}}>
        <Text style = {{fontSize: 40}}>Profile Screen</Text>
        <TouchableOpacity style={styles.backToHome} onPress = {()=> navigation.navigate('Home')}>
            <Text style = {{fontWeight: 'bold', fontSize: 15, textAlign:'center'}}>
                BackToHome
            </Text>
        </TouchableOpacity>
    </View>
)

    
}

export default Profile;

const styles = StyleSheet.create({
    backToHome: {
        width:100,
        height: 50,
        paddingTop: 10,
        marginLeft: 140,
        marginTop: 10,
        paddingBottom: 10,
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
})